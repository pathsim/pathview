<script lang="ts" module>
	import { getIconDef, hasBlockIcon as registryHas } from './blocks/registry';

	const svgModules = import.meta.glob('./blocks/svg/*.svg', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	const svgMap = new Map<string, string>();
	for (const [path, raw] of Object.entries(svgModules)) {
		const match = path.match(/\/([^/]+)\.svg$/);
		if (match) svgMap.set(match[1], raw);
	}

	export function hasBlockIcon(blockClass: string | undefined): boolean {
		return registryHas(blockClass);
	}
</script>

<script lang="ts">
	import IconPlot from './blocks/IconPlot.svelte';
	import IconMath from './blocks/IconMath.svelte';
	import IconGlyph from './blocks/IconGlyph.svelte';
	import IconScope from './blocks/IconScope.svelte';
	import IconSurface from './blocks/IconSurface.svelte';

	interface Props {
		blockClass: string | undefined;
		title?: string;
	}

	let { blockClass, title }: Props = $props();
	const def = $derived(getIconDef(blockClass));
	const svgRaw = $derived(def?.kind === 'svg' ? svgMap.get(def.name) : undefined);
</script>

{#if def}
	<span class="block-icon" aria-label={title} role={title ? 'img' : undefined}>
		{#if def.kind === 'plot'}
			<IconPlot
				samples={def.samples()}
				xRange={def.xRange}
				yRange={def.yRange}
				axes={def.axes}
				markers={def.markers}
				decoration={def.decoration}
			/>
		{:else if def.kind === 'scope'}
			<IconScope
				samples={def.samples()}
				samples2={def.samples2?.()}
				yRange={def.yRange}
				gridX={def.gridX}
				gridY={def.gridY}
			/>
		{:else if def.kind === 'surface'}
			<IconSurface fn={def.fn} rows={def.rows} cols={def.cols} />
		{:else if def.kind === 'math'}
			<IconMath latex={def.latex} />
		{:else if def.kind === 'glyph'}
			<IconGlyph text={def.text} size={def.size} />
		{:else if def.kind === 'svg' && svgRaw}
			{@html svgRaw}
		{/if}
	</span>
{/if}

<style>
	.block-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: currentColor;
	}

	.block-icon :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
		color: inherit;
	}
</style>
