<script lang="ts">
	/**
	 * Pole-zero map in the s-plane — poles as ×, zeros as ○.
	 * Used for blocks parametrised by zeros/poles/gain, so they read
	 * differently from the Bode-magnitude icons of coefficient-based blocks.
	 */
	import { AXIS_BOX, PLOT_BOX } from './curves';

	interface Props {
		/** Poles as [re, im] in a normalised [-1, 1] plane. */
		poles?: Array<[number, number]>;
		/** Zeros as [re, im]. */
		zeros?: Array<[number, number]>;
	}

	let {
		poles = [
			[-0.55, 0.6],
			[-0.55, -0.6]
		],
		zeros = [[0.45, 0]]
	}: Props = $props();

	const cx = (PLOT_BOX.x0 + PLOT_BOX.x1) / 2;
	const cy = (PLOT_BOX.y0 + PLOT_BOX.y1) / 2;
	const sx = PLOT_BOX.width / 2;
	const sy = PLOT_BOX.height / 2;

	const px = (re: number) => cx + re * sx;
	const py = (im: number) => cy - im * sy;

	const R = 3.4;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor"
	stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
	<g class="axis">
		<line x1={AXIS_BOX.x0} y1={cy} x2={AXIS_BOX.x1} y2={cy} />
		<line x1={cx} y1={AXIS_BOX.y0} x2={cx} y2={AXIS_BOX.y1} />
	</g>
	{#each poles as [re, im]}
		{@const x = px(re)}
		{@const y = py(im)}
		<path d="M {x - R} {y - R} L {x + R} {y + R} M {x + R} {y - R} L {x - R} {y + R}" />
	{/each}
	{#each zeros as [re, im]}
		<circle cx={px(re)} cy={py(im)} r={R} />
	{/each}
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
</style>
