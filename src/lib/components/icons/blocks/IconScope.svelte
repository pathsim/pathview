<script lang="ts">
	import { mapY, buildPath, type Sample } from './curves';

	interface Props {
		samples: Sample[];
		yRange?: [number, number];
		/** Number of vertical grid divisions */
		gridX?: number;
		/** Number of horizontal grid divisions */
		gridY?: number;
	}

	let { samples, yRange = [-1.1, 1.1], gridX = 4, gridY = 3 }: Props = $props();

	// Screen frame box (slightly larger than default plot box for scope feel)
	const FRAME = { x0: 5, x1: 91, y0: 6, y1: 58 } as const;
	const W = FRAME.x1 - FRAME.x0;
	const H = FRAME.y1 - FRAME.y0;

	// Local plot mapping inside the frame with small inset
	const INSET = 7;
	const plotX0 = FRAME.x0 + INSET;
	const plotX1 = FRAME.x1 - INSET;
	const plotY0 = FRAME.y0 + INSET;
	const plotY1 = FRAME.y1 - INSET;

	function localMapX(t: number): number {
		return plotX0 + t * (plotX1 - plotX0);
	}
	function localMapY(v: number): number {
		const norm = (v - yRange[0]) / (yRange[1] - yRange[0]);
		return plotY1 - norm * (plotY1 - plotY0);
	}

	const path = $derived(
		samples
			.map(([t, v], i) => `${i === 0 ? 'M' : 'L'} ${localMapX(t).toFixed(2)} ${localMapY(v).toFixed(2)}`)
			.join(' ')
	);

	const gridXLines = $derived(
		Array.from({ length: gridX - 1 }, (_, i) => FRAME.x0 + ((i + 1) * W) / gridX)
	);
	const gridYLines = $derived(
		Array.from({ length: gridY - 1 }, (_, i) => FRAME.y0 + ((i + 1) * H) / gridY)
	);
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor"
	stroke-linecap="round" stroke-linejoin="round">
	<!-- Outer screen frame -->
	<rect x={FRAME.x0} y={FRAME.y0} width={W} height={H} rx="3" stroke-width="2" />
	<!-- Grid -->
	<g stroke-width="0.6" opacity="0.4">
		{#each gridXLines as gx}
			<line x1={gx} y1={FRAME.y0 + 1} x2={gx} y2={FRAME.y1 - 1} />
		{/each}
		{#each gridYLines as gy}
			<line x1={FRAME.x0 + 1} y1={gy} x2={FRAME.x1 - 1} y2={gy} />
		{/each}
	</g>
	<!-- Signal trace -->
	<path d={path} stroke-width="2" />
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
