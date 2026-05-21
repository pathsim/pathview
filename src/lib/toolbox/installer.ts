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

/**
 * Make sure Pyodide is initialized (so `json` and `_to_json` are available
 * for `evaluate(...)`) and that our toolbox helpers are defined.
 *
 * No JS-side cache: pathview wipes Python globals on simulation reset, so
 * a cached "loaded" flag goes stale and the next call hits a NameError.
 * The sentinel check is a single evaluate — cheap enough to run every time.
 */
async function ensureHelpers(): Promise<void> {
	await initPyodide();
	const present = await evaluate<boolean>(TOOLBOX_HELPERS_SENTINEL);
	if (!present) {
		await exec(TOOLBOX_PYTHON_HELPERS);
		await ensureDocutils();
	}
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
 * Turn a raw micropip failure into a web-version-aware message.
 *
 * The web app runs Python through Pyodide, which can only install
 * pure-Python wheels (or packages Pyodide ships pre-built). Toolboxes with
 * compiled/native code fail here even though they install fine in the
 * standalone (pip-backed) PathView. `_pv_install_micropip` tags those
 * failures with `PV_INCOMPATIBLE`, so we give a useful hint instead of
 * surfacing a raw traceback. Genuine failures pass through unchanged.
 */
function reframePyodideInstallError(spec: string, err: unknown): Error {
	const raw = err instanceof Error ? err.message : String(err);
	if (!raw.includes('PV_INCOMPATIBLE')) {
		// Network error, bad spec, etc. — pass through, just strip our tag.
		return new Error(raw.replace(/PV_INSTALL_ERROR:\s*/, ''));
	}
	const detail = raw.split('PV_INCOMPATIBLE:').pop()?.trim() || raw;
	return new Error(
		`"${spec}" can't be installed in the PathView web app.\n` +
			`\n` +
			`The web version runs Python in your browser via Pyodide, which can\n` +
			`only install pure-Python packages (or packages Pyodide ships\n` +
			`pre-built). This toolbox needs compiled or native code that isn't\n` +
			`available in the browser.\n` +
			`\n` +
			`To use it, install the standalone PathView desktop app:\n` +
			`    pip install pathview\n` +
			`    pathview\n` +
			`It runs a real Python environment and can install any pip package.\n` +
			`\n` +
			`micropip: ${detail}`
	);
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
		// runPythonAsync supports top-level await for micropip.install.
		// Reframe Pyodide-incompatibility failures into an actionable hint.
		try {
			await exec(`await _pv_install_micropip(${pyStr(spec)})`);
		} catch (e) {
			throw reframePyodideInstallError(spec, e);
		}
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
 * Best-effort version lookup for an installed module. Reads
 * `module.__version__` first, falls back to `importlib.metadata`. Returns
 * null when neither is available (typical for inline modules).
 */
export async function getModuleVersion(importPath: string): Promise<string | null> {
	await ensureHelpers();
	try {
		return await evaluate<string | null>(`_pv_module_version(${pyStr(importPath)})`);
	} catch {
		return null;
	}
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
	if (!result.ok) {
		throw new Error(`Failed to drop module "${importPath}"`);
	}
	return result.dropped;
}
