<script lang="ts">
	/**
	 * Scope-style icon — a framed screen with a graticule and one or two traces.
	 * With `bars` the samples are drawn as spectrum bars instead of a line.
	 */
	import { type Sample } from './curves';

	interface Props {
		samples: Sample[];
		samples2?: Sample[];
		yRange?: [number, number];
		/** Number of vertical grid divisions (0 disables). */
		gridX?: number;
		/** Number of horizontal grid divisions (0 disables). */
		gridY?: number;
		/** Render samples as bars rising from the baseline (spectrum). */
		bars?: boolean;
	}

	let {
		samples,
		samples2,
		yRange = [-1.1, 1.1],
		gridX = 4,
		gridY = 3,
		bars = false
	}: Props = $props();

	/* Screen frame, centred in the 96×64 viewBox. */
	const FRAME = { x0: 6, x1: 90, y0: 7, y1: 57 } as const;
	const W = FRAME.x1 - FRAME.x0;
	const H = FRAME.y1 - FRAME.y0;

	/* Signal area inset from the frame so the trace never touches the bezel. */
	const INSET_X = 7;
	const INSET_Y = 6;
	const plotX0 = FRAME.x0 + INSET_X;
	const plotX1 = FRAME.x1 - INSET_X;
	const plotY0 = FRAME.y0 + INSET_Y;
	const plotY1 = FRAME.y1 - INSET_Y;

	function localMapX(t: number): number {
		return plotX0 + t * (plotX1 - plotX0);
	}
	function localMapY(v: number): number {
		const norm = (v - yRange[0]) / (yRange[1] - yRange[0]);
		return plotY1 - norm * (plotY1 - plotY0);
	}

	function pathFor(s: Sample[]): string {
		return s
			.map(([t, v], i) => `${i === 0 ? 'M' : 'L'} ${localMapX(t).toFixed(2)} ${localMapY(v).toFixed(2)}`)
			.join(' ');
	}
	const path = $derived(bars ? '' : pathFor(samples));
	const path2 = $derived(samples2 ? pathFor(samples2) : '');

	const gridXLines = $derived(
		gridX > 1 ? Array.from({ length: gridX - 1 }, (_, i) => FRAME.x0 + ((i + 1) * W) / gridX) : []
	);
	const gridYLines = $derived(
		gridY > 1 ? Array.from({ length: gridY - 1 }, (_, i) => FRAME.y0 + ((i + 1) * H) / gridY) : []
	);

	const baseline = $derived(localMapY(yRange[0]));
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor"
	stroke-linecap="round" stroke-linejoin="round">
	<rect x={FRAME.x0} y={FRAME.y0} width={W} height={H} rx="4" stroke-width="1.6" />
	<!-- Graticule: present but clearly behind the trace. -->
	<g class="grid">
		{#each gridXLines as gx}
			<line x1={gx} y1={FRAME.y0 + 2} x2={gx} y2={FRAME.y1 - 2} />
		{/each}
		{#each gridYLines as gy}
			<line x1={FRAME.x0 + 2} y1={gy} x2={FRAME.x1 - 2} y2={gy} />
		{/each}
	</g>
	{#if bars}
		{#each samples as [t, v]}
			<line class="bar" x1={localMapX(t)} y1={baseline} x2={localMapX(t)} y2={localMapY(v)} />
		{/each}
		<line class="baseline" x1={plotX0} y1={baseline} x2={plotX1} y2={baseline} />
	{:else}
		<path d={path} stroke-width="1.6" />
		{#if path2}
			<path d={path2} stroke-width="1.6" stroke-dasharray="4 4" stroke-dashoffset="2" />
		{/if}
	{/if}
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.grid {
		stroke-width: 0.8;
		opacity: 0.35;
	}

	.bar {
		stroke-width: 3.2;
		stroke-linecap: butt;
	}

	.baseline {
		stroke-width: 1.2;
		opacity: 0.5;
	}
</style>
