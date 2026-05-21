/**
 * Python-side helpers for runtime toolbox install + introspection.
 *
 * The introspection logic itself comes from scripts/pathview_introspect.py,
 * which is the single source of truth shared with the build-time extractor
 * (scripts/extract.py). Here we only add the runtime-only glue:
 *
 *   - install (micropip in Pyodide / pip in Flask)
 *   - inline-module loading (.py upload)
 *   - module drop on uninstall
 *   - thin wrappers exposing introspect_blocks / introspect_events / etc.
 *     to the JS evaluate() bridge.
 */

import INTROSPECT_PY from '../../../scripts/pathview_introspect.py?raw';

const RUNTIME_GLUE = `
import sys as _pv_sys
import importlib as _pv_importlib
import types as _pv_types

_PV_INLINE_PREFIX = "pathview_inline_"


def _pv_already_installed(import_path):
    """Return True if the given module path is already importable."""
    if not import_path:
        return False
    try:
        _pv_importlib.import_module(import_path)
        return True
    except Exception:
        return False


async def _pv_install_micropip(spec):
    """Pyodide-side install via micropip (top-level await).

    micropip can only install pure-Python wheels (or packages Pyodide
    ships pre-built), so toolboxes with compiled/native code fail here
    even though they install fine in the standalone (pip-backed) build.
    On failure we classify the error and prefix it with PV_INCOMPATIBLE
    (browser-runtime limitation) or PV_INSTALL_ERROR (genuine failure)
    so the JS side can show a useful hint instead of a raw traceback."""
    import micropip
    try:
        await micropip.install(spec, keep_going=True)
    except Exception as e:
        msg = str(e)
        low = msg.lower()
        incompatible = (
            "pure python" in low
            or "can't find" in low
            or "cannot find" in low
            or "no matching distribution" in low
            or "no known package" in low
        )
        tag = "PV_INCOMPATIBLE" if incompatible else "PV_INSTALL_ERROR"
        raise RuntimeError(tag + ": " + msg)
    return {"ok": True, "spec": spec, "via": "micropip"}


def _pv_install_pip(spec):
    """CPython-side install via subprocess pip (Flask backend)."""
    import subprocess as _pv_subprocess
    res = _pv_subprocess.run(
        [_pv_sys.executable, "-m", "pip", "install", spec],
        capture_output=True,
        text=True,
    )
    if res.returncode != 0:
        raise RuntimeError("pip install failed:\\n" + (res.stderr or res.stdout))
    return {"ok": True, "spec": spec, "via": "pip"}


def _pv_load_inline(module_name, code):
    """Exec a single-file Python module string into sys.modules."""
    if not module_name.startswith(_PV_INLINE_PREFIX):
        module_name = _PV_INLINE_PREFIX + module_name
    mod = _pv_types.ModuleType(module_name)
    mod.__file__ = "<inline:" + module_name + ">"
    try:
        exec(compile(code, mod.__file__, "exec"), mod.__dict__)
    except Exception as e:
        return {"ok": False, "error": str(e), "module": module_name}
    _pv_sys.modules[module_name] = mod
    return {"ok": True, "module": module_name}


def _pv_drop_module(import_path):
    """Drop a module + submodules from sys.modules."""
    dropped = []
    prefix = import_path + "."
    for name in list(_pv_sys.modules.keys()):
        if name == import_path or name.startswith(prefix):
            try:
                del _pv_sys.modules[name]
                dropped.append(name)
            except KeyError:
                pass
    return dropped


def pathview_introspect_blocks(import_path):
    """Walk the module and return all Block subclasses with metadata."""
    try:
        mod = _pv_importlib.import_module(import_path)
    except Exception as e:
        return {"ok": False, "error": str(e)}
    blocks = []
    for name in dir(mod):
        if name.startswith("_"):
            continue
        obj = getattr(mod, name)
        if not is_block(obj):
            continue
        if obj.__module__ != mod.__name__ and not obj.__module__.startswith(mod.__name__ + "."):
            continue
        try:
            blocks.append(extract_block(obj))
        except Exception as e:
            blocks.append({"className": name, "error": str(e)})
    return {"ok": True, "blocks": blocks}


def pathview_introspect_events(import_path):
    """Walk the events submodule and list event classes with their params."""
    try:
        mod = _pv_importlib.import_module(import_path)
    except Exception as e:
        return {"ok": False, "error": str(e)}
    events = []
    for name in dir(mod):
        if name.startswith("_"):
            continue
        obj = getattr(mod, name)
        if not is_event(obj):
            continue
        if obj.__module__ != mod.__name__ and not obj.__module__.startswith(mod.__name__ + "."):
            continue
        events.append(extract_event(obj))
    return {"ok": True, "events": events}


def pathview_uninstall(import_path):
    """Drop a module + submodules from sys.modules."""
    return {"ok": True, "dropped": _pv_drop_module(import_path)}


def _pv_module_version(import_path):
    """Best-effort version lookup for an imported module.
    Tries module.__version__ first, falls back to importlib.metadata,
    returns None if nothing works."""
    try:
        mod = _pv_importlib.import_module(import_path)
    except Exception:
        return None
    v = getattr(mod, "__version__", None)
    if isinstance(v, str) and v:
        return v
    try:
        import importlib.metadata as _pv_md
    except Exception:
        return None
    # Walk up the dotted path so submodule imports still resolve to their
    # owning distribution (e.g. pathsim_chem.blocks → pathsim-chem).
    parts = import_path.split(".")
    for i in range(len(parts), 0, -1):
        candidate = parts[0] if i == 1 else ".".join(parts[:i])
        for name in (candidate, candidate.replace("_", "-"), candidate.replace("-", "_")):
            try:
                return _pv_md.version(name)
            except Exception:
                continue
    return None


_pv_helpers_loaded = True
`;

export const TOOLBOX_PYTHON_HELPERS = INTROSPECT_PY + RUNTIME_GLUE;

/** Sentinel expression used to check whether helpers are already loaded in the REPL. */
export const TOOLBOX_HELPERS_SENTINEL = `'_pv_helpers_loaded' in dir()`;
