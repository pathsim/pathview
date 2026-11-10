/**
 * Node definition helper
 * Factory function for creating node type definitions
 */

import type { NodeTypeDefinition, NodeCategory, ParamType, ParamDefinition, NodeShape, PortCarrier } from './types';
import { PORT_COLORS } from '$lib/utils/colors';

interface DefineNodeOptions {
	name: string;
	category: NodeCategory;
	description?: string;
	blockClass: string; // PathSim class name
	/** Python module to import `blockClass` from. Optional — built-ins
	 *  resolve via the static map in `blocks.ts`. Toolbox-registered
	 *  blocks pass their toolbox `importPath` here. */
	importPath?: string;

	// Port configuration
	inputs?: string[]; // Named input ports
	outputs?: string[]; // Named output ports
	/** Channel layouts of the ports that are carriers, by port name */
	inputCarriers?: Record<string, PortCarrier>;
	outputCarriers?: Record<string, PortCarrier>;
	minInputs?: number; // minimum ports (default 1)
	minOutputs?: number;
	maxInputs?: number | null; // null = unlimited
	maxOutputs?: number | null;
	syncPorts?: boolean; // When true, output count always equals input count

	// Shape override (defaults based on category)
	shape?: NodeShape;

	// Parameters
	params?: Record<
		string,
		{
			type: ParamType;
			default: unknown;
			description?: string;
			min?: number;
			max?: number;
			options?: string[];
		}
	>;
}

/**
 * Create a node type definition
 */
export function defineNode(options: DefineNodeOptions): NodeTypeDefinition {
	const {
		name,
		category,
		description = `${name} block`,
		blockClass,
		importPath,
		inputs = ['in 0'],
		outputs = ['out 0'],
		inputCarriers = {},
		outputCarriers = {},
		minInputs = 1,
		minOutputs = 1,
		maxInputs = null,
		maxOutputs = null,
		syncPorts,
		shape,
		params = {}
	} = options;

	// Build parameter definitions
	const paramDefs: ParamDefinition[] = Object.entries(params).map(([paramName, def]) => ({
		name: paramName,
		type: def.type,
		default: def.default,
		description: def.description,
		min: def.min,
		max: def.max,
		options: def.options
	}));

	return {
		type: blockClass,
		name,
		category,
		description,
		blockClass,
		importPath,
		shape,

		ports: {
			inputs: inputs.map((portName) => ({
				name: portName,
				direction: 'input' as const,
				color: PORT_COLORS.default,
				...(inputCarriers[portName] ? { carrier: inputCarriers[portName] } : {})
			})),
			outputs: outputs.map((portName) => ({
				name: portName,
				direction: 'output' as const,
				color: PORT_COLORS.default,
				...(outputCarriers[portName] ? { carrier: outputCarriers[portName] } : {})
			})),
			minInputs,
			minOutputs,
			maxInputs,
			maxOutputs,
			syncPorts
		},

		params: paramDefs
	};
}
