<script lang="ts">
	import type { NodeTypeDefinition } from '$lib/nodes/types';
	import { getShapeCssClass, isSubsystem } from '$lib/nodes/shapes';
	import { calculateNodeDimensions, getPortPositionCalc } from '$lib/constants/dimensions';

	interface Props {
		node: NodeTypeDefinition;
	}

	let { node }: Props = $props();

	const inputCount = $derived(node.ports?.inputs?.length ?? 0);
	const outputCount = $derived(node.ports?.outputs?.length ?? 0);

	const shapeClass = $derived(getShapeCssClass(node));
	const isSubsystemType = $derived(isSubsystem(node) || node.category === 'Subsystem');
	const dimensions = $derived(
		calculateNodeDimensions(node.name, inputCount, outputCount, 0, 0, undefined, null, false)
	);
</script>

<div
	class="cbp-node {shapeClass}"
	class:subsystem-type={isSubsystemType}
	style="width: {dimensions.width}px; height: {dimensions.height}px;"
>
	<div class="cbp-content">
		<span class="cbp-name">{node.name}</span>
	</div>

	{#each Array(inputCount) as _, i}
		<div class="cbp-handle cbp-handle-input" style="top: {getPortPositionCalc(i, inputCount)};"></div>
	{/each}
	{#each Array(outputCount) as _, i}
		<div class="cbp-handle cbp-handle-output" style="top: {getPortPositionCalc(i, outputCount)};"></div>
	{/each}
</div>

<style>
	.cbp-node {
		position: relative;
		background: var(--surface-raised);
		border: 1px solid var(--edge);
		font-size: 10px;
		--node-radius: 8px;
	}

	/* Mirror BaseNode shape variants. */
	.cbp-node.shape-pill {
		--node-radius: 20px;
		border-radius: var(--node-radius);
	}
	.cbp-node.shape-rect {
		--node-radius: 4px;
		border-radius: var(--node-radius);
	}
	.cbp-node.shape-circle {
		--node-radius: 16px;
		border-radius: var(--node-radius);
	}
	.cbp-node.shape-mixed {
		--node-radius: 12px;
		border-radius: 12px 4px 12px 4px;
	}
	.cbp-node.shape-default {
		--node-radius: 8px;
		border-radius: var(--node-radius);
	}

	.cbp-node.subsystem-type {
		border-style: dashed;
	}

	.cbp-content {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 var(--space-sm);
	}

	.cbp-name {
		font-size: 10px;
		color: var(--text-muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Handle: hollow rounded-pentagon, 10x8, anchored at edge.
	 * Paths copied verbatim from BaseNode for visual parity. */
	.cbp-handle {
		position: absolute;
		width: 10px;
		height: 8px;
		transform: translateY(-50%);
		pointer-events: none;
	}

	.cbp-handle-input {
		left: -5px;
	}

	.cbp-handle-output {
		right: -5px;
	}

	.cbp-handle::before,
	.cbp-handle::after {
		content: '';
		position: absolute;
	}

	.cbp-handle::before {
		inset: 0;
		background: var(--edge);
	}

	.cbp-handle::after {
		inset: 1px;
		background: var(--surface-raised);
	}

	/* Input handle: arrow pointing INTO the block (left → right).
	 * Same path as BaseNode rotation 0. */
	.cbp-handle-input::before {
		clip-path: path('M 1.00 0.00 L 5.00 0.00 Q 6.00 0.00 6.71 0.71 L 9.29 3.29 Q 10.00 4.00 9.29 4.71 L 6.71 7.29 Q 6.00 8.00 5.00 8.00 L 1.00 8.00 Q 0.00 8.00 0.00 7.00 L 0.00 1.00 Q 0.00 0.00 1.00 0.00 Z');
	}
	.cbp-handle-input::after {
		clip-path: path('M 0.80 0.00 L 3.79 0.00 Q 4.59 0.00 5.15 0.57 L 7.02 2.43 Q 7.59 3.00 7.02 3.57 L 5.15 5.43 Q 4.59 6.00 3.79 6.00 L 0.80 6.00 Q 0.00 6.00 0.00 5.20 L 0.00 0.80 Q 0.00 0.00 0.80 0.00 Z');
	}

	/* Output handle: arrow pointing OUT of the block (left → right, same orientation,
	 * but anchored on the right edge so the tip points away from the block). */
	.cbp-handle-output::before {
		clip-path: path('M 1.00 0.00 L 5.00 0.00 Q 6.00 0.00 6.71 0.71 L 9.29 3.29 Q 10.00 4.00 9.29 4.71 L 6.71 7.29 Q 6.00 8.00 5.00 8.00 L 1.00 8.00 Q 0.00 8.00 0.00 7.00 L 0.00 1.00 Q 0.00 0.00 1.00 0.00 Z');
	}
	.cbp-handle-output::after {
		clip-path: path('M 0.80 0.00 L 3.79 0.00 Q 4.59 0.00 5.15 0.57 L 7.02 2.43 Q 7.59 3.00 7.02 3.57 L 5.15 5.43 Q 4.59 6.00 3.79 6.00 L 0.80 6.00 Q 0.00 6.00 0.00 5.20 L 0.00 0.80 Q 0.00 0.00 0.80 0.00 Z');
	}
</style>
