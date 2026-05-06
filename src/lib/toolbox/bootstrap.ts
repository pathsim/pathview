/**
 * App-startup hook for runtime toolboxes.
 *
 * Seeds preloaded catalog entries on first launch, then re-installs and
 * registers everything in the persisted store. Toolbox configs from a
 * fresh seed have empty `blocks`/`events` arrays — bootstrap fills them
 * with the discovered defaults and persists, so the in-store state is
 * always concrete after first install.
 *
 * Failures are logged, never thrown — a broken toolbox shouldn't take
 * the whole app down.
 */

import { get } from 'svelte/store';
import { toolboxes, seedPreloadedToolboxes } from './store';
import { installAndRegisterToolbox } from './installFlow';
import { primePathsimVersion } from './pathsimVersion';

let bootstrapped = false;

export async function bootstrapToolboxes(): Promise<void> {
	if (bootstrapped) return;
	bootstrapped = true;

	// Cache pathsim's version once so createGraphFile (which is sync) can
	// stamp it into saved files without needing an async hop.
	await primePathsimVersion();

	seedPreloadedToolboxes();

	const list = get(toolboxes);
	if (list.length === 0) return;

	for (const config of list) {
		try {
			await installAndRegisterToolbox({
				id: config.id,
				displayName: config.displayName,
				source: config.source,
				importPath: config.importPath || undefined,
				eventsImportPath: config.eventsImportPath
			});
		} catch (e) {
			console.error(`[toolbox] bootstrap failed for "${config.id}":`, e);
		}
	}
}
