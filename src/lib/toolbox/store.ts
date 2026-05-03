/**
 * Runtime toolbox persistence store.
 *
 * Backed by localStorage so the user's installed toolboxes survive reload.
 * The actual install/register logic lives in the installer/registry layers;
 * this store is a passive list of declarations.
 */

import { writable, type Readable } from 'svelte/store';
import type { ToolboxConfig, ToolboxStorage } from './types';
import { TOOLBOX_STORAGE_KEY } from './types';
import { TOOLBOX_CATALOG } from './catalog';

const SEED_FLAG_KEY = 'pathview.toolboxes.seeded.v1';

function loadInitial(): ToolboxConfig[] {
	if (typeof localStorage === 'undefined') return [];
	const raw = localStorage.getItem(TOOLBOX_STORAGE_KEY);
	if (!raw) return [];
	try {
		const parsed = JSON.parse(raw) as ToolboxStorage;
		if (parsed?.version !== 1 || !Array.isArray(parsed.toolboxes)) return [];
		return parsed.toolboxes;
	} catch {
		return [];
	}
}

function persist(list: ToolboxConfig[]): void {
	if (typeof localStorage === 'undefined') return;
	const envelope: ToolboxStorage = { version: 1, toolboxes: list };
	try {
		localStorage.setItem(TOOLBOX_STORAGE_KEY, JSON.stringify(envelope));
	} catch (e) {
		console.error('[toolbox] failed to persist:', e);
	}
}

const internal = writable<ToolboxConfig[]>(loadInitial());
internal.subscribe((list) => persist(list));

export const toolboxes: Readable<ToolboxConfig[]> = { subscribe: internal.subscribe };

/** Insert or replace a toolbox by id. */
export function upsertToolbox(toolbox: ToolboxConfig): void {
	internal.update((list) => {
		const idx = list.findIndex((t) => t.id === toolbox.id);
		if (idx === -1) return [...list, toolbox];
		const next = [...list];
		next[idx] = toolbox;
		return next;
	});
}

/**
 * Seed the store with any catalog entries flagged `preloaded` — once,
 * tracked by a localStorage flag so an uninstall stays uninstalled.
 */
export function seedPreloadedToolboxes(): void {
	if (typeof localStorage === 'undefined') return;
	if (localStorage.getItem(SEED_FLAG_KEY)) return;
	for (const entry of TOOLBOX_CATALOG) {
		if (!entry.preloaded) continue;
		upsertToolbox({
			id: entry.id,
			displayName: entry.displayName,
			source: entry.source,
			importPath: entry.importPath,
			eventsImportPath: entry.eventsImportPath
		});
	}
	try {
		localStorage.setItem(SEED_FLAG_KEY, '1');
	} catch (e) {
		console.error('[toolbox] failed to set seed flag:', e);
	}
}

/** Remove a toolbox by id. Returns true if anything was removed. */
export function removeToolbox(id: string): boolean {
	let removed = false;
	internal.update((list) => {
		const next = list.filter((t) => {
			if (t.id === id) {
				removed = true;
				return false;
			}
			return true;
		});
		return removed ? next : list;
	});
	return removed;
}
