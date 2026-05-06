<script lang="ts">
	import type { NodeTypeDefinition } from '$lib/nodes/types';
	import { nodeRegistry, BUILTIN_SOURCE } from '$lib/nodes/registry';
	import { toolboxes } from '$lib/toolbox/store';
	import type { ToolboxConfig } from '$lib/toolbox/types';
	import NodePreview from '$lib/components/nodes/NodePreview.svelte';
	import DocumentationSection from '$lib/components/dialogs/shared/DocumentationSection.svelte';

	interface Props {
		node: NodeTypeDefinition;
	}

	let { node }: Props = $props();

	let installedToolboxes = $state<ToolboxConfig[]>([]);
	toolboxes.subscribe((list) => (installedToolboxes = list));

	const toolbox = $derived.by(() => {
		const id = nodeRegistry.getSource(node.type);
		if (!id || id === BUILTIN_SOURCE) return undefined;
		return installedToolboxes.find((t) => t.id === id);
	});

	const toolboxLabel = $derived(
		toolbox ? `${toolbox.displayName}${toolbox.installedVersion ? ` v${toolbox.installedVersion}` : ''}` : null
	);
</script>

<div class="detail-root">
	<header class="detail-header">
		<span class="detail-title">{node.name}</span>
		{#if toolboxLabel}
			<span class="toolbox-badge">{toolboxLabel}</span>
		{/if}
	</header>

	<div class="detail-preview">
		<NodePreview {node} />
	</div>

	<div class="detail-docs">
		<DocumentationSection docstring={node.docstring} alwaysExpanded />
	</div>
</div>

<style>
	.detail-root {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
		min-width: 0;
		overflow: hidden;
	}

	.detail-header {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-sm);
		height: var(--header-height);
		padding: 0 var(--space-md);
		background: var(--surface-raised);
		border-bottom: 1px solid var(--border);
		font-size: var(--font-base);
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.detail-title {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.toolbox-badge {
		flex-shrink: 0;
		padding: 1px 6px;
		font-family: var(--font-mono);
		font-size: 9px;
		font-weight: 400;
		color: var(--text-muted);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		text-transform: none;
		letter-spacing: 0;
	}

	.detail-preview {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-md);
	}

	.detail-docs {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: var(--space-md);
		font-size: 11px;
	}
</style>
