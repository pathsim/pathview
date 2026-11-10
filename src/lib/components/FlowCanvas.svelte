<script lang="ts">
	import { get } from 'svelte/store';
	import { onDestroy, untrack } from 'svelte';
	import {
		SvelteFlow,
		Background,
		BackgroundVariant,
		type Node,
		type Edge,
		type Connection as FlowConnection,
		type NodeTypes,
		type EdgeTypes
	} from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';

	import { isInputFocused } from '$lib/utils/focus';
	import { isTourActive } from '$lib/tours/inputMode';
	import BaseNode from './nodes/BaseNode.svelte';
	import EventNode from './nodes/EventNode.svelte';
	import AnnotationNode from './nodes/AnnotationNode.svelte';
	import OrthogonalEdge from './edges/OrthogonalEdge.svelte';
	import FlowUpdater from './FlowUpdater.svelte';
	import { graphStore } from '$lib/stores/graph';
	import { eventStore, setEventSelection } from '$lib/stores/events';
	import { selectedNodeIds as graphSelectedNodeIds } from '$lib/stores/graph/state';
	import { historyStore } from '$lib/stores/history';
	import { routingStore } from '$lib/stores/routing';
	import type { Bounds } from '$lib/routing';
	import type { Position } from '$lib/types/common';
	import { themeStore, type Theme } from '$lib/stores/theme';
	import { clearSelectionTrigger, nudgeTrigger, selectNodeTrigger, registerHasSelection, triggerFitView } from '$lib/stores/viewActions';
	import { screenToFlow } from '$lib/utils/viewUtils';
	import { dropTargetBridge } from '$lib/stores/dropTargetBridge';
	import { contextMenuStore } from '$lib/stores/contextMenu';
	import { nodeUpdatesStore } from '$lib/stores/nodeUpdates';
	import { assemblyAnimationTrigger } from '$lib/animation/assemblyAnimation';
		import { nodeRegistry, registryVersion } from '$lib/nodes';
	import { NODE_TYPES } from '$lib/constants/nodeTypes';
	import { GRID_SIZE, SNAP_GRID, BACKGROUND_GAP } from '$lib/constants/grid';
	import { createRoutingSync } from './canvas/routingSync';
	import { isBusBlock } from '$lib/bus/expand';
	import { busWireAllowed, updateBusView } from '$lib/stores/busView.svelte';
	import { endConnectionDrag, startConnectionDrag } from '$lib/stores/connectionDrag.svelte';
	import { HANDLE_ID } from '$lib/constants/handles';
	import BusBlockNode from './nodes/BusBlockNode.svelte';
	import { createEdgeHighlighter } from '$lib/stores/edgeHighlight';
	import { CANVAS_MIN_ZOOM } from '$lib/constants/layout';
	import { shallowEqualArray, shallowEqualRecord } from '$lib/utils/shallowEqual';
	import type { NodeInstance, Connection, Annotation, PortInstance } from '$lib/nodes/types';
	import type { EventInstance } from '$lib/events/types';

	// Canvas utilities
	import {
		toFlowEdge,
		toEventNode,
		toAnnotationNode,
		isBlockFlowNode,
		rotateSelectedNodes,
		flipSelectedNodesHorizontal,
		flipSelectedNodesVertical,
		findFirstAvailableInputPort
	} from './canvas';

	interface Props {
		/** Render as a non-interactive preview: no editing, selection,
		 *  keyboard shortcuts, context menus or pan/zoom; auto-fits the view. */
		readonly?: boolean;
	}
	let { readonly = false }: Props = $props();

	// Theme for SvelteFlow
	let colorMode = $state<Theme>('dark');
	const unsubscribeTheme = themeStore.subscribe((theme) => {
		colorMode = theme;
	});

	// Debounced routing context update — coalesces rapid connection changes
	// (e.g. paste, undo, bulk delete) into a single recalculation
	let routingContextTimer: ReturnType<typeof setTimeout> | null = null;
	function scheduleRoutingUpdate() {
		if (routingContextTimer !== null) clearTimeout(routingContextTimer);
		routingContextTimer = setTimeout(() => {
			routingContextTimer = null;
			routingSync.syncAll();
		}, 0);
	}

	// Track mouse position for waypoint placement
	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(event: MouseEvent) {
		mousePosition = { x: event.clientX, y: event.clientY };
	}

	// Keyboard shortcuts for node manipulation
	function handleKeydown(event: KeyboardEvent) {
		// While a guided tour runs, driver.js owns the keyboard.
		if (isTourActive()) return;
		if (isInputFocused(event)) return;

		// Handle Delete key (SvelteFlow's deleteKeyCode doesn't work reliably for 'Delete')
		if (event.key === 'Delete') {
			const selectedNodes = nodes.filter(n => n.selected);
			const selectedEdges = edges.filter(e => e.selected);
			if (selectedNodes.length > 0 || selectedEdges.length > 0) {
				event.preventDefault();
				handleDelete({ nodes: selectedNodes, edges: selectedEdges });
			}
			return;
		}

		// Handle backslash key - add waypoint to selected edge
		if (event.key === '\\') {
			const selectedEdge = edges.find(e => e.selected);
			if (selectedEdge) {
				event.preventDefault();
				// Convert screen position to flow coordinates
				const flowPos = screenToFlow(mousePosition);
				// Snap to grid
				const gridSize = 10;
				const snappedX = Math.round(flowPos.x / gridSize) * gridSize;
				const snappedY = Math.round(flowPos.y / gridSize) * gridSize;
				routingStore.addUserWaypoint(selectedEdge.id, { x: snappedX, y: snappedY });
			}
			return;
		}

		const hasSelection = nodes.some((n) => n.selected);
		if (!hasSelection) return;

		let updatedNodes: string[] = [];

		if (event.key === 'r' || event.key === 'R') {
			event.preventDefault();
			updatedNodes = rotateSelectedNodes(nodes);
		} else if (event.key === 'x' || event.key === 'X') {
			event.preventDefault();
			updatedNodes = flipSelectedNodesHorizontal(nodes);
		} else if (event.key === 'y' || event.key === 'Y') {
			event.preventDefault();
			updatedNodes = flipSelectedNodesVertical(nodes);
		}

		if (updatedNodes.length > 0) {
			pendingNodeUpdates = [...updatedNodes];
			// Report rotated/flipped nodes to routing after FlowUpdater processes
			setTimeout(() => routingSync.syncNodes(updatedNodes), 0);
		}
	}

	// Track port counts to detect changes - used to force node re-renders
	let portCounts = new Map<string, { inputs: number; outputs: number }>();

	/** Port names by position; Interface ports are derived anew on every read, so references can't be compared */
	const samePortNames = (a: PortInstance[], b: PortInstance[]) =>
		a.length === b.length && a.every((port, i) => port.name === b[i].name);

	// Track nodes that need internal updates (will be processed by FlowUpdater)
	let pendingNodeUpdates: string[] = $state([]);

	// Subscribe to external node updates (e.g., from context menu rotation)
	const unsubscribeNodeUpdates = nodeUpdatesStore.subscribe((updates) => {
		if (updates.length > 0) {
			pendingNodeUpdates = [...pendingNodeUpdates, ...updates];
			nodeUpdatesStore.clear();
		}
	});

	// Register hasSelection function so +page.svelte can check SvelteFlow's selection state
	registerHasSelection(() => nodes.some(n => n.selected));

	// Subscribe to clear selection trigger - clears selection in SvelteFlow's nodes and edges
	let lastClearSelectionTrigger = 0;
	const unsubscribeClearSelection = clearSelectionTrigger.subscribe((trigger) => {
		if (trigger > lastClearSelectionTrigger) {
			lastClearSelectionTrigger = trigger;
			// Clear selection on all nodes and edges
			nodes = nodes.map(n => ({ ...n, selected: false }));
			edges = edges.map(e => ({ ...e, selected: false }));
			// Also clear store selection state using direct setters
			graphSelectedNodeIds.set(new Set());
			setEventSelection(new Set());
		}
	});

	// Subscribe to nudge trigger - nudges all selected nodes and syncs to stores
	let lastNudgeTrigger = 0;
	const unsubscribeNudge = nudgeTrigger.subscribe((trigger) => {
		if (trigger.id > lastNudgeTrigger) {
			lastNudgeTrigger = trigger.id;
			const delta = { x: trigger.x, y: trigger.y };

			// Update positions in SvelteFlow's nodes array
			nodes = nodes.map(n => {
				if (n.selected) {
					return { ...n, position: { x: n.position.x + delta.x, y: n.position.y + delta.y } };
				}
				return n;
			});

			// Sync positions to appropriate stores (as a single undoable action)
			historyStore.mutate(() => {
				nodes.forEach(n => {
					if (n.selected) {
						if (n.type === 'eventNode') {
							if (graphStore.isAtRoot()) {
								eventStore.updateEventPosition(n.id, n.position);
							} else {
								graphStore.updateSubsystemEventPosition(n.id, n.position);
							}
						} else if (n.type === 'annotation') {
							graphStore.updateAnnotationPosition(n.id, n.position);
						} else {
							graphStore.updateNodePosition(n.id, n.position);
						}
					}
				});
			});
		}
	});

	// Subscribe to select node trigger - selects specific nodes in SvelteFlow
	let lastSelectNodeTrigger = 0;
	const unsubscribeSelectNode = selectNodeTrigger.subscribe((trigger) => {
		if (trigger.id > lastSelectNodeTrigger) {
			lastSelectNodeTrigger = trigger.id;
			const nodeIdsToSelect = new Set(trigger.nodeIds);

			// Update selection in SvelteFlow's nodes array
			nodes = nodes.map(n => {
				if (nodeIdsToSelect.has(n.id)) {
					return { ...n, selected: true };
				} else if (!trigger.addToSelection) {
					return { ...n, selected: false };
				}
				return n;
			});

			// Clear edge selection when selecting nodes
			if (!trigger.addToSelection) {
				edges = edges.map(e => ({ ...e, selected: false }));
			}

			// Sync to stores - note: we update stores directly here to avoid triggering again
			syncSelectionToStores();
		}
	});

	// Helper to sync SvelteFlow selection state to stores
	// Uses direct setters to avoid triggering the selection trigger (which would loop)
	function syncSelectionToStores() {
		const selectedNodes = nodes.filter(n => n.selected);

		// Build sets of selected IDs by type
		const selectedBlockIds = new Set<string>();
		const selectedEventIdSet = new Set<string>();

		selectedNodes.forEach((node) => {
			if (node.type === 'eventNode') {
				selectedEventIdSet.add(node.id);
			} else if (node.type !== 'annotation') {
				selectedBlockIds.add(node.id);
			}
		});

		// Update stores directly (bypasses trigger-based functions)
		graphSelectedNodeIds.set(selectedBlockIds);
		setEventSelection(selectedEventIdSet);
	}

	// Cleanup function - will add subscriptions as they're defined
	const cleanups: (() => void)[] = [unsubscribeTheme, unsubscribeNodeUpdates, unsubscribeClearSelection, unsubscribeNudge, unsubscribeSelectNode];
	onDestroy(() => {
		cleanups.forEach(fn => fn());
		if (routingContextTimer !== null) clearTimeout(routingContextTimer);
	});

	function clearPendingUpdates() {
		pendingNodeUpdates = [];
	}

	// Routing: the scene is diffed here and routed by the routing engine in a worker
	const routingSync = createRoutingSync({
		blockNodes: () => nodes.filter(isBlockFlowNode),
		node: (id) => nodeMap.get(id),
		connections: () => get(graphStore.connections),
		visibleBounds
	});

	// Visible canvas area in flow coordinates
	function visibleBounds(): Bounds | null {
		if (!canvasEl) return null;
		const rect = canvasEl.getBoundingClientRect();
		const topLeft = screenToFlow({ x: rect.left, y: rect.top });
		const bottomRight = screenToFlow({ x: rect.right, y: rect.bottom });
		return { x: topLeft.x, y: topLeft.y, width: bottomRight.x - topLeft.x, height: bottomRight.y - topLeft.y };
	}

	// Custom node types - will add more for different shapes
	const nodeTypes: NodeTypes = {
		pathview: BaseNode,
		busBlock: BusBlockNode,
		eventNode: EventNode,
		annotation: AnnotationNode
	};

	// Custom edge types - orthogonal routing with arrow
	const edgeTypes: EdgeTypes = {
		orthogonal: OrthogonalEdge
	};

	// SvelteFlow state - this is the source of truth for visual state
	// Block nodes from graphStore
	// Raw state (no deep proxies): arrays and objects are replaced, never mutated
	let blockNodes = $state.raw<Node[]>([]);
	// Event nodes from eventStore
	let eventNodes = $state.raw<Node[]>([]);
	// Annotation nodes from graphStore
	let annotationNodes = $state.raw<Node[]>([]);
	// Combined nodes for SvelteFlow
	let nodes = $state.raw<Node[]>([]);
	let edges = $state.raw<Edge[]>([]);
	// O(1) node lookup map — kept in sync with nodes array via $effect
	let nodeMap = $derived(new Map(nodes.map(n => [n.id, n])));

	// Merge block, event, and annotation nodes when any changes
	// Preserve position and selection from SvelteFlow's current state (except during undo/redo)
	$effect(() => {
		const currentNodes = untrack(() => new Map(nodes.map(n => [n.id, n])));
		const restoring = historyStore.isRestoringState();

		nodes = [...blockNodes, ...eventNodes, ...annotationNodes].map(n => {
			const existing = currentNodes.get(n.id);
			if (existing && !restoring) {
				// Preserve SvelteFlow-managed state (position during drag, selection)
				return { ...n, position: existing.position, selected: existing.selected };
			}
			return n;
		});
	});

	// Report measured block sizes to routing: the first measurement after mount and
	// later changes (icon-mode toggle, pinned params, name length, port labels)
	const lastMeasuredDims = new Map<string, { w: number; h: number }>();
	$effect(() => {
		const changed = new Set<string>();
		for (const node of nodes) {
			if (!isBlockFlowNode(node)) continue;
			const w = node.measured?.width;
			const h = node.measured?.height;
			if (w === undefined || h === undefined) continue;
			const last = lastMeasuredDims.get(node.id);
			if (!last || last.w !== w || last.h !== h) {
				changed.add(node.id);
				lastMeasuredDims.set(node.id, { w, h });
			}
		}
		if (changed.size > 0) untrack(() => routingSync.syncNodes(changed));
	});

	// On model load, resync once the assembly animation has settled all measurements
	let lastAssemblyTrigger = 0;
	const unsubAssembly = assemblyAnimationTrigger.subscribe((v) => {
		if (v > lastAssemblyTrigger) {
			lastAssemblyTrigger = v;
			setTimeout(() => routingSync.syncAll(), 400);
		}
	});
	onDestroy(() => unsubAssembly());

	// Track if we're currently syncing to prevent loops
	let isSyncing = false;

	// Track if initial load is complete (positions from graph store should be used until first render)
	let initialLoadComplete = false;

	// Track previous node IDs to detect deletions via binding
	let prevNodeIds = new Set<string>();

	// Watch for node deletions (SvelteFlow updates nodes via binding, not always via callback)
	// Only delete nodes that are truly gone - not just filtered out by subsystem navigation
	$effect(() => {
		const currentNodeIds = new Set(nodes.map(n => n.id));

		// Find nodes that disappeared from view
		const disappearedIds = [...prevNodeIds].filter(id => !currentNodeIds.has(id));

		if (disappearedIds.length > 0 && !isSyncing) {
			isSyncing = true;
			// Only remove if the node is truly deleted (not in full store)
			// Nodes that are just filtered out by navigation should NOT be removed
			disappearedIds.forEach(id => {
				const stillInGraphStore = graphStore.getNode(id);
				const stillInEventStore = eventStore.getEvent(id);
				if (!stillInGraphStore && !stillInEventStore) {
					// Node was actually deleted by SvelteFlow, clean up
					portCounts.delete(id);
				}
			});
			isSyncing = false;
		}

		// Update previous node IDs
		prevNodeIds = currentNodeIds;
	});

	// Sync annotation dimensions when NodeResizer updates them
	$effect(() => {
		if (isSyncing) return;
		nodes.forEach(node => {
			if (node.type === 'annotation' && node.width && node.height) {
				const annotation = graphStore.getAnnotation(node.id);
				if (annotation && (annotation.width !== node.width || annotation.height !== node.height)) {
					isSyncing = true;
					graphStore.updateAnnotation(node.id, {
						width: node.width,
						height: node.height
					});
					isSyncing = false;
				}
			}
		});
	});

	// Subscribe to current nodes (filtered by current navigation context)
	cleanups.push(graphStore.nodes.subscribe((graphNodesMap: Map<string, NodeInstance>) => {
		if (isSyncing) return;

		// Convert Map to array for processing — exclude nodes hidden via `_hidden`
		// param. Hidden nodes stay in the store (simulation still uses them) but
		// disappear from the canvas; toggling `_hidden` triggers this subscriber
		// again so they come back the same way they were removed.
		const filteredGraphNodes = Array.from(graphNodesMap.values()).filter(
			(n) => !n.params?.['_hidden']
		);

		// Track nodes that need handle updates (port count changed)
		const nodesToUpdate: string[] = [];

		// Create a map of current nodes for quick lookup
		const currentNodesMap = new Map(nodes.map(n => [n.id, n]));

		// Find nodes to add, update, or remove
		const newNodeIds = new Set(filteredGraphNodes.map(n => n.id));
		const currentNodeIds = new Set(nodes.map(n => n.id));

		// Check if there are actual changes
		const hasAdditions = filteredGraphNodes.some(gn => !currentNodeIds.has(gn.id));
		const hasRemovals = nodes.some(n => !newNodeIds.has(n.id));
		const hasDataChanges = filteredGraphNodes.some(gn => {
			const current = currentNodesMap.get(gn.id);
			if (!current) return false;
			const currentData = current.data as NodeInstance;
			// Check if data actually changed (params, ports, name, color, pinnedParams)
			const prevCounts = portCounts.get(gn.id);
			const newCounts = { inputs: gn.inputs.length, outputs: gn.outputs.length };
			if (prevCounts && (prevCounts.inputs !== newCounts.inputs || prevCounts.outputs !== newCounts.outputs)) {
				return true;
			}
			if (currentData.name !== gn.name) return true;
			if (currentData.color !== gn.color) return true;
			if (!samePortNames(currentData.inputs, gn.inputs) || !samePortNames(currentData.outputs, gn.outputs)) return true;
			if (!shallowEqualRecord(currentData.params, gn.params)) return true;
			if (!shallowEqualArray(currentData.pinnedParams, gn.pinnedParams)) return true;
			return false;
		});

		// Only rebuild if there are actual changes
		if (!hasAdditions && !hasRemovals && !hasDataChanges && initialLoadComplete) {
			return;
		}

		// Build updated nodes array, preserving existing node objects where possible
		const updatedNodes = filteredGraphNodes.map((graphNode) => {
			const existingNode = currentNodesMap.get(graphNode.id);

			// Check if port counts changed
			const prevCounts = portCounts.get(graphNode.id);
			const newCounts = { inputs: graphNode.inputs.length, outputs: graphNode.outputs.length };

			if (prevCounts && (prevCounts.inputs !== newCounts.inputs || prevCounts.outputs !== newCounts.outputs)) {
				nodesToUpdate.push(graphNode.id);
			}
			portCounts.set(graphNode.id, newCounts);

			// Check if rotation changed - need to update internals for handle positions
			if (existingNode) {
				const existingData = existingNode.data as NodeInstance;
				const oldRotation = existingData?.params?.['_rotation'] ?? 0;
				const newRotation = graphNode.params?.['_rotation'] ?? 0;
				if (oldRotation !== newRotation) {
					nodesToUpdate.push(graphNode.id);
				}
			}

			// Use store position when restoring (undo/redo), otherwise preserve existing position
			const position = (existingNode && !historyStore.isRestoringState())
				? existingNode.position
				: { ...graphNode.position };

			// Interface blocks are not deletable
			const isInterface = graphNode.type === NODE_TYPES.INTERFACE;

			// Don't set explicit width/height - let SvelteFlow auto-measure from DOM
			// BaseNode controls its size via CSS, SvelteFlow reads it via updateNodeInternals

			// If node exists, update data but don't preserve selection here
			// Selection is managed by SvelteFlow, trigger subscriptions, and merge effect
			if (existingNode) {
				return {
					id: existingNode.id,
					type: existingNode.type,
					position,
					data: graphNode,
					// Explicit center origin for correct bounds calculation
					origin: [0.5, 0.5] as [number, number],
					selectable: existingNode.selectable,
					draggable: existingNode.draggable,
					deletable: !isInterface
					// NOTE: selected is intentionally NOT preserved here to avoid stale selection
				} as Node<NodeInstance>;
			}

			// New node
			return {
				id: graphNode.id,
				type: isBusBlock(graphNode) ? 'busBlock' : 'pathview',
				position,
				data: graphNode,
				// Explicit center origin for correct bounds calculation
				origin: [0.5, 0.5] as [number, number],
				selectable: true,
				draggable: true,
				deletable: !isInterface
			} as Node<NodeInstance>;
		});

		// Clean up port counts for removed nodes
		for (const id of portCounts.keys()) {
			if (!newNodeIds.has(id)) {
				portCounts.delete(id);
			}
		}

		blockNodes = updatedNodes;
		// Routing obstacles follow added and removed blocks
		scheduleRoutingUpdate();

		// Queue node internal updates for nodes with changed ports/rotation
		if (nodesToUpdate.length > 0) {
			pendingNodeUpdates = [...nodesToUpdate];
			// Report affected nodes to routing after FlowUpdater processes
			setTimeout(() => routingSync.syncNodes(nodesToUpdate), 0);
		}

		// Mark initial load as complete after first non-empty sync
		if (filteredGraphNodes.length > 0 && !initialLoadComplete) {
			setTimeout(() => {
				initialLoadComplete = true;
			}, 100);
		}
	}));

	// Track current path and events
	let currentPath: string[] = [];
	let rootEvents: EventInstance[] = [];
	let subsystemEvents: EventInstance[] = [];

	// Update event nodes - show root events at root, subsystem events inside subsystems
	// Note: No isSyncing check here - this only updates eventNodes array,
	// doesn't write to stores, so no risk of infinite loops
	function updateEventNodes() {
		const events = currentPath.length === 0 ? rootEvents : subsystemEvents;
		eventNodes = events.map(toEventNode);
	}

	// Subscribe to path changes
	cleanups.push(graphStore.currentPath.subscribe((path) => {
		currentPath = path;
		updateEventNodes();
		// Routes belong to one graph level; start over when navigating
		routingSync.reset();
	}));

	// Subscribe to root-level events (eventStore)
	cleanups.push(eventStore.eventsArray.subscribe((events: EventInstance[]) => {
		rootEvents = events;
		updateEventNodes();
	}));

	// Subscribe to subsystem events (graphStore)
	cleanups.push(graphStore.subsystemEvents.subscribe((eventsMap: Map<string, EventInstance>) => {
		subsystemEvents = Array.from(eventsMap.values());
		updateEventNodes();
	}));

	// Subscribe to annotations (filtered by current navigation context)
	cleanups.push(graphStore.annotations.subscribe((annotationsMap: Map<string, Annotation>) => {
		annotationNodes = Array.from(annotationsMap.values()).map(toAnnotationNode);
	}));

	// Compute the set of node IDs currently visible (not `_hidden`). Read on
	// every edge rebuild so connections to hidden nodes can be filtered out.
	function getVisibleNodeIds(): Set<string> {
		const graphNodesMap = get(graphStore.nodes);
		const ids = new Set<string>();
		for (const n of graphNodesMap.values()) {
			if (!n.params?.['_hidden']) ids.add(n.id);
		}
		return ids;
	}

	// Edge highlights for the hovered handle and selected node, computed centrally
	const edgeHighlighter = createEdgeHighlighter(() => edges);
	cleanups.push(edgeHighlighter.destroy);

	function rebuildEdges(connections: Connection[]): void {
		const visibleIds = getVisibleNodeIds();
		const currentEdgeSelection = new Map(edges.map((e) => [e.id, e.selected]));
		// Bus wires and bus block signal names follow the same graph changes as the edges
		updateBusView(graphStore.toJSON(), graphStore.getCurrentPath(), connections);
		edges = connections
			.filter((c) => visibleIds.has(c.sourceNodeId) && visibleIds.has(c.targetNodeId))
			.map((conn) => {
				const edge = toFlowEdge(conn);
				if (currentEdgeSelection.get(conn.id)) edge.selected = true;
				return edge;
			});
		edgeHighlighter.refresh();
	}

	// Subscribe to current connections (filtered by current navigation context)
	cleanups.push(graphStore.connections.subscribe((connections: Connection[]) => {
		if (isSyncing) return;
		rebuildEdges(connections);
		// Recalculate routes when connections change
		// Debounced to coalesce rapid changes (paste, undo, bulk operations)
		scheduleRoutingUpdate();
	}));

	// When `_hidden` flips on a node, the connections store doesn't fire — the
	// connections themselves are unchanged. Subscribe to the nodes store too
	// and rebuild edges so newly hidden/visible nodes' edges follow along.
	cleanups.push(graphStore.nodes.subscribe(() => {
		if (isSyncing) return;
		rebuildEdges(get(graphStore.connections));
	}));

	// Carrier ports are buses by their type definition, so a toolbox registered
	// after the model was loaded changes which wires carry a bus
	cleanups.push(registryVersion.subscribe(() => {
		if (isSyncing) return;
		rebuildEdges(get(graphStore.connections));
	}));

	// Track last snapped positions during drag for discrete routing updates
	let lastDraggedPositions = new Map<string, { x: number; y: number }>();

	// Handle node drag start - capture state for undo
	function handleNodeDragStart({ nodes: draggedNodes }: { nodes: Node[] }) {
		historyStore.beginDrag();
		// Initialize last positions for all dragged nodes
		lastDraggedPositions.clear();
		for (const node of draggedNodes) {
			const snappedX = Math.round(node.position.x / GRID_SIZE) * GRID_SIZE;
			const snappedY = Math.round(node.position.y / GRID_SIZE) * GRID_SIZE;
			lastDraggedPositions.set(node.id, { x: snappedX, y: snappedY });
		}
	}

	// Handle node drag - report blocks that reached a new grid position to routing
	function handleNodeDrag({ nodes: draggedNodes }: { nodes: Node[] }) {
		const positions = new Map<string, Position>();
		const moved: string[] = [];
		for (const node of draggedNodes) {
			// Events and annotations don't affect routing
			if (!isBlockFlowNode(node)) continue;

			const snapped = {
				x: Math.round(node.position.x / GRID_SIZE) * GRID_SIZE,
				y: Math.round(node.position.y / GRID_SIZE) * GRID_SIZE
			};
			positions.set(node.id, snapped);

			const lastPos = lastDraggedPositions.get(node.id);
			if (!lastPos || lastPos.x !== snapped.x || lastPos.y !== snapped.y) {
				lastDraggedPositions.set(node.id, snapped);
				moved.push(node.id);
			}
		}

		if (moved.length > 0) routingSync.syncNodes(moved, positions);
	}

	// Handle node drag end - sync position back to store and finalize undo entry
	function handleNodeDragStop({ targetNode }: { targetNode: Node | null; nodes: Node[]; event: MouseEvent | TouchEvent }) {
		// Clear drag position tracking
		lastDraggedPositions.clear();

		if (targetNode?.id && targetNode?.position) {
			isSyncing = true;
			// Check node type and update appropriate store
			if (targetNode.type === 'eventNode') {
				if (graphStore.isAtRoot()) {
					eventStore.updateEventPosition(targetNode.id, targetNode.position);
				} else {
					graphStore.updateSubsystemEventPosition(targetNode.id, targetNode.position);
				}
			} else if (targetNode.type === 'annotation') {
				graphStore.updateAnnotationPosition(targetNode.id, targetNode.position);
			} else {
				graphStore.updateNodePosition(targetNode.id, targetNode.position);
			}
			isSyncing = false;
		}
		historyStore.endDrag();

		// Report final positions to routing
		scheduleRoutingUpdate();
	}

	// Handle node and edge delete
	function handleDelete({ nodes: deletedNodes, edges: deletedEdges }: { nodes: Node[]; edges: Edge[] }) {
		if (deletedNodes.length === 0 && deletedEdges.length === 0) return;

		isSyncing = true;

		// Wrap in historyStore.mutate for undo/redo support
		historyStore.mutate(() => {
			// Handle deleted nodes - distinguish between blocks, events, and annotations
			// Only remove if the item actually exists in the store (guards against false deletions from navigation)
			deletedNodes.forEach((node) => {
				if (node.type === 'eventNode') {
					if (graphStore.isAtRoot()) {
						if (eventStore.getEvent(node.id)) {
							eventStore.removeEvent(node.id);
						}
					} else {
						if (graphStore.getSubsystemEvent(node.id)) {
							graphStore.removeSubsystemEvent(node.id);
						}
					}
				} else if (node.type === 'annotation') {
					if (graphStore.getAnnotation(node.id)) {
						graphStore.removeAnnotation(node.id);
					}
				} else {
					if (graphStore.getNode(node.id)) {
						graphStore.removeNode(node.id);
						portCounts.delete(node.id);
					}
				}
			});

			// Handle deleted edges
			deletedEdges.forEach((edge) => {
				const currentConnections = get(graphStore.connections);
				let conn = currentConnections.find((c) => c.id === edge.id);

				// If ID doesn't match, try to find by source/target handles
				if (!conn && edge.sourceHandle && edge.targetHandle) {
					const sourceMatch = edge.sourceHandle.match(/-output-(\d+)$/);
					const targetMatch = edge.targetHandle.match(/-input-(\d+)$/);
					if (sourceMatch && targetMatch) {
						const sourcePortIndex = parseInt(sourceMatch[1], 10);
						const targetPortIndex = parseInt(targetMatch[1], 10);
						conn = currentConnections.find(
							(c) =>
								c.sourceNodeId === edge.source &&
								c.sourcePortIndex === sourcePortIndex &&
								c.targetNodeId === edge.target &&
								c.targetPortIndex === targetPortIndex
						);
					}
				}

				if (conn) {
					graphStore.removeConnection(conn.id);
				}
			});
		});

		// Filter out deleted nodes from current node arrays
		const deletedIds = new Set(deletedNodes.map(n => n.id));
		blockNodes = blockNodes.filter(n => !deletedIds.has(n.id));
		eventNodes = eventNodes.filter(n => !deletedIds.has(n.id));
		annotationNodes = annotationNodes.filter(n => !deletedIds.has(n.id));

		// Force sync edges from store after deletion
		rebuildEdges(get(graphStore.connections));

		isSyncing = false;
	}

	// Highlight the ports that can take a wire while it is dragged from a port
	function handleConnectStart(
		_event: MouseEvent | TouchEvent,
		params: { nodeId: string | null; handleId: string | null; handleType: 'source' | 'target' | null }
	) {
		if (!params.nodeId || !params.handleId || !params.handleType) return;
		const isOutput = params.handleType === 'source';
		const port = HANDLE_ID.parseIndex(params.handleId, isOutput ? 'output' : 'input');
		if (port === null) return;
		const occupied = new Set(get(graphStore.connections).map((c) => `${c.targetNodeId}:${c.targetPortIndex}`));
		startConnectionDrag({ nodeId: params.nodeId, port, isOutput }, occupied);
	}

	// A bus may only enter bus blocks, subsystem ports and carrier ports, and a Bus Selector only takes a bus
	function isValidConnection(connection: FlowConnection | Edge): boolean {
		const sourcePort = HANDLE_ID.parseIndex(connection.sourceHandle ?? '', 'output');
		const targetPort = HANDLE_ID.parseIndex(connection.targetHandle ?? '', 'input');
		return sourcePort === null || targetPort === null || busWireAllowed(connection.source, sourcePort, connection.target, targetPort);
	}

	// Handle new connections
	function handleConnect(connection: FlowConnection) {
		if (!connection.source || !connection.target) return;
		if (!connection.sourceHandle || !connection.targetHandle) return;

		const sourceMatch = connection.sourceHandle.match(/-output-(\d+)$/);
		const targetMatch = connection.targetHandle.match(/-input-(\d+)$/);

		if (sourceMatch && targetMatch) {
			historyStore.mutate(() => {
				const sourcePortIndex = parseInt(sourceMatch[1], 10);
				let targetPortIndex = parseInt(targetMatch[1], 10);

				// Check if the target port is already connected
				const currentConnections = get(graphStore.connections);
				const isPortOccupied = currentConnections.some(
					(c) => c.targetNodeId === connection.target && c.targetPortIndex === targetPortIndex
				);

				if (isPortOccupied) {
					// Find the first available port instead
					const availablePort = findFirstAvailableInputPort(connection.target);

					if (availablePort !== null) {
						// Use the first available port
						targetPortIndex = availablePort;
					} else {
						// No available port - check if we can create a new one
						const graphNodes = get(graphStore.nodesArray);
						const targetNode = graphNodes.find((n) => n.id === connection.target);
						if (!targetNode) return;

						const typeDef = nodeRegistry.get(targetNode.type);
						if (!typeDef || typeDef.ports.maxInputs !== null) {
							// Can't create new port, abort
							return;
						}

						// Create a new port and use it
						graphStore.addInputPort(connection.target);
						targetPortIndex = targetNode.inputs.length; // The new port index
					}
				}

				// addConnection uses current navigation context automatically
				graphStore.addConnection(
					connection.source,
					sourcePortIndex,
					connection.target,
					targetPortIndex
				);
			});
		}
	}

	// Handle selection changes - sync from SvelteFlow to stores
	// Uses direct setters to avoid triggering back to SvelteFlow
	function handleSelectionChange({ nodes: selectedNodes }: { nodes: Node[]; edges: Edge[] }) {
		const selectedBlockIds = new Set<string>();
		const selectedEventIdSet = new Set<string>();

		selectedNodes?.forEach((node) => {
			if (node.type === 'eventNode') {
				selectedEventIdSet.add(node.id);
			} else {
				// Both regular nodes and annotations go into selectedBlockIds
				selectedBlockIds.add(node.id);
			}
		});

		// Update stores directly (bypasses trigger-based functions)
		graphSelectedNodeIds.set(selectedBlockIds);
		setEventSelection(selectedEventIdSet);
	}

	// Track file drag state for drop zone indicator
	let isFileDragOver = $state(false);
	let dragCounter = 0; // Counter to handle nested elements

	function hasFiles(event: DragEvent): boolean {
		return event.dataTransfer?.types.includes('Files') ?? false;
	}

	function handleDragEnter(event: DragEvent) {
		if (hasFiles(event)) {
			dragCounter++;
			isFileDragOver = true;
		}
	}

	function handleDragLeave(event: DragEvent) {
		if (hasFiles(event)) {
			dragCounter--;
			if (dragCounter === 0) {
				isFileDragOver = false;
			}
		}
	}

	// Handle drop from node library - delegates to registered handler inside SvelteFlow context
	function handleDrop(event: DragEvent) {
		event.preventDefault();
		// Reset file drag state
		dragCounter = 0;
		isFileDragOver = false;
		dropTargetBridge.handleDrop(event);
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'copy';
		}
	}

	// Reference to flow canvas for coordinate conversion
	let canvasEl: HTMLDivElement;

	// Context menu handlers - SvelteFlow passes { event, node/edge } objects
	function handleNodeContextMenu({ event, node }: { event: MouseEvent; node: Node }) {
		event.preventDefault();

		// Check if this is an event node
		if (node.type === 'eventNode') {
			contextMenuStore.openForEvent(node.id, { x: event.clientX, y: event.clientY });
			return;
		}

		// Check if this is an annotation
		if (node.type === 'annotation') {
			contextMenuStore.openForAnnotation(node.id, { x: event.clientX, y: event.clientY });
			return;
		}

		// Check if there are multiple selected nodes
		const selectedNodes = nodes.filter(n => n.selected);
		if (selectedNodes.length > 1 && selectedNodes.some(n => n.id === node.id)) {
			// Multiple selection - show selection context menu
			contextMenuStore.openForSelection(
				selectedNodes.map(n => n.id),
				{ x: event.clientX, y: event.clientY }
			);
		} else {
			// Single node context menu
			contextMenuStore.openForNode(node.id, { x: event.clientX, y: event.clientY });
		}
	}

	function handleEdgeContextMenu({ event, edge }: { event: MouseEvent; edge: Edge }) {
		event.preventDefault();
		contextMenuStore.openForEdge(edge.id, { x: event.clientX, y: event.clientY });
	}

	function handlePaneContextMenu({ event }: { event: MouseEvent }) {
		event.preventDefault();
		contextMenuStore.openForCanvas({ x: event.clientX, y: event.clientY });
	}

	function handleCanvasDoubleClick(event: MouseEvent) {
		// Only trigger fit view if clicking on the canvas background (not on nodes/edges)
		const target = event.target as HTMLElement;
		if (target.closest('.svelte-flow__pane')) {
			triggerFitView();
		}
	}
</script>

<svelte:window onkeydown={readonly ? undefined : handleKeydown} />

<div
	bind:this={canvasEl}
	class="flow-canvas"
	role="application"
	aria-label="Flow canvas"
	ondragover={readonly ? undefined : handleDragOver}
	ondragenter={readonly ? undefined : handleDragEnter}
	ondragleave={readonly ? undefined : handleDragLeave}
	ondblclick={readonly ? undefined : handleCanvasDoubleClick}
	onmousemove={readonly ? undefined : handleMouseMove}
>
	{#if isFileDragOver}
		<div class="drop-zone-overlay">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
				<polyline points="7 10 12 15 17 10"/>
				<line x1="12" y1="15" x2="12" y2="3"/>
			</svg>
		</div>
	{/if}
	<SvelteFlow
		bind:nodes
		bind:edges
		{nodeTypes}
		{edgeTypes}
		onconnect={readonly ? undefined : handleConnect}
		{isValidConnection}
		onconnectstart={readonly ? undefined : handleConnectStart}
		onconnectend={readonly ? undefined : endConnectionDrag}
		onclickconnectstart={readonly ? undefined : handleConnectStart}
		onclickconnectend={readonly ? undefined : endConnectionDrag}
		onnodedragstart={readonly ? undefined : handleNodeDragStart}
		onnodedrag={readonly ? undefined : handleNodeDrag}
		onnodedragstop={readonly ? undefined : handleNodeDragStop}
		ondelete={readonly ? undefined : handleDelete}
		onselectionchange={readonly ? undefined : handleSelectionChange}
		ondrop={readonly ? undefined : (e: any) => handleDrop(e.event || e)}
		ondragover={readonly ? undefined : (e: any) => handleDragOver(e.event || e)}
		onnodecontextmenu={readonly ? undefined : handleNodeContextMenu}
		onedgecontextmenu={readonly ? undefined : handleEdgeContextMenu}
		onpanecontextmenu={readonly ? undefined : handlePaneContextMenu}
		nodeOrigin={[0.5, 0.5]}
		minZoom={CANVAS_MIN_ZOOM}
		{...{ snapToGrid: true, snapGrid: SNAP_GRID } as any}
		deleteKeyCode={readonly ? null : ['Delete', 'Backspace']}
		selectionKeyCode={readonly ? null : ['Shift']}
		multiSelectionKeyCode={readonly ? null : ['Shift', 'Meta', 'Control']}
		{colorMode}
		connectOnClick={!readonly}
		nodesDraggable={!readonly}
		nodesConnectable={!readonly}
		elementsSelectable={!readonly}
		edgesReconnectable={!readonly}
		edgesFocusable={!readonly}
		edgesSelectable={!readonly}
		panOnDrag={!readonly}
		zoomOnScroll={!readonly}
		zoomOnPinch={!readonly}
		preventScrolling={!readonly}
		fitView={readonly}
		zoomOnDoubleClick={false}
		elevateEdgesOnSelect={false}
		proOptions={{ hideAttribution: true }}
	>
		<FlowUpdater pendingUpdates={pendingNodeUpdates} onUpdatesProcessed={clearPendingUpdates} embedded={readonly} />
		<Background variant={BackgroundVariant.Dots} gap={BACKGROUND_GAP} size={1} />
	</SvelteFlow>
</div>

<style>
	.flow-canvas {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.drop-zone-overlay {
		position: absolute;
		inset: 0;
		background: color-mix(in srgb, var(--accent) 10%, transparent);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		color: var(--accent);
	}

	/* Modern dark theme */
	:global(.svelte-flow) {
		--xy-background-color: var(--surface);
		--xy-node-background-color: var(--surface-raised);
		--xy-node-border-radius: 12px;
		--xy-handle-background-color: var(--edge);
		--xy-edge-stroke: var(--edge);
		--xy-edge-stroke-selected: var(--accent);
		--xy-edge-stroke-width: 1;
		--xy-connectionline-stroke: var(--accent);
		--xy-connectionline-stroke-width: 1;
	}

	:global(.svelte-flow__background) {
		background: var(--surface);
	}

	:global(.svelte-flow__background pattern circle) {
		fill: var(--grid-dot);
	}

	/* Edge styling; --wire-scale thickens a wire in every state, e.g. for buses */
	:global(.svelte-flow__edge-path) {
		stroke: var(--edge);
		stroke-width: calc(1px * var(--wire-scale, 1));
		transition: stroke 0.15s ease;
		cursor: pointer;
	}

	/* Invisible wider path for easier clicking */
	:global(.svelte-flow__edge-interaction) {
		stroke-width: 20;
		stroke: transparent;
		cursor: pointer;
	}

	:global(.svelte-flow__edge:hover .svelte-flow__edge-path) {
		stroke: var(--accent, #0070C0);
		stroke-width: calc(1px * var(--wire-scale, 1));
	}

	:global(.svelte-flow__edge.selected .svelte-flow__edge-path) {
		stroke: var(--accent, #0070C0);
		stroke-width: calc(1.5px * var(--wire-scale, 1));
	}

	/* Connection line */
	:global(.svelte-flow__connection-path) {
		stroke: var(--accent, #0070C0);
		stroke-width: 1;
		stroke-dasharray: 5 5;
		animation: dash 0.5s linear infinite;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: -10;
		}
	}

	/* Selection box (drag-to-select rectangle) */
	:global(.svelte-flow__selection) {
		background: color-mix(in srgb, var(--accent) 10%, transparent);
		border: 1px solid var(--accent);
		border-radius: 4px;
	}

	/* Hide the bounding box around selected nodes (but keep drag-select rectangle) */
	:global(.svelte-flow__selection-wrapper .svelte-flow__selection) {
		background: transparent !important;
		border: none !important;
	}
</style>
