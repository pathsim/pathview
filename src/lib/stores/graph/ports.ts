/**
 * Graph store - Port management operations
 */

import { get } from 'svelte/store';
import type { NodeInstance, PortInstance, Connection } from '$lib/nodes/types';
import { nodeRegistry } from '$lib/nodes/registry';
import { getPortLabelConfigs } from '$lib/nodes/uiConfig';
import { NODE_TYPES } from '$lib/constants/nodeTypes';
import { PORT_COLORS } from '$lib/utils/colors';
import { PORT_NAME, HANDLE_ID } from '$lib/constants/handles';
import {
	rootNodes,
	currentPath,
	getCurrentGraph,
	updateSubsystemGraph,
	updateNodeById,
	updateCurrentNodesAndConnections,
	graphAt,
	updateNodesAndConnectionsAt
} from './state';
import { queueRemoveConnection } from '$lib/pyodide/mutationQueue';
import type { IntrospectedPorts } from '$lib/toolbox/installer';
import { createPorts } from './helpers';

type PortDirection = 'input' | 'output';

/**
 * Get port configuration based on direction
 */
function getPortConfig(direction: PortDirection) {
	return {
		portsKey: direction === 'input' ? 'inputs' : 'outputs',
		oppositeKey: direction === 'input' ? 'outputs' : 'inputs',
		minKey: direction === 'input' ? 'minInputs' : 'minOutputs',
		policyKey: direction === 'input' ? 'inputPolicy' : 'outputPolicy',
		connectionKey: direction === 'input' ? 'targetNodeId' : 'sourceNodeId',
		connectionIndexKey: direction === 'input' ? 'targetPortIndex' : 'sourcePortIndex',
		defaultName: direction === 'input' ? 'in' : 'out'
	} as const;
}

/**
 * Update parent subsystem when modifying Interface node ports
 * For Interface: input ↔ output mapping is inverted
 */
function updateParentSubsystem(
	parentPath: string[],
	parentId: string,
	updater: (parent: NodeInstance) => NodeInstance
): void {
	const updateParentNodes = (nodes: Map<string, NodeInstance>) => {
		const parent = nodes.get(parentId);
		if (!parent) return nodes;

		const newMap = new Map(nodes);
		newMap.set(parentId, updater(parent));
		return newMap;
	};

	if (parentPath.length === 0) {
		rootNodes.update(updateParentNodes);
	} else {
		updateSubsystemGraph(parentPath, graph => ({
			...graph,
			nodes: Array.from(
				updateParentNodes(new Map(graph.nodes.map(n => [n.id, n]))).values()
			)
		}));
	}
}

/**
 * Internal: Add a port to a node
 * @param syncFollowUp - If true, this is a follow-up call from syncPorts logic (prevents recursion)
 */
function addPort(nodeId: string, direction: PortDirection, syncFollowUp = false): boolean {
	const currentGraph = getCurrentGraph();
	const node = currentGraph.nodes.get(nodeId);
	if (!node) return false;

	const config = getPortConfig(direction);
	const path = get(currentPath);

	// Interface node: add port to parent Subsystem instead (inverted direction)
	if (node.type === NODE_TYPES.INTERFACE && path.length > 0) {
		const parentId = path[path.length - 1];
		const parentPath = path.slice(0, -1);

		// Interface input → parent output, Interface output → parent input
		const parentPortsKey = config.oppositeKey;
		const parentDirection = direction === 'input' ? 'output' : 'input';

		updateParentSubsystem(parentPath, parentId, parent => {
			const ports = parent[parentPortsKey] as PortInstance[];
			const index = ports.length;
			return {
				...parent,
				[parentPortsKey]: [
					...ports,
					{
						id: HANDLE_ID[parentDirection](parentId, index),
						nodeId: parentId,
						name: PORT_NAME[parentDirection](index),
						direction: parentDirection,
						index,
						color: PORT_COLORS.default
					} as PortInstance
				]
			};
		});
		return true;
	}

	// Normal node: only variable ports are added by the user
	const typeDef = nodeRegistry.get(node.type);
	if (typeDef && typeDef.ports[config.policyKey] !== 'variable') return false;
	const currentPorts = node[config.portsKey] as PortInstance[];

	// Create new port
	const index = currentPorts.length;
	const portDef = typeDef?.ports[config.portsKey]?.[index];
	const newPort: PortInstance = {
		id: HANDLE_ID[direction](nodeId, index),
		nodeId,
		name: portDef?.name || PORT_NAME[direction](index),
		direction,
		index,
		color: portDef?.color || PORT_COLORS.default
	};

	updateNodeById(nodeId, n => ({
		...n,
		[config.portsKey]: [...(n[config.portsKey] as PortInstance[]), newPort]
	}));

	// Sync outputs to match inputs for parallel-path blocks
	if (!syncFollowUp && direction === 'input' && typeDef?.ports.syncPorts) {
		addPort(nodeId, 'output', true);
	}

	return true;
}

/**
 * Internal: Remove the last port from a node
 * @param syncFollowUp - If true, this is a follow-up call from syncPorts logic (prevents recursion)
 */
function removePort(nodeId: string, direction: PortDirection, syncFollowUp = false): boolean {
	const currentGraph = getCurrentGraph();
	const node = currentGraph.nodes.get(nodeId);
	if (!node) return false;

	const config = getPortConfig(direction);
	const typeDef = nodeRegistry.get(node.type);
	const minPorts = typeDef?.ports[config.minKey] ?? 1;
	const currentPorts = node[config.portsKey] as PortInstance[];

	if (currentPorts.length <= minPorts) return false;

	const path = get(currentPath);

	// Interface node: also remove port from parent Subsystem (inverted direction)
	if (node.type === NODE_TYPES.INTERFACE && path.length > 0) {
		const parentId = path[path.length - 1];
		const parentPath = path.slice(0, -1);
		const parentPortsKey = config.oppositeKey;

		updateParentSubsystem(parentPath, parentId, parent => {
			const ports = parent[parentPortsKey] as PortInstance[];
			if (ports.length === 0) return parent;
			return {
				...parent,
				[parentPortsKey]: ports.slice(0, -1)
			};
		});
		// Fall through to also update the Interface node itself
	}

	// Remove port and affected connections
	const removedIndex = currentPorts.length - 1;

	// Queue removal of connections affected by port removal
	const graph = getCurrentGraph();
	for (const c of graph.connections) {
		const isAffected = config.connectionKey === 'targetNodeId'
			? c.targetNodeId === nodeId && c.targetPortIndex >= removedIndex
			: c.sourceNodeId === nodeId && c.sourcePortIndex >= removedIndex;
		if (isAffected) {
			queueRemoveConnection(c.id);
		}
	}

	updateCurrentNodesAndConnections(
		// Map updater for nodes (root)
		nodes => {
			const n = nodes.get(nodeId);
			if (!n) return nodes;
			const newMap = new Map(nodes);
			newMap.set(nodeId, {
				...n,
				[config.portsKey]: (n[config.portsKey] as PortInstance[]).slice(0, -1)
			});
			return newMap;
		},
		// Array updater for nodes (subsystem)
		nodes => nodes.map(n =>
			n.id === nodeId
				? { ...n, [config.portsKey]: (n[config.portsKey] as PortInstance[]).slice(0, -1) }
				: n
		),
		// Connection updater - remove connections to/from the removed port
		conns => conns.filter(c => {
			const connNodeId = c[config.connectionKey];
			const connIndex = c[config.connectionIndexKey];
			return !(connNodeId === nodeId && connIndex >= removedIndex);
		})
	);

	// Sync outputs to match inputs for parallel-path blocks
	if (!syncFollowUp && direction === 'input' && typeDef?.ports.syncPorts) {
		removePort(nodeId, 'output', true);
	}

	return true;
}

/**
 * Set the derived ports of a node (see the 'derived' port policy) from the
 * ports its pathsim block reports. A port keeps the display name and color of
 * the port it had with the same key, or at the same index for a port saved
 * without key. Connections follow their port to its new index, connections to
 * ports the block no longer has are removed, also from a running simulation.
 *
 * @param path - Subsystem path of the level the node is at, it need not be shown
 */
export function setDerivedPorts(path: string[], nodeId: string, ports: IntrospectedPorts): void {
	const level = graphAt(path);
	const node = level.nodes.find((n) => n.id === nodeId);
	if (!node) return;

	/** Index of the old port among the new ports, null if it is gone */
	const matches = (old: PortInstance[], next: PortInstance[]) =>
		old.map((port, index) => {
			const i = port.key !== undefined ? next.findIndex((p) => p.key === port.key) : index < next.length ? index : -1;
			return i < 0 ? null : i;
		});

	const derive = (direction: PortDirection) => {
		const config = getPortConfig(direction);
		const labels = (direction === 'input' ? ports.inputs : ports.outputs) ?? [];
		const buses = (direction === 'input' ? ports.inputBuses : ports.outputBuses) ?? {};
		const old = node[config.portsKey] as PortInstance[];
		const next = createPorts(nodeId, direction, labels.map((label) => ({ name: label, key: label, bus: buses[label] })));
		const index = matches(old, next);
		index.forEach((i, j) => {
			if (i !== null) next[i] = { ...next[i], name: old[j].name, color: old[j].color };
		});
		return { ports: next, index };
	};
	const inputs = derive('input');
	const outputs = derive('output');

	/** A connection with the new port indices of the node, null if its port is gone */
	const follow = (c: Connection): Connection | null => {
		let result = c;
		if (c.sourceNodeId === nodeId) {
			const i = outputs.index[c.sourcePortIndex];
			if (i == null) return null;
			result = { ...result, sourcePortIndex: i };
		}
		if (c.targetNodeId === nodeId) {
			const i = inputs.index[c.targetPortIndex];
			if (i == null) return null;
			result = { ...result, targetPortIndex: i };
		}
		return result;
	};
	for (const c of level.connections) {
		if (follow(c) === null) queueRemoveConnection(c.id);
	}

	const update = (n: NodeInstance) => ({ ...n, inputs: inputs.ports, outputs: outputs.ports });
	updateNodesAndConnectionsAt(
		path,
		(nodes) => {
			const n = nodes.get(nodeId);
			return n ? new Map(nodes).set(nodeId, update(n)) : nodes;
		},
		(nodes) => nodes.map((n) => (n.id === nodeId ? update(n) : n)),
		(conns) => conns.map(follow).filter((c): c is Connection => c !== null)
	);
}

// ==================== PUBLIC API ====================

/**
 * Add an input port to a node
 * For Interface, adds an output to parent Subsystem
 */
export function addInputPort(nodeId: string): boolean {
	return addPort(nodeId, 'input');
}

/**
 * Add an output port to a node
 * For Interface, adds an input to parent Subsystem
 */
export function addOutputPort(nodeId: string): boolean {
	return addPort(nodeId, 'output');
}

/**
 * Remove the last input port from a node
 * For Interface, removes an output from parent Subsystem
 */
export function removeInputPort(nodeId: string): boolean {
	return removePort(nodeId, 'input');
}

/**
 * Remove the last output port from a node
 * For Interface, removes an input from parent Subsystem
 */
export function removeOutputPort(nodeId: string): boolean {
	return removePort(nodeId, 'output');
}

/**
 * Parse a Python list string into an array of strings
 * Handles: ["a", "b"], ['a', 'b'], None, empty string
 */
function parsePythonList(value: unknown): string[] | null {
	if (value === null || value === undefined || value === 'None' || value === '') {
		return null;
	}

	const str = String(value).trim();
	if (!str.startsWith('[') || !str.endsWith(']')) {
		return null;
	}

	try {
		// Replace Python single quotes with double quotes for JSON parsing
		const jsonStr = str.replace(/'/g, '"');
		const parsed = JSON.parse(jsonStr);
		if (Array.isArray(parsed) && parsed.every(item => typeof item === 'string')) {
			return parsed;
		}
	} catch {
		// Not valid JSON/Python list
	}

	return null;
}

/**
 * Pure helper: return a node with port names synced to its label-driven
 * params (Scope.labels, Adder.operations, …). Used by both the live
 * updateNodeParams path (via syncPortNamesFromLabels) and the model-load
 * path (which walks the loaded node tree and applies it recursively
 * before nodes hit the store). Returns the same node reference if no
 * changes were needed so callers can short-circuit.
 */
export function applyPortLabelSync(node: NodeInstance): NodeInstance {
	let result = node;
	for (const config of getPortLabelConfigs(node.type)) {
		const portsKey = config.direction === 'input' ? 'inputs' : 'outputs';
		const defaultName = config.direction === 'input' ? 'in' : 'out';
		const labels = (config.parser ?? parsePythonList)(result.params?.[config.param]);
		if (!labels) continue;

		const currentPorts = result[portsKey] as PortInstance[];
		const newPorts = currentPorts.map((port, index) => {
			const name = index < labels.length ? labels[index] : `${defaultName} ${index}`;
			return port.name === name ? port : { ...port, name };
		});
		const changed = newPorts.some((p, i) => p.name !== currentPorts[i].name);
		if (changed) {
			result = { ...result, [portsKey]: newPorts };
		}
	}
	return result;
}

/**
 * Sync port names from a labels parameter value (live path: writes back to
 * the store). Used by updateNodeParams when a label-driven param changes.
 */
export function syncPortNamesFromLabels(
	nodeId: string,
	_labelsValue: unknown,
	_direction: 'input' | 'output',
	_parser?: (value: unknown) => string[] | null
): void {
	const currentGraph = getCurrentGraph();
	const node = currentGraph.nodes.get(nodeId);
	if (!node) return;
	const updated = applyPortLabelSync(node);
	if (updated !== node) {
		updateNodeById(nodeId, () => updated);
	}
}

/**
 * Rename a single port. For regular nodes this writes the new name into
 * `node.{inputs|outputs}[index].name`. For Interface nodes, port names are
 * derived from the parent Subsystem at read time, so we write to the parent
 * instead (with the direction flipped, because Interface input ↔ Subsystem
 * output).
 */
export function updateNodePortName(
	nodeId: string,
	direction: PortDirection,
	index: number,
	name: string
): void {
	const currentGraph = getCurrentGraph();
	const node = currentGraph.nodes.get(nodeId);
	if (!node) return;

	const path = get(currentPath);

	if (node.type === NODE_TYPES.INTERFACE && path.length > 0) {
		const parentId = path[path.length - 1];
		const parentPath = path.slice(0, -1);
		const parentPortsKey = direction === 'input' ? 'outputs' : 'inputs';

		updateParentSubsystem(parentPath, parentId, (parent) => {
			const ports = parent[parentPortsKey] as PortInstance[];
			if (index < 0 || index >= ports.length) return parent;
			if (ports[index].name === name) return parent;
			const newPorts = ports.map((p, i) => (i === index ? { ...p, name } : p));
			return { ...parent, [parentPortsKey]: newPorts };
		});
		return;
	}

	updateNodeById(nodeId, (n) => {
		const portsKey = direction === 'input' ? 'inputs' : 'outputs';
		const ports = n[portsKey] as PortInstance[];
		if (index < 0 || index >= ports.length) return n;
		if (ports[index].name === name) return n;
		const newPorts = ports.map((p, i) => (i === index ? { ...p, name } : p));
		return { ...n, [portsKey]: newPorts };
	});
}
