/**
 * Core type definitions for PathView nodes
 */

import type { Position } from './common';
import type { EventInstance } from './events';

/** Port direction */
export type PortDirection = 'input' | 'output';

/** Port definition for a node type (static metadata) */
/** Channel layout of a port that is a pathsim `Carrier`: a named range of
 *  channels of the block, `keys` empty for a `Vector` */
export interface PortCarrier {
	start: number;
	size: number;
	keys: string[];
}

export interface PortDefinition {
	name: string;
	direction: PortDirection;
	color?: string;
	/** Set for a port that is a carrier, a stream of channels */
	carrier?: PortCarrier;
}

/** Port instance on a node (runtime) */
export interface PortInstance {
	id: string; // Unique port ID: `${nodeId}-${direction}-${index}`
	nodeId: string;
	name: string;
	direction: PortDirection;
	index: number;
	color: string;
}

/** Parameter type annotation (mirrors Python type hints) */
export type ParamType = 'number' | 'integer' | 'boolean' | 'string' | 'array' | 'callable' | 'any';

/** Parameter definition for a node type */
export interface ParamDefinition {
	name: string;
	type: ParamType;
	default: unknown;
	description?: string;
	min?: number; // For numeric types
	max?: number; // For numeric types
	options?: string[]; // For enum-like strings
}

/**
 * Node type category. Open-ended string so runtime-installed toolboxes can
 * introduce new categories without source edits.
 */
export type NodeCategory = string;

/** Node shape override (defaults based on category if not specified) */
export type NodeShape = 'pill' | 'rect' | 'circle' | 'diamond';

/** Node type definition (static metadata - like Python class) */
export interface NodeTypeDefinition {
	type: string; // Block class name: 'Constant', 'Integrator', etc.
	name: string; // Display name: 'Constant'
	category: NodeCategory;
	description: string;
	color?: string; // Optional custom color (defaults to pathsim-blue)

	// Port configuration
	ports: {
		inputs: PortDefinition[];
		outputs: PortDefinition[];
		minInputs: number; // minimum number of input ports (default 1)
		minOutputs: number; // minimum number of output ports (default 1)
		maxInputs: number | null; // null = unlimited
		maxOutputs: number | null;
		syncPorts?: boolean; // When true, output count always equals input count (parallel paths)
	};

	// Parameter definitions
	params: ParamDefinition[];

	// PathSim block class name for export
	blockClass: string;

	// Python module to import the block class from. Built-in pathsim blocks
	// can leave this undefined and codegen falls back to the static
	// `blockImportPaths` map; runtime-toolbox blocks set this to their
	// toolbox config's importPath so the generated code says
	// `from pathsim_chem import GLC` instead of `from pathsim.blocks import GLC`.
	importPath?: string;

	// Full RST docstring from PathSim (for documentation display)
	docstring?: string;

	// SVG icon from the block class, `Block.icon()` in pathsim and toolboxes
	icon?: string;

	// Shape override (defaults based on category if not specified)
	shape?: NodeShape;
}

/** Subsystem's internal graph (nested structure) */
export interface SubsystemGraph {
	nodes: NodeInstance[];
	connections: Connection[];
	annotations?: Annotation[];
	events?: EventInstance[];
}

/** Node instance (runtime - like Python object) */
export interface NodeInstance {
	id: string; // Unique instance ID
	type: string; // References NodeTypeDefinition.type
	name: string; // User-editable display name
	position: Position;

	// Dynamic port instances
	inputs: PortInstance[];
	outputs: PortInstance[];

	// Parameter values (user-edited)
	params: Record<string, unknown>;

	// Parameter names to show as inline inputs on node
	pinnedParams?: string[];

	// Custom node color (optional - defaults to pathsim-blue)
	color?: string;

	// Nested graph for Subsystem nodes
	graph?: SubsystemGraph;

	// Index signature for SvelteFlow compatibility
	[key: string]: unknown;
}

/** Waypoint on a connection route */
export interface Waypoint {
	id: string;
	position: Position;
	isUserWaypoint: boolean; // true = user-placed (persisted), false = auto-calculated
}

/** Connection between ports */
export interface Connection {
	id: string;
	sourceNodeId: string;
	sourcePortIndex: number;
	targetNodeId: string;
	targetPortIndex: number;
	waypoints?: Waypoint[]; // Optional - empty/undefined means auto-route entire path
	label?: string; // Optional text shown on the wire (UI-only)
}

/** Canvas annotation (markdown/LaTeX text) */
export interface Annotation {
	id: string;
	position: Position;
	content: string; // Markdown with LaTeX ($...$, $$...$$)
	width: number;
	height: number;
	color?: string; // Optional custom color (defaults to --pathsim-blue)
	fontSize?: number; // Font size in pixels (default: 11)

	// Index signature for SvelteFlow compatibility
	[key: string]: unknown;
}
