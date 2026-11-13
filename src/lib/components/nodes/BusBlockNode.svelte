<script lang="ts">
	import { get } from 'svelte/store';
	import { useUpdateNodeInternals } from '@xyflow/svelte';
	import { nodeColor as colorOf, type NodeInstance, type PortDirection } from '$lib/nodes';
	import InlineInput from '$lib/components/InlineInput.svelte';
	import { graphStore } from '$lib/stores/graph';
	import { historyStore } from '$lib/stores/history';
	import { inlineEdit, editInline } from '$lib/stores/inlineEdit.svelte';
	import { busCreatorSignals, busSelectorOptions } from '$lib/stores/busView.svelte';
	import { selectedSignals } from '$lib/bus/expand';
	import { renamedSignals, selectorUses } from '$lib/bus/rename';
	import { confirmationStore } from '$lib/stores/confirmation';
	import { portLabelsStore } from '$lib/stores/portLabels';
	import { NODE_TYPES } from '$lib/constants/nodeTypes';
	import { busBlockDimensions } from '$lib/constants/dimensions';
	import { openNodeDialog } from '$lib/stores/nodeDialog';
	import NodePorts from './NodePorts.svelte';
	import BusWedge from './BusWedge.svelte';

	/**
	 * Bus Creator and Bus Selector drawn as a narrow wedge instead of a block.
	 * The wide side carries the separate signals, the narrow side the bus.
	 * Port labels follow the port label settings, like blocks.
	 */
	interface Props {
		id: string;
		data: NodeInstance;
		selected?: boolean;
	}

	let { id, data, selected = false }: Props = $props();

	const updateNodeInternals = useUpdateNodeInternals();

	const rotation = $derived((data.params?.['_rotation'] as number) || 0);
	const isCreator = $derived(data.type === NODE_TYPES.BUS_CREATOR);
	const size = $derived(busBlockDimensions(data.inputs.length, data.outputs.length, rotation));
	const nodeColor = $derived(colorOf(data));

	// Port labels follow the global setting unless the block overrides it, like blocks
	const showInputLabels = $derived((data.params?.['_showInputLabels'] as boolean | undefined) ?? $portLabelsStore);
	const showOutputLabels = $derived((data.params?.['_showOutputLabels'] as boolean | undefined) ?? $portLabelsStore);

	// Re-measure handles when the wedge changes size or orientation
	$effect(() => {
		void size;
		updateNodeInternals(id);
	});

	// Signal names are edited inline like connection labels, addressed as "<node>:<direction>:<index>"
	const editingLabel = $derived(
		inlineEdit.targetId?.startsWith(`${id}:`) ? inlineEdit.targetId.slice(id.length + 1) : null
	);

	const signalName = (direction: PortDirection, index: number) =>
		direction === 'input'
			? (busCreatorSignals.get(id)?.[index] ?? data.inputs[index]?.name ?? '')
			: (data.outputs[index]?.name ?? '');

	// A selector output offers the bus signals no other output picks yet
	function signalOptions(index: number): string[] {
		const picked = selectedSignals(data);
		return (busSelectorOptions.get(id) ?? []).filter((path) => path === picked[index] || !picked.includes(path));
	}

	/**
	 * A creator input names its signal with the label of the incoming wire, or
	 * with its port name while nothing is connected. A selector output picks a
	 * signal from the bus.
	 */
	async function commitSignalName(direction: PortDirection, index: number, text: string) {
		if (inlineEdit.targetId !== `${id}:${direction}:${index}`) return;
		editInline(null);
		const name = text.trim();
		const previous = signalName(direction, index);
		if (name === previous) return;

		if (direction === 'output') {
			historyStore.mutate(() => graphStore.setSelectorSignal(id, index, name));
			return;
		}
		const wire = get(graphStore.connections).find((c) => c.targetNodeId === id && c.targetPortIndex === index);
		if (!wire && !name) return;

		// Selectors picking this signal, here or in subsystems, can follow the rename after asking
		const source = { path: graphStore.getCurrentPath(), creatorId: id, input: index };
		const before = graphStore.toJSON();
		const uses = selectorUses(before.nodes, before.connections, source);
		const everywhere =
			uses.length > 0 &&
			(await confirmationStore.show({
				title: 'Rename signal everywhere?',
				message: `"${previous}" is picked by ${uses.length} Bus Selector ${uses.length === 1 ? 'output' : 'outputs'}. Rename it there too?`,
				confirmText: 'Rename everywhere',
				cancelText: 'Only here'
			}));

		historyStore.mutate(() => {
			if (wire) graphStore.updateConnectionLabel(wire.id, name);
			else graphStore.updateNodePortName(id, 'input', index, name);
			if (!everywhere) return;
			const after = graphStore.toJSON();
			graphStore.setSelectorSignalsAt(renamedSignals(after.nodes, after.connections, source, uses));
		});
	}

	// Only signal names are edited; the bus port on the narrow side is not
	function startLabelEdit(direction: PortDirection, index: number) {
		if (direction === (isCreator ? 'output' : 'input')) return;
		editInline(`${id}:${direction}:${index}`);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="node bus-block"
	class:selected
	data-rotation={rotation}
	style="width: {size.width}px; height: {size.height}px; --node-color: {nodeColor};"
	ondblclick={(e) => {
		e.stopPropagation();
		openNodeDialog(id);
	}}
>
	<div class="wedge">
		<BusWedge creator={isCreator} length={Math.max(size.width, size.height)} {rotation} {selected} />
	</div>

	<!-- The narrow side is always the bus port; a creator takes more inputs, a selector's outputs follow its signals -->
	<NodePorts
		{id}
		inputs={data.inputs}
		outputs={data.outputs}
		{rotation}
		{nodeColor}
		{selected}
		{showInputLabels}
		{showOutputLabels}
		dynamicInputs={isCreator}
		minInputs={1}
		inputNames={isCreator ? busCreatorSignals.get(id) : undefined}
		busInputs={isCreator ? undefined : [0]}
		busOutputs={isCreator ? [0] : undefined}
		signalLabels
		{editingLabel}
		onLabelEdit={startLabelEdit}
		{labelEditor}
	/>
</div>

{#snippet labelEditor(direction: PortDirection, index: number)}
	<InlineInput
		value={signalName(direction, index)}
		placeholder="Signal"
		suggestions={direction === 'output' ? signalOptions(index) : undefined}
		onCommit={(text) => commitSignalName(direction, index, text)}
		onCancel={() => editInline(null)}
	/>
{/snippet}

<style>
	.bus-block {
		position: relative;
	}

	.wedge {
		position: absolute;
		inset: 0;
	}
</style>
