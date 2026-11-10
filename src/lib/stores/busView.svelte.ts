/**
 * Bus view - bus facts of the current graph level, for rendering
 *
 * Computed centrally whenever the canvas rebuilds its edges, so a wire or bus
 * block only re-renders when its own entry changes. Bus structure follows wires
 * across all levels, so the whole model is analyzed.
 */

import { SvelteMap, SvelteSet } from 'svelte/reactivity';
import type { Connection, NodeInstance } from '$lib/nodes/types';
import { NODE_TYPES } from '$lib/constants/nodeTypes';
import {
	analyzeBuses,
	busWiringProblem,
	containsBuses,
	signalPaths,
	type BusAnalysis,
	type BusLevel
} from '$lib/bus/expand';

/** Wires carrying a bus */
export const busWires = new SvelteSet<string>();

/** Wires breaking the bus rules, see `busWiringProblem` */
export const invalidBusWires = new SvelteSet<string>();

/** Analysis of the model at the last update, reused to judge wires while connecting */
let current: { analysis: BusAnalysis; level: BusLevel } | null = null;

/** Whether a new wire from the source port to the target port keeps the bus rules */
export function busWireAllowed(sourceNodeId: string, sourcePort: number, targetNodeId: string, targetPort: number): boolean {
	return (
		!current ||
		busWiringProblem(current.analysis, current.level, sourceNodeId, sourcePort, targetNodeId, targetPort) === null
	);
}

/** Bus Creator ID to the signal name of each of its inputs */
export const busCreatorSignals = new SvelteMap<string, string[]>();

/** Node ID to the indices of its ports that carry a bus; absent when none does */
export const busPorts = new SvelteMap<string, { inputs: number[]; outputs: number[] }>();

/** Bus Selector ID to the signal paths on the bus at its input */
export const busSelectorOptions = new SvelteMap<string, string[]>();

/** Wires into a Bus Creator: their label is the signal name and shows at the creator port instead */
export const busCreatorWires = new SvelteSet<string>();

function sync<T>(target: SvelteMap<string, T>, next: Map<string, T>, same: (a: T, b: T) => boolean): void {
	for (const key of [...target.keys()]) {
		if (!next.has(key)) target.delete(key);
	}
	for (const [key, value] of next) {
		const current = target.get(key);
		if (current === undefined || !same(current, value)) target.set(key, value);
	}
}

function syncSet(target: SvelteSet<string>, next: Set<string>): void {
	for (const key of [...target]) {
		if (!next.has(key)) target.delete(key);
	}
	for (const key of next) target.add(key);
}

const sameNames = (a: string[], b: string[]) => a.length === b.length && a.every((name, i) => name === b[i]);
const sameIndices = (a: number[], b: number[]) => a.length === b.length && a.every((index, i) => index === b[i]);

/**
 * Recompute the bus view for the connections of the graph level at `path`
 * @param model - Root nodes and connections of the whole model
 */
export function updateBusView(
	model: { nodes: NodeInstance[]; connections: Connection[] },
	path: string[],
	connections: Connection[]
): void {
	const wires = new Set<string>();
	const creators = new Map<string, string[]>();
	const ports = new Map<string, { inputs: number[]; outputs: number[] }>();
	const selectorOptions = new Map<string, string[]>();
	const creatorWires = new Set<string>();
	const invalidWires = new Set<string>();
	current = null;

	if (containsBuses(model.nodes)) {
		const analysis = analyzeBuses(model.nodes, model.connections);
		const level = analysis.levelAt(path);
		if (level) {
			current = { analysis, level };
			for (const connection of connections) {
				const { sourceNodeId, sourcePortIndex, targetNodeId, targetPortIndex } = connection;
				if (busWiringProblem(analysis, level, sourceNodeId, sourcePortIndex, targetNodeId, targetPortIndex)) {
					invalidWires.add(connection.id);
				}
				if (analysis.structureOut(level, connection.sourceNodeId, connection.sourcePortIndex)) wires.add(connection.id);
				if (level.nodes.get(connection.targetNodeId)?.type === NODE_TYPES.BUS_CREATOR) creatorWires.add(connection.id);
			}
			for (const node of level.nodeList) {
				if (node.type === NODE_TYPES.BUS_CREATOR) creators.set(node.id, analysis.elementNames(level, node));
				if (node.type === NODE_TYPES.BUS_SELECTOR) {
					selectorOptions.set(node.id, signalPaths(analysis.structureIn(level, node.id, 0)).map((p) => p.path));
				}
				const inputs = node.inputs.flatMap((_, i) => (analysis.structureIn(level, node.id, i) ? [i] : []));
				const outputs = node.outputs.flatMap((_, i) => (analysis.structureOut(level, node.id, i) ? [i] : []));
				if (inputs.length > 0 || outputs.length > 0) ports.set(node.id, { inputs, outputs });
			}
		}
	}

	syncSet(busWires, wires);
	syncSet(invalidBusWires, invalidWires);
	sync(busCreatorSignals, creators, sameNames);
	sync(busPorts, ports, (a, b) => sameIndices(a.inputs, b.inputs) && sameIndices(a.outputs, b.outputs));
	sync(busSelectorOptions, selectorOptions, sameNames);
	syncSet(busCreatorWires, creatorWires);
}
