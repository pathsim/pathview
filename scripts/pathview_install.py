"""Shared package-install primitives for the Pyodide and Flask backends.

Single source of truth for "is this importable?" + "install this package",
used by BOTH the engine-install seam (worker boot, via engineInstall.ts) and
the runtime toolbox installer (via TOOLBOX_PYTHON_HELPERS). Defined here, in
one place, so there is exactly one micropip / pip code path with one
error-classification scheme instead of three inline copies.

The engine seam injects this before the worker snapshots ``_clean_globals``,
so these names survive a simulation reset; the toolbox layer re-injects the
same source (idempotent) on demand.
"""

import sys as _pv_sys
import importlib as _pv_importlib


def _pv_already_installed(import_path):
    """Return True if the given module path is already importable."""
    if not import_path:
        return False
    try:
        _pv_importlib.import_module(import_path)
        return True
    except Exception:
        return False


async def _pv_install_micropip(spec, pre=False, keep_going=True):
    """Pyodide-side install via micropip (top-level await).

    micropip can only install pure-Python wheels (or packages Pyodide ships
    pre-built), so toolboxes with compiled/native code fail here even though
    they install fine in the standalone (pip-backed) build. On failure we
    classify the error and prefix it with PV_INCOMPATIBLE (browser-runtime
    limitation) or PV_INSTALL_ERROR (genuine failure) so the JS side can show
    a useful hint instead of a raw traceback.

    ``pre`` allows pre-release wheels (used by the engine seam); ``keep_going``
    keeps resolving the rest of the dependency set after a single miss.
    """
    import micropip
    try:
        await micropip.install(spec, keep_going=keep_going, pre=pre)
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
        raise RuntimeError("pip install failed:\n" + (res.stderr or res.stdout))
    return {"ok": True, "spec": spec, "via": "pip"}
