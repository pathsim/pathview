<script lang="ts">
	import type { NodeTypeDefinition } from '$lib/nodes/types';
	import { getShapeCssClass } from '$lib/nodes/shapes';
	import { NODE_TYPES } from '$lib/constants/nodeTypes';
	import { busBlockDimensions } from '$lib/constants/dimensions';
	import BusWedge from './BusWedge.svelte';

	interface Props {
		node: NodeTypeDefinition;
	}

	let { node }: Props = $props();

	const isSubsystemType = $derived(node.category === 'Subsystem');
	const shapeClass = $derived(() => getShapeCssClass(node));

	// Bus blocks show their symbol instead of a block card
	const isBus = $derived(node.type === NODE_TYPES.BUS_CREATOR || node.type === NODE_TYPES.BUS_SELECTOR);
	const busLength = $derived(busBlockDimensions(node.ports.inputs.length, node.ports.outputs.length, 0).height);
</script>

{#if isBus}
	<div class="node-preview bus-preview">
		<BusWedge creator={node.type === NODE_TYPES.BUS_CREATOR} length={busLength} />
		<span class="node-name">{node.name}</span>
	</div>
{:else}
	<div class="node-preview {shapeClass()}" class:subsystem-type={isSubsystemType}>
		<span class="node-name">{node.name}</span>
	</div>
{/if}

<style>
	.node-preview {
		min-width: 90px;
		min-height: 36px;
		background: var(--surface-raised);
		border: 1px solid var(--edge);
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.15s ease;
	}

	.bus-preview {
		gap: var(--space-sm);
		background: none;
		border-color: transparent;
	}

	.shape-pill { border-radius: 20px; }
	.shape-rect { border-radius: 4px; }
	.shape-circle { border-radius: 16px; }
	.shape-diamond { border-radius: 4px; transform: rotate(45deg); }
	.shape-diamond .node-name { transform: rotate(-45deg); }
	.shape-mixed { border-radius: 12px 4px 12px 4px; }
	.shape-default { border-radius: 8px; }

	.subsystem-type {
		border-style: dashed;
	}

	.node-name {
		font-weight: 600;
		font-size: 11px;
		color: var(--accent);
		white-space: nowrap;
		letter-spacing: -0.2px;
	}
</style>
