/**
 * Node definition helper
 * Factory function for creating node type definitions
 */

import type { NodeTypeDefinition, NodeCategory, ParamType, ParamDefinition, NodeShape, BusStructure, PortPolicy } from './types';
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
	/** The names of the fixed ports are the labels pathsim addresses them by */
	labeled?: boolean;
	/** Signals of the ports that are carriers, by port name */
	inputBuses?: Record<string, BusStructure>;
	outputBuses?: Record<string, BusStructure>;
	minInputs?: number; // minimum ports (default 1)
	minOutputs?: number;
	inputPolicy?: PortPolicy; // default 'variable'
	outputPolicy?: PortPolicy;
	/** Parameters the ports depend on, for 'derived' ports */
	portParameters?: string[];
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
 * Ports of a pathsim block in one direction from its introspected port labels:
 * a list gives ports named by their labels, fixed, or derived for a block whose
 * ports depend on its parameters, `null` variable ports
 */
export function portsFromLabels(
	labels: string[] | null | undefined,
	portParameters?: string[]
): { names: string[] | undefined; policy: PortPolicy } {
	if (labels == null) return { names: undefined, policy: 'variable' };
	return { names: labels, policy: portParameters?.length ? 'derived' : 'fixed' };
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
		labeled = false,
		inputBuses = {},
		outputBuses = {},
		minInputs = 1,
		minOutputs = 1,
		inputPolicy = 'variable',
		outputPolicy = 'variable',
		portParameters,
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
				...(labeled && inputPolicy !== 'variable' ? { key: portName } : {}),
				...(inputBuses[portName] ? { bus: inputBuses[portName] } : {})
			})),
			outputs: outputs.map((portName) => ({
				name: portName,
				direction: 'output' as const,
				color: PORT_COLORS.default,
				...(labeled && outputPolicy !== 'variable' ? { key: portName } : {}),
				...(outputBuses[portName] ? { bus: outputBuses[portName] } : {})
			})),
			minInputs,
			minOutputs,
			inputPolicy,
			outputPolicy,
			syncPorts
		},

		params: paramDefs,
		...(portParameters?.length ? { portParameters } : {})
	};
}
