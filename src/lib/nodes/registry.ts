/**
 * Node type registry
 * Manages all registered node types and provides lookup functionality.
 *
 * Definitions can come from two sources:
 *   - "builtin": baked in at build time (extracted from `pathsim` core via
 *     `scripts/extract.py`).
 *   - a runtime toolbox id: registered by the toolbox installer when the
 *     user adds a toolbox via the wizard. Removed on uninstall.
 *
 * `registryVersion` is a Svelte store that bumps on every change so the UI
 * (NodeLibrary, etc.) can stay in sync with runtime changes.
 */

import { writable, type Readable } from 'svelte/store';
import type { NodeTypeDefinition, NodeCategory, ParamDefinition, ParamType } from './types';
import { defineNode } from './defineNode';
import { extractedBlocks, blockConfig, type ExtractedBlock } from './generated/blocks';
import { syncPortBlocks } from './uiConfig';

/** Marker for built-in (build-time) definitions. */
export const BUILTIN_SOURCE = 'builtin';

interface Entry {
	definition: NodeTypeDefinition;
	source: string;
}

class NodeRegistry {
	private nodes: Map<string, Entry> = new Map();
	private byCategory: Map<NodeCategory, Set<string>> = new Map();
	private bySource: Map<string, Set<string>> = new Map();

	/**
	 * Register a node type. If a node with the same `type` is already
	 * registered, it is replaced (last writer wins) and a warning logged.
	 */
	register(definition: NodeTypeDefinition, source: string = BUILTIN_SOURCE): void {
		if (this.nodes.has(definition.type)) {
			// eslint-disable-next-line no-console
			console.warn(
				`[nodeRegistry] replacing "${definition.type}" (was ${this.nodes.get(definition.type)?.source}, now ${source})`
			);
			this.removeFromIndexes(definition.type);
		}
		this.nodes.set(definition.type, { definition, source });

		const cat = this.byCategory.get(definition.category) ?? new Set<string>();
		cat.add(definition.type);
		this.byCategory.set(definition.category, cat);

		const src = this.bySource.get(source) ?? new Set<string>();
		src.add(definition.type);
		this.bySource.set(source, src);

		bumpVersion();
	}

	/** Remove every node registered under a given source (toolbox id). */
	unregisterSource(source: string): string[] {
		const ids = Array.from(this.bySource.get(source) ?? []);
		for (const id of ids) {
			this.removeFromIndexes(id);
			this.nodes.delete(id);
		}
		this.bySource.delete(source);
		if (ids.length > 0) bumpVersion();
		return ids;
	}

	private removeFromIndexes(type: string): void {
		const entry = this.nodes.get(type);
		if (!entry) return;
		const cat = this.byCategory.get(entry.definition.category);
		if (cat) {
			cat.delete(type);
			if (cat.size === 0) this.byCategory.delete(entry.definition.category);
		}
		const src = this.bySource.get(entry.source);
		if (src) {
			src.delete(type);
			if (src.size === 0) this.bySource.delete(entry.source);
		}
	}

	get(type: string): NodeTypeDefinition | undefined {
		return this.nodes.get(type)?.definition;
	}

	getSource(type: string): string | undefined {
		return this.nodes.get(type)?.source;
	}

	getByCategory(category: NodeCategory): NodeTypeDefinition[] {
		const ids = this.byCategory.get(category);
		if (!ids) return [];
		return Array.from(ids)
			.map((id) => this.nodes.get(id)?.definition)
			.filter((d): d is NodeTypeDefinition => !!d);
	}

	getBySource(source: string): NodeTypeDefinition[] {
		const ids = this.bySource.get(source);
		if (!ids) return [];
		return Array.from(ids)
			.map((id) => this.nodes.get(id)?.definition)
			.filter((d): d is NodeTypeDefinition => !!d);
	}

	getAllCategories(): NodeCategory[] {
		return Array.from(this.byCategory.keys());
	}

	getAllSources(): string[] {
		return Array.from(this.bySource.keys());
	}

	getAll(): NodeTypeDefinition[] {
		return Array.from(this.nodes.values()).map((e) => e.definition);
	}

	has(type: string): boolean {
		return this.nodes.has(type);
	}

	get size(): number {
		return this.nodes.size;
	}
}

// Reactive change counter — UI subscribes to this to re-render after
// runtime register/unregister.
const versionStore = writable(0);
function bumpVersion(): void {
	versionStore.update((n) => n + 1);
}

/** Subscribe to changes in the registry. The value is an opaque counter. */
export const registryVersion: Readable<number> = { subscribe: versionStore.subscribe };

export const nodeRegistry = new NodeRegistry();

/**
 * Convert extracted block to node definition
 *
 * Port semantics from Block.info():
 * - null: Variable/unlimited ports (UI allows add/remove)
 * - []: No ports of this type
 * - ["in", "out"]: Fixed labeled ports (locked count)
 */
function createNodeFromExtracted(
	name: string,
	category: NodeCategory,
	extracted: ExtractedBlock
): void {
	// Build params from extracted data
	const params: Record<
		string,
		{
			type: ParamType;
			default: unknown;
			description?: string;
			min?: number;
			max?: number;
			options?: string[];
		}
	> = {};

	for (const [paramName, paramInfo] of Object.entries(extracted.params)) {
		params[paramName] = {
			type: paramInfo.type as ParamType,
			default: paramInfo.default,
			description: paramInfo.description,
			min: paramInfo.min,
			max: paramInfo.max,
			options: paramInfo.options
		};
	}

	// Determine inputs from extracted data
	let inputs: string[] | undefined;
	let maxInputs: number | null;

	if (extracted.inputs === null) {
		// Variable ports - use default, UI will allow add/remove
		inputs = undefined; // defineNode will use ['in 0']
		maxInputs = null; // unlimited
	} else if (extracted.inputs.length > 0) {
		// Fixed labeled ports
		inputs = extracted.inputs;
		maxInputs = extracted.inputs.length;
	} else {
		// Empty array means no inputs
		inputs = [];
		maxInputs = 0;
	}

	// Determine outputs from extracted data
	let outputs: string[] | undefined;
	let maxOutputs: number | null;

	if (extracted.outputs === null) {
		// Variable ports - use default, UI will allow add/remove
		outputs = undefined; // defineNode will use ['out 0']
		maxOutputs = null; // unlimited
	} else if (extracted.outputs.length > 0) {
		// Fixed labeled ports
		outputs = extracted.outputs;
		maxOutputs = extracted.outputs.length;
	} else {
		// Empty array means no outputs
		outputs = [];
		maxOutputs = 0;
	}

	const definition = defineNode({
		name,
		category,
		blockClass: extracted.blockClass,
		description: extracted.description,
		inputs,
		outputs,
		maxInputs,
		maxOutputs,
		syncPorts: syncPortBlocks.has(name),
		params
	});

	// Add docstringHtml from extracted data
	if (extracted.docstringHtml) {
		definition.docstring = extracted.docstringHtml;
	}

	nodeRegistry.register(definition, BUILTIN_SOURCE);
}

/**
 * Initialize registry with all blocks from generated data
 */
function initializeRegistry(): void {
	for (const [category, blockNames] of Object.entries(blockConfig)) {
		for (const blockName of blockNames) {
			const extracted = extractedBlocks[blockName as keyof typeof extractedBlocks];

			if (extracted) {
				createNodeFromExtracted(blockName, category as NodeCategory, extracted);
			} else {
				console.warn(`Block "${blockName}" not found in extracted blocks`);
			}
		}
	}
}

// Initialize on module load
initializeRegistry();
