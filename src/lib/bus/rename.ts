/**
 * Bus signal renames - Bus Selector outputs that pick a signal named at a Bus
 * Creator input, found through nested buses and subsystems, and their picked
 * signal paths after the rename
 */

import type { BusStructure, Connection, NodeInstance } from '$lib/types/nodes';
import { NODE_TYPES } from '$lib/constants/nodeTypes';
import { analyzeBuses, levelPath, selectedSignals, SIGNAL_SEPARATOR, type BusLevel } from './expand';

/** A Bus Creator input, located by the subsystem path of its level */
export interface CreatorInput {
	path: string[];
	creatorId: string;
	input: number;
}

/** A Bus Selector output picking a signal that runs through a creator input */
export interface SelectorUse {
	path: string[];
	selectorId: string;
	output: number;
	signal: string;
	/** Index of the name in the signal path that the creator input names */
	segment: number;
}

function* levels(level: BusLevel): Generator<BusLevel> {
	yield level;
	for (const child of level.children.values()) yield* levels(child);
}

/** Index of the path name bundled at the creator input, or -1 if the path does not run through it */
function segmentThrough(structure: BusStructure, signal: string, source: CreatorInput): number {
	let elements = structure;
	const names = signal.split(SIGNAL_SEPARATOR);
	for (let i = 0; i < names.length; i++) {
		const element = elements?.find((e) => e.name === names[i]);
		if (!element) return -1;
		if (element.origin?.creatorId === source.creatorId && element.origin.input === source.input) return i;
		elements = element.structure;
	}
	return -1;
}

/** Selector outputs anywhere in the model whose picked signal runs through the creator input */
export function selectorUses(nodes: NodeInstance[], connections: Connection[], source: CreatorInput): SelectorUse[] {
	const analysis = analyzeBuses(nodes, connections);
	const uses: SelectorUse[] = [];
	for (const level of levels(analysis.root)) {
		for (const node of level.nodeList) {
			if (node.type !== NODE_TYPES.BUS_SELECTOR) continue;
			const structure = analysis.structureIn(level, node.id, 0);
			selectedSignals(node).forEach((signal, output) => {
				const segment = segmentThrough(structure, signal, source);
				if (segment >= 0) uses.push({ path: levelPath(level), selectorId: node.id, output, signal, segment });
			});
		}
	}
	return uses;
}

/**
 * The uses with their signal paths following the renamed creator input.
 * `nodes` and `connections` are the model after the rename.
 */
export function renamedSignals(
	nodes: NodeInstance[],
	connections: Connection[],
	source: CreatorInput,
	uses: SelectorUse[]
): SelectorUse[] {
	const analysis = analyzeBuses(nodes, connections);
	const level = analysis.levelAt(source.path);
	const creator = level?.nodes.get(source.creatorId);
	if (!level || !creator) return [];
	const name = analysis.elementNames(level, creator)[source.input];
	return uses.map((use) => {
		const names = use.signal.split(SIGNAL_SEPARATOR);
		names[use.segment] = name;
		return { ...use, signal: names.join(SIGNAL_SEPARATOR) };
	});
}
