import { describe, it, expect } from 'vitest';
import { defineNode } from './defineNode';

const signals = (...names: string[]) => names.map((name) => ({ name, structure: null }));

describe('defineNode', () => {
	it('attaches the signals of carrier ports to their port definitions', () => {
		const def = defineNode({
			name: 'Heater',
			category: 'Algebraic',
			blockClass: 'Heater',
			inputs: ['stream', 'Q'],
			outputs: ['stream'],
			inputBuses: { stream: signals('F', 'T') },
			outputBuses: { stream: signals('F', 'T', 'P') }
		});

		expect(def.ports.inputs.map((p) => p.bus)).toEqual([signals('F', 'T'), undefined]);
		expect(def.ports.outputs[0].bus).toEqual(signals('F', 'T', 'P'));
	});

	it('gives the fixed ports of a pathsim block their label as key', () => {
		const def = defineNode({
			name: 'Atan2',
			category: 'Algebraic',
			blockClass: 'Atan2',
			inputs: ['a', 'b'],
			outputs: ['y'],
			labeled: true,
			inputPolicy: 'fixed',
			outputPolicy: 'fixed'
		});
		expect(def.ports.inputs.map((p) => p.key)).toEqual(['a', 'b']);

		//variable ports and ports the editor names have none
		expect(defineNode({ name: 'Gain', category: 'Algebraic', blockClass: 'Amplifier', labeled: true }).ports.inputs[0]).not.toHaveProperty('key');
		expect(defineNode({ name: 'Bus', category: 'Buses', blockClass: 'BusCreator', outputs: ['bus'], outputPolicy: 'fixed' }).ports.outputs[0]).not.toHaveProperty('key');
	});

	it('leaves plain ports without a bus', () => {
		const def = defineNode({ name: 'Gain', category: 'Algebraic', blockClass: 'Amplifier' });
		expect(def.ports.inputs[0]).not.toHaveProperty('bus');
	});
});
