/**
 * Bus block definitions
 * Bus Creator and Bus Selector exist only in the editor; they are resolved
 * into direct wiring before code generation (see $lib/bus/expand).
 */

import { defineNode } from './defineNode';
import { nodeRegistry } from './registry';
import { BUS_CATEGORY, NODE_TYPES } from '$lib/constants/nodeTypes';

/** Note shared by both bus blocks, in the HTML structure docutils produces for pathsim docstrings */
const BUS_NOTE = `<div class="section" id="note">
<h3>Note</h3>
<p>Bus blocks exist only in the editor. Before code generation they are removed: every signal
picked by a Bus Selector is wired directly from its source, and a subsystem port that carries
a bus becomes one port per signal. A bus can only be connected to a Bus Creator, a Bus Selector
or a subsystem port.</p>
</div>
`;

/** Bus Creator - bundles its input signals into one bus */
export const BusCreatorDefinition = defineNode({
	name: 'Bus Creator',
	category: BUS_CATEGORY,
	blockClass: NODE_TYPES.BUS_CREATOR,
	description:
		'Bundles its input signals into one bus. A signal is named after the label of its wire, or else the port it comes from.',
	inputs: ['in 0', 'in 1'],
	outputs: ['bus'],
	minInputs: 1,
	maxInputs: null,
	minOutputs: 1,
	maxOutputs: 1,
	shape: 'rect',
	params: {}
});

/** Bus Selector - picks signals out of a bus; its outputs follow the picked signals */
export const BusSelectorDefinition = defineNode({
	name: 'Bus Selector',
	category: BUS_CATEGORY,
	blockClass: NODE_TYPES.BUS_SELECTOR,
	description: 'Picks signals out of a bus by name, one output per picked signal.',
	inputs: ['bus'],
	outputs: [],
	minInputs: 1,
	maxInputs: 1,
	minOutputs: 0,
	maxOutputs: 0,
	shape: 'rect',
	params: {
		signals: { type: 'any', default: [], description: 'Signal paths picked from the bus, one output each' }
	}
});

BusCreatorDefinition.docstring = `<p>Bundles its input signals into one bus.</p>
<p>Each signal in the bus is named after the label of its wire, or else after the port it comes
from. A bus can be an input of another Bus Creator, which nests it. The signals of a nested bus
are addressed by their path, for example <cite>inner.b</cite>.</p>
${BUS_NOTE}`;

BusSelectorDefinition.docstring = `<p>Picks signals out of a bus by name, one output per picked signal.</p>
<p>Signals are addressed by their path in the bus, with a dot between the names of nested buses,
for example <cite>inner.b</cite>. When a signal is renamed at its Bus Creator, the picked paths
follow the new name.</p>
${BUS_NOTE}<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>signals <span class="classifier-delimiter">:</span> <span class="classifier">list[str]</span></dt>
<dd>signal paths picked from the bus, one output each</dd>
</dl>
</div>
`;

export function registerBusNodes(): void {
	nodeRegistry.register(BusCreatorDefinition);
	nodeRegistry.register(BusSelectorDefinition);
}
