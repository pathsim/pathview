<script lang="ts">
	import { iconRegistry } from '$lib/components/icons/blocks/registry';
	import BlockIcon from '$lib/components/icons/BlockIcon.svelte';
	import { getKatexCssUrl } from '$lib/utils/katexLoader';

	type Kind = 'plot' | 'scope' | 'surface' | 'math' | 'glyph' | 'svg';

	const entries = Object.entries(iconRegistry)
		.map(([blockClass, def]) => ({ blockClass, def }))
		.sort((a, b) => {
			const order: Kind[] = ['plot', 'scope', 'surface', 'math', 'glyph', 'svg'];
			const oa = order.indexOf(a.def.kind);
			const ob = order.indexOf(b.def.kind);
			if (oa !== ob) return oa - ob;
			return a.blockClass.localeCompare(b.blockClass);
		});

	let size = $state(140);
	let color = $state('#1e7fff');
	let bg = $state('#0f1116');
	let filter = $state<'all' | Kind>('all');

	const visible = $derived(filter === 'all' ? entries : entries.filter((e) => e.def.kind === filter));
	const counts = $derived({
		plot: entries.filter((e) => e.def.kind === 'plot').length,
		scope: entries.filter((e) => e.def.kind === 'scope').length,
		surface: entries.filter((e) => e.def.kind === 'surface').length,
		math: entries.filter((e) => e.def.kind === 'math').length,
		glyph: entries.filter((e) => e.def.kind === 'glyph').length,
		svg: entries.filter((e) => e.def.kind === 'svg').length
	});
</script>

<svelte:head>
	<title>Block Icons – Preview</title>
	<link rel="stylesheet" href={getKatexCssUrl()} />
</svelte:head>

<main style="background: {bg};">
	<header>
		<h1>Block Icons ({entries.length})</h1>
		<div class="controls">
			<label>Size <input type="range" min="60" max="320" bind:value={size} /> {size}px</label>
			<label>Color <input type="color" bind:value={color} /></label>
			<label>BG <input type="color" bind:value={bg} /></label>
		</div>
		<div class="filters">
			<button class:active={filter === 'all'} onclick={() => (filter = 'all')}>All ({entries.length})</button>
			<button class:active={filter === 'plot'} onclick={() => (filter = 'plot')}>Plot ({counts.plot})</button>
			<button class:active={filter === 'scope'} onclick={() => (filter = 'scope')}>Scope ({counts.scope})</button>
			<button class:active={filter === 'surface'} onclick={() => (filter = 'surface')}>Surface ({counts.surface})</button>
			<button class:active={filter === 'math'} onclick={() => (filter = 'math')}>Math ({counts.math})</button>
			<button class:active={filter === 'glyph'} onclick={() => (filter = 'glyph')}>Glyph ({counts.glyph})</button>
			<button class:active={filter === 'svg'} onclick={() => (filter = 'svg')}>SVG ({counts.svg})</button>
		</div>
	</header>

	<div class="grid">
		{#each visible as { blockClass, def } (blockClass)}
			<figure>
				<div
					class="icon"
					style="width: {size}px; height: {(size * 2) / 3}px; color: {color};"
				>
					<BlockIcon {blockClass} title={blockClass} />
				</div>
				<figcaption>
					<span class="name">{blockClass}</span>
					<span class="kind kind-{def.kind}">{def.kind}</span>
				</figcaption>
			</figure>
		{/each}
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: system-ui, sans-serif;
	}

	:global(html),
	:global(body) {
		height: auto !important;
		overflow: auto !important;
	}

	:global(.app) {
		height: auto !important;
		overflow: visible !important;
		display: block !important;
	}

	main {
		color: #ddd;
		min-height: 100vh;
		padding: 24px;
	}

	h1 {
		margin: 0 0 12px;
		font-size: 18px;
		font-weight: 600;
	}

	.controls,
	.filters {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		font-size: 12px;
		margin-bottom: 12px;
		align-items: center;
	}

	.controls label {
		display: inline-flex;
		gap: 6px;
		align-items: center;
	}

	.filters {
		margin-bottom: 24px;
	}

	.filters button {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ddd;
		padding: 4px 10px;
		font-size: 11px;
		font-family: ui-monospace, monospace;
		border-radius: 4px;
		cursor: pointer;
	}

	.filters button.active {
		background: rgba(30, 127, 255, 0.25);
		border-color: rgba(30, 127, 255, 0.6);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 20px;
	}

	figure {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
		overflow: visible;
	}

	figcaption {
		display: flex;
		flex-direction: column;
		gap: 2px;
		align-items: center;
	}

	.name {
		font-size: 11px;
		color: #ddd;
		font-family: ui-monospace, monospace;
		text-align: center;
		word-break: break-all;
	}

	.kind {
		font-size: 9px;
		font-family: ui-monospace, monospace;
		padding: 1px 6px;
		border-radius: 3px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.kind-plot { background: rgba(80, 200, 130, 0.2); color: #6dd99a; }
	.kind-scope { background: rgba(80, 180, 200, 0.2); color: #6dc7d9; }
	.kind-surface { background: rgba(220, 130, 180, 0.2); color: #ef9ac6; }
	.kind-math { background: rgba(180, 130, 220, 0.2); color: #c69aef; }
	.kind-glyph { background: rgba(220, 180, 80, 0.2); color: #e6c060; }
	.kind-svg { background: rgba(120, 160, 220, 0.2); color: #90b8ee; }
</style>
