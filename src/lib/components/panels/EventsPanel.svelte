<script lang="ts">
	import { onDestroy } from 'svelte';
	import { eventRegistry, eventRegistryVersion } from '$lib/events/registry';
	import type { EventTypeDefinition, EventInstance } from '$lib/events/types';
	import { eventStore } from '$lib/stores/events';
	import { graphStore } from '$lib/stores/graph';
	import { historyStore } from '$lib/stores/history';
	import { screenToFlow } from '$lib/stores/viewActions';
	import { createHoverDetail } from '$lib/actions/hoverDetail.svelte';
	import EventPreview from '$lib/components/nodes/EventPreview.svelte';

	interface Props {
		onAddEvent?: (type: string) => void;
		ondetailvisible?: (visible: boolean) => void;
		onhoveritem?: (item: EventTypeDefinition | null) => void;
	}

	let { onAddEvent, ondetailvisible, onhoveritem }: Props = $props();

	// Re-derive event types whenever the registry changes (runtime install/uninstall)
	let registryTick = $state(0);
	const unsubscribeRegistry = eventRegistryVersion.subscribe((v) => (registryTick = v));
	const eventTypes = $derived.by(() => {
		void registryTick;
		return eventRegistry.getAll();
	});

	// Track if at root level
	let isAtRoot = $state(true);
	const unsubscribePath = graphStore.currentPath.subscribe((path) => {
		isAtRoot = path.length === 0;
	});

	// Track drag state to prevent click after drag
	let isDragging = $state(false);

	const hover = createHoverDetail<EventTypeDefinition>({
		onChange: (item) => onhoveritem?.(item),
		onVisibleChange: (visible) => ondetailvisible?.(visible)
	});

	onDestroy(() => {
		hover.cleanup();
		unsubscribeRegistry();
		unsubscribePath();
	});

	const handleMouseEnter = (item: EventTypeDefinition) => hover.handleEnter(item);
	const handleMouseLeave = () => hover.handleLeave();
	const hideDetailNow = () => hover.hideNow();

	export const keepDetailAlive = () => hover.keepAlive();
	export const dismissDetail = () => hover.dismiss();

	/**
	 * Add an event at the current level (root or subsystem)
	 */
	function addEventAtCurrentLevel(type: string, position: { x: number; y: number }): void {
		const typeDef = eventRegistry.get(type);
		if (!typeDef) return;

		historyStore.mutate(() => {
			if (isAtRoot) {
				// Root level: use eventStore
				eventStore.addEvent(type, position);
			} else {
				// Subsystem level: use graphStore
				const event: EventInstance = {
					id: crypto.randomUUID(),
					type,
					name: typeDef.name,
					position,
					params: {}
				};
				graphStore.addSubsystemEvent(event);
			}
		});
	}

	// Handle drag start
	function handleDragStart(event: DragEvent, eventType: EventTypeDefinition) {
		hideDetailNow();
		isDragging = true;
		if (event.dataTransfer) {
			event.dataTransfer.setData('application/pathview-event', eventType.type);
			event.dataTransfer.effectAllowed = 'copy';
		}
	}

	// Handle drag end
	function handleDragEnd() {
		setTimeout(() => {
			isDragging = false;
		}, 100);
	}

	// Handle click to add event
	function handleEventClick(eventType: EventTypeDefinition) {
		if (isDragging) return;
		hideDetailNow();
		if (onAddEvent) {
			onAddEvent(eventType.type);
		} else {
			// Default: add at center of viewport
			const position = screenToFlow({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
			addEventAtCurrentLevel(eventType.type, position);
		}
	}
</script>

<div class="events-panel">
	<div class="event-grid-container">
		<div class="tile-grid">
			{#each eventTypes as eventType}
				<button
					class="event-tile"
					draggable={true}
					onmouseenter={() => handleMouseEnter(eventType)}
					onmouseleave={handleMouseLeave}
					ondragstart={(e) => handleDragStart(e, eventType)}
					ondragend={handleDragEnd}
					onclick={() => handleEventClick(eventType)}
				>
					<EventPreview event={eventType} />
				</button>
			{/each}
		</div>
	</div>

</div>

<style>
	.events-panel {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
	}

	.event-grid-container {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		padding: var(--space-md);
		background: var(--surface);
	}

	.tile-grid {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.event-tile {
		background: transparent;
		border: none;
		padding: 0;
		cursor: grab;
		transition: transform var(--transition-fast);
	}

	.event-tile:hover {
		transform: translateY(-2px);
	}

	.event-tile:hover :global(.event-preview) {
		border-color: var(--accent);
		box-shadow: 0 0 0 1px var(--accent);
	}

	.event-tile:active {
		cursor: grabbing;
	}

</style>
