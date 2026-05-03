/**
 * Runtime toolbox installer + introspector.
 *
 * Bridges the JS side (toolbox config, manager) to the Python side (micropip,
 * importlib introspection) via the existing Pyodide REPL bridge.
 */

import { exec, evaluate, getBackendType } from '$lib/pyodide/backend';
import { initPyodide } from '$lib/pyodide/bridge';
import { TOOLBOX_PYTHON_HELPERS, TOOLBOX_HELPERS_SENTINEL } from './python';

/** A single parameter as returned by the runtime introspector. */
export interface IntrospectedParam {
	name: string;
	default: string | null;
	type: string;
	description: string;
}

/** Raw block metadata as returned by pathview_introspect_blocks. */
export interface IntrospectedBlock {
	className: string;
	description: string;
	docstringHtml: string;
	inputs: Record<string, number> | string[] | null;
	outputs: Record<string, number> | string[] | null;
	params: IntrospectedParam[];
	error?: string;
}

/** Raw event metadata as returned by pathview_introspect_events. */
export interface IntrospectedEvent {
	className: string;
	description: string;
	docstringHtml: string;
	params: IntrospectedParam[];
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
	await ensureDocutils();
	helpersLoaded = true;
}

/**
 * Install docutils if it isn't importable. Pyodide doesn't ship it, but
 * we need it for RST→HTML conversion of block docstrings. Best-effort:
 * a failed install just leaves the docstring HTML empty.
 */
async function ensureDocutils(): Promise<void> {
	try {
		const ok = await evaluate<boolean>(`_pv_already_installed("docutils")`);
		if (ok) return;
		const backend = getBackendType();
		if (backend === 'pyodide') {
			await exec(`await _pv_install_micropip("docutils")`);
		} else {
			await exec(`_pv_install_pip("docutils")`);
		}
	} catch (e) {
		console.warn('[toolbox] could not install docutils:', e);
	}
}

/** Escape a string so it can be embedded as a Python literal. */
function pyStr(s: string): string {
	return JSON.stringify(s);
}

/**
 * Install a package. Skips when `importPath` is given and the module is
 * already importable (saves a round-trip + download).
 *
 * Routes through micropip in Pyodide and through `pip install` in the
 * Flask backend, so the user always gets the path appropriate for their
 * runtime.
 */
export async function installPackage(spec: string, importPath?: string): Promise<void> {
	await ensureHelpers();
	if (importPath) {
		const already = await evaluate<boolean>(`_pv_already_installed(${pyStr(importPath)})`);
		if (already) return;
	}
	const backend = getBackendType();
	if (backend === 'pyodide') {
		// runPythonAsync supports top-level await for micropip.install
		await exec(`await _pv_install_micropip(${pyStr(spec)})`);
	} else {
		// Flask / remote: real CPython, use subprocess pip (sync)
		await exec(`_pv_install_pip(${pyStr(spec)})`);
	}
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
