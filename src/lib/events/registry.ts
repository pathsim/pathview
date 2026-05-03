/**
 * Event type registry
 * Manages all available event type definitions, including runtime additions
 * from installed toolboxes.
 */

import { writable, type Readable } from 'svelte/store';
import type { EventTypeDefinition } from './types';
import { eventDefinitions } from './definitions';

export const BUILTIN_EVENT_SOURCE = 'builtin';

interface Entry {
	definition: EventTypeDefinition;
	source: string;
}

class EventRegistry {
	private events = new Map<string, Entry>();
	private bySource = new Map<string, Set<string>>();

	constructor() {
		for (const def of eventDefinitions) {
			this.register(def, BUILTIN_EVENT_SOURCE);
		}
	}

	register(definition: EventTypeDefinition, source: string = BUILTIN_EVENT_SOURCE): void {
		if (this.events.has(definition.type)) {
			this.removeFromSourceIndex(definition.type);
		}
		this.events.set(definition.type, { definition, source });
		const src = this.bySource.get(source) ?? new Set<string>();
		src.add(definition.type);
		this.bySource.set(source, src);
		bumpVersion();
	}

	unregisterSource(source: string): string[] {
		const ids = Array.from(this.bySource.get(source) ?? []);
		for (const id of ids) this.events.delete(id);
		this.bySource.delete(source);
		if (ids.length > 0) bumpVersion();
		return ids;
	}

	private removeFromSourceIndex(type: string): void {
		const entry = this.events.get(type);
		if (!entry) return;
		const src = this.bySource.get(entry.source);
		if (src) {
			src.delete(type);
			if (src.size === 0) this.bySource.delete(entry.source);
		}
	}

	get(type: string): EventTypeDefinition | undefined {
		return this.events.get(type)?.definition;
	}

	getSource(type: string): string | undefined {
		return this.events.get(type)?.source;
	}

	getBySource(source: string): EventTypeDefinition[] {
		const ids = this.bySource.get(source);
		if (!ids) return [];
		return Array.from(ids)
			.map((id) => this.events.get(id)?.definition)
			.filter((d): d is EventTypeDefinition => !!d);
	}

	getAll(): EventTypeDefinition[] {
		return Array.from(this.events.values()).map((e) => e.definition);
	}

	has(type: string): boolean {
		return this.events.has(type);
	}
}

const versionStore = writable(0);
function bumpVersion(): void {
	versionStore.update((n) => n + 1);
}

export const eventRegistryVersion: Readable<number> = { subscribe: versionStore.subscribe };

export const eventRegistry = new EventRegistry();
