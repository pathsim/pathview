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
	<div class="detail-preview">
		<NodePreview {node} />
	</div>

	{#if toolboxLabel}
		<div class="detail-meta">
			<span class="toolbox-badge">{toolboxLabel}</span>
		</div>
	{/if}

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

	.detail-preview {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-md);
	}

	.detail-meta {
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		padding: 0 var(--space-md) var(--space-sm);
	}

	.toolbox-badge {
		padding: 1px 6px;
		font-family: var(--font-mono);
		font-size: 9px;
		font-weight: 400;
		color: var(--text-muted);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
	}

	.detail-docs {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: var(--space-md);
		font-size: 11px;
	}
</style>
