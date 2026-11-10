import { describe, it, expect } from 'vitest';
import { defineNode } from './defineNode';

describe('defineNode', () => {
	it('attaches the channel layout to ports that are carriers', () => {
		const stream = { start: 0, size: 3, keys: ['F', 'T', 'P'] };
		const def = defineNode({
			name: 'Heater',
			category: 'Algebraic',
			blockClass: 'Heater',
			inputs: ['stream', 'Q'],
			outputs: ['stream'],
			inputCarriers: { stream: { start: 0, size: 2, keys: ['F', 'T'] } },
			outputCarriers: { stream }
		});

		expect(def.ports.inputs.map((p) => p.carrier)).toEqual([
			{ start: 0, size: 2, keys: ['F', 'T'] },
			undefined
		]);
		expect(def.ports.outputs[0].carrier).toEqual(stream);
	});

	it('leaves plain ports without a carrier', () => {
		const def = defineNode({ name: 'Gain', category: 'Algebraic', blockClass: 'Amplifier' });
		expect(def.ports.inputs[0]).not.toHaveProperty('carrier');
	});
});
