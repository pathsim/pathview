import { describe, it, expect } from 'vitest';
import type { Connection, NodeInstance, PortInstance } from '$lib/nodes/types';
import { graphStore } from '$lib/stores/graph';
import { graphAt } from './state';
import { createPorts } from './helpers';

const node = (id: string, type: string, inputs: PortInstance[], outputs: PortInstance[]) =>
	({ id, type, name: id, params: {}, position: { x: 0, y: 0 }, inputs, outputs }) as NodeInstance;
const wire = (source: string, sourcePort: number, target: string, targetPort: number): Connection => ({
	id: `${source}:${sourcePort}-${target}:${targetPort}`,
	sourceNodeId: source,
	sourcePortIndex: sourcePort,
	targetNodeId: target,
	targetPortIndex: targetPort
});
const labeled = (nodeId: string, direction: 'input' | 'output', labels: string[]) =>
	createPorts(nodeId, direction, labels.map((label) => ({ name: label, key: label })));

/** A Splitter with outputs out_0, out_1 wired to two scopes, the second output renamed */
function splitter(outputs = labeled('sp', 'output', ['out_0', 'out_1'])) {
	outputs[1] = { ...outputs[1], name: 'bypass' };
	graphStore.fromJSON(
		[
			node('sp', 'Splitter', labeled('sp', 'input', ['in']), outputs),
			node('a', 'Scope', createPorts('a', 'input', [{ name: 'in 0' }]), []),
			node('b', 'Scope', createPorts('b', 'input', [{ name: 'in 0' }]), [])
		],
		[wire('sp', 0, 'a', 0), wire('sp', 1, 'b', 0)]
	);
}
const level = () => graphAt([]);
const sp = () => level().nodes.find((n) => n.id === 'sp')!;

describe('derived ports', () => {
	it('adds the ports the block reports and keeps the names and wires of the others', () => {
		splitter();
		graphStore.setDerivedPorts([], 'sp', { inputs: ['in'], outputs: ['out_0', 'out_1', 'out_2'] });
		expect(sp().outputs.map((p) => [p.key, p.name])).toEqual([
			['out_0', 'out_0'],
			['out_1', 'bypass'],
			['out_2', 'out_2']
		]);
		expect(level().connections.map((c) => c.sourcePortIndex)).toEqual([0, 1]);
	});

	it('removes the wires of ports the block no longer has', () => {
		splitter();
		graphStore.setDerivedPorts([], 'sp', { inputs: ['in'], outputs: ['out_0'] });
		expect(sp().outputs.map((p) => p.key)).toEqual(['out_0']);
		expect(level().connections.map((c) => c.targetNodeId)).toEqual(['a']);
	});

	it('moves wires with their port when its index changes', () => {
		splitter();
		graphStore.setDerivedPorts([], 'sp', { inputs: ['in'], outputs: ['out_1'] });
		expect(sp().outputs[0].name).toBe('bypass');
		expect(level().connections).toEqual([{ ...wire('sp', 1, 'b', 0), sourcePortIndex: 0 }]);
	});

	it('matches ports saved without key by index', () => {
		splitter(createPorts('sp', 'output', [{ name: 'out 0' }, { name: 'out 1' }]));
		graphStore.setDerivedPorts([], 'sp', { inputs: ['in'], outputs: ['out_0', 'out_1'] });
		expect(sp().outputs.map((p) => [p.key, p.name])).toEqual([
			['out_0', 'out 0'],
			['out_1', 'bypass']
		]);
		expect(level().connections).toHaveLength(2);
	});
});
