/**
 * Graph store helper utilities
 * Pure functions that don't depend on store state
 */

import type { PortInstance, PortDefinition, NodeInstance, SubsystemGraph, Connection } from '$lib/nodes/types';
import { PORT_COLORS } from '$lib/utils/colors';
import { NODE_TYPES } from '$lib/constants/nodeTypes';

// Import and re-export generateId from utils (canonical location)
import { generateId } from '$lib/stores/utils';
export { generateId };

/**
 * Create port instances from port definitions, with the pathsim key and the
 * carrier channels of the definitions
 */
export function createPorts(
	nodeId: string,
	direction: 'input' | 'output',
	portDefs: Pick<PortDefinition, 'name' | 'color' | 'key' | 'bus'>[]
): PortInstance[] {
	return portDefs.map((def, index) => ({
		id: `${nodeId}-${direction}-${index}`,
		nodeId,
		name: def.name,
		direction,
		index,
		color: def.color || PORT_COLORS.default,
		...(def.key !== undefined ? { key: def.key } : {}),
		...(def.bus ? { bus: def.bus } : {})
	}));
}

/**
 * Get a subsystem node by following a path through the graph
 */
export function getSubsystemByPath(
	rootNodes: Map<string, NodeInstance>,
	path: string[]
): NodeInstance | null {
	if (path.length === 0) return null;

	let currentNodes = rootNodes;
	let subsystem: NodeInstance | null = null;

	for (let i = 0; i < path.length; i++) {
		const node = currentNodes.get(path[i]);
		if (!node || node.type !== NODE_TYPES.SUBSYSTEM) return null;
		subsystem = node;
		if (i < path.length - 1 && node.graph) {
			currentNodes = new Map(node.graph.nodes.map((n) => [n.id, n]));
		}
	}

	return subsystem;
}

/**
 * Collect all nodes recursively from a subsystem hierarchy
 */
export function collectAllNodes(nodes: NodeInstance[]): NodeInstance[] {
	const result: NodeInstance[] = [];

	function collect(nodeList: NodeInstance[]) {
		for (const node of nodeList) {
			result.push(node);
			if (node.type === NODE_TYPES.SUBSYSTEM && node.graph) {
				collect(node.graph.nodes);
			}
		}
	}

	collect(nodes);
	return result;
}

/**
 * Collect all connections recursively, including those in subsystems
 */
export function collectAllConnections(
	rootConnections: Connection[],
	rootNodes: NodeInstance[]
): { connection: Connection; subsystemId?: string }[] {
	const result: { connection: Connection; subsystemId?: string }[] = [];

	// Add root connections
	for (const conn of rootConnections) {
		result.push({ connection: conn });
	}

	// Recursively collect from subsystems
	function collectFromNodes(nodes: NodeInstance[], parentPath: string[]) {
		for (const node of nodes) {
			if (node.type === NODE_TYPES.SUBSYSTEM && node.graph) {
				for (const conn of node.graph.connections) {
					result.push({ connection: conn, subsystemId: node.id });
				}
				collectFromNodes(node.graph.nodes, [...parentPath, node.id]);
			}
		}
	}

	collectFromNodes(rootNodes, []);
	return result;
}

/**
 * Check if a node is of type Subsystem
 */
export function isSubsystemNode(node: NodeInstance): boolean {
	return node.type === NODE_TYPES.SUBSYSTEM;
}

/**
 * Check if a node is of type Interface
 */
export function isInterfaceNode(node: NodeInstance): boolean {
	return node.type === NODE_TYPES.INTERFACE;
}

/**
 * Find the parent Subsystem that contains a given Interface node
 */
export function findParentSubsystem(nodes: NodeInstance[], interfaceId: string): NodeInstance | null {
	for (const node of nodes) {
		if (node.type === NODE_TYPES.SUBSYSTEM && node.graph) {
			// Check if this subsystem contains the interface
			const hasInterface = node.graph.nodes.some(n => n.id === interfaceId);
			if (hasInterface) {
				return node;
			}
			// Recursively check nested subsystems
			const found = findParentSubsystem(node.graph.nodes, interfaceId);
			if (found) return found;
		}
	}
	return null;
}

/**
 * Clone a node for paste/import operations
 * Creates a new node with regenerated IDs at the given position
 * Used by clipboard paste and file import to avoid ID conflicts
 *
 * @param node - The node to clone
 * @param position - Absolute position for the new node
 * @param newId - Optional ID to use (if not provided, generates one)
 * @returns New node with fresh IDs
 */
export function cloneNodeForPaste(
	node: NodeInstance,
	position: { x: number; y: number },
	newId?: string
): NodeInstance {
	const id = newId ?? generateId();

	const newNode: NodeInstance = {
		...node,
		id,
		position: { ...position },
		inputs: node.inputs.map((port, index) => ({
			...port,
			id: `${id}-input-${index}`,
			nodeId: id
		})),
		outputs: node.outputs.map((port, index) => ({
			...port,
			id: `${id}-output-${index}`,
			nodeId: id
		}))
	};

	// Recursively regenerate IDs in subsystem graphs
	if (newNode.graph) {
		newNode.graph = regenerateGraphIds(newNode.graph);
	}

	return newNode;
}

/**
 * Recursively regenerate all IDs in a subsystem graph
 * Handles nested subsystems at any depth
 */
export function regenerateGraphIds(graph: SubsystemGraph): SubsystemGraph {
	const idMap = new Map<string, string>();

	// First pass: generate new IDs for all nodes
	const newNodes = graph.nodes.map(node => {
		const newId = generateId();
		idMap.set(node.id, newId);

		const newNode: NodeInstance = {
			...node,
			id: newId,
			inputs: node.inputs.map((p, i) => ({ ...p, id: `${newId}-input-${i}`, nodeId: newId })),
			outputs: node.outputs.map((p, i) => ({ ...p, id: `${newId}-output-${i}`, nodeId: newId }))
		};

		// Recursively handle nested subsystems
		if (newNode.graph) {
			newNode.graph = regenerateGraphIds(newNode.graph);
		}

		return newNode;
	});

	// Remap connections
	const newConnections = graph.connections.map(c => ({
		...c,
		id: generateId(),
		sourceNodeId: idMap.get(c.sourceNodeId) || c.sourceNodeId,
		targetNodeId: idMap.get(c.targetNodeId) || c.targetNodeId
	}));

	// Regenerate event IDs
	const newEvents = graph.events?.map(e => ({
		...e,
		id: generateId()
	}));

	// Regenerate annotation IDs
	const newAnnotations = graph.annotations?.map(a => ({
		...a,
		id: generateId()
	}));

	return {
		nodes: newNodes,
		connections: newConnections,
		events: newEvents,
		annotations: newAnnotations
	};
}
