/**
 * Runtime toolbox installer + introspector.
 *
 * Bridges the JS side (toolbox config, manager) to the Python side (micropip,
 * importlib introspection) via the existing Pyodide REPL bridge.
 */

import { exec, evaluate } from '$lib/pyodide/backend';
import { initPyodide } from '$lib/pyodide/bridge';
import { TOOLBOX_PYTHON_HELPERS, TOOLBOX_HELPERS_SENTINEL } from './python';

/** Raw block metadata as returned by pathview_introspect_blocks. */
export interface IntrospectedBlock {
	className: string;
	description: string;
	inputs: Record<string, number> | string[] | null;
	outputs: Record<string, number> | string[] | null;
	params: { name: string; default: unknown; type: string }[];
	error?: string;
}

/** Raw event metadata as returned by pathview_introspect_events. */
export interface IntrospectedEvent {
	className: string;
	description: string;
	params: { name: string; default: unknown; type: string }[];
}

let helpersLoaded = false;

/**
 * Make sure Pyodide is initialized (so `json` and `_to_json` are available
 * for `evaluate(...)`) and that our toolbox helpers are defined.
 */
async function ensureHelpers(): Promise<void> {
	if (helpersLoaded) return;
	// initPyodide is idempotent and also runs REPL_SETUP_CODE which imports
	// `json` and defines `_to_json` — both needed by evaluate().
	await initPyodide();
	const present = await evaluate<boolean>(TOOLBOX_HELPERS_SENTINEL);
	if (!present) {
		await exec(TOOLBOX_PYTHON_HELPERS);
	}
	helpersLoaded = true;
}

/** Escape a string so it can be embedded as a Python literal. */
function pyStr(s: string): string {
	return JSON.stringify(s);
}

/**
 * Install a package via micropip. `spec` can be a PyPI name, a versioned
 * spec ("name==1.2"), or a wheel URL.
 */
export async function installPackage(spec: string): Promise<void> {
	await ensureHelpers();
	// micropip.install must be awaited; runPythonAsync supports top-level await.
	await exec(`await _pv_install_spec(${pyStr(spec)})`);
}

/**
 * Load a single-file Python module from inline source. The module is
 * registered in sys.modules under `pathview_inline_<name>`.
 *
 * Returns the actual module name registered (with prefix), so callers can
 * use it as the importPath for introspection.
 */
export async function loadInlineModule(name: string, code: string): Promise<string> {
	await ensureHelpers();
	const result = await evaluate<{ ok: boolean; module: string; error?: string }>(
		`_pv_load_inline(${pyStr(name)}, ${pyStr(code)})`
	);
	if (!result.ok) {
		throw new Error(`Failed to load inline module: ${result.error ?? 'unknown error'}`);
	}
	return result.module;
}

/** Import the module and return all Block subclasses with their metadata. */
export async function introspectBlocks(importPath: string): Promise<IntrospectedBlock[]> {
	await ensureHelpers();
	const result = await evaluate<{ ok: boolean; blocks?: IntrospectedBlock[]; error?: string }>(
		`pathview_introspect_blocks(${pyStr(importPath)})`
	);
	if (!result.ok || !result.blocks) {
		throw new Error(`Introspection failed for "${importPath}": ${result.error ?? 'unknown error'}`);
	}
	return result.blocks;
}

/** Import an events submodule and list event classes with their parameters. */
export async function introspectEvents(importPath: string): Promise<IntrospectedEvent[]> {
	await ensureHelpers();
	const result = await evaluate<{ ok: boolean; events?: IntrospectedEvent[]; error?: string }>(
		`pathview_introspect_events(${pyStr(importPath)})`
	);
	if (!result.ok || !result.events) {
		throw new Error(`Event introspection failed for "${importPath}": ${result.error ?? 'unknown error'}`);
	}
	return result.events;
}

/**
 * Drop a module from sys.modules. micropip has no real uninstall, so the
 * package files stay cached in the Pyodide FS until reload, but importing
 * the path again will re-execute the module body if needed.
 */
export async function uninstallModule(importPath: string): Promise<string[]> {
	await ensureHelpers();
	const result = await evaluate<{ ok: boolean; dropped: string[] }>(
		`pathview_uninstall(${pyStr(importPath)})`
	);
	return result.dropped;
}
