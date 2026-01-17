/**
 * Node type registry
 * Manages all registered node types and provides lookup functionality
 */

import type { NodeTypeDefinition, NodeCategory, ParamDefinition, ParamType } from './types';
import { defineNode } from './defineNode';
import {
	extractedBlocks,
	blockConfig,
	uiOverrides,
	type ExtractedBlock,
	type UIOverride
} from './generated/blocks';

class NodeRegistry {
	private nodes: Map<string, NodeTypeDefinition> = new Map();
	private byCategory: Map<NodeCategory, NodeTypeDefinition[]> = new Map();

	/**
	 * Register a new node type
	 */
	register(definition: NodeTypeDefinition): void {
		this.nodes.set(definition.type, definition);

		const categoryNodes = this.byCategory.get(definition.category) || [];
		categoryNodes.push(definition);
		this.byCategory.set(definition.category, categoryNodes);
	}

	/**
	 * Get a node type by its type ID
	 */
	get(type: string): NodeTypeDefinition | undefined {
		return this.nodes.get(type);
	}

	/**
	 * Get all node types in a category
	 */
	getByCategory(category: NodeCategory): NodeTypeDefinition[] {
		return this.byCategory.get(category) || [];
	}

	/**
	 * Get all registered categories
	 */
	getAllCategories(): NodeCategory[] {
		return Array.from(this.byCategory.keys());
	}

	/**
	 * Get all registered node types
	 */
	getAll(): NodeTypeDefinition[] {
		return Array.from(this.nodes.values());
	}

	/**
	 * Check if a node type is registered
	 */
	has(type: string): boolean {
		return this.nodes.has(type);
	}

	/**
	 * Get the count of registered nodes
	 */
	get size(): number {
		return this.nodes.size;
	}
}

// Export singleton instance
export const nodeRegistry = new NodeRegistry();

/**
 * Convert extracted block to node definition options
 */
function createNodeFromExtracted(
	name: string,
	category: NodeCategory,
	extracted: ExtractedBlock,
	override: UIOverride = {}
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

	// Port semantics from Block.info():
	// - null: Variable/unlimited ports (UI allows add/remove)
	// - []: No ports of this type
	// - ["in", "out"]: Fixed labeled ports (locked count)

	// Determine inputs
	let inputs: string[] | undefined;
	if (override.defaultInputs && override.defaultInputs.length > 0) {
		inputs = override.defaultInputs;
	} else if (extracted.inputs === null) {
		// Variable ports - use default, UI will allow add/remove
		inputs = undefined; // defineNode will use ['in 0']
	} else if (extracted.inputs.length > 0) {
		// Fixed labeled ports
		inputs = extracted.inputs;
	} else if (override.maxInputs === 0) {
		// Explicit override for no inputs
		inputs = [];
	} else {
		// Empty array from Block.info() means no inputs
		inputs = [];
	}

	// Determine outputs
	let outputs: string[] | undefined;
	if (override.defaultOutputs && override.defaultOutputs.length > 0) {
		outputs = override.defaultOutputs;
	} else if (extracted.outputs === null) {
		// Variable ports - use default, UI will allow add/remove
		outputs = undefined; // defineNode will use ['out 0']
	} else if (extracted.outputs.length > 0) {
		// Fixed labeled ports
		outputs = extracted.outputs;
	} else if (override.maxOutputs === 0) {
		// Explicit override for no outputs
		outputs = [];
	} else {
		// Empty array from Block.info() means no outputs
		outputs = [];
	}

	// Determine max ports:
	// - If override specifies a value, use it
	// - If extracted.inputs is null (variable), leave unlimited
	// - If extracted.inputs is array, lock to that count (fixed ports)
	let maxInputs: number | null | undefined = override.maxInputs;
	if (maxInputs === undefined) {
		if (extracted.inputs === null) {
			// Variable ports - unlimited
			maxInputs = null;
		} else {
			// Fixed ports - lock to extracted count (or 0 if empty)
			maxInputs = extracted.inputs.length;
		}
	}

	let maxOutputs: number | null | undefined = override.maxOutputs;
	if (maxOutputs === undefined) {
		if (extracted.outputs === null) {
			// Variable ports - unlimited
			maxOutputs = null;
		} else {
			// Fixed ports - lock to extracted count (or 0 if empty)
			maxOutputs = extracted.outputs.length;
		}
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
		params
	});

	// Add docstringHtml from extracted data
	if (extracted.docstringHtml) {
		definition.docstring = extracted.docstringHtml;
	}

	nodeRegistry.register(definition);
}

/**
 * Initialize registry with all blocks from generated data
 */
function initializeRegistry(): void {
	for (const [category, blockNames] of Object.entries(blockConfig)) {
		for (const blockName of blockNames) {
			const extracted = extractedBlocks[blockName as keyof typeof extractedBlocks];
			const override = uiOverrides[blockName as keyof typeof uiOverrides] || {};

			if (extracted) {
				createNodeFromExtracted(blockName, category as NodeCategory, extracted, override);
			} else {
				console.warn(`Block "${blockName}" not found in extracted blocks`);
			}
		}
	}
}

// Initialize on module load
initializeRegistry();
