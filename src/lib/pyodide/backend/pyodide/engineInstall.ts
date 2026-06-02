/**
 * Engine install seam (worker side).
 *
 * Installs the simulation engine into the Pyodide runtime. The default is the
 * configured PyPI packages (pathsim). This is a dedicated, stable seam so an
 * alternate-engine build can swap *only* this module (e.g. to install a wasm
 * wheel, optionally gated behind `ctx.token`) without touching the worker's
 * lifecycle code. `PYODIDE_PRELOAD` is loaded by the caller before this runs.
 */

import { PYTHON_PACKAGES } from '$lib/constants/dependencies';
import { PROGRESS_MESSAGES } from '$lib/constants/messages';
import INSTALL_PY from '../../../../../scripts/pathview_install.py?raw';
import type { PyodideInterface } from 'https://cdn.jsdelivr.net/pyodide/v0.29.4/full/pyodide.mjs';

export interface EngineInstallContext {
	/** Emit a progress message to the UI. */
	send: (msg: { type: 'progress'; value: string }) => void;
	/** Auth token for a gated engine download (unused by the pathsim default). */
	token?: string | null;
}

export async function installEngine(
	pyodide: PyodideInterface,
	ctx: EngineInstallContext
): Promise<void> {
	// Define the shared install primitive (`_pv_install_micropip`) that the
	// toolbox layer also uses (via TOOLBOX_PYTHON_HELPERS). Injected here, before
	// the worker snapshots `_clean_globals`, so it survives a simulation reset —
	// one micropip code path with one error-classification scheme, not two.
	await pyodide.runPythonAsync(INSTALL_PY);

	for (const pkg of PYTHON_PACKAGES) {
		const progressKey = `INSTALLING_${pkg.import.toUpperCase()}` as keyof typeof PROGRESS_MESSAGES;
		ctx.send({
			type: 'progress',
			value: PROGRESS_MESSAGES[progressKey] ?? `Installing ${pkg.import}...`
		});

		try {
			await pyodide.runPythonAsync(
				`await _pv_install_micropip('${pkg.pip}', pre=${pkg.pre ? 'True' : 'False'})`
			);

			// Verify installation
			await pyodide.runPythonAsync(`
import ${pkg.import}
print(f"${pkg.import} {${pkg.import}.__version__} loaded successfully")
			`);
		} catch (error) {
			if (pkg.required) {
				throw new Error(`Failed to install required package ${pkg.pip}: ${error}`);
			}
			console.warn(`Optional package ${pkg.pip} failed to install:`, error);
		}
	}
}
