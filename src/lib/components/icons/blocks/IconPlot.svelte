<script lang="ts">
	import { AXIS_BOX, mapX, mapY, buildPath, type Sample } from './curves';

	type AxesMode = 'none' | 'baseline' | 'cross';
	type Decoration = 'arrow-up' | 'arrow-down';

	interface Props {
		samples: Sample[];
		xRange?: [number, number];
		yRange?: [number, number];
		axes?: AxesMode;
		markers?: boolean;
		decoration?: Decoration;
	}

	let {
		samples,
		xRange = [0, 1],
		yRange = [0, 1],
		axes = 'cross',
		markers = false,
		decoration
	}: Props = $props();

	const path = $derived(buildPath(samples, xRange[0], xRange[1], yRange[0], yRange[1]));

	const xAxisY = $derived(
		yRange[0] <= 0 && yRange[1] >= 0 ? mapY(0, yRange[0], yRange[1]) : AXIS_BOX.y1
	);
	const yAxisX = $derived(
		xRange[0] <= 0 && xRange[1] >= 0 ? mapX(0, xRange[0], xRange[1]) : AXIS_BOX.x0
	);

	const finiteSamples = $derived(samples.filter(([, v]) => Number.isFinite(v)));
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor"
	stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
	{#if axes === 'baseline' || axes === 'cross'}
		<line x1={AXIS_BOX.x0} y1={xAxisY} x2={AXIS_BOX.x1} y2={xAxisY} />
	{/if}
	{#if axes === 'cross'}
		<line x1={yAxisX} y1={AXIS_BOX.y0} x2={yAxisX} y2={AXIS_BOX.y1} />
	{/if}
	<path d={path} />
	{#if markers}
		{#each finiteSamples as [x, v]}
			<circle
				cx={mapX(x, xRange[0], xRange[1])}
				cy={mapY(v, yRange[0], yRange[1])}
				r="3"
				fill="currentColor"
				stroke="none"
			/>
		{/each}
	{/if}
	{#if decoration === 'arrow-up'}
		<path d="M 88 40 L 88 24 M 84 28 L 88 24 L 92 28" />
	{:else if decoration === 'arrow-down'}
		<path d="M 88 24 L 88 40 M 84 36 L 88 40 L 92 36" />
	{/if}
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
