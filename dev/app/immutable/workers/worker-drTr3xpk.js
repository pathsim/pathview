const _="0.29.4",m=`https://cdn.jsdelivr.net/pyodide/v${_}/full/pyodide.mjs`,h=["numpy","scipy","micropip"],f=[{pip:"pathsim==0.23.1",required:!0,pre:!1,import:"pathsim"}],d={LOADING_PYODIDE:"Loading Pyodide...",INSTALLING_DEPS:"Installing NumPy and SciPy...",INSTALLING_PATHSIM:"Installing PathSim...",INSTALLING_PATHSIM_CHEM:"Installing PathSim-Chem...",STARTING_WORKER:"Starting worker...",STARTING_SIMULATION:"Starting simulation..."},l={WORKER_NOT_INITIALIZED:"Worker not initialized",FAILED_TO_LOAD_PYODIDE:"Failed to load Pyodide"};var g=`"""Shared package-install primitives for the Pyodide and Flask backends.

Single source of truth for "is this importable?" + "install this package",
used by BOTH the engine-install seam (worker boot, via engineInstall.ts) and
the runtime toolbox installer (via TOOLBOX_PYTHON_HELPERS). Defined here, in
one place, so there is exactly one micropip / pip code path with one
error-classification scheme instead of three inline copies.

The engine seam injects this before the worker snapshots \`\`_clean_globals\`\`,
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

    \`\`pre\`\` allows pre-release wheels (used by the engine seam); \`\`keep_going\`\`
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
        raise RuntimeError("pip install failed:\\n" + (res.stderr or res.stdout))
    return {"ok": True, "spec": spec, "via": "pip"}
`;async function w(t,s){await t.runPythonAsync(g);for(const e of f){const i=`INSTALLING_${e.import.toUpperCase()}`;s.send({type:"progress",value:d[i]??`Installing ${e.import}...`});try{await t.runPythonAsync(`await _pv_install_micropip('${e.pip}', pre=${e.pre?"True":"False"})`),await t.runPythonAsync(`
import ${e.import}
print(f"${e.import} {${e.import}.__version__} loaded successfully")
			`)}catch(n){if(e.required)throw new Error(`Failed to install required package ${e.pip}: ${n}`);console.warn(`Optional package ${e.pip} failed to install:`,n)}}}let r=null,u=!1,p=!1;const c=[];function a(t){postMessage(t)}async function I(t){if(u){a({type:"ready"});return}a({type:"progress",value:d.LOADING_PYODIDE});const{loadPyodide:s}=await import(m);if(r=await s(),!r)throw new Error(l.FAILED_TO_LOAD_PYODIDE);r.setStdout({batched:e=>a({type:"stdout",value:e})}),r.setStderr({batched:e=>a({type:"stderr",value:e})}),a({type:"progress",value:d.INSTALLING_DEPS}),await r.loadPackage([...h]),await w(r,{send:a,token:t}),await r.runPythonAsync("import numpy as np"),await r.runPythonAsync("import gc"),await r.runPythonAsync("_clean_globals = set(globals().keys())"),u=!0,a({type:"ready"})}async function E(t,s){if(!r)throw new Error(l.WORKER_NOT_INITIALIZED);try{await r.runPythonAsync(s),a({type:"ok",id:t})}catch(e){const i=e instanceof Error?e.message:String(e);let n;try{n=await r.runPythonAsync(`
import traceback
traceback.format_exc()
			`)}catch{}a({type:"error",id:t,error:i,traceback:n})}}async function P(t,s){if(!r)throw new Error(l.WORKER_NOT_INITIALIZED);try{const e=await r.runPythonAsync(`
_eval_result = ${s}
json.dumps(_eval_result, default=_to_json if '_to_json' in dir() else str)
		`);a({type:"value",id:t,value:e})}catch(e){const i=e instanceof Error?e.message:String(e);let n;try{n=await r.runPythonAsync(`
import traceback
traceback.format_exc()
			`)}catch{}a({type:"error",id:t,error:i,traceback:n})}}async function b(t,s){if(!r)throw new Error(l.WORKER_NOT_INITIALIZED);p=!0,c.length=0;try{for(;p;){for(;c.length>0;){const n=c.shift();try{await r.runPythonAsync(n)}catch(o){const y=o instanceof Error?o.message:String(o);a({type:"stderr",value:`Stream exec error: ${y}`})}}const e=await r.runPythonAsync(`
_eval_result = ${s}
json.dumps(_eval_result, default=_to_json if '_to_json' in dir() else str)
			`),i=JSON.parse(e);if(!p){!i.done&&i.result&&a({type:"stream-data",id:t,value:e});break}if(i.done)break;a({type:"stream-data",id:t,value:e})}}catch(e){const i=e instanceof Error?e.message:String(e);let n;try{n=await r.runPythonAsync(`
import traceback
traceback.format_exc()
			`)}catch{}a({type:"error",id:t,error:i,traceback:n})}finally{p=!1,a({type:"stream-done",id:t})}}function k(){p=!1}self.onmessage=async t=>{const{type:s}=t.data,e="id"in t.data?t.data.id:void 0,i="code"in t.data?t.data.code:void 0,n="expr"in t.data?t.data.expr:void 0;try{switch(s){case"init":await I("token"in t.data?t.data.token:void 0);break;case"exec":if(!e||typeof i!="string")throw new Error("Invalid exec request: missing id or code");await E(e,i);break;case"eval":if(!e||typeof n!="string")throw new Error("Invalid eval request: missing id or expr");await P(e,n);break;case"stream-start":if(!e||typeof n!="string")throw new Error("Invalid stream-start request: missing id or expr");b(e,n);break;case"stream-stop":k();break;case"stream-exec":typeof i=="string"&&p&&c.push(i);break;default:throw new Error(`Unknown message type: ${s}`)}}catch(o){a({type:"error",id:e,error:o instanceof Error?o.message:String(o)})}};
