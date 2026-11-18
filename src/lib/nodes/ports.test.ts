import { describe, it, expect } from 'vitest';
import type { NodeInstance, PortInstance } from './types';
import { withPortStructure } from './ports';

/** Ports as saved before they carried their structure: display names only */
const ports = (nodeId: string, direction: 'input' | 'output', names: string[]) =>
	names.map((name, index) => ({ id: `${nodeId}-${direction}-${index}`, nodeId, name, direction, index, color: '' }) as PortInstance);
const node = (id: string, type: string, inputs: string[], outputs: string[]) =>
	({ id, type, name: id, params: {}, position: { x: 0, y: 0 }, inputs: ports(id, 'input', inputs), outputs: ports(id, 'output', outputs) }) as NodeInstance;

describe('port structure of loaded nodes', () => {
	it('takes the keys of fixed ports from the type definition by index, not from the display names', () => {
		const atan = withPortStructure(node('a', 'Atan2', ['in 0', 'in 1'], ['out 0']));
		expect(atan.inputs.map((p) => p.key)).toEqual(['a', 'b']);
		expect(atan.outputs[0]).toMatchObject({ name: 'out 0', key: 'y' });
	});

	it('keeps keys the ports carry and leaves variable ports and unknown types as they are', () => {
		const constant = node('c', 'Constant', [], ['out']);
		constant.outputs[0].key = 'kept';
		expect(withPortStructure(constant).outputs[0].key).toBe('kept');

		const scope = node('s', 'Scope', ['in 0'], []);
		expect(withPortStructure(scope)).toBe(scope);
		const unknown = node('u', 'Unknown', ['in 0'], []);
		expect(withPortStructure(unknown)).toBe(unknown);
	});

	it('fills nodes inside subsystems', () => {
		const sub = { ...node('sub', 'Subsystem', [], []), graph: { nodes: [node('c', 'Constant', [], ['out 0'])], connections: [] } };
		expect(withPortStructure(sub).graph?.nodes[0].outputs[0].key).toBe('out');
	});
});
