<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { loadKatex } from '$lib/utils/katexLoader';

	interface Props {
		latex: string;
	}

	let { latex }: Props = $props();
	let html = $state<string>('');
	let inner: HTMLSpanElement | undefined = $state();
	let wrap: HTMLSpanElement | undefined = $state();
	let scale = $state(1);

	const MAX_SCALE = 1.6;
	const MIN_SCALE = 0.4;
	const PADDING_X = 6;
	const PADDING_Y = 4;

	async function measure() {
		await tick();
		if (!inner || !wrap) return;
		const cw = wrap.clientWidth - 2 * PADDING_X;
		const ch = wrap.clientHeight - 2 * PADDING_Y;
		const w = inner.scrollWidth;
		const h = inner.scrollHeight;
		if (w === 0 || h === 0 || cw <= 0 || ch <= 0) return;
		const fitScale = Math.min(cw / w, ch / h);
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

	$effect(() => {
		if (!wrap) return;
		const ro = new ResizeObserver(() => measure());
		ro.observe(wrap);
		return () => ro.disconnect();
	});
</script>

<span class="math" bind:this={wrap}>
	<span class="inner" bind:this={inner} style="transform: scale({scale});">
		{#if html}
			{@html html}
		{/if}
	</span>
</span>

<style>
	.math {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: currentColor;
		overflow: visible;
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
		font-weight: 600;
		color: inherit;
	}

	.inner :global(.katex .mord),
	.inner :global(.katex .mop),
	.inner :global(.katex .mbin),
	.inner :global(.katex .mrel),
	.inner :global(.katex .mathnormal),
	.inner :global(.katex .mathit) {
		font-weight: 600;
	}
</style>
