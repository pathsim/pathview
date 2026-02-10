"""
REPL Worker Subprocess for PathView Flask Backend.

Direct port of worker.ts to Python. Reads JSON messages from stdin,
executes Python code, and writes JSON responses to stdout.

Same message protocol (REPLRequest/REPLResponse as JSON lines over stdin/stdout).

Threading model:
- Reader thread: reads JSON from stdin, dispatches to main thread or queues for streaming
- Main thread: processes init/exec/eval synchronously; for streaming, runs the loop
- Stdout lock: thread-safe writing to stdout (protocol messages only)
"""

import sys
import io
import json
import threading
import traceback
import queue

# Lock for thread-safe stdout writing (protocol messages only)
_stdout_lock = threading.Lock()

# Worker state
_namespace = {}
_clean_globals = set()
_initialized = False

# Streaming state
_streaming_active = False
_streaming_code_queue = queue.Queue()

# Queue for messages from reader thread -> main thread
_message_queue = queue.Queue()


def send(response: dict) -> None:
    """Send a JSON response to the parent process via stdout."""
    with _stdout_lock:
        sys.stdout.write(json.dumps(response) + "\n")
        sys.stdout.flush()


def _capture_output(func):
    """Run func with stdout/stderr captured, sending output as messages."""
    old_stdout = sys.stdout
    old_stderr = sys.stderr
    captured_out = io.StringIO()
    captured_err = io.StringIO()
    sys.stdout = captured_out
    sys.stderr = captured_err
    try:
        result = func()
    finally:
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        out = captured_out.getvalue()
        err = captured_err.getvalue()
        if out:
            send({"type": "stdout", "value": out})
        if err:
            send({"type": "stderr", "value": err})
    return result


def initialize() -> None:
    """Initialize the worker: import standard packages, capture clean globals."""
    global _initialized, _namespace, _clean_globals

    if _initialized:
        send({"type": "ready"})
        return

    send({"type": "progress", "value": "Initializing Python worker..."})

    # Set up the namespace with common imports
    _namespace = {"__builtins__": __builtins__}
    exec("import numpy as np", _namespace)
    exec("import gc", _namespace)
    exec("import json", _namespace)

    # Capture clean state for later cleanup
    _clean_globals = set(_namespace.keys())

    _initialized = True
    send({"type": "ready"})


def exec_code(msg_id: str, code: str) -> None:
    """Execute Python code (no return value)."""
    if not _initialized:
        send({"type": "error", "id": msg_id, "error": "Worker not initialized"})
        return

    try:
        def run():
            exec(code, _namespace)
        _capture_output(run)
        send({"type": "ok", "id": msg_id})
    except Exception as e:
        tb = traceback.format_exc()
        send({"type": "error", "id": msg_id, "error": str(e), "traceback": tb})


def eval_expr(msg_id: str, expr: str) -> None:
    """Evaluate Python expression and return JSON result."""
    if not _initialized:
        send({"type": "error", "id": msg_id, "error": "Worker not initialized"})
        return

    try:
        def run():
            # Mirror worker.ts: store result, then JSON-serialize
            exec_code_str = f"_eval_result = {expr}"
            exec(exec_code_str, _namespace)
            to_json = _namespace.get("_to_json", str)
            return json.dumps(_namespace["_eval_result"], default=to_json)
        result = _capture_output(run)
        send({"type": "value", "id": msg_id, "value": result})
    except Exception as e:
        tb = traceback.format_exc()
        send({"type": "error", "id": msg_id, "error": str(e), "traceback": tb})


def run_streaming_loop(msg_id: str, expr: str) -> None:
    """Run streaming loop - steps generator continuously and posts results."""
    global _streaming_active

    if not _initialized:
        send({"type": "error", "id": msg_id, "error": "Worker not initialized"})
        return

    _streaming_active = True
    # Clear any stale code from previous runs
    while not _streaming_code_queue.empty():
        try:
            _streaming_code_queue.get_nowait()
        except queue.Empty:
            break

    try:
        while _streaming_active:
            # Execute any queued code first (for runtime parameter changes)
            # Errors in queued code are reported but don't stop the simulation
            while True:
                try:
                    code = _streaming_code_queue.get_nowait()
                except queue.Empty:
                    break
                try:
                    def run_queued(c=code):
                        exec(c, _namespace)
                    _capture_output(run_queued)
                except Exception as e:
                    send({"type": "stderr", "value": f"Stream exec error: {e}"})

            # Step the generator
            def run_step():
                exec_code_str = f"_eval_result = {expr}"
                exec(exec_code_str, _namespace)
                to_json = _namespace.get("_to_json", str)
                return json.dumps(_namespace["_eval_result"], default=to_json)
            result = _capture_output(run_step)

            # Parse result
            parsed = json.loads(result)

            # Check if stopped during Python execution - still send final data
            if not _streaming_active:
                if not parsed.get("done") and parsed.get("result"):
                    send({"type": "stream-data", "id": msg_id, "value": result})
                break

            # Check if simulation completed
            if parsed.get("done"):
                break

            # Send result and continue
            send({"type": "stream-data", "id": msg_id, "value": result})

    except Exception as e:
        tb = traceback.format_exc()
        send({"type": "error", "id": msg_id, "error": str(e), "traceback": tb})
    finally:
        _streaming_active = False
        # Always send done when loop ends
        send({"type": "stream-done", "id": msg_id})


def stop_streaming() -> None:
    """Stop the streaming loop."""
    global _streaming_active
    _streaming_active = False


def reader_thread() -> None:
    """Read JSON messages from stdin and dispatch to the main thread."""
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            msg = json.loads(line)
        except json.JSONDecodeError:
            send({"type": "error", "error": f"Invalid JSON: {line}"})
            continue

        msg_type = msg.get("type")

        # stream-stop and stream-exec are handled directly (thread-safe)
        if msg_type == "stream-stop":
            stop_streaming()
        elif msg_type == "stream-exec":
            code = msg.get("code")
            if code and _streaming_active:
                _streaming_code_queue.put(code)
        else:
            # All other messages go to main thread
            _message_queue.put(msg)

    # stdin closed — signal main thread to exit
    _message_queue.put(None)


def main() -> None:
    """Main loop: process messages from the reader thread."""
    # Start the reader thread
    t = threading.Thread(target=reader_thread, daemon=True)
    t.start()

    while True:
        msg = _message_queue.get()
        if msg is None:
            # stdin closed, exit
            break

        msg_type = msg.get("type")
        msg_id = msg.get("id")
        code = msg.get("code")
        expr = msg.get("expr")

        try:
            if msg_type == "init":
                initialize()

            elif msg_type == "exec":
                if not msg_id or not isinstance(code, str):
                    raise ValueError("Invalid exec request: missing id or code")
                exec_code(msg_id, code)

            elif msg_type == "eval":
                if not msg_id or not isinstance(expr, str):
                    raise ValueError("Invalid eval request: missing id or expr")
                eval_expr(msg_id, expr)

            elif msg_type == "stream-start":
                if not msg_id or not isinstance(expr, str):
                    raise ValueError("Invalid stream-start request: missing id or expr")
                # Run in the main thread (blocking until done/stopped)
                run_streaming_loop(msg_id, expr)

            else:
                raise ValueError(f"Unknown message type: {msg_type}")

        except Exception as e:
            send({
                "type": "error",
                "id": msg_id,
                "error": str(e),
            })


if __name__ == "__main__":
    main()
