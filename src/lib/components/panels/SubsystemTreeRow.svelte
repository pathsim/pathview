<script lang="ts">
	import type { SubsystemTreeNode } from '$lib/stores/graph';
	import Icon from '$lib/components/icons/Icon.svelte';
	import Self from './SubsystemTreeRow.svelte';

	interface Props {
		node: SubsystemTreeNode;
		depth: number;
		// One entry per indent column (length = depth). True = continue vertical line at that column.
		// At the parent column (index depth - 1) the value also encodes "I'm not the last sibling".
		siblingContinuesAt: boolean[];
		isRoot?: boolean;
		currentPath: string[];
		filterMatch?: Set<string> | null;
		onNavigate: (path: string[]) => void;
	}

	let {
		node,
		depth,
		siblingContinuesAt,
		isRoot = false,
		currentPath,
		filterMatch,
		onNavigate
	}: Props = $props();

	const INDENT = 16;
	const ROW_PAD_LEFT = 10;
	const ICON_HALF = 6;

	const pathKey = $derived(node.path.join('/'));
	const isOnPath = $derived(
		node.path.length <= currentPath.length &&
			node.path.every((id, i) => currentPath[i] === id)
	);
	const isCurrent = $derived(isOnPath && node.path.length === currentPath.length);

	// Filter visibility: keep ancestors and self if anything matches in this subtree.
	const visible = $derived(!filterMatch || filterMatch.has(pathKey));
</script>

{#if visible}
	<button
		type="button"
		class="row"
		class:current={isCurrent}
		class:on-path={isOnPath && !isCurrent}
		style:padding-left="{depth * INDENT + ROW_PAD_LEFT}px"
		onclick={() => onNavigate(node.path)}
		title={node.name}
		aria-current={isCurrent}
	>
		{#each siblingContinuesAt as cont, i}
			{@const isParentCol = i === depth - 1}
			{#if cont || isParentCol}
				<span
					class="guide"
					style:left="{i * INDENT + ROW_PAD_LEFT + ICON_HALF}px"
					style:bottom={cont ? '0' : '50%'}
				></span>
			{/if}
		{/each}

		{#if depth > 0}
			<span
				class="connector"
				style:left="{(depth - 1) * INDENT + ROW_PAD_LEFT + ICON_HALF}px"
				style:width="{INDENT - ICON_HALF - 4}px"
			></span>
		{/if}

		{#if isRoot}
			<span class="icon-slot root-icon">
				<Icon name="home" size={12} />
			</span>
		{:else}
			<span class="icon-slot block-icon">
				<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
					<rect x="1.5" y="1.5" width="9" height="9" rx="2" />
				</svg>
			</span>
		{/if}

		<span class="name">{node.name}</span>

		{#if node.children.length > 0}
			<span class="count">{node.children.length}</span>
		{/if}
	</button>
{/if}

{#each node.children as child, idx (child.id)}
	{@const childIsLast = idx === node.children.length - 1}
	<Self
		node={child}
		depth={depth + 1}
		siblingContinuesAt={[...siblingContinuesAt, !childIsLast]}
		{currentPath}
		{filterMatch}
		{onNavigate}
	/>
{/each}

<style>
	.row {
		position: relative;
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		height: 26px;
		padding-right: 10px;
		background: transparent;
		border: none;
		border-radius: 0;
		color: var(--text-muted);
		font-size: 12px;
		text-align: left;
		cursor: pointer;
	}

	.row:hover {
		background: color-mix(in srgb, var(--text-muted) 8%, transparent);
		color: color-mix(in srgb, var(--text-muted) 80%, var(--text));
	}

	.row.on-path {
		color: color-mix(in srgb, var(--text-muted) 70%, var(--text));
	}

	.row.current {
		background: color-mix(in srgb, var(--accent) 14%, transparent);
		color: var(--accent);
		font-weight: 500;
	}

	.guide {
		position: absolute;
		top: 0;
		width: 1px;
		background: var(--text-muted);
		opacity: 0.55;
		pointer-events: none;
	}

	.connector {
		position: absolute;
		top: 50%;
		height: 1px;
		background: var(--text-muted);
		opacity: 0.55;
		pointer-events: none;
	}

	.icon-slot {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 12px;
		height: 12px;
	}

	.root-icon {
		color: var(--text-muted);
	}

	.row.on-path .root-icon,
	.row.current .root-icon {
		color: currentColor;
	}

	.block-icon svg rect {
		fill: none;
		stroke: var(--text-muted);
		stroke-width: 1.25;
	}

	.row.current .block-icon svg rect {
		stroke: var(--accent);
	}

	.name {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.count {
		flex-shrink: 0;
		font-size: 10px;
		color: var(--text-muted);
	}

	.row.current .count {
		color: var(--accent);
	}
</style>
