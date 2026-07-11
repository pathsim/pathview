<script lang="ts">
	import type { NodeTypeDefinition } from '$lib/nodes/types';
	import { nodeRegistry, BUILTIN_SOURCE } from '$lib/nodes/registry';
	import { toolboxes } from '$lib/toolbox/store';
	import type { ToolboxConfig } from '$lib/toolbox/types';
	import CanvasBlockPreview from './CanvasBlockPreview.svelte';
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
	<div class="detail-section">
		<div class="section-title section-label">
			<span class="title-text">{node.name}</span>
			{#if toolboxLabel}
				<span class="title-meta">({toolboxLabel})</span>
			{/if}
		</div>
		<div class="detail-preview">
			<CanvasBlockPreview {node} />
		</div>
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

	.detail-section {
		flex-shrink: 0;
		padding: var(--space-md);
		border-bottom: 1px solid var(--border);
	}

	/* Typography from .section-label (app.css component library) */
	.section-title {
		display: flex;
		align-items: baseline;
		gap: var(--space-sm);
		margin-bottom: var(--space-sm);
	}

	.title-text {
		flex-shrink: 0;
	}

	.title-meta {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 400;
		color: var(--text-disabled);
	}

	.detail-preview {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-lg) 0;
	}

	.detail-docs {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: var(--space-md);
		font-size: 11px;
	}
</style>
