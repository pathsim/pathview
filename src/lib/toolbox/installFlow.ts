/**
 * High-level orchestrator for installing a toolbox end-to-end:
 * `performInstall` → `discoverToolbox` → `registerToolbox` → `upsertToolbox`.
 *
 * Used by both the startup bootstrap and the per-file `requiredToolboxes`
 * install path. Deduplicates concurrent calls keyed by toolbox `id` so the
 * two paths can run in parallel without firing the same install twice.
 *
 * Reconciles selections against the current persisted store entry when one
 * exists, so the user's enable/disable choices survive a re-install.
 */

import { get } from 'svelte/store';
import { toolboxes, upsertToolbox } from './store';
import { performInstall, discoverToolbox, registerToolbox } from './register';
import { getCatalogEntry } from './catalog';
import type { ToolboxConfig, ToolboxSource } from './types';

export interface InstallSpec {
	id: string;
	displayName: string;
	source: ToolboxSource;
	importPath?: string;
	eventsImportPath?: string;
}

const inFlight = new Map<string, Promise<ToolboxConfig>>();

export async function installAndRegisterToolbox(spec: InstallSpec): Promise<ToolboxConfig> {
	const existing = inFlight.get(spec.id);
	if (existing) return existing;

	const promise = (async (): Promise<ToolboxConfig> => {
		const installResult = await performInstall(spec.source, spec.importPath);
		const discovered = await discoverToolbox({
			importPath: installResult.importPath,
			eventsImportPath: spec.eventsImportPath
		});

		// Reconcile against the current persisted entry, if any: preserves
		// user enable/disable choices, defaults newly discovered entries to
		// enabled, drops entries whose classes no longer exist upstream.
		const current = get(toolboxes).find((t) => t.id === spec.id);
		const config: ToolboxConfig = {
			id: spec.id,
			displayName: spec.displayName,
			source: spec.source,
			importPath: installResult.importPath,
			eventsImportPath: spec.eventsImportPath,
			installedVersion: installResult.installedVersion,
			blocks: discovered.blocks.map(
				(b) =>
					current?.blocks.find((s) => s.className === b.className) ?? {
						className: b.className,
						enabled: true
					}
			),
			events: discovered.events.map(
				(e) =>
					current?.events.find((s) => s.className === e.className) ?? {
						className: e.className,
						enabled: true
					}
			)
		};

		const catalog = getCatalogEntry(spec.id);
		registerToolbox(config, {
			blocks: discovered.blocks,
			events: discovered.events,
			defaultCategory: catalog?.defaultCategory,
			categoryByClass: catalog?.categoryByClass
		});
		upsertToolbox(config);

		return config;
	})();

	inFlight.set(spec.id, promise);
	promise
		.catch(() => {
			// Error is propagated to the original awaiter; we only swallow
			// here so the in-flight cleanup below doesn't trigger an
			// unhandled rejection warning.
		})
		.finally(() => {
			if (inFlight.get(spec.id) === promise) inFlight.delete(spec.id);
		});

	return promise;
}
