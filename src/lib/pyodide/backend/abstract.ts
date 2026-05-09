/**
 * Abstract base for Backend implementations.
 *
 * Hosts state-store delegation, output-callback plumbing, and id generation
 * that is identical across the Pyodide and Flask backends. Concrete backends
 * still own init/terminate/exec/streaming, since those are transport-specific.
 */

import type { Backend, BackendState } from './types';
import { backendState } from './state';

export abstract class AbstractBackend implements Backend {
	protected messageId = 0;
	protected stdoutCallback: ((value: string) => void) | null = null;
	protected stderrCallback: ((value: string) => void) | null = null;

	// -------------------------------------------------------------------------
	// Lifecycle (abstract — concrete backends implement)
	// -------------------------------------------------------------------------
	abstract init(): Promise<void>;
	abstract terminate(): void;

	// -------------------------------------------------------------------------
	// State (delegates to shared backendState store)
	// -------------------------------------------------------------------------

	getState(): BackendState {
		return backendState.get();
	}

	subscribe(callback: (state: BackendState) => void): () => void {
		return backendState.subscribe(callback);
	}

	isReady(): boolean {
		return this.getState().initialized;
	}

	isLoading(): boolean {
		return this.getState().loading;
	}

	getError(): string | null {
		return this.getState().error;
	}

	// -------------------------------------------------------------------------
	// Execution (abstract)
	// -------------------------------------------------------------------------
	abstract exec(code: string, timeout?: number): Promise<void>;
	abstract evaluate<T = unknown>(expr: string, timeout?: number): Promise<T>;

	// -------------------------------------------------------------------------
	// Streaming (abstract)
	// -------------------------------------------------------------------------
	abstract startStreaming<T>(
		expr: string,
		onData: (data: T) => void,
		onDone: () => void,
		onError: (error: Error) => void
	): void;
	abstract stopStreaming(): void;
	abstract isStreaming(): boolean;
	abstract execDuringStreaming(code: string): void;

	// -------------------------------------------------------------------------
	// Output callbacks
	// -------------------------------------------------------------------------

	onStdout(callback: (value: string) => void): void {
		this.stdoutCallback = callback;
	}

	onStderr(callback: (value: string) => void): void {
		this.stderrCallback = callback;
	}

	// -------------------------------------------------------------------------
	// Helpers
	// -------------------------------------------------------------------------

	protected generateId(): string {
		return `repl_${++this.messageId}`;
	}
}
