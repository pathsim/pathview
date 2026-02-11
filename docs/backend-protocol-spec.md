# PathView REPL Backend Protocol Specification

**Version:** 1.0.0
**Status:** Normative

The PathView REPL backend protocol defines the contract that any Python execution backend must implement. It covers the TypeScript interface, the wire-level message protocol between main thread and worker, the HTTP API used by the Flask reference implementation, and the streaming semantics that enable live simulation.

This document is the authoritative reference for anyone building a new backend (remote server, cloud worker, WebSocket bridge, etc.).

---

## Table of Contents

- [1. Overview](#1-overview)
- [2. Backend Interface](#2-backend-interface)
  - [2.1 Lifecycle Methods](#21-lifecycle-methods)
  - [2.2 State Methods](#22-state-methods)
  - [2.3 Execution Methods](#23-execution-methods)
  - [2.4 Streaming Methods](#24-streaming-methods)
  - [2.5 Output Callbacks](#25-output-callbacks)
- [3. REPL Message Protocol](#3-repl-message-protocol)
  - [3.1 Request Messages (main -> worker)](#31-request-messages-main---worker)
  - [3.2 Response Messages (worker -> main)](#32-response-messages-worker---main)
- [4. Message Flows](#4-message-flows)
  - [4.1 Init Flow](#41-init-flow)
  - [4.2 Exec Flow](#42-exec-flow)
  - [4.3 Eval Flow](#43-eval-flow)
  - [4.4 Streaming Flow](#44-streaming-flow)
  - [4.5 Code Injection During Streaming](#45-code-injection-during-streaming)
  - [4.6 Stop Streaming](#46-stop-streaming)
- [5. Streaming Semantics](#5-streaming-semantics)
- [6. HTTP API (Flask Reference Implementation)](#6-http-api-flask-reference-implementation)
  - [6.1 Route Summary](#61-route-summary)
  - [6.2 Route Details](#62-route-details)
- [7. SSE Event Format](#7-sse-event-format)
- [8. State Management](#8-state-management)
- [9. Backend Registration](#9-backend-registration)
- [10. Worked Example](#10-worked-example)
  - [10.1 Abstract Message Flow](#101-abstract-message-flow)
  - [10.2 HTTP Equivalents](#102-http-equivalents)

---

## 1. Overview

PathView uses a modular backend system for Python execution. The `Backend` interface defines a transport-agnostic contract that decouples the UI from the execution environment. Two implementations currently exist:

| Backend | Transport | Environment |
|---------|-----------|-------------|
| `PyodideBackend` | Web Worker `postMessage` | Browser (Pyodide WASM) |
| `FlaskBackend` | HTTP + SSE | Local/remote Flask server |

The `Backend` interface is defined in `src/lib/pyodide/backend/types.ts`. Implementations are registered in `src/lib/pyodide/backend/registry.ts` and re-exported from `src/lib/pyodide/backend/index.ts`.

This spec defines the protocol at two levels:

1. **Abstract level** -- the TypeScript `Backend` interface and the `REPLRequest`/`REPLResponse` message types.
2. **Wire level** -- the HTTP routes and SSE event format used by HTTP-based backends.

Any new backend must implement the abstract interface. HTTP-based backends should additionally follow the wire-level conventions documented in sections 6 and 7.

---

## 2. Backend Interface

```typescript
interface Backend {
  // Lifecycle
  init(): Promise<void>;
  terminate(): void;

  // State
  getState(): BackendState;
  subscribe(callback: (state: BackendState) => void): () => void;
  isReady(): boolean;
  isLoading(): boolean;
  getError(): string | null;

  // Execution
  exec(code: string, timeout?: number): Promise<void>;
  evaluate<T = unknown>(expr: string, timeout?: number): Promise<T>;

  // Streaming
  startStreaming<T>(
    expr: string,
    onData: (data: T) => void,
    onDone: () => void,
    onError: (error: Error) => void
  ): void;
  stopStreaming(): void;
  isStreaming(): boolean;
  execDuringStreaming(code: string): void;

  // Output
  onStdout(callback: (value: string) => void): void;
  onStderr(callback: (value: string) => void): void;
}

interface BackendState {
  initialized: boolean;
  loading: boolean;
  error: string | null;
  progress: string;
}
```

### 2.1 Lifecycle Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `init` | `init(): Promise<void>` | Initialize the backend. Load the runtime, connect to the server, install packages, etc. The promise resolves when the backend is ready to execute code. Must set `BackendState.loading = true` at the start and `initialized = true` on success. Called once at application startup. Idempotent -- calling it when already initialized or loading is a no-op. |
| `terminate` | `terminate(): void` | Tear down the backend and release all resources. Reject pending requests, abort active streams, destroy workers or connections. Must call `backendState.reset()` to return state to initial values. |

### 2.2 State Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `getState` | `getState(): BackendState` | Return a snapshot of the current backend state. |
| `subscribe` | `subscribe(callback: (state: BackendState) => void): () => void` | Subscribe to state changes. Returns an unsubscribe function. Delegates to the shared `backendState` Svelte store. |
| `isReady` | `isReady(): boolean` | Return `true` if `initialized` is `true`. Shorthand for `getState().initialized`. |
| `isLoading` | `isLoading(): boolean` | Return `true` if the backend is currently initializing. Shorthand for `getState().loading`. |
| `getError` | `getError(): string \| null` | Return the current error message, or `null` if no error. Shorthand for `getState().error`. |

### 2.3 Execution Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `exec` | `exec(code: string, timeout?: number): Promise<void>` | Execute Python code with no return value. The promise resolves on success and rejects on error. The `timeout` parameter (milliseconds) is optional; implementations should default to a reasonable value. Called for code setup, imports, variable definitions, and simulation construction. |
| `evaluate` | `evaluate<T = unknown>(expr: string, timeout?: number): Promise<T>` | Evaluate a Python expression and return the result as a parsed JSON value. The backend must serialize the result to JSON on the Python side and deserialize it on the TypeScript side. Rejects if the expression errors or the result is not JSON-serializable. |

### 2.4 Streaming Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `startStreaming` | `startStreaming<T>(expr: string, onData: (data: T) => void, onDone: () => void, onError: (error: Error) => void): void` | Begin an autonomous streaming loop. The backend repeatedly evaluates `expr`, calling `onData` with each parsed JSON result. The loop continues until the expression returns `{done: true}`, `stopStreaming()` is called, or an error occurs. `onDone` is always called when the loop exits (regardless of reason). `onError` is called if the main expression throws. If a stream is already active, it is stopped before the new one begins. |
| `stopStreaming` | `stopStreaming(): void` | Request the streaming loop to stop. The backend finishes the current step and then sends `stream-done`. This is a request, not an immediate abort -- `onDone` will still fire. |
| `isStreaming` | `isStreaming(): boolean` | Return `true` if a streaming loop is currently active. |
| `execDuringStreaming` | `execDuringStreaming(code: string): void` | Queue Python code to be executed between streaming steps. The code is drained and executed before the next evaluation of the stream expression. Used for runtime parameter changes and event injection. Errors in queued code are reported via stderr but do not stop the stream. No-op if no stream is active. |

### 2.5 Output Callbacks

| Method | Signature | Description |
|--------|-----------|-------------|
| `onStdout` | `onStdout(callback: (value: string) => void): void` | Register a callback for captured stdout output. Only one callback is active at a time (last registration wins). Called during `exec`, `evaluate`, and streaming whenever Python code writes to stdout. |
| `onStderr` | `onStderr(callback: (value: string) => void): void` | Register a callback for captured stderr output. Same semantics as `onStdout`. |

---

## 3. REPL Message Protocol

The REPL message protocol defines the typed messages exchanged between the main thread and the execution worker. For the `PyodideBackend`, these are `postMessage` payloads. For the `FlaskBackend`, they are mapped onto HTTP request/response bodies and SSE events. The types are defined in `src/lib/pyodide/backend/types.ts`.

### 3.1 Request Messages (main -> worker)

#### `init`

Initialize the Python runtime and install packages.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"init"` | yes | Message type discriminant. |

The Pyodide worker reads its package list from the compiled-in `PYTHON_PACKAGES` constant. HTTP-based backends receive the package list in the request body (see [Section 6](#6-http-api-flask-reference-implementation)).

#### `exec`

Execute Python code (no return value expected).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"exec"` | yes | Message type discriminant. |
| `id` | `string` | yes | Unique request ID for correlating the response. Convention: `"repl_N"`. |
| `code` | `string` | yes | Python code to execute. |

#### `eval`

Evaluate a Python expression and return the JSON-serialized result.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"eval"` | yes | Message type discriminant. |
| `id` | `string` | yes | Unique request ID. |
| `expr` | `string` | yes | Python expression to evaluate. The result must be JSON-serializable. |

#### `stream-start`

Begin an autonomous streaming loop.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stream-start"` | yes | Message type discriminant. |
| `id` | `string` | yes | Unique stream ID. All `stream-data` and `stream-done` responses reference this ID. |
| `expr` | `string` | yes | Python expression to evaluate each iteration. Should return `{done: bool, result: any}`. |

#### `stream-stop`

Request the streaming loop to stop.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stream-stop"` | yes | Message type discriminant. |

No additional fields. The worker finishes the current iteration and then sends `stream-done`.

#### `stream-exec`

Queue code for execution between streaming steps.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stream-exec"` | yes | Message type discriminant. |
| `code` | `string` | yes | Python code to queue. Executed before the next evaluation of the stream expression. |

### 3.2 Response Messages (worker -> main)

#### `ready`

Sent after successful initialization.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"ready"` | yes | Message type discriminant. |

#### `ok`

Sent after successful `exec` completion.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"ok"` | yes | Message type discriminant. |
| `id` | `string` | yes | The request ID from the originating `exec` request. |

#### `value`

Sent after successful `eval` completion.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"value"` | yes | Message type discriminant. |
| `id` | `string` | yes | The request ID from the originating `eval` request. |
| `value` | `string` | yes | JSON-serialized result of the evaluated expression. The main thread parses this with `JSON.parse()`. |

#### `error`

Sent when any operation fails.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"error"` | yes | Message type discriminant. |
| `id` | `string` | no | The request ID of the failed operation. May be absent for global errors (e.g., init failures). |
| `error` | `string` | yes | Human-readable error message. |
| `traceback` | `string` | no | Python traceback string, if available. |

#### `stdout`

Captured standard output from Python execution.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stdout"` | yes | Message type discriminant. |
| `value` | `string` | yes | The captured output text. |

#### `stderr`

Captured standard error from Python execution.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stderr"` | yes | Message type discriminant. |
| `value` | `string` | yes | The captured error text. |

#### `progress`

Loading progress updates during initialization.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"progress"` | yes | Message type discriminant. |
| `value` | `string` | yes | Human-readable progress message (e.g., `"Installing pathsim..."`). |

#### `stream-data`

A single result from the streaming loop.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stream-data"` | yes | Message type discriminant. |
| `id` | `string` | yes | The stream ID from the originating `stream-start` request. |
| `value` | `string` | yes | JSON-serialized step result. Convention: `{"done": false, "result": {...}}`. |

#### `stream-done`

The streaming loop has exited.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"stream-done"` | yes | Message type discriminant. |
| `id` | `string` | yes | The stream ID from the originating `stream-start` request. |

This message is **always** sent when the loop exits, whether it completed naturally (`done: true`), was stopped via `stream-stop`, or errored.

---

## 4. Message Flows

### 4.1 Init Flow

```
main                              worker
  |                                  |
  |──── init ──────────────────────>|
  |                                  |  (load Pyodide / connect)
  |<──── progress("Loading...") ────|
  |<──── progress("Installing...") ─|
  |<──── stdout("pathsim loaded") ──|
  |<──── progress("Installing...") ─|
  |<──── ready ─────────────────────|
  |                                  |
```

The worker may send zero or more `progress`, `stdout`, and `stderr` messages during initialization. The sequence ends with exactly one `ready` or `error`.

### 4.2 Exec Flow

```
main                              worker
  |                                  |
  |──── exec {id, code} ──────────>|
  |                                  |  (execute Python code)
  |<──── stdout("...") ────────────|  (zero or more)
  |<──── stderr("...") ────────────|  (zero or more)
  |<──── ok {id} ──────────────────|  (success)
  |                                  |
  |  ── OR on failure ──             |
  |                                  |
  |<──── error {id, error, tb?} ───|
  |                                  |
```

### 4.3 Eval Flow

```
main                              worker
  |                                  |
  |──── eval {id, expr} ──────────>|
  |                                  |  (evaluate expression)
  |<──── stdout("...") ────────────|  (zero or more)
  |<──── value {id, value} ────────|  (success, value is JSON string)
  |                                  |
  |  ── OR on failure ──             |
  |                                  |
  |<──── error {id, error, tb?} ───|
  |                                  |
```

### 4.4 Streaming Flow

```
main                              worker
  |                                  |
  |── stream-start {id, expr} ────>|
  |                                  |  (enter streaming loop)
  |<── stream-data {id, value} ────|  \
  |<── stream-data {id, value} ────|   } repeated until done
  |<── stream-data {id, value} ────|  /
  |                                  |  (expr returns {done: true})
  |<── stream-done {id} ───────────|
  |                                  |
```

### 4.5 Code Injection During Streaming

```
main                              worker
  |                                  |
  |── stream-start {id, expr} ────>|
  |<── stream-data {id, value} ────|
  |<── stream-data {id, value} ────|
  |                                  |
  |── stream-exec {code} ─────────>|  (queued)
  |                                  |
  |                                  |  [drain queue: exec code]
  |                                  |  [eval expr]
  |<── stream-data {id, value} ────|
  |<── stream-data {id, value} ────|
  |<── stream-done {id} ───────────|
  |                                  |
```

If the queued code errors, the worker sends a `stderr` message but continues the streaming loop:

```
  |── stream-exec {code} ─────────>|
  |                                  |  [exec code → error]
  |<── stderr("Stream exec error") |
  |                                  |  [eval expr → continues]
  |<── stream-data {id, value} ────|
```

### 4.6 Stop Streaming

```
main                              worker
  |                                  |
  |── stream-start {id, expr} ────>|
  |<── stream-data {id, value} ────|
  |<── stream-data {id, value} ────|
  |                                  |
  |── stream-stop ─────────────────>|
  |                                  |  (finish current step)
  |<── stream-data {id, value} ────|  (optional: final partial result)
  |<── stream-done {id} ───────────|  (always sent)
  |                                  |
```

The worker does not abort the currently executing Python step. It sets a flag and exits the loop after the current step completes.

---

## 5. Streaming Semantics

The streaming loop is the core mechanism for live simulation. It runs autonomously on the worker side after receiving `stream-start`.

### Loop Algorithm

```
function runStreamingLoop(id, expr):
    active = true
    codeQueue = []

    try:
        while active:
            // 1. Drain and execute queued code
            while codeQueue is not empty:
                code = codeQueue.dequeue()
                try:
                    exec(code)
                except error:
                    send stderr("Stream exec error: " + error)

            // 2. Evaluate the stream expression
            result = eval(expr)    // JSON: {done: bool, result: any}

            // 3. Check for stop (set by stream-stop handler)
            if not active:
                if result is not done and has data:
                    send stream-data(id, result)
                break

            // 4. Check for natural completion
            if result.done:
                break

            // 5. Send result and continue
            send stream-data(id, result)

    except error:
        send error(id, error, traceback?)
    finally:
        active = false
        send stream-done(id)      // ALWAYS sent
```

### Key Rules

1. **Code queue drain.** On each iteration, ALL queued code snippets are drained and executed before the expression is evaluated. This ensures parameter changes take effect on the next step.

2. **Queue isolation.** Errors in queued code are reported via `stderr` but do **not** stop the streaming loop. The loop continues with the next evaluation.

3. **Expression errors are fatal.** If the main stream expression throws, the loop exits and sends `error` followed by `stream-done`.

4. **`stream-done` is always sent.** Regardless of whether the loop completed naturally (`done: true`), was stopped (`stream-stop`), or errored, the `stream-done` message is always the last message for that stream ID.

5. **Result convention.** The stream expression should return a JSON-serializable object with the shape `{done: boolean, result: any}`. When `done` is `true`, the loop exits without sending the final result as `stream-data`.

6. **Stop semantics.** `stream-stop` sets a flag. The worker does not preempt a running Python evaluation. The flag is checked after the current step completes.

7. **Single stream.** Only one stream can be active at a time. Starting a new stream while one is active will stop the existing stream first.

---

## 6. HTTP API (Flask Reference Implementation)

The Flask backend (`src/lib/pyodide/backend/flask/backend.ts`) maps the abstract protocol onto HTTP requests. All routes except `/api/health` require the `X-Session-ID` header to identify the browser session. Each session gets an isolated Python process on the server.

### 6.1 Route Summary

| Route | Method | Description |
|-------|--------|-------------|
| `/api/health` | GET | Server health check |
| `/api/init` | POST | Initialize Python worker with packages |
| `/api/exec` | POST | Execute Python code |
| `/api/eval` | POST | Evaluate Python expression |
| `/api/stream` | POST | Start streaming (returns SSE stream) |
| `/api/stream/exec` | POST | Queue code during streaming |
| `/api/stream/stop` | POST | Stop active stream |
| `/api/session` | DELETE | Terminate session and destroy worker |

### 6.2 Route Details

#### GET /api/health

Server health check. No authentication required.

**Request:**
```
GET /api/health
```

**Response:**
```json
{
  "status": "ok"
}
```

---

#### POST /api/init

Initialize the Python runtime and install packages.

**Request:**
```
POST /api/init
Content-Type: application/json
X-Session-ID: <uuid>
```

```json
{
  "packages": [
    {
      "pip": "pathsim==0.16.5",
      "import": "pathsim",
      "required": true,
      "pre": true
    },
    {
      "pip": "pathsim-chem>=0.2rc2",
      "import": "pathsim_chem",
      "required": false,
      "pre": true
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `packages` | `PackageConfig[]` | no | Packages to install. If omitted, only the base runtime is initialized. |
| `packages[].pip` | `string` | yes | pip install specifier (e.g., `"pathsim==0.16.5"`). |
| `packages[].import` | `string` | yes | Python import name for verification (e.g., `"pathsim"`). |
| `packages[].required` | `boolean` | yes | If `true`, failure to install this package is a fatal error. |
| `packages[].pre` | `boolean` | yes | If `true`, pass `pre=True` to pip (allow pre-release versions). |

**Success Response:**
```json
{
  "type": "ready",
  "messages": [
    { "type": "progress", "value": "Installing pathsim..." },
    { "type": "stdout", "value": "pathsim 0.16.5 loaded successfully" },
    { "type": "progress", "value": "Installing pathsim_chem..." },
    { "type": "stdout", "value": "pathsim_chem 0.2rc3.dev1 loaded successfully" }
  ]
}
```

The `messages` array contains all `progress`, `stdout`, and `stderr` messages that were generated during initialization, in order.

**Error Response:**
```json
{
  "type": "error",
  "error": "Failed to install required package pathsim==0.16.5: ..."
}
```

---

#### POST /api/exec

Execute Python code with no return value.

**Request:**
```
POST /api/exec
Content-Type: application/json
X-Session-ID: <uuid>
```

```json
{
  "id": "repl_1",
  "code": "x = 42\nprint('hello')"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Request ID for correlation. |
| `code` | `string` | yes | Python code to execute. |

**Success Response:**
```json
{
  "type": "ok",
  "id": "repl_1",
  "stdout": "hello",
  "stderr": ""
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"ok"` | yes | Success discriminant. |
| `id` | `string` | yes | Echoed request ID. |
| `stdout` | `string` | no | Captured stdout output during execution. |
| `stderr` | `string` | no | Captured stderr output during execution. |

**Error Response:**
```json
{
  "type": "error",
  "id": "repl_1",
  "error": "NameError: name 'y' is not defined",
  "traceback": "Traceback (most recent call last):\n  ...",
  "stdout": "",
  "stderr": ""
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"error"` | yes | Error discriminant. |
| `id` | `string` | yes | Echoed request ID. |
| `error` | `string` | yes | Error message. |
| `traceback` | `string` | no | Python traceback. |
| `stdout` | `string` | no | Any stdout captured before the error. |
| `stderr` | `string` | no | Any stderr captured before the error. |

---

#### POST /api/eval

Evaluate a Python expression and return the JSON-serialized result.

**Request:**
```
POST /api/eval
Content-Type: application/json
X-Session-ID: <uuid>
```

```json
{
  "id": "repl_2",
  "expr": "json.dumps({'x': x, 'y': [1,2,3]})"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Request ID. |
| `expr` | `string` | yes | Python expression to evaluate. Result must be JSON-serializable. |

**Success Response:**
```json
{
  "type": "value",
  "id": "repl_2",
  "value": "{\"x\": 42, \"y\": [1, 2, 3]}",
  "stdout": "",
  "stderr": ""
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"value"` | yes | Success discriminant. |
| `id` | `string` | yes | Echoed request ID. |
| `value` | `string` | yes | JSON-serialized result. The client parses this with `JSON.parse()`. |
| `stdout` | `string` | no | Captured stdout. |
| `stderr` | `string` | no | Captured stderr. |

**Error Response:** Same shape as exec error response.

---

#### POST /api/stream

Start a streaming loop. Returns a Server-Sent Events stream.

**Request:**
```
POST /api/stream
Content-Type: application/json
X-Session-ID: <uuid>
```

```json
{
  "id": "repl_3",
  "expr": "step_simulation()"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stream ID. |
| `expr` | `string` | yes | Python expression to evaluate each iteration. Should return `{done: bool, result: any}`. |

**Response:** `Content-Type: text/event-stream` (SSE). See [Section 7](#7-sse-event-format).

---

#### POST /api/stream/exec

Queue code for execution between streaming steps.

**Request:**
```
POST /api/stream/exec
Content-Type: application/json
X-Session-ID: <uuid>
```

```json
{
  "code": "controller.set_gain(2.0)"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `code` | `string` | yes | Python code to queue. |

**Response:**
```json
{
  "status": "queued"
}
```

---

#### POST /api/stream/stop

Stop the active streaming loop.

**Request:**
```
POST /api/stream/stop
Content-Type: application/json
X-Session-ID: <uuid>
```

```json
{}
```

**Response:**
```json
{
  "status": "stopped"
}
```

---

#### DELETE /api/session

Terminate the session and destroy the server-side Python worker process.

**Request:**
```
DELETE /api/session
X-Session-ID: <uuid>
```

**Response:**
```json
{
  "status": "terminated"
}
```

---

## 7. SSE Event Format

The `/api/stream` endpoint returns a standard Server-Sent Events stream. Each event has an `event` field (the event type) and a `data` field (JSON payload). Events are separated by double newlines.

### Event Types

#### `data` -- Streaming step result

```
event: data
data: {"done":false,"result":{"t":0.5,"values":[1.2,3.4]}}

```

The `data` field is a JSON string matching the return value of the stream expression.

#### `stdout` -- Captured standard output

```
event: stdout
data: "Step 50 complete"

```

The `data` field is a JSON-encoded string.

#### `stderr` -- Captured standard error

```
event: stderr
data: "Stream exec error: NameError: name 'foo' is not defined"

```

The `data` field is a JSON-encoded string.

#### `done` -- Stream completed

```
event: done
data: {}

```

Sent when the streaming loop exits (any reason). This is always the last event in the stream. The SSE connection closes after this event.

#### `error` -- Stream error

```
event: error
data: {"error":"ZeroDivisionError: division by zero","traceback":"Traceback ..."}

```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `error` | `string` | yes | Error message. |
| `traceback` | `string` | no | Python traceback. |

Sent when the main stream expression throws. The `done` event is NOT sent after `error` in the SSE stream (the error event terminates the stream). The client-side `FlaskBackend` maps this to an `onError` callback.

### Complete SSE Example

```
event: data
data: {"done":false,"result":{"t":0.0,"values":[0.0]}}

event: stdout
data: "Simulation step 1"

event: data
data: {"done":false,"result":{"t":0.5,"values":[0.25]}}

event: data
data: {"done":false,"result":{"t":1.0,"values":[1.0]}}

event: done
data: {}

```

---

## 8. State Management

All backends share a single `backendState` Svelte writable store defined in `src/lib/pyodide/backend/state.ts`. This store drives the UI loading indicators, error displays, and ready checks.

```typescript
const initialState: BackendState = {
  initialized: false,
  loading: false,
  error: null,
  progress: ''
};
```

### State Transitions

Backends must follow this state machine:

```
                    init() called
    [idle] ──────────────────────────> [loading]
    initialized: false                 initialized: false
    loading: false                     loading: true
    error: null                        error: null
    progress: ''                       progress: "Loading..."
                                           |
                          ┌────────────────┼────────────────┐
                          |                |                 |
                     (progress)       (success)          (failure)
                          |                |                 |
                     [loading]        [ready]            [error]
                     progress:        initialized: true  loading: false
                     "Installing..."  loading: false     error: "msg"
                                      progress: "Ready"
                                           |
                                     terminate()
                                           |
                                       [idle]    (backendState.reset())
```

### Rules for Implementations

1. **Set `loading = true` and `error = null`** at the start of `init()`.
2. **Update `progress`** during loading to give the user feedback (e.g., `"Loading Pyodide..."`, `"Installing pathsim..."`).
3. **Set `initialized = true` and `loading = false`** on successful initialization.
4. **Set `loading = false` and `error = <message>`** on initialization failure.
5. **Call `backendState.reset()`** in `terminate()` to return to the idle state.
6. **Set `error`** when execution errors occur that affect the overall backend health (not for per-request errors, which are returned via the promise rejection or error callback).

---

## 9. Backend Registration

To add a new backend type to PathView:

### Step 1: Implement the Backend Interface

Create a new file (e.g., `src/lib/pyodide/backend/remote/backend.ts`):

```typescript
import type { Backend, BackendState } from '../types';
import { backendState } from '../state';

export class RemoteBackend implements Backend {
  // ... implement all methods from the Backend interface
}
```

### Step 2: Add Type to BackendType Union

In `src/lib/pyodide/backend/registry.ts`:

```typescript
export type BackendType = 'pyodide' | 'flask' | 'remote';
```

### Step 3: Add Case to createBackend()

In `src/lib/pyodide/backend/registry.ts`:

```typescript
export function createBackend(type: BackendType): Backend {
  switch (type) {
    case 'pyodide':
      return new PyodideBackend();
    case 'flask':
      return new FlaskBackend(flaskHost);
    case 'remote':
      return new RemoteBackend(remoteConfig);
    default:
      throw new Error(`Unknown backend type: ${type}`);
  }
}
```

### Step 4: Re-export from index.ts

In `src/lib/pyodide/backend/index.ts`:

```typescript
export { RemoteBackend } from './remote/backend';
```

The backend is now available via `switchBackend('remote')` or the `?backend=remote` URL parameter (if `initBackendFromUrl()` is updated to handle it).

---

## 10. Worked Example

This section traces a complete session: initialization with packages, code execution, expression evaluation, then a streaming simulation with code injection and stop. Both the abstract message protocol and the HTTP equivalents are shown.

### 10.1 Abstract Message Flow

```
=== INITIALIZATION ===

main → worker:  { type: "init" }
worker → main:  { type: "progress", value: "Loading Pyodide..." }
worker → main:  { type: "progress", value: "Installing dependencies..." }
worker → main:  { type: "progress", value: "Installing pathsim..." }
worker → main:  { type: "stdout", value: "pathsim 0.16.5 loaded successfully" }
worker → main:  { type: "progress", value: "Installing pathsim_chem..." }
worker → main:  { type: "stdout", value: "pathsim_chem 0.2rc3.dev1 loaded successfully" }
worker → main:  { type: "ready" }

=== EXEC: Set up simulation ===

main → worker:  { type: "exec", id: "repl_1", code: "import json\nfrom pathsim import Simulation, Connection\nfrom pathsim.blocks import Integrator, Constant, Scope\nfrom pathsim.solvers import SSPRK22\n\nconstant = Constant(value=1.0)\nintegrator = Integrator(initial_value=0.0)\nscope = Scope()\nsim = Simulation(\n    [constant, integrator, scope],\n    [Connection(constant[0], integrator[0]),\n     Connection(integrator[0], scope[0])],\n    Solver=SSPRK22, dt=0.01\n)" }
worker → main:  { type: "ok", id: "repl_1" }

=== EXEC: Set up streaming generator ===

main → worker:  { type: "exec", id: "repl_2", code: "sim_iter = sim.run_generator(duration=10, steps_per_yield=100)\ndef step_simulation():\n    try:\n        result = next(sim_iter)\n        return {'done': False, 'result': result}\n    except StopIteration:\n        return {'done': True, 'result': None}" }
worker → main:  { type: "ok", id: "repl_2" }

=== EVAL: Check initial state ===

main → worker:  { type: "eval", id: "repl_3", expr: "json.dumps({'t': 0, 'ready': True})" }
worker → main:  { type: "value", id: "repl_3", value: "{\"t\": 0, \"ready\": true}" }

=== STREAMING: Run simulation with live updates ===

main → worker:  { type: "stream-start", id: "repl_4", expr: "json.dumps(step_simulation(), default=str)" }
worker → main:  { type: "stream-data", id: "repl_4", value: "{\"done\":false,\"result\":{\"t\":1.0}}" }
worker → main:  { type: "stream-data", id: "repl_4", value: "{\"done\":false,\"result\":{\"t\":2.0}}" }

--- User changes a parameter at t=2.0 ---

main → worker:  { type: "stream-exec", code: "constant.set(value=2.0)" }

--- Worker drains queue, applies change, then continues ---

worker → main:  { type: "stream-data", id: "repl_4", value: "{\"done\":false,\"result\":{\"t\":3.0}}" }
worker → main:  { type: "stream-data", id: "repl_4", value: "{\"done\":false,\"result\":{\"t\":4.0}}" }

--- User stops the simulation at t=4.0 ---

main → worker:  { type: "stream-stop" }

--- Worker finishes current step ---

worker → main:  { type: "stream-data", id: "repl_4", value: "{\"done\":false,\"result\":{\"t\":5.0}}" }
worker → main:  { type: "stream-done", id: "repl_4" }
```

### 10.2 HTTP Equivalents

The same session expressed as HTTP requests (Flask backend):

```
=== INITIALIZATION ===

GET /api/health
→ 200 {"status": "ok"}

POST /api/init
Headers: X-Session-ID: a1b2c3d4-...
Body: {
  "packages": [
    {"pip": "pathsim==0.16.5", "import": "pathsim", "required": true, "pre": true},
    {"pip": "pathsim-chem>=0.2rc2", "import": "pathsim_chem", "required": false, "pre": true}
  ]
}
→ 200 {
  "type": "ready",
  "messages": [
    {"type": "progress", "value": "Installing pathsim..."},
    {"type": "stdout", "value": "pathsim 0.16.5 loaded successfully"},
    {"type": "progress", "value": "Installing pathsim_chem..."},
    {"type": "stdout", "value": "pathsim_chem 0.2rc3.dev1 loaded successfully"}
  ]
}

=== EXEC ===

POST /api/exec
Headers: Content-Type: application/json, X-Session-ID: a1b2c3d4-...
Body: {"id": "repl_1", "code": "import json\nfrom pathsim import ..."}
→ 200 {"type": "ok", "id": "repl_1"}

POST /api/exec
Headers: Content-Type: application/json, X-Session-ID: a1b2c3d4-...
Body: {"id": "repl_2", "code": "sim_iter = sim.run_generator(...)..."}
→ 200 {"type": "ok", "id": "repl_2"}

=== EVAL ===

POST /api/eval
Headers: Content-Type: application/json, X-Session-ID: a1b2c3d4-...
Body: {"id": "repl_3", "expr": "json.dumps({'t': 0, 'ready': True})"}
→ 200 {"type": "value", "id": "repl_3", "value": "{\"t\": 0, \"ready\": true}"}

=== STREAMING ===

POST /api/stream
Headers: Content-Type: application/json, X-Session-ID: a1b2c3d4-...
Body: {"id": "repl_4", "expr": "json.dumps(step_simulation(), default=str)"}
→ 200 (SSE stream)

  event: data
  data: {"done":false,"result":{"t":1.0}}

  event: data
  data: {"done":false,"result":{"t":2.0}}

--- concurrent request ---

POST /api/stream/exec
Headers: Content-Type: application/json, X-Session-ID: a1b2c3d4-...
Body: {"code": "constant.set(value=2.0)"}
→ 200 {"status": "queued"}

--- SSE continues ---

  event: data
  data: {"done":false,"result":{"t":3.0}}

  event: data
  data: {"done":false,"result":{"t":4.0}}

--- concurrent request ---

POST /api/stream/stop
Headers: Content-Type: application/json, X-Session-ID: a1b2c3d4-...
Body: {}
→ 200 {"status": "stopped"}

--- SSE concludes ---

  event: data
  data: {"done":false,"result":{"t":5.0}}

  event: done
  data: {}

=== CLEANUP ===

DELETE /api/session
Headers: X-Session-ID: a1b2c3d4-...
→ 200 {"status": "terminated"}
```

---

## Notes for Backend Authors

1. **JSON serialization.** All values crossing the boundary (eval results, stream data) must be valid JSON strings. The Python side should use `json.dumps()` with a `default` handler for non-serializable types.

2. **ID correlation.** The `id` field in requests is echoed in responses. Clients use it to match responses to pending promises. Generate unique IDs (the convention is `"repl_N"` with an incrementing counter).

3. **Timeout handling.** Clients set their own timeouts. Backends should not enforce timeouts unless they need to protect server resources. If a backend does enforce timeouts, it should send an `error` response with a clear timeout message.

4. **Stdout/stderr capture.** Backends must capture Python's stdout and stderr and forward them as `stdout`/`stderr` messages. For Web Worker backends, this is done via Pyodide's `setStdout`/`setStderr`. For HTTP backends, captured output is included in the response body or sent as SSE events during streaming.

5. **Session isolation.** HTTP-based backends must isolate sessions. Each `X-Session-ID` maps to a separate Python process or namespace. Leaking state between sessions is a correctness and security issue.

6. **Idempotent init.** Calling `init()` when already initialized or loading should be a no-op, not an error.

7. **Graceful terminate.** `terminate()` must clean up all resources: reject pending promises, abort streams, kill workers/processes, and reset state. It should not throw.
