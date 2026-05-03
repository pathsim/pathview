/**
 * Runtime toolbox persistence store.
 *
 * Backed by localStorage so the user's installed toolboxes survive reload.
 * The actual install/register logic lives in the installer/registry layers;
 * this store is a passive list of declarations.
 *
 * Single envelope: `{ version, toolboxes, seededIds }`. `seededIds` records
 * which preloaded catalog entries have already been auto-added so that an
 * uninstall sticks across reloads.
 */

import { writable, get, type Readable } from 'svelte/store';
import type { ToolboxConfig, ToolboxStorage } from './types';
import { TOOLBOX_STORAGE_KEY } from './types';
import { TOOLBOX_CATALOG } from './catalog';

interface PersistedState {
	toolboxes: ToolboxConfig[];
	seededIds: string[];
}

function isValidConfig(c: unknown): c is ToolboxConfig {
	if (!c || typeof c !== 'object') return false;
	const t = c as Record<string, unknown>;
	return (
		typeof t.id === 'string' &&
		typeof t.displayName === 'string' &&
		typeof t.importPath === 'string' &&
		Array.isArray(t.blocks) &&
		Array.isArray(t.events) &&
		!!t.source &&
		typeof t.source === 'object' &&
		typeof (t.source as Record<string, unknown>).type === 'string'
	);
}

function loadInitial(): PersistedState {
	if (typeof localStorage === 'undefined') return { toolboxes: [], seededIds: [] };
	const raw = localStorage.getItem(TOOLBOX_STORAGE_KEY);
	if (!raw) return { toolboxes: [], seededIds: [] };
	try {
		const parsed = JSON.parse(raw) as ToolboxStorage;
		if (parsed?.version !== 1 || !Array.isArray(parsed.toolboxes)) {
			return { toolboxes: [], seededIds: [] };
		}
		const toolboxes = parsed.toolboxes.filter(isValidConfig);
		if (toolboxes.length !== parsed.toolboxes.length) {
			console.warn(
				`[toolbox] dropped ${parsed.toolboxes.length - toolboxes.length} malformed entries from persisted state`
			);
		}
		return {
			toolboxes,
			seededIds: Array.isArray(parsed.seededIds)
				? parsed.seededIds.filter((s): s is string => typeof s === 'string')
				: []
		};
	} catch {
		return { toolboxes: [], seededIds: [] };
	}
}

function persist(state: PersistedState): void {
	if (typeof localStorage === 'undefined') return;
	const envelope: ToolboxStorage = {
		version: 1,
		toolboxes: state.toolboxes,
		seededIds: state.seededIds
	};
	try {
		localStorage.setItem(TOOLBOX_STORAGE_KEY, JSON.stringify(envelope));
	} catch (e) {
		console.error('[toolbox] failed to persist:', e);
	}
}

const internal = writable<PersistedState>(loadInitial());
internal.subscribe(persist);

/** Public reactive view: just the toolbox list. */
export const toolboxes: Readable<ToolboxConfig[]> = {
	subscribe: (run, invalidate) => internal.subscribe((s) => run(s.toolboxes), invalidate)
};

/** Insert or replace a toolbox by id. */
export function upsertToolbox(toolbox: ToolboxConfig): void {
	internal.update((s) => {
		const idx = s.toolboxes.findIndex((t) => t.id === toolbox.id);
		const next = idx === -1 ? [...s.toolboxes, toolbox] : s.toolboxes.map((t, i) => (i === idx ? toolbox : t));
		return { ...s, toolboxes: next };
	});
}

/** Remove a toolbox by id. Returns true if anything was removed. */
export function removeToolbox(id: string): boolean {
	const before = get(internal).toolboxes.length;
	internal.update((s) => ({ ...s, toolboxes: s.toolboxes.filter((t) => t.id !== id) }));
	return get(internal).toolboxes.length !== before;
}

/**
 * Seed any catalog entries flagged `preloaded` that haven't been seeded
 * before. The seed is recorded in `seededIds`, so an explicit uninstall
 * later won't re-seed on next launch.
 */
export function seedPreloadedToolboxes(): void {
	internal.update((s) => {
		const seeded = new Set(s.seededIds);
		const installed = new Set(s.toolboxes.map((t) => t.id));
		const newToolboxes = [...s.toolboxes];
		const newSeededIds = [...s.seededIds];

		for (const entry of TOOLBOX_CATALOG) {
			if (!entry.preloaded || seeded.has(entry.id)) continue;
			if (!installed.has(entry.id)) {
				newToolboxes.push({
					id: entry.id,
					displayName: entry.displayName,
					source: entry.source,
					importPath: entry.importPath,
					eventsImportPath: entry.eventsImportPath,
					blocks: [],
					events: []
				});
			}
			newSeededIds.push(entry.id);
		}

		return { toolboxes: newToolboxes, seededIds: newSeededIds };
	});
}
