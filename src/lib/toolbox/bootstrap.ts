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
import { toolboxes, upsertToolbox, seedPreloadedToolboxes } from './store';
import { performInstall, discoverToolbox, registerToolbox } from './register';
import { getCatalogEntry } from './catalog';
import type { ToolboxConfig } from './types';

let bootstrapped = false;

export async function bootstrapToolboxes(): Promise<void> {
	if (bootstrapped) return;
	bootstrapped = true;

	seedPreloadedToolboxes();

	const list = get(toolboxes);
	if (list.length === 0) return;

	for (const config of list) {
		try {
			const installResult = await performInstall(config.source, config.importPath || undefined);
			const discovered = await discoverToolbox({
				importPath: installResult.importPath,
				eventsImportPath: config.eventsImportPath
			});

			// Fill in empty selection lists from a fresh seed so state is
			// always concrete after the first successful install.
			const filled: ToolboxConfig = {
				...config,
				importPath: installResult.importPath,
				blocks:
					config.blocks.length === 0
						? discovered.blocks.map((b) => ({ className: b.className, enabled: true }))
						: config.blocks,
				events:
					config.events.length === 0
						? discovered.events.map((e) => ({ className: e.className, enabled: true }))
						: config.events
			};

			const catalog = getCatalogEntry(config.id);
			await registerToolbox(filled, {
				blocks: discovered.blocks,
				events: discovered.events,
				defaultCategory: catalog?.defaultCategory,
				categoryByClass: catalog?.categoryByClass
			});

			// Persist if the install changed anything (importPath fix-up,
			// freshly populated block/event lists).
			if (
				filled.importPath !== config.importPath ||
				filled.blocks !== config.blocks ||
				filled.events !== config.events
			) {
				upsertToolbox(filled);
			}
		} catch (e) {
			console.error(`[toolbox] bootstrap failed for "${config.id}":`, e);
		}
	}
}
