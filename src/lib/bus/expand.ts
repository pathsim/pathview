/**
 * Buses - virtual Bus Creator and Bus Selector blocks
 *
 * A Bus Creator bundles its input signals into one bus signal, a Bus Selector
 * picks signals out of a bus by name. Both exist only in the editor. Before code
 * generation the model is rewritten without them: every picked signal is wired
 * directly from its source, and a subsystem port carrying a bus becomes one port
 * index per signal in the bus. Subsystem and Interface have no fixed port count
 * in pathsim, so only the port indices of connections change.
 *
 * pathview/converter.py implements the same rules; tests/fixtures/bus_expansion.json
 * keeps both implementations in agreement.
 */

import type { BusElement, BusStructure, Connection, NodeInstance } from '$lib/types/nodes';
import { NODE_TYPES } from '$lib/constants/nodeTypes';

/** One graph level: the root graph or the graph inside a subsystem */
export interface BusLevel {
	id: number;
	nodeList: NodeInstance[];
	nodes: Map<string, NodeInstance>;
	connections: Connection[];
	/** Connection into each input, keyed by "nodeId:port" */
	incoming: Map<string, Connection>;
	/** Subsystem owning this level and the level the subsystem sits in */
	parent: { level: BusLevel; subsystem: NodeInstance } | null;
	/** Levels inside the subsystems of this level, by subsystem ID */
	children: Map<string, BusLevel>;
}

type Endpoint = { nodeId: string; port: number } | null;

/** Separator of the names in a signal path such as "inner.b" */
export const SIGNAL_SEPARATOR = '.';
const SEPARATOR = SIGNAL_SEPARATOR;

/** Subsystem IDs from the root down to a level */
export function levelPath(level: BusLevel): string[] {
	return level.parent ? [...levelPath(level.parent.level), level.parent.subsystem.id] : [];
}

export function isBusBlock(node: NodeInstance): boolean {
	return node.type === NODE_TYPES.BUS_CREATOR || node.type === NODE_TYPES.BUS_SELECTOR;
}

/** Signal paths a Bus Selector picks, one per output */
export function selectedSignals(node: NodeInstance): string[] {
	const value = node.params?.signals;
	return Array.isArray(value) ? value.map(String) : [];
}

/** Leaf signal paths of a structure; a plain signal has the single empty path */
export function signalLeaves(structure: BusStructure): string[] {
	if (!structure) return [''];
	return structure.flatMap((element) =>
		signalLeaves(element.structure).map((path) => (path ? `${element.name}${SEPARATOR}${path}` : element.name))
	);
}

/** Every signal path in a bus with its nesting depth; sub-buses come before their elements */
export function signalPaths(structure: BusStructure): { path: string; depth: number; isBus: boolean }[] {
	const paths: { path: string; depth: number; isBus: boolean }[] = [];
	const walk = (elements: BusElement[], prefix: string, depth: number) => {
		for (const element of elements) {
			const path = prefix ? `${prefix}${SEPARATOR}${element.name}` : element.name;
			paths.push({ path, depth, isBus: element.structure !== null });
			if (element.structure) walk(element.structure, path, depth + 1);
		}
	};
	if (structure) walk(structure, '', 0);
	return paths;
}

/** Element at a dotted signal path */
export function elementAt(structure: BusStructure, path: string): BusElement | undefined {
	let current: BusElement | undefined;
	let elements = structure;
	for (const name of path.split(SEPARATOR)) {
		current = elements?.find((e) => e.name === name);
		if (!current) return undefined;
		elements = current.structure;
	}
	return current;
}

export function containsBusBlocks(nodes: NodeInstance[]): boolean {
	return nodes.some((n) => isBusBlock(n) || (n.graph ? containsBusBlocks(n.graph.nodes) : false));
}

/**
 * Signal structures of a whole model. Structures follow wires through Bus
 * Creators, Bus Selectors and subsystem boundaries in both directions.
 */
export function analyzeBuses(nodes: NodeInstance[], connections: Connection[]) {
	let nextLevelId = 0;

	function buildLevel(nodeList: NodeInstance[], levelConnections: Connection[], parent: BusLevel['parent']): BusLevel {
		const level: BusLevel = {
			id: nextLevelId++,
			nodeList,
			nodes: new Map(nodeList.map((n) => [n.id, n])),
			connections: levelConnections,
			incoming: new Map(levelConnections.map((c) => [`${c.targetNodeId}:${c.targetPortIndex}`, c])),
			parent,
			children: new Map()
		};
		for (const node of nodeList) {
			if (node.type === NODE_TYPES.SUBSYSTEM && node.graph) {
				level.children.set(node.id, buildLevel(node.graph.nodes, node.graph.connections, { level, subsystem: node }));
			}
		}
		return level;
	}

	const root = buildLevel(nodes, connections, null);
	const memo = new Map<string, BusStructure>();
	const visiting = new Set<string>();

	const interfaceOf = (level: BusLevel) => level.nodeList.find((n) => n.type === NODE_TYPES.INTERFACE);

	/** Name of the port a connection comes from; Interface outputs take the owning subsystem's input names */
	function sourcePortName(level: BusLevel, connection: Connection): string | undefined {
		const source = level.nodes.get(connection.sourceNodeId);
		if (source?.type === NODE_TYPES.INTERFACE && level.parent) {
			return level.parent.subsystem.inputs[connection.sourcePortIndex]?.name;
		}
		return source?.outputs[connection.sourcePortIndex]?.name;
	}

	/** Element names of a Bus Creator: wire label, else source port name, else its own input name; unique */
	function elementNames(level: BusLevel, creator: NodeInstance): string[] {
		const used = new Set<string>();
		return creator.inputs.map((input, i) => {
			const connection = level.incoming.get(`${creator.id}:${i}`);
			const raw =
				connection?.label?.trim() || (connection && sourcePortName(level, connection)) || input.name || `signal ${i}`;
			const base = raw.split(SEPARATOR).join('_');
			let name = base;
			for (let n = 2; used.has(name); n++) name = `${base}_${n}`;
			used.add(name);
			return name;
		});
	}

	function structureIn(level: BusLevel, nodeId: string, port: number): BusStructure {
		const connection = level.incoming.get(`${nodeId}:${port}`);
		return connection ? structureOut(level, connection.sourceNodeId, connection.sourcePortIndex) : null;
	}

	function structureOut(level: BusLevel, nodeId: string, port: number): BusStructure {
		const key = `${level.id}:${nodeId}:${port}`;
		if (memo.has(key)) return memo.get(key)!;
		// A wire loop through bus blocks has no defined structure
		if (visiting.has(key)) return null;
		visiting.add(key);
		const structure = computeOut(level, nodeId, port);
		visiting.delete(key);
		memo.set(key, structure);
		return structure;
	}

	function computeOut(level: BusLevel, nodeId: string, port: number): BusStructure {
		const node = level.nodes.get(nodeId);
		if (!node) return null;
		switch (node.type) {
			case NODE_TYPES.BUS_CREATOR:
				return elementNames(level, node).map((name, i) => ({
					name,
					structure: structureIn(level, node.id, i),
					origin: { creatorId: node.id, input: i }
				}));
			case NODE_TYPES.BUS_SELECTOR: {
				const path = selectedSignals(node)[port];
				return path ? (elementAt(structureIn(level, node.id, 0), path)?.structure ?? null) : null;
			}
			case NODE_TYPES.SUBSYSTEM: {
				const inner = level.children.get(node.id);
				const iface = inner && interfaceOf(inner);
				return inner && iface ? structureIn(inner, iface.id, port) : null;
			}
			case NODE_TYPES.INTERFACE:
				return level.parent ? structureIn(level.parent.level, level.parent.subsystem.id, port) : null;
			default:
				return null;
		}
	}

	/** Level at a subsystem path from the root, by subsystem IDs */
	function levelAt(path: string[]): BusLevel | null {
		let level: BusLevel | undefined = root;
		for (const id of path) {
			level = level?.children.get(id);
			if (!level) return null;
		}
		return level;
	}

	return { root, levelAt, structureIn, structureOut, elementNames };
}

export type BusAnalysis = ReturnType<typeof analyzeBuses>;

/** Why a wire breaks the bus rules */
export type BusWiringProblem = 'bus-into-block' | 'signal-into-selector';

/**
 * A bus may only enter a Bus Creator, a Bus Selector or a subsystem port, and a
 * Bus Selector only takes a bus. Returns the rule a wire from the source port to
 * the target node breaks, or null if it keeps them.
 */
export function busWiringProblem(
	analysis: BusAnalysis,
	level: BusLevel,
	sourceNodeId: string,
	sourcePort: number,
	targetNodeId: string
): BusWiringProblem | null {
	const target = level.nodes.get(targetNodeId);
	if (!target) return null;
	const carriesBus = analysis.structureOut(level, sourceNodeId, sourcePort) !== null;
	switch (target.type) {
		case NODE_TYPES.BUS_CREATOR:
		case NODE_TYPES.SUBSYSTEM:
		case NODE_TYPES.INTERFACE:
			return null;
		case NODE_TYPES.BUS_SELECTOR:
			return carriesBus ? null : 'signal-into-selector';
		default:
			return carriesBus ? 'bus-into-block' : null;
	}
}

/**
 * The model without bus blocks, for code generation. Models without bus blocks
 * are returned unchanged. Connections that carry several signals are split,
 * with IDs suffixed by the signal index. Wiring that cannot be resolved, such
 * as a bus into a plain block or a signal missing from a bus, is left out.
 */
export function expandBuses(
	nodes: NodeInstance[],
	connections: Connection[]
): { nodes: NodeInstance[]; connections: Connection[] } {
	if (!containsBusBlocks(nodes)) return { nodes, connections };

	const { root, structureIn, structureOut } = analyzeBuses(nodes, connections);
	const count = (structure: BusStructure) => signalLeaves(structure).length;
	const range = (nodeId: string, offset: number, length: number): Endpoint[] =>
		Array.from({ length }, (_, j) => ({ nodeId, port: offset + j }));

	/** First expanded port index of each port of a subsystem */
	const offsetMemo = new Map<string, number[]>();
	function offsets(level: BusLevel, subsystem: NodeInstance, direction: 'in' | 'out'): number[] {
		const key = `${level.id}:${subsystem.id}:${direction}`;
		const known = offsetMemo.get(key);
		if (known) return known;
		const ports = direction === 'in' ? subsystem.inputs.length : subsystem.outputs.length;
		const result: number[] = [];
		let sum = 0;
		for (let i = 0; i < ports; i++) {
			result.push(sum);
			sum += count(direction === 'in' ? structureIn(level, subsystem.id, i) : structureOut(level, subsystem.id, i));
		}
		offsetMemo.set(key, result);
		return result;
	}

	const resolving = new Set<string>();

	function resolveIn(level: BusLevel, nodeId: string, port: number): Endpoint[] {
		const connection = level.incoming.get(`${nodeId}:${port}`);
		return connection ? resolveOut(level, connection.sourceNodeId, connection.sourcePortIndex) : [null];
	}

	/** Real source of every signal leaving an output, in leaf order */
	function resolveOut(level: BusLevel, nodeId: string, port: number): Endpoint[] {
		const key = `${level.id}:${nodeId}:${port}`;
		if (resolving.has(key)) return [null];
		resolving.add(key);
		const endpoints = computeResolveOut(level, nodeId, port);
		resolving.delete(key);
		return endpoints;
	}

	function computeResolveOut(level: BusLevel, nodeId: string, port: number): Endpoint[] {
		const node = level.nodes.get(nodeId);
		if (!node) return [null];
		switch (node.type) {
			case NODE_TYPES.BUS_CREATOR:
				return node.inputs.flatMap((_, i) => resolveIn(level, node.id, i));
			case NODE_TYPES.BUS_SELECTOR: {
				const path = selectedSignals(node)[port];
				const all = resolveIn(level, node.id, 0);
				const leaves = signalLeaves(structureIn(level, node.id, 0));
				const picked = path
					? leaves.flatMap((leaf, i) => (leaf === path || leaf.startsWith(path + SEPARATOR) ? [all[i] ?? null] : []))
					: [];
				return picked.length > 0 ? picked : [null];
			}
			case NODE_TYPES.SUBSYSTEM:
				return range(node.id, offsets(level, node, 'out')[port] ?? port, count(structureOut(level, node.id, port)));
			case NODE_TYPES.INTERFACE: {
				if (!level.parent) return [{ nodeId, port }];
				const { level: outer, subsystem } = level.parent;
				return range(node.id, offsets(outer, subsystem, 'in')[port] ?? port, count(structureIn(outer, subsystem.id, port)));
			}
			default:
				return [{ nodeId, port }];
		}
	}

	/** Expanded input slots a connection into a port lands on; bus blocks take none */
	function inputSlots(level: BusLevel, node: NodeInstance, port: number): Endpoint[] {
		switch (node.type) {
			case NODE_TYPES.BUS_CREATOR:
			case NODE_TYPES.BUS_SELECTOR:
				return [];
			case NODE_TYPES.SUBSYSTEM:
				return range(node.id, offsets(level, node, 'in')[port] ?? port, count(structureIn(level, node.id, port)));
			case NODE_TYPES.INTERFACE: {
				if (!level.parent) return [{ nodeId: node.id, port }];
				const { level: outer, subsystem } = level.parent;
				return range(node.id, offsets(outer, subsystem, 'out')[port] ?? port, count(structureOut(outer, subsystem.id, port)));
			}
			default:
				return [{ nodeId: node.id, port }];
		}
	}

	function expandLevel(level: BusLevel): { nodes: NodeInstance[]; connections: Connection[] } {
		const expandedNodes: NodeInstance[] = [];
		for (const node of level.nodeList) {
			if (isBusBlock(node)) continue;
			const inner = level.children.get(node.id);
			if (inner && node.graph) {
				const expanded = expandLevel(inner);
				expandedNodes.push({ ...node, graph: { ...node.graph, nodes: expanded.nodes, connections: expanded.connections } });
			} else {
				expandedNodes.push(node);
			}
		}

		const expandedConnections: Connection[] = [];
		for (const connection of level.connections) {
			const target = level.nodes.get(connection.targetNodeId);
			if (!target || !level.nodes.has(connection.sourceNodeId)) {
				expandedConnections.push(connection);
				continue;
			}
			const targets = inputSlots(level, target, connection.targetPortIndex);
			if (targets.length === 0) continue;
			const sources = resolveOut(level, connection.sourceNodeId, connection.sourcePortIndex);
			if (sources.length !== targets.length) continue;
			sources.forEach((source, i) => {
				const slot = targets[i];
				if (!source || !slot) return;
				expandedConnections.push({
					...connection,
					id: sources.length === 1 ? connection.id : `${connection.id}${SEPARATOR}${i}`,
					sourceNodeId: source.nodeId,
					sourcePortIndex: source.port,
					targetNodeId: slot.nodeId,
					targetPortIndex: slot.port
				});
			});
		}
		return { nodes: expandedNodes, connections: expandedConnections };
	}

	return expandLevel(root);
}
