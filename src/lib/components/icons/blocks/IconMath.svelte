<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { loadKatex } from '$lib/utils/katexLoader';

	interface Props {
		latex: string;
	}

	let { latex }: Props = $props();
	let html = $state<string>('');
	let inner: HTMLSpanElement | undefined = $state();
	let scale = $state(1);

	const VIEW_W = 96;
	const VIEW_H = 64;
	const PADDING = 4;
	const FREE_W = VIEW_W - 2 * PADDING;
	const FREE_H = VIEW_H - 2 * PADDING;

	const MAX_SCALE = 1.6;
	const MIN_SCALE = 0.95;

	async function measure() {
		await tick();
		if (!inner) return;
		const w = inner.scrollWidth;
		const h = inner.scrollHeight;
		if (w === 0 || h === 0) return;
		const fitScale = Math.min(FREE_W / w, FREE_H / h);
		scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, fitScale));
	}

	onMount(async () => {
		const katex = await loadKatex();
		try {
			html = katex.default.renderToString(latex, {
				displayMode: true,
				throwOnError: false,
				strict: false,
				output: 'html'
			});
		} catch {
			html = latex;
		}
		await measure();
	});

	$effect(() => {
		if (html) measure();
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VIEW_W} {VIEW_H}">
	<foreignObject x="-32" y="-32" width={VIEW_W + 64} height={VIEW_H + 64}>
		<div class="wrap">
			<span class="inner" bind:this={inner} style="transform: scale({scale});">
				{#if html}
					{@html html}
				{/if}
			</span>
		</div>
	</foreignObject>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		display: block;
		color: currentColor;
		overflow: visible;
	}

	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: inherit;
	}

	.inner {
		display: inline-block;
		transform-origin: center;
		white-space: nowrap;
		color: inherit;
	}

	.inner :global(.katex-display) {
		margin: 0;
	}

	.inner :global(.katex) {
		font-size: 16px;
		color: inherit;
	}
</style>
