/**
 * Backend Module
 * Provides a general-purpose streaming REPL interface for Python execution
 *
 * This module abstracts the Python execution backend, allowing different
 * implementations (Pyodide, local server, remote) to be swapped.
 */

// Re-export types
export type { Backend, BackendState, REPLRequest, REPLResponse } from './types';

// Re-export state store
export { backendState } from './state';

// Re-export registry
export {
	getBackend,
	createBackend,
	switchBackend,
	getBackendType,
	hasBackend,
	terminateBackend,
	setFlaskHost,
	type BackendType
} from './registry';

// Re-export backend implementations
export { PyodideBackend } from './pyodide/backend';
export { FlaskBackend } from './flask/backend';

// ============================================================================
// Backward-Compatible Convenience Functions
// These delegate to the current backend and maintain API compatibility
// ============================================================================

import { getBackend, switchBackend, setFlaskHost, getBackendType } from './registry';
import { backendState } from './state';
import { consoleStore } from '$lib/stores/console';

/**
 * Resolve and initialize the execution backend at startup.
 *
 * Single entry point replacing the old `initBackendFromUrl` + `autoDetectBackend`
 * pair (which were both awaited and could each switch+init independently).
 * Precedence:
 *   1. `?backend=flask[&host=...]` URL override — explicit wins.
 *   2. Same-origin Flask server (pip-package mode), detected via `/api/health`.
 *   3. Default: Pyodide (created lazily by `getBackend()` on first use).
 * Only switches/initializes a Flask backend; the Pyodide default needs no work
 * here (it initializes on first `init()`/`exec()`).
 */
export async function resolveBackend(): Promise<void> {
	if (typeof window === 'undefined') return;
	const params = new URLSearchParams(window.location.search);

	// 1. Explicit URL override.
	if (params.get('backend') === 'flask') {
		const host = params.get('host');
		if (host) setFlaskHost(host);
		switchBackend('flask');
		await init();
		return;
	}

	// 2. Auto-detect a same-origin Flask server.
	try {
		const response = await fetch('/api/health', {
			method: 'GET',
			signal: AbortSignal.timeout(2000)
		});
		if (response.ok && (await response.json())?.status === 'ok') {
			setFlaskHost(window.location.origin);
			switchBackend('flask');
			await init();
			return;
		}
	} catch {
		// No Flask backend at same origin — fall through to the Pyodide default.
	}

	// 3. Default: Pyodide (lazy).
}

// Alias for backward compatibility
export const replState = {
	subscribe: backendState.subscribe
};

/**
 * Initialize the backend
 */
export async function init(): Promise<void> {
	const backend = getBackend();

	// Idempotent: several callers invoke init() (auto-detect, toolbox installer,
	// first run, helper injection). The backend init itself is a no-op once
	// ready, but logging/callback setup ran every time, producing repeated
	// "Initializing Python REPL..." noise. Bail early when ready.
	if (backend.isReady()) return;

	// Set up console output callbacks
	backend.onStdout((value) => consoleStore.output(value));
	backend.onStderr((value) => consoleStore.error(value));

	// Log initialization progress
	const unsubscribe = backend.subscribe((state) => {
		if (state.progress && state.loading) {
			consoleStore.info(state.progress);
		}
	});

	try {
		consoleStore.info('Initializing Python REPL...');
		await backend.init();
		consoleStore.info('Python REPL ready');
	} finally {
		unsubscribe();
	}
}

/**
 * Terminate the backend
 */
export function terminate(): void {
	getBackend().terminate();
}

/**
 * Execute Python code (no return value)
 */
export async function exec(code: string, timeout?: number): Promise<void> {
	return getBackend().exec(code, timeout);
}

/**
 * Evaluate a Python expression and return the result
 */
export async function evaluate<T = unknown>(expr: string, timeout?: number): Promise<T> {
	return getBackend().evaluate<T>(expr, timeout);
}

/**
 * Start autonomous streaming
 */
export function startStreaming<T>(
	expr: string,
	onData: (data: T) => void,
	onDone: () => void,
	onError: (error: Error) => void
): void {
	getBackend().startStreaming(expr, onData, onDone, onError);
}

/**
 * Stop streaming
 */
export function stopStreaming(): void {
	getBackend().stopStreaming();
}

/**
 * Check if streaming is active
 */
export function isStreaming(): boolean {
	return getBackend().isStreaming();
}

/**
 * Execute code during active streaming (queued for next loop iteration)
 */
export function execDuringStreaming(code: string): void {
	getBackend().execDuringStreaming(code);
}

/**
 * Check if backend is ready
 */
export function isReady(): boolean {
	return getBackend().isReady();
}

/**
 * Check if backend is loading
 */
export function isLoading(): boolean {
	return getBackend().isLoading();
}

/**
 * Get current error (if any)
 */
export function getError(): string | null {
	return getBackend().getError();
}
