/**
 * Flask Backend Implementation
 *
 * Runs Python code via API rqeuests to a Flask web server
 * Supports streaming with code injection between generator steps.
 */

import { backendState } from "../state";
import type { Backend, BackendState } from "../types";

export class FlaskBackend implements Backend {
    
    async init() : Promise<void> {

    }

    terminate(): void {

    }

    getState(): BackendState {
        return backendState.get()
    }

    subscribe(callback: (state: BackendState) => void): () => void {
        return backendState.subscribe(callback)
    }


}