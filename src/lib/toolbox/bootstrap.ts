/**
 * App-startup hook that re-installs and registers all persisted toolboxes.
 *
 * Called once after Pyodide is ready. Failures are logged, never thrown —
 * a broken toolbox shouldn't take the whole app down.
 */

import { get } from 'svelte/store';
import { toolboxes } from './store';
import { performInstall, discoverToolbox, registerToolbox } from './register';
import { getCatalogEntry } from './catalog';
import type { ToolboxConfig } from './types';

let bootstrapped = false;

export async function bootstrapToolboxes(): Promise<void> {
	if (bootstrapped) return;
	bootstrapped = true;

	const list = get(toolboxes);
	if (list.length === 0) return;

	for (const config of list) {
		try {
			const installResult = await performInstall(config.source, config.importPath || undefined);
			const updatedConfig: ToolboxConfig = {
				...config,
				importPath: installResult.importPath
			};
			const discovered = await discoverToolbox({
				importPath: updatedConfig.importPath,
				eventsImportPath: updatedConfig.eventsImportPath
			});
			const catalog = getCatalogEntry(config.id);
			await registerToolbox(updatedConfig, {
				blocks: discovered.blocks,
				events: discovered.events,
				categoryByClass: catalog?.categoryByClass
			});
		} catch (e) {
			console.error(`[toolbox] bootstrap failed for "${config.id}":`, e);
		}
	}
}
