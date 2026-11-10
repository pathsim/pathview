import { describe, it, expect } from 'vitest';
import type { Connection, NodeInstance } from '$lib/nodes/types';
import { generateNamedConnections, portKey } from './codeBuilder';

const node = (id: string, type: string) => ({ id, type }) as NodeInstance;
const wire = (source: string, sourcePort: number, target: string, targetPort: number): Connection => ({
	id: `${source}-${target}-${targetPort}`,
	sourceNodeId: source,
	sourcePortIndex: sourcePort,
	targetNodeId: target,
	targetPortIndex: targetPort
});

describe('port keys', () => {
	it('addresses labeled ports by label and variable ports by index', () => {
		expect(portKey('Atan2', 'input', 1)).toBe('b');
		expect(portKey('Atan2', 'output', 0)).toBe('y');
		expect(portKey('Scope', 'input', 2)).toBe(2);
		expect(portKey('Unknown', 'input', 0)).toBe(0);
	});

	it('generates connections with the port keys', () => {
		const nodes = [node('x', 'Constant'), node('a', 'Atan2'), node('s', 'Scope')];
		const vars = new Map([['x', 'x'], ['a', 'angle'], ['s', 'scope']]);
		const { lines } = generateNamedConnections([wire('x', 0, 'a', 1), wire('a', 0, 's', 0)], nodes, vars);
		expect(lines).toEqual(['conn_0 = Connection(x["out"], angle["b"])', 'conn_1 = Connection(angle["y"], scope[0])']);
	});
});
