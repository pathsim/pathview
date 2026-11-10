import { afterAll, describe, it, expect } from 'vitest';
import type { NodeInstance } from '$lib/nodes/types';
import { defineNode } from '$lib/nodes/defineNode';
import { nodeRegistry } from '$lib/nodes/registry';
import type { ExpandedConnection } from '$lib/bus/expand';
import { generateNamedConnections, portKey } from './codeBuilder';

const node = (id: string, type: string) => ({ id, type }) as NodeInstance;
const wire = (source: string, sourcePort: number, target: string, targetPort: number): ExpandedConnection => ({
	id: `${source}-${target}-${targetPort}`,
	sourceNodeId: source,
	sourcePortIndex: sourcePort,
	targetNodeId: target,
	targetPortIndex: targetPort
});
const signals = (...names: string[]) => names.map((name) => ({ name, structure: null }));

describe('port keys', () => {
	it('addresses labeled ports by label and variable ports by index', () => {
		expect(portKey('Atan2', 'input', 1)).toBe('b');
		expect(portKey('Atan2', 'output', 0)).toBe('y');
		expect(portKey('Scope', 'input', 2)).toBe(2);
		expect(portKey('Unknown', 'input', 0)).toBe(0);
	});

	it('generates connections with the port keys', () => {
		const nodes = [node('x', 'Constant'), node('a', 'Atan2'), node('s', 'Scope')];
		const vars = new Map([
			['x', 'x'],
			['a', 'angle'],
			['s', 'scope']
		]);
		const { lines } = generateNamedConnections([wire('x', 0, 'a', 1), wire('a', 0, 's', 0)], nodes, vars);
		expect(lines).toEqual(['conn_0 = Connection(x["out"], angle["b"])', 'conn_1 = Connection(angle["y"], scope[0])']);
	});
});

describe('carrier channels', () => {
	const SOURCE = 'codeBuilder.test';
	for (const [name, bus] of [
		['TestStream', signals('F', 'T', 'P')],
		['TestVector', signals('0', '1')]
	] as const) {
		const definition = defineNode({
			name,
			category: 'Sources',
			blockClass: name,
			inputs: [],
			outputs: ['out'],
			maxInputs: 0,
			maxOutputs: 1,
			outputBuses: { out: [...bus] }
		});
		nodeRegistry.register(definition, SOURCE);
	}
	afterAll(() => nodeRegistry.unregisterSource(SOURCE));

	it('addresses a single channel by its key, or by its position for a vector', () => {
		const nodes = [node('st', 'TestStream'), node('v', 'TestVector'), node('s', 'Scope')];
		const vars = new Map([
			['st', 'st'],
			['v', 'v'],
			['s', 'scope']
		]);
		const { lines } = generateNamedConnections(
			[
				{ ...wire('st', 0, 's', 0), sourceChannel: 1 },
				{ ...wire('v', 0, 's', 1), sourceChannel: 1 },
				wire('st', 0, 's', 2)
			],
			nodes,
			vars
		);
		expect(lines).toEqual([
			'conn_0 = Connection(st["out"]["T"], scope[0])',
			'conn_1 = Connection(v["out"][1], scope[1])',
			'conn_2 = Connection(st["out"], scope[2])'
		]);
	});
});
