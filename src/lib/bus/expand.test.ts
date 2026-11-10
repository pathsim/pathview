import { describe, expect, it } from 'vitest';
import type { BusStructure, Connection, NodeInstance } from '$lib/types/nodes';
import fixtures from '../../../tests/fixtures/bus_expansion.json';
import {
	analyzeBuses,
	busWiringProblem,
	expandBuses,
	isBusBlock,
	signalLeaves,
	type ExpandedConnection,
	type PortBus
} from './expand';

type Scenario = (typeof fixtures.scenarios)[number];
type Block = {
	inputs: string[];
	outputs: string[];
	inputBuses?: Record<string, BusStructure>;
	outputBuses?: Record<string, BusStructure>;
};

/** Carrier signals from the block types of the fixture, in the format of registry.json */
const blocks = fixtures.registry.blocks as Record<string, Block>;
const portBus: PortBus = (node, direction, index) => {
	const block = blocks[node.type];
	const name = block?.[direction === 'input' ? 'inputs' : 'outputs'][index];
	return (name !== undefined && block?.[direction === 'input' ? 'inputBuses' : 'outputBuses']?.[name]) || null;
};

const endpoint = (nodeId: string, port: number, channel?: number) =>
	channel === undefined ? `${nodeId}:${port}` : `${nodeId}:${port}[${channel}]`;
const wiring = (connections: ExpandedConnection[]) =>
	connections
		.map(
			(c) =>
				`${endpoint(c.sourceNodeId, c.sourcePortIndex, c.sourceChannel)}>${endpoint(c.targetNodeId, c.targetPortIndex, c.targetChannel)}`
		)
		.sort();

/** Wiring per level, keyed by subsystem ID path */
function levels(nodes: NodeInstance[], connections: ExpandedConnection[], path = ''): Record<string, string[]> {
	const result: Record<string, string[]> = { [path]: wiring(connections) };
	for (const node of nodes) {
		if (!node.graph) continue;
		Object.assign(result, levels(node.graph.nodes, node.graph.connections, path ? `${path}/${node.id}` : node.id));
	}
	return result;
}

function anyBusBlock(nodes: NodeInstance[]): boolean {
	return nodes.some((n) => isBusBlock(n) || (n.graph ? anyBusBlock(n.graph.nodes) : false));
}

function load(scenario: Scenario) {
	return {
		nodes: scenario.nodes as unknown as NodeInstance[],
		connections: scenario.connections as unknown as Connection[]
	};
}

describe('bus expansion', () => {
	for (const scenario of fixtures.scenarios) {
		it(scenario.name, () => {
			const { nodes, connections } = load(scenario);
			const expanded = expandBuses(nodes, connections, portBus);
			const expected = Object.fromEntries(
				Object.entries(scenario.expected as unknown as Record<string, string[]>).map(([key, value]) => [
					key,
					[...value].sort()
				])
			);
			expect(levels(expanded.nodes, expanded.connections)).toEqual(expected);
			expect(anyBusBlock(expanded.nodes)).toBe(false);
		});
	}

	it('returns a model without bus blocks as it is', () => {
		const { nodes, connections } = load(fixtures.scenarios.find((s) => s.name.includes('without buses'))!);
		const expanded = expandBuses(nodes, connections, portBus);
		expect(expanded.nodes).toBe(nodes);
		expect(expanded.connections).toBe(connections);
	});

	it('keeps buses out of plain blocks and plain signals out of selectors', () => {
		const { nodes, connections } = load(fixtures.scenarios.find((s) => s.name === 'flat creator and selector')!);
		const analysis = analyzeBuses(nodes, connections, portBus);
		const root = analysis.root;
		expect(busWiringProblem(analysis, root, 'C', 0, 'Scope', 0)).toBe('bus-into-block');
		expect(busWiringProblem(analysis, root, 'A', 0, 'S', 0)).toBe('signal-into-selector');
		expect(busWiringProblem(analysis, root, 'C', 0, 'S', 0)).toBeNull();
		expect(busWiringProblem(analysis, root, 'A', 0, 'C', 0)).toBeNull();
		expect(busWiringProblem(analysis, root, 'S', 0, 'Scope', 0)).toBeNull();
	});

	it('takes a bus into a carrier port only with the signals of the carrier', () => {
		const creator = load(fixtures.scenarios.find((s) => s.name === 'bus creator into a carrier port')!);
		const analysis = analyzeBuses(creator.nodes, creator.connections, portBus);
		const root = analysis.root;
		expect(busWiringProblem(analysis, root, 'Cr', 0, 'Tk', 0)).toBeNull();
		expect(busWiringProblem(analysis, root, 'A', 0, 'Tk', 0)).toBe('signal-into-carrier');
		expect(busWiringProblem(analysis, root, 'Cr', 0, 'Tk', 1)).toBe('bus-into-block');

		// a bus missing a signal of the carrier
		const partial = creator.connections.filter((c) => c.id !== 'c3');
		const reduced = analyzeBuses(creator.nodes, partial, portBus);
		expect(busWiringProblem(reduced, reduced.root, 'Cr', 0, 'Tk', 0)).toBe('bus-mismatch');

		// a carrier output is a bus
		const stream = load(fixtures.scenarios.find((s) => s.name === 'carrier into a bus selector')!);
		const streams = analyzeBuses(stream.nodes, stream.connections, portBus);
		expect(busWiringProblem(streams, streams.root, 'St', 0, 'S', 0)).toBeNull();
		expect(busWiringProblem(streams, streams.root, 'St', 0, 'Scope', 0)).toBe('bus-into-block');
	});

	it('applies the bus rules across subsystem ports', () => {
		const { nodes, connections } = load(fixtures.scenarios.find((s) => s.name === 'bus into a subsystem')!);
		const analysis = analyzeBuses(nodes, connections, portBus);
		const inner = analysis.levelAt(['Sub'])!;
		expect(busWiringProblem(analysis, analysis.root, 'C', 0, 'Sub', 0)).toBeNull();
		expect(busWiringProblem(analysis, inner, 'I', 0, 'G', 0)).toBe('bus-into-block');
		expect(busWiringProblem(analysis, inner, 'Sel', 0, 'G', 0)).toBeNull();
	});

	it('follows a bus structure into a subsystem', () => {
		const { nodes, connections } = load(fixtures.scenarios.find((s) => s.name === 'bus into a subsystem')!);
		const analysis = analyzeBuses(nodes, connections, portBus);
		const inner = analysis.levelAt(['Sub'])!;
		expect(signalLeaves(analysis.structureOut(inner, 'I', 0))).toEqual(['a', 'b']);
		expect(signalLeaves(analysis.structureIn(analysis.root, 'Scope', 0))).toEqual(['']);
	});
});
