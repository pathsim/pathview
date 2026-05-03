/**
 * Runtime toolbox persistence store.
 *
 * Backed by localStorage so the user's installed toolboxes survive reload.
 * The actual install/register logic lives in the installer/registry layers;
 * this store is a passive list of declarations.
 */

import { writable, get, derived, type Readable } from 'svelte/store';
import type { ToolboxConfig, ToolboxStorage } from './types';
import { TOOLBOX_STORAGE_KEY } from './types';

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
		// Quota exceeded or similar — surface, don't crash the app.
		// eslint-disable-next-line no-console
		console.error('[toolbox] failed to persist:', e);
	}
}

const internal = writable<ToolboxConfig[]>(loadInitial());
internal.subscribe((list) => persist(list));

export const toolboxes: Readable<ToolboxConfig[]> = { subscribe: internal.subscribe };

/** Find a toolbox by id. */
export function getToolbox(id: string): ToolboxConfig | undefined {
	return get(internal).find((t) => t.id === id);
}

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

/** Replace the entire set of toolboxes (used for import/restore). */
export function replaceToolboxes(list: ToolboxConfig[]): void {
	internal.set(list);
}

/** Derived: just the ids, useful for cheap reactive checks. */
export const toolboxIds: Readable<string[]> = derived(toolboxes, ($t) => $t.map((t) => t.id));
