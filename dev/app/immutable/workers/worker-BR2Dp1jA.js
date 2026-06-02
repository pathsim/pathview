const _="0.29.4",m=`https://cdn.jsdelivr.net/pyodide/v${_}/full/pyodide.mjs`,I=["numpy","scipy","micropip"],f=[{pip:"pathsim==0.22.2",required:!0,pre:!1,import:"pathsim"}],y={LOADING_PYODIDE:"Loading Pyodide...",INSTALLING_DEPS:"Installing NumPy and SciPy...",INSTALLING_PATHSIM:"Installing PathSim...",INSTALLING_PATHSIM_CHEM:"Installing PathSim-Chem...",STARTING_WORKER:"Starting worker...",STARTING_SIMULATION:"Starting simulation..."},p={WORKER_NOT_INITIALIZED:"Worker not initialized",FAILED_TO_LOAD_PYODIDE:"Failed to load Pyodide"};async function g(t,s){for(const r of f){const n=`INSTALLING_${r.import.toUpperCase()}`;s.send({type:"progress",value:y[n]??`Installing ${r.import}...`});try{const e=r.pre?", pre=True":"";await t.runPythonAsync(`
import micropip
await micropip.install('${r.pip}'${e})
			`),await t.runPythonAsync(`
import ${r.import}
print(f"${r.import} {${r.import}.__version__} loaded successfully")
			`)}catch(e){if(r.required)throw new Error(`Failed to install required package ${r.pip}: ${e}`);console.warn(`Optional package ${r.pip} failed to install:`,e)}}}let a=null,d=!1,c=!1;const l=[];function o(t){postMessage(t)}async function E(t){if(d){o({type:"ready"});return}o({type:"progress",value:y.LOADING_PYODIDE});const{loadPyodide:s}=await import(m);if(a=await s(),!a)throw new Error(p.FAILED_TO_LOAD_PYODIDE);a.setStdout({batched:r=>o({type:"stdout",value:r})}),a.setStderr({batched:r=>o({type:"stderr",value:r})}),o({type:"progress",value:y.INSTALLING_DEPS}),await a.loadPackage([...I]),await g(a,{send:o,token:t}),await a.runPythonAsync("import numpy as np"),await a.runPythonAsync("import gc"),await a.runPythonAsync("_clean_globals = set(globals().keys())"),d=!0,o({type:"ready"})}async function h(t,s){if(!a)throw new Error(p.WORKER_NOT_INITIALIZED);try{await a.runPythonAsync(s),o({type:"ok",id:t})}catch(r){const n=r instanceof Error?r.message:String(r);let e;try{e=await a.runPythonAsync(`
import traceback
traceback.format_exc()
			`)}catch{}o({type:"error",id:t,error:n,traceback:e})}}async function w(t,s){if(!a)throw new Error(p.WORKER_NOT_INITIALIZED);try{const r=await a.runPythonAsync(`
_eval_result = ${s}
json.dumps(_eval_result, default=_to_json if '_to_json' in dir() else str)
		`);o({type:"value",id:t,value:r})}catch(r){const n=r instanceof Error?r.message:String(r);let e;try{e=await a.runPythonAsync(`
import traceback
traceback.format_exc()
			`)}catch{}o({type:"error",id:t,error:n,traceback:e})}}async function A(t,s){if(!a)throw new Error(p.WORKER_NOT_INITIALIZED);c=!0,l.length=0;try{for(;c;){for(;l.length>0;){const e=l.shift();try{await a.runPythonAsync(e)}catch(i){const u=i instanceof Error?i.message:String(i);o({type:"stderr",value:`Stream exec error: ${u}`})}}const r=await a.runPythonAsync(`
_eval_result = ${s}
json.dumps(_eval_result, default=_to_json if '_to_json' in dir() else str)
			`),n=JSON.parse(r);if(!c){!n.done&&n.result&&o({type:"stream-data",id:t,value:r});break}if(n.done)break;o({type:"stream-data",id:t,value:r})}}catch(r){const n=r instanceof Error?r.message:String(r);let e;try{e=await a.runPythonAsync(`
import traceback
traceback.format_exc()
			`)}catch{}o({type:"error",id:t,error:n,traceback:e})}finally{c=!1,o({type:"stream-done",id:t})}}function S(){c=!1}self.onmessage=async t=>{const{type:s}=t.data,r="id"in t.data?t.data.id:void 0,n="code"in t.data?t.data.code:void 0,e="expr"in t.data?t.data.expr:void 0;try{switch(s){case"init":await E("token"in t.data?t.data.token:void 0);break;case"exec":if(!r||typeof n!="string")throw new Error("Invalid exec request: missing id or code");await h(r,n);break;case"eval":if(!r||typeof e!="string")throw new Error("Invalid eval request: missing id or expr");await w(r,e);break;case"stream-start":if(!r||typeof e!="string")throw new Error("Invalid stream-start request: missing id or expr");A(r,e);break;case"stream-stop":S();break;case"stream-exec":typeof n=="string"&&c&&l.push(n);break;default:throw new Error(`Unknown message type: ${s}`)}}catch(i){o({type:"error",id:r,error:i instanceof Error?i.message:String(i)})}};
