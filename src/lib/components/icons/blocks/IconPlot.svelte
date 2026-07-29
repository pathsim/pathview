<script lang="ts">
	import { AXIS_BOX, PLOT_BOX, mapX, mapY, buildPath, type Sample } from './curves';

	type AxesMode = 'none' | 'baseline' | 'cross';
	type Decoration = 'arrow-up' | 'arrow-down';

	interface Props {
		samples: Sample[];
		samplesDashed?: Sample[];
		xRange?: [number, number];
		yRange?: [number, number];
		axes?: AxesMode;
		markers?: boolean;
		decoration?: Decoration;
		/** Vertical asymptotes in sample-x coordinates, drawn dashed. */
		asymptotes?: number[];
		/** Small superscript label in the top-right corner (e.g. base of a log). */
		badge?: string;
		/** Draw samples as stems from the zero line instead of a connected line. */
		stems?: boolean;
	}

	let {
		samples,
		samplesDashed,
		xRange = [0, 1],
		yRange = [0, 1],
		axes = 'cross',
		markers = false,
		decoration,
		asymptotes,
		badge,
		stems = false
	}: Props = $props();

	const path = $derived(buildPath(samples, xRange[0], xRange[1], yRange[0], yRange[1]));
	const pathDashed = $derived(
		samplesDashed
			? buildPath(samplesDashed, xRange[0], xRange[1], yRange[0], yRange[1])
			: ''
	);

	// The zero line only sits inside the plot when 0 is actually part of the
	// value range; otherwise it falls back to the box edge. For x this uses a
	// strict test, so a time signal (x starting at 0) keeps its y-axis just
	// left of the trace instead of drawing it straight through the first edge.
	const xAxisY = $derived(
		yRange[0] <= 0 && yRange[1] >= 0 ? mapY(0, yRange[0], yRange[1]) : AXIS_BOX.y1
	);
	const yAxisX = $derived(
		xRange[0] < 0 && xRange[1] > 0 ? mapX(0, xRange[0], xRange[1]) : AXIS_BOX.x0
	);

	const finiteSamples = $derived(samples.filter(([, v]) => Number.isFinite(v)));
	const asymptoteX = $derived(
		(asymptotes ?? []).map((x) => mapX(x, xRange[0], xRange[1]))
	);
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor"
	stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
	<!-- Axes sit behind the trace and are deliberately lighter, so a curve
	     running along an axis (Abs, Deadband) stays readable. -->
	{#if axes === 'baseline' || axes === 'cross'}
		<g class="axis">
			<line x1={AXIS_BOX.x0} y1={xAxisY} x2={AXIS_BOX.x1} y2={xAxisY} />
			{#if axes === 'cross'}
				<line x1={yAxisX} y1={AXIS_BOX.y0} x2={yAxisX} y2={AXIS_BOX.y1} />
			{/if}
		</g>
	{/if}
	{#each asymptoteX as ax}
		<line class="asymptote" x1={ax} y1={PLOT_BOX.y0} x2={ax} y2={PLOT_BOX.y1} />
	{/each}
	{#if pathDashed}
		<path d={pathDashed} class="ghost" stroke-dasharray="3.5 3" />
	{/if}
	{#if stems}
		{#each finiteSamples as [x, v]}
			{@const sx = mapX(x, xRange[0], xRange[1])}
			<line x1={sx} y1={xAxisY} x2={sx} y2={mapY(v, yRange[0], yRange[1])} />
			<circle cx={sx} cy={mapY(v, yRange[0], yRange[1])} r="2.4" fill="currentColor" stroke="none" />
		{/each}
	{:else}
		<path d={path} />
	{/if}
	{#if markers}
		{#each finiteSamples as [x, v]}
			<circle
				cx={mapX(x, xRange[0], xRange[1])}
				cy={mapY(v, yRange[0], yRange[1])}
				r="2.8"
				fill="currentColor"
				stroke="none"
			/>
		{/each}
	{/if}
	{#if decoration === 'arrow-up'}
		<path d="M 86 44 L 86 22 M 82 26 L 86 22 L 90 26" />
	{:else if decoration === 'arrow-down'}
		<path d="M 86 22 L 86 44 M 82 40 L 86 44 L 90 40" />
	{/if}
	{#if badge}
		<!-- Top-left: the corner a rising characteristic leaves free. -->
		<text
			x={AXIS_BOX.x0 + 4}
			y={AXIS_BOX.y0}
			text-anchor="start"
			dominant-baseline="hanging"
			fill="currentColor"
			stroke="none"
			font-family="ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace"
			font-size="11"
			font-weight="600">{badge}</text
		>
	{/if}
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.axis {
		stroke-width: 0.9;
		opacity: 0.42;
	}

	.asymptote {
		stroke-width: 0.9;
		opacity: 0.42;
		stroke-dasharray: 3 3;
	}

	.ghost {
		opacity: 0.5;
	}
</style>
