<!--
	Block icon gallery (dev/design aid).

	Renders every registered block twice: once at true canvas scale (80×40 node)
	and once enlarged, so icon legibility at real size can be judged directly.
	Blocks without a registry entry are listed explicitly.
-->
<script lang="ts">
	import { nodeRegistry } from '$lib/nodes/registry';
	import BlockIcon, { hasBlockIcon } from '$lib/components/icons/BlockIcon.svelte';
	import { getIconDef } from '$lib/components/icons/blocks/registry';
	import { getKatexCssUrl } from '$lib/utils/katexLoader';

	let theme = $state<'dark' | 'light'>('dark');
	let showMissingOnly = $state(false);

	$effect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	});

	const defs = nodeRegistry.getAll();

	const byCategory = $derived.by(() => {
		const map = new Map<string, typeof defs>();
		for (const d of defs) {
			if (showMissingOnly && hasBlockIcon(d.blockClass)) continue;
			const list = map.get(d.category) ?? [];
			list.push(d);
			map.set(d.category, list);
		}
		for (const list of map.values()) list.sort((a, b) => a.name.localeCompare(b.name));
		return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
	});

	const stats = $derived.by(() => {
		const total = defs.length;
		const withIcon = defs.filter((d) => hasBlockIcon(d.blockClass)).length;
		const kinds = new Map<string, number>();
		for (const d of defs) {
			const k = getIconDef(d.blockClass)?.kind;
			if (k) kinds.set(k, (kinds.get(k) ?? 0) + 1);
		}
		return { total, withIcon, missing: total - withIcon, kinds: Array.from(kinds.entries()) };
	});
</script>

<svelte:head>
	<title>Block Icon Gallery</title>
	<link rel="stylesheet" href={getKatexCssUrl()} />
</svelte:head>

<div class="page">
	<header>
		<h1>Block Icon Gallery</h1>
		<div class="stats">
			<span>{stats.withIcon}/{stats.total} mit Icon</span>
			<span class="missing-count">{stats.missing} ohne</span>
			{#each stats.kinds as [kind, n]}<span class="kind">{kind}: {n}</span>{/each}
		</div>
		<div class="controls">
			<button onclick={() => (theme = theme === 'dark' ? 'light' : 'dark')}>
				{theme === 'dark' ? '☾ dark' : '☀ light'}
			</button>
			<label><input type="checkbox" bind:checked={showMissingOnly} /> nur fehlende</label>
		</div>
	</header>

	{#each byCategory as [category, list]}
		<section>
			<h2>{category} <span class="n">({list.length})</span></h2>
			<div class="grid">
				{#each list as def}
					{@const has = hasBlockIcon(def.blockClass)}
					{@const kind = getIconDef(def.blockClass)?.kind}
					<div class="cell" class:no-icon={!has}>
						<div class="big">
							{#if has}
								<BlockIcon blockClass={def.blockClass} />
							{:else}
								<span class="dash">—</span>
							{/if}
						</div>
						<div class="node-row">
							<!-- true canvas scale: 80×40 block -->
							<div class="node">
								<span class="node-name">{def.name}</span>
								{#if has}
									<div class="node-icon"><BlockIcon blockClass={def.blockClass} /></div>
								{:else}
									<span class="node-type">{def.name}</span>
								{/if}
							</div>
						</div>
						<div class="label">
							<span class="name">{def.name}</span>
							{#if kind}<span class="badge">{kind}</span>{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	/* The app shell (+layout) is a fixed-height flex column with overflow
	 * hidden, so this page has to be its own scroll container. */
	.page {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: 24px 32px 80px;
		background: var(--surface);
		color: var(--text);
		font-family: var(--font-ui);
	}

	header {
		display: flex;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
		position: sticky;
		top: 0;
		background: var(--surface);
		padding: 12px 0;
		border-bottom: 1px solid var(--border);
		z-index: 10;
	}

	h1 {
		font-size: 16px;
		font-weight: 600;
		margin: 0;
	}

	.stats {
		display: flex;
		gap: 12px;
		font-size: 12px;
		color: var(--text-muted);
	}

	.missing-count {
		color: var(--error);
	}

	.kind {
		font-family: var(--font-mono);
	}

	.controls {
		margin-left: auto;
		display: flex;
		gap: 12px;
		align-items: center;
		font-size: 12px;
		color: var(--text-muted);
	}

	.controls button {
		background: var(--surface-raised);
		border: 1px solid var(--border);
		color: var(--text);
		border-radius: 6px;
		padding: 4px 10px;
		font-size: 12px;
		cursor: pointer;
	}

	h2 {
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-muted);
		margin: 32px 0 12px;
	}

	.n {
		font-weight: 400;
		text-transform: none;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 12px;
	}

	.cell {
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.cell.no-icon {
		border-color: color-mix(in srgb, var(--error) 45%, transparent);
		background: var(--error-bg);
	}

	.big {
		width: 120px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent);
	}

	.dash {
		color: var(--error);
		font-size: 20px;
	}

	.node-row {
		display: flex;
		justify-content: center;
	}

	/* Mirrors BaseNode geometry at 1:1 canvas scale */
	.node {
		width: 80px;
		height: 40px;
		border: 1px solid var(--accent);
		border-radius: 6px;
		background: var(--surface-raised);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2px 4px 4px;
		overflow: hidden;
	}

	.node-name {
		font-size: 9px;
		font-weight: 500;
		line-height: 1.2;
		color: var(--text);
	}

	.node-icon {
		flex: 1;
		min-height: 0;
		margin-top: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent);
		width: 100%;
	}

	.node-icon :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}

	.node-type {
		font-size: 8px;
		color: var(--text-muted);
	}

	.label {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
	}

	.name {
		font-size: 11px;
		font-family: var(--font-mono);
		color: var(--text);
		text-align: center;
		word-break: break-word;
	}

	.badge {
		font-size: 9px;
		font-family: var(--font-mono);
		color: var(--text-muted);
		text-transform: uppercase;
	}
</style>
