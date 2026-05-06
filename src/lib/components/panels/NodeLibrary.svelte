<script lang="ts">
	import { onDestroy } from 'svelte';
	import { nodeRegistry, blockConfig, registryVersion, type NodeCategory, type NodeTypeDefinition } from '$lib/nodes';
	import { NODE_TYPES } from '$lib/constants/nodeTypes';
	import NodePreview from '$lib/components/nodes/NodePreview.svelte';
	import Icon from '$lib/components/icons/Icon.svelte';
	interface Props {
		onAddNode?: (type: string) => void;
		focusSearch?: boolean;
		/** Notifies the parent whenever the detail visibility flips, so it
		 *  can grow the surrounding ResizablePanel by the detail-column
		 *  width. */
		ondetailvisible?: (visible: boolean) => void;
		/** Reports the currently hovered item (or null when none), so the
		 *  parent can render the detail column content on its own. */
		onhoveritem?: (item: NodeTypeDefinition | null) => void;
	}

	let { onAddNode, focusSearch = false, ondetailvisible, onhoveritem }: Props = $props();

	// Registry change counter — read it inside derived blocks so they re-run
	// whenever a toolbox install/uninstall mutates the registry.
	let registryTick = $state(0);
	registryVersion.subscribe((v) => (registryTick = v));

	// Search query
	let searchQuery = $state('');
	let searchInput: HTMLInputElement;

	// Keyboard navigation
	let selectedIndex = $state(-1);

	// Track drag state to prevent click after drag
	let isDragging = $state(false);

	// Drag preview - rendered off-screen, used as drag image
	let dragPreviewNode = $state<NodeTypeDefinition | null>(null);
	let dragPreviewElement: HTMLDivElement;

	// Hover-detail state. The detail content lives in a second column inside
	// the library panel itself. We delay both opening and closing so that
	// brushing past tiles on the way to the detail column doesn't flicker
	// through every block in between.
	const HOVER_OPEN_DELAY = 250;
	const HOVER_SWITCH_DELAY = 200;
	const HOVER_CLOSE_DELAY = 120;
	let hoveredItem = $state<NodeTypeDefinition | null>(null);
	let hoverOpenTimer: ReturnType<typeof setTimeout> | null = null;
	let hoverSwitchTimer: ReturnType<typeof setTimeout> | null = null;
	let hoverCloseTimer: ReturnType<typeof setTimeout> | null = null;

	function clearHoverTimers() {
		if (hoverOpenTimer !== null) {
			clearTimeout(hoverOpenTimer);
			hoverOpenTimer = null;
		}
		if (hoverSwitchTimer !== null) {
			clearTimeout(hoverSwitchTimer);
			hoverSwitchTimer = null;
		}
		if (hoverCloseTimer !== null) {
			clearTimeout(hoverCloseTimer);
			hoverCloseTimer = null;
		}
	}

	onDestroy(clearHoverTimers);

	// Collapsed categories
	let collapsedCategories = $state<Set<string>>(new Set());

	function toggleCategory(category: string) {
		collapsedCategories = new Set(collapsedCategories);
		if (collapsedCategories.has(category)) {
			collapsedCategories.delete(category);
		} else {
			collapsedCategories.add(category);
		}
	}

	// Built-in category order from blockConfig + Subsystem (registered separately).
	// Runtime-added categories are appended in registration order after these.
	const builtInCategoryOrder: NodeCategory[] = [...(Object.keys(blockConfig) as NodeCategory[]), 'Subsystem'];

	// Filter nodes based on search and context. Read registryTick so the
	// derived re-runs whenever the registry changes (toolbox install/uninstall).
	const filteredNodes = $derived(() => {
		// Touch the tick to register the dependency
		void registryTick;
		let nodes = nodeRegistry.getAll().filter((node) => node.type !== NODE_TYPES.INTERFACE);

		if (!searchQuery.trim()) return nodes;
		const query = searchQuery.toLowerCase();
		return nodes.filter(
			(node) =>
				node.name.toLowerCase().includes(query) ||
				node.category.toLowerCase().includes(query) ||
				node.description.toLowerCase().includes(query)
		);
	});

	// Group by category (ordered). Built-in categories first, then any
	// runtime-introduced categories appended in alphabetical order.
	const groupedNodes = $derived(() => {
		const groups = new Map<NodeCategory, NodeTypeDefinition[]>();
		for (const node of filteredNodes()) {
			if (!groups.has(node.category)) groups.set(node.category, []);
			groups.get(node.category)!.push(node);
		}
		const ordered = new Map<NodeCategory, NodeTypeDefinition[]>();
		for (const cat of builtInCategoryOrder) {
			if (groups.has(cat)) ordered.set(cat, groups.get(cat)!);
		}
		const remaining = Array.from(groups.keys()).filter((c) => !builtInCategoryOrder.includes(c));
		remaining.sort((a, b) => a.localeCompare(b));
		for (const cat of remaining) ordered.set(cat, groups.get(cat)!);
		return ordered;
	});

	// Flat list for keyboard navigation
	const flatNodes = $derived(() => {
		const result: NodeTypeDefinition[] = [];
		for (const [, nodes] of groupedNodes()) {
			result.push(...nodes);
		}
		return result;
	});

	// Handle mouse enter to prepare drag preview and schedule detail open.
	function handleMouseEnter(node: NodeTypeDefinition) {
		dragPreviewNode = node;
		scheduleShowDetail(node);
	}

	function handleMouseLeave() {
		scheduleHideDetail();
	}

	function scheduleShowDetail(node: NodeTypeDefinition) {
		// Cancel pending close — we're hovering something again.
		if (hoverCloseTimer !== null) {
			clearTimeout(hoverCloseTimer);
			hoverCloseTimer = null;
		}
		// Already showing this exact item — drop any in-flight switch so
		// it doesn't replace us with itself.
		if (hoveredItem === node) {
			if (hoverSwitchTimer !== null) {
				clearTimeout(hoverSwitchTimer);
				hoverSwitchTimer = null;
			}
			return;
		}
		// Detail is open on a different item: schedule a switch. Brushing
		// past tiles on the way to the detail column won't flip content
		// because the cursor leaves before this timer fires.
		if (hoveredItem !== null) {
			if (hoverSwitchTimer !== null) clearTimeout(hoverSwitchTimer);
			hoverSwitchTimer = setTimeout(() => {
				hoverSwitchTimer = null;
				hoveredItem = node;
				onhoveritem?.(node);
			}, HOVER_SWITCH_DELAY);
			return;
		}
		// First-time open: wait a moment so brushing past tiles doesn't
		// flash a detail.
		if (hoverOpenTimer !== null) clearTimeout(hoverOpenTimer);
		hoverOpenTimer = setTimeout(() => {
			hoverOpenTimer = null;
			hoveredItem = node;
			onhoveritem?.(node);
			ondetailvisible?.(true);
		}, HOVER_OPEN_DELAY);
	}

	function scheduleHideDetail() {
		// Cancel pending open / switch — user moved off before we'd commit.
		if (hoverOpenTimer !== null) {
			clearTimeout(hoverOpenTimer);
			hoverOpenTimer = null;
		}
		if (hoverSwitchTimer !== null) {
			clearTimeout(hoverSwitchTimer);
			hoverSwitchTimer = null;
		}
		if (hoveredItem === null) return;
		if (hoverCloseTimer !== null) clearTimeout(hoverCloseTimer);
		hoverCloseTimer = setTimeout(() => {
			hoverCloseTimer = null;
			hoveredItem = null;
			onhoveritem?.(null);
			ondetailvisible?.(false);
		}, HOVER_CLOSE_DELAY);
	}

	function hideDetailNow() {
		clearHoverTimers();
		const wasShown = hoveredItem !== null;
		hoveredItem = null;
		if (wasShown) {
			onhoveritem?.(null);
			ondetailvisible?.(false);
		}
	}

	/** Called from the parent when the cursor enters the detail column —
	 *  cancel any pending dismiss / switch so the column stays open and
	 *  doesn't swap content from a transient last-tile hover. */
	export function keepDetailAlive() {
		if (hoverCloseTimer !== null) {
			clearTimeout(hoverCloseTimer);
			hoverCloseTimer = null;
		}
		if (hoverSwitchTimer !== null) {
			clearTimeout(hoverSwitchTimer);
			hoverSwitchTimer = null;
		}
	}

	/** Called from the parent when the cursor leaves the detail column —
	 *  schedule the same delayed dismiss as a tile mouseleave. */
	export function dismissDetail() {
		scheduleHideDetail();
	}

	// Handle drag start
	function handleDragStart(event: DragEvent, nodeType: NodeTypeDefinition) {
		hideDetailNow();
		isDragging = true;
		if (event.dataTransfer) {
			event.dataTransfer.setData('application/pathview-node', nodeType.type);
			event.dataTransfer.effectAllowed = 'copy';

			// Use the pre-rendered preview as drag image, centered on cursor
			if (dragPreviewElement) {
				const rect = dragPreviewElement.getBoundingClientRect();
				event.dataTransfer.setDragImage(
					dragPreviewElement,
					rect.width / 2,
					rect.height / 2
				);
			}
		}
	}

	// Handle drag end
	function handleDragEnd() {
		// Reset after a short delay to prevent click from firing
		setTimeout(() => {
			isDragging = false;
			dragPreviewNode = null;
		}, 100);
	}

	// Handle click to add node (only if not dragging)
	function handleNodeClick(node: NodeTypeDefinition) {
		if (isDragging) return;
		hideDetailNow();
		if (onAddNode) {
			onAddNode(node.type);
		}
	}

	// Handle keyboard navigation
	function handleKeydown(event: KeyboardEvent) {
		const nodes = flatNodes();

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			selectedIndex = Math.min(selectedIndex + 1, nodes.length - 1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			selectedIndex = Math.max(selectedIndex - 1, -1);
		} else if (event.key === 'Enter' && selectedIndex >= 0) {
			event.preventDefault();
			const node = nodes[selectedIndex];
			if (node && onAddNode) {
				onAddNode(node.type);
			}
		} else if (event.key === 'Escape') {
			if (searchQuery) {
				// First Escape: clear search
				searchQuery = '';
				selectedIndex = -1;
				event.stopPropagation();
			} else {
				// Second Escape: unfocus search input
				searchInput?.blur();
			}
		}
	}

	// Reset selection when search changes
	$effect(() => {
		searchQuery; // dependency
		selectedIndex = searchQuery ? 0 : -1;
	});

	// Focus search input when requested
	$effect(() => {
		if (focusSearch && searchInput) {
			searchInput.focus();
		}
	});

	// Check if node is selected
	function isSelected(node: NodeTypeDefinition): boolean {
		const nodes = flatNodes();
		return nodes[selectedIndex]?.type === node.type;
	}

	// Export focus method
	export function focus() {
		searchInput?.focus();
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="node-library" onkeydown={handleKeydown}>
	<div class="search-container">
		<span class="search-icon"><Icon name="search" size={14} /></span>
		<input
			bind:this={searchInput}
			type="text"
			placeholder="Search nodes..."
			bind:value={searchQuery}
			class="search-input"
		/>
		{#if searchQuery}
			<button class="clear-btn" onclick={() => (searchQuery = '')}><Icon name="x" size={12} /></button>
		{/if}
	</div>

	<div class="node-grid-container">
		{#each Array.from(groupedNodes().entries()) as [category, nodes]}
			<div class="category">
				<button class="category-header" onclick={() => toggleCategory(category)}>
					<span class="chevron" class:expanded={!collapsedCategories.has(category)}>
						<Icon name="chevron-right" size={12} />
					</span>
					<span class="category-name">{category}</span>
				</button>
				{#if !collapsedCategories.has(category)}
					<div class="tile-grid">
						{#each nodes as node}
							<button
								class="node-tile"
								class:selected={isSelected(node)}
								draggable="true"
								onmouseenter={() => handleMouseEnter(node)}
								onmouseleave={handleMouseLeave}
								ondragstart={(e) => handleDragStart(e, node)}
								ondragend={handleDragEnd}
								onclick={() => handleNodeClick(node)}
							>
								<NodePreview {node} />
							</button>
						{/each}
					</div>
				{/if}
			</div>
		{:else}
			<div class="empty">
				<span>No nodes found</span>
				<span class="hint">Try "gain", "source", or "plot"</span>
			</div>
		{/each}
	</div>

	<div class="footer">
		<span>Click or drag to add</span>
		<span>↑↓ Enter</span>
	</div>

	<!-- Hidden drag preview container (rendered off-screen, used as drag image) -->
	<div class="drag-preview-container" aria-hidden="true">
		{#if dragPreviewNode}
			<div bind:this={dragPreviewElement} class="drag-preview-wrapper">
				<NodePreview node={dragPreviewNode} />
			</div>
		{/if}
	</div>
</div>

<style>
	.node-library {
		display: flex;
		flex-direction: column;
		flex: 1;
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

	.node-grid-container {
		flex: 1;
		overflow-y: auto;
		min-height: 0;
		padding: var(--space-md);
		background: var(--surface);
	}

	.category {
		margin-bottom: var(--space-lg);
	}

	.category-header {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		width: 100%;
		padding: var(--space-xs) 0;
		margin-bottom: var(--space-sm);
		font-size: 10px;
		font-weight: 600;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.5px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.category-header:hover {
		color: var(--text);
	}

	.category-header .chevron {
		display: flex;
		transition: transform var(--transition-fast);
		flex-shrink: 0;
	}

	.category-header .chevron.expanded {
		transform: rotate(90deg);
	}

	.category-header .category-name {
		flex: 1;
	}

	.tile-grid {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.node-tile {
		background: transparent;
		border: none;
		padding: 0;
		cursor: grab;
		transition: transform var(--transition-fast);
	}

	.node-tile:hover {
		transform: translateY(-2px);
	}

	.node-tile:hover :global(.node-preview) {
		border-color: var(--accent);
		box-shadow: 0 0 0 1px var(--accent);
	}

	.node-tile.selected :global(.node-preview) {
		border-color: var(--accent);
		box-shadow: 0 0 0 2px var(--accent);
	}

	.node-tile:active {
		cursor: grabbing;
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
		display: flex;
		justify-content: space-between;
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border-top: 1px solid var(--border);
		font-size: 10px;
		color: var(--text-disabled);
	}

	/* Hidden container for drag preview image */
	.drag-preview-container {
		position: fixed;
		left: -9999px;
		top: -9999px;
		pointer-events: none;
	}

	.drag-preview-wrapper {
		display: inline-block;
	}
</style>
