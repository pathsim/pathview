<script lang="ts">
	import { onDestroy } from 'svelte';
	import { graphStore } from '$lib/stores/graph';
	import type { SubsystemTreeNode } from '$lib/stores/graph';
	import Icon from '$lib/components/icons/Icon.svelte';
	import SubsystemTreeRow from './SubsystemTreeRow.svelte';

	let tree = $state<SubsystemTreeNode[]>([]);
	let currentPath = $state<string[]>([]);
	let filter = $state('');

	const unsubTree = graphStore.subsystemTree.subscribe((t) => (tree = t));
	const unsubPath = graphStore.currentPath.subscribe((p) => (currentPath = p));
	onDestroy(() => {
		unsubTree();
		unsubPath();
	});

	function pathKey(path: string[]): string {
		return path.join('/');
	}

	function handleNavigate(path: string[]) {
		graphStore.navigateToPath(path);
	}

	const totalCount = $derived.by(() => {
		let n = 0;
		const walk = (nodes: SubsystemTreeNode[]) => {
			for (const node of nodes) {
				n++;
				walk(node.children);
			}
		};
		walk(tree);
		return n;
	});

	// Set of pathKeys whose row should remain visible under the filter.
	// A node is kept if its name matches OR any descendant matches; matching
	// nodes also pull all ancestors into visibility (including the synthetic
	// Root row, key '').
	const filterMatch = $derived.by((): Set<string> | null => {
		const query = filter.trim().toLowerCase();
		if (!query) return null;
		const visible = new Set<string>();
		const walk = (nodes: SubsystemTreeNode[]): boolean => {
			let any = false;
			for (const n of nodes) {
				const selfMatch = n.name.toLowerCase().includes(query);
				const childMatch = walk(n.children);
				if (selfMatch || childMatch) {
					visible.add(pathKey(n.path));
					any = true;
				}
			}
			return any;
		};
		const anyMatch = walk(tree);
		if (anyMatch) visible.add(''); // Root visible whenever anything matches
		return visible;
	});

	function clearFilter() {
		filter = '';
	}

	const hasAnyTree = $derived(tree.length > 0);
	const filterHasResults = $derived(!filterMatch || filterMatch.size > 0);

	// Synthetic root entry so the hierarchy renders as a single tree.
	const rootEntry = $derived<SubsystemTreeNode>({
		id: '__root__',
		name: 'Root',
		path: [],
		children: tree
	});
</script>

<div class="panel">
	<div class="search-container">
		<span class="search-icon"><Icon name="search" size={14} /></span>
		<input
			class="search-input"
			type="text"
			placeholder="Filter subsystems…"
			bind:value={filter}
		/>
		{#if filter}
			<button class="clear-btn" onclick={clearFilter} aria-label="Clear filter">
				<Icon name="x" size={12} />
			</button>
		{/if}
	</div>

	<div class="tree-scroll">
		{#if !hasAnyTree && !filter}
			<div class="root-only">
				<SubsystemTreeRow
					node={rootEntry}
					depth={0}
					siblingContinuesAt={[]}
					isRoot
					{currentPath}
					filterMatch={null}
					onNavigate={handleNavigate}
				/>
				<div class="hint">No subsystems — add one in the canvas.</div>
			</div>
		{:else if !filterHasResults}
			<div class="empty">
				<span>No subsystems found</span>
				<span class="hint">Try a different filter</span>
			</div>
		{:else}
			<div class="tree" role="tree">
				<SubsystemTreeRow
					node={rootEntry}
					depth={0}
					siblingContinuesAt={[]}
					isRoot
					{currentPath}
					{filterMatch}
					onNavigate={handleNavigate}
				/>
			</div>
		{/if}
	</div>

	<div class="footer">
		{totalCount} subsystem{totalCount === 1 ? '' : 's'}
		{#if filterMatch}
			· {filterMatch.size > 0 ? filterMatch.size - 1 : 0} match{(filterMatch.size > 0 ? filterMatch.size - 1 : 0) === 1 ? '' : 'es'}
		{/if}
	</div>
</div>

<style>
	.panel {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 0;
	}

	.search-container {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		height: var(--header-height);
		padding: 0 var(--space-md);
		border-bottom: 1px solid var(--border);
	}

	.search-icon {
		color: var(--text-muted);
		flex-shrink: 0;
		display: inline-flex;
	}

	.search-input {
		flex: 1;
		background: transparent;
		border: none;
		border-radius: 0;
		font-size: var(--font-base);
		color: var(--text);
		outline: none;
		box-shadow: none;
		padding: 0;
	}

	.search-input::placeholder {
		color: var(--text-muted);
	}

	.clear-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		color: var(--text-muted);
		padding: 2px;
		cursor: pointer;
	}

	.clear-btn:hover {
		color: var(--text);
	}

	.tree-scroll {
		flex: 1;
		overflow-y: auto;
		min-height: 0;
		background: var(--surface);
		padding: 4px 0;
	}

	.tree {
		display: flex;
		flex-direction: column;
	}

	.root-only {
		display: flex;
		flex-direction: column;
	}

	.hint {
		padding: 8px 16px;
		color: var(--text-disabled);
		font-size: 11px;
	}

	.empty {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding: var(--space-xl);
		text-align: center;
		color: var(--text-muted);
		font-size: 12px;
	}

	.empty .hint {
		font-size: 10px;
		color: var(--text-disabled);
	}

	.footer {
		flex-shrink: 0;
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border-top: 1px solid var(--border);
		font-size: 10px;
		color: var(--text-disabled);
	}
</style>
