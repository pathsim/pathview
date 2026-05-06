<script lang="ts">
	import type { EventTypeDefinition } from '$lib/events/types';
	import { eventRegistry, BUILTIN_EVENT_SOURCE } from '$lib/events/registry';
	import { toolboxes } from '$lib/toolbox/store';
	import type { ToolboxConfig } from '$lib/toolbox/types';
	import EventPreview from '$lib/components/nodes/EventPreview.svelte';
	import DocumentationSection from '$lib/components/dialogs/shared/DocumentationSection.svelte';

	interface Props {
		event: EventTypeDefinition;
	}

	let { event }: Props = $props();

	let installedToolboxes = $state<ToolboxConfig[]>([]);
	toolboxes.subscribe((list) => (installedToolboxes = list));

	const toolbox = $derived.by(() => {
		const id = eventRegistry.getSource(event.type);
		if (!id || id === BUILTIN_EVENT_SOURCE) return undefined;
		return installedToolboxes.find((t) => t.id === id);
	});

	const toolboxLabel = $derived(
		toolbox ? `${toolbox.displayName}${toolbox.installedVersion ? ` v${toolbox.installedVersion}` : ''}` : null
	);
</script>

<div class="detail-root">
	<div class="detail-section">
		<div class="section-title">
			<span class="title-text">{event.name}</span>
			{#if toolboxLabel}
				<span class="title-meta">({toolboxLabel})</span>
			{/if}
		</div>
		<div class="detail-preview">
			<EventPreview {event} />
		</div>
	</div>

	<div class="detail-docs">
		<DocumentationSection docstringHtml={event.docstringHtml} alwaysExpanded />
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
	}

	.section-title {
		display: flex;
		align-items: baseline;
		gap: var(--space-sm);
		font-size: 10px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--text-muted);
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
	}

	.detail-docs {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: 0 var(--space-md) var(--space-md);
		font-size: 11px;
	}
</style>
