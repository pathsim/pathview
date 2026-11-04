<script lang="ts">
	import { onDestroy } from 'svelte';
	import { useUpdateNodeInternals } from '@xyflow/svelte';
	import { nodeRegistry, registryVersion, type NodeInstance } from '$lib/nodes';
	import { getShapeCssClass, isSubsystem } from '$lib/nodes/shapes/index';
	import { NODE_TYPES } from '$lib/constants/nodeTypes';
	import { openNodeDialog } from '$lib/stores/nodeDialog';
	import { graphStore } from '$lib/stores/graph';
	import { historyStore } from '$lib/stores/history';
	import { pinnedPreviewsStore } from '$lib/stores/pinnedPreviews';
	import { portLabelsStore } from '$lib/stores/portLabels';
	import { iconModeStore } from '$lib/stores/iconMode';
	import BlockIcon from '$lib/components/icons/BlockIcon.svelte';
	import { PREVIEW_GAP, previewSideForRotation } from '$lib/utils/previewBounds';
	import { selectedNodeHighlight } from '$lib/stores/hoveredHandle';
	import { paramInput } from '$lib/actions/paramInput';
	import { plotDataStore } from '$lib/plotting/processing/plotDataStore';
	import { calculateNodeDimensions } from '$lib/constants/dimensions';
	import { containsMath, renderInlineMath, renderInlineMathSync, measureRenderedMath } from '$lib/utils/inlineMathRenderer';
	import { getKatexCssUrl } from '$lib/utils/katexLoader';
	import PlotPreview from './PlotPreview.svelte';
	import NodePorts from './NodePorts.svelte';
	import { busPorts } from '$lib/stores/busView.svelte';

	interface Props {
		id: string;
		data: NodeInstance;
		selected?: boolean;
	}

	let { id, data, selected = false }: Props = $props();

	// Get SvelteFlow hook to trigger re-measurement when node size changes
	const updateNodeInternals = useUpdateNodeInternals();

	// Get type definition. The registry isn't a reactive store on its own,
	// so we tick on registryVersion bumps (toolbox install/uninstall) and
	// re-read here. Without this, blocks loaded before their toolbox finished
	// bootstrapping would stay stuck rendering as (missing).
	let registryTick = $state(0);
	const unsubRegistry = registryVersion.subscribe((v) => (registryTick = v));
	const typeDef = $derived.by(() => {
		registryTick; // dependency: re-read whenever the registry version bumps
		return nodeRegistry.get(data.type);
	});
	const category = $derived(typeDef?.category || 'Algebraic');

	// Get valid pinned params (filter out any that no longer exist in the type definition)
	// Defined early since it's needed for dimension calculations
	const validPinnedParams = $derived(() => {
		if (!data.pinnedParams?.length || !typeDef) return [];
		const paramNames = new Set(typeDef.params.map(p => p.name));
		return data.pinnedParams.filter(name => paramNames.has(name));
	});

	// Recording node hover preview
	const isRecordingNode = $derived(category === 'Recording');
	let isHovered = $state(false);
	let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
	let hasPreloaded = $state(false); // Keep mounted once preloaded
	let showPreview = $state(false); // Control visibility
	let previewsPinned = $state(false);
	let hasPlotData = $state(false);

	const unsubscribePinned = pinnedPreviewsStore.subscribe((pinned) => {
		previewsPinned = pinned;
	});

	// Check if this node has plot data (from centralized store)
	const unsubscribePlotData = plotDataStore.subscribe((state) => {
		hasPlotData = state.plots.has(id);
	});

	// Global port labels visibility
	let globalShowPortLabels = $state(false);
	const unsubscribePortLabels = portLabelsStore.subscribe((value) => {
		globalShowPortLabels = value;
	});

	// Global icon mode (icon vs text)
	let globalIconMode = $state(false);
	const unsubscribeIconMode = iconModeStore.subscribe((value) => {
		globalIconMode = value;
	});

	// Per-node overrides (undefined = follow global)
	const nodeShowInputLabels = $derived(data.params?.['_showInputLabels'] as boolean | undefined);
	const nodeShowOutputLabels = $derived(data.params?.['_showOutputLabels'] as boolean | undefined);
	const nodeIconMode = $derived(data.params?.['_iconMode'] as boolean | undefined);

	// Effective icon-mode and whether the block class has an icon
	const effectiveIconMode = $derived(nodeIconMode ?? globalIconMode);
	const showIcon = $derived(effectiveIconMode && !!typeDef?.icon);

	// Effective visibility settings (per-node overrides global)
	const showInputLabels = $derived(nodeShowInputLabels ?? globalShowPortLabels);
	const showOutputLabels = $derived(nodeShowOutputLabels ?? globalShowPortLabels);


	// Re-measure node when port labels toggle changes
	$effect(() => {
		// Dependency on showInputLabels and showOutputLabels
		if (showInputLabels !== undefined || showOutputLabels !== undefined) {
			updateNodeInternals(id);
		}
	});

	// Re-measure when icon-mode flips
	$effect(() => {
		void showIcon;
		updateNodeInternals(id);
	});

	onDestroy(() => {
		unsubRegistry();
		unsubscribePinned();
		unsubscribePlotData();
		unsubscribePortLabels();
		unsubscribeIconMode();
		if (hoverTimeout) clearTimeout(hoverTimeout);
	});

	// Sync hasPreloaded when pinned (so unpinning keeps cache)
	$effect(() => {
		if (previewsPinned && hasPlotData) {
			hasPreloaded = true;
		}
	});

	function handleMouseEnter() {
		if (!isRecordingNode) return;
		isHovered = true;
		// Simple delay before showing preview
		hoverTimeout = setTimeout(() => {
			if (isHovered) {
				hasPreloaded = true;
				showPreview = true;
			}
		}, 300);
	}

	function handleMouseLeave() {
		isHovered = false;
		showPreview = false;
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			hoverTimeout = null;
		}
	}

	// Math rendering for node names with $...$ LaTeX
	const nameHasMath = $derived(containsMath(data.name));
	let renderedNameHtml = $state<string | null>(null);
	let measuredNameWidth = $state<number | null>(null);
	let measuredNameHeight = $state<number | null>(null);

	// Render math when name contains $...$
	$effect(() => {
		if (nameHasMath) {
			// Try sync first (cached)
			const cached = renderInlineMathSync(data.name);
			if (cached) {
				renderedNameHtml = cached.html;
				const dims = measureRenderedMath(cached.html);
				measuredNameWidth = dims.width;
				measuredNameHeight = dims.height;
				// Tell SvelteFlow to re-measure node from DOM
				updateNodeInternals(id);
			} else {
				// Render async
				renderInlineMath(data.name).then((result) => {
					renderedNameHtml = result.html;
					const dims = measureRenderedMath(result.html);
					measuredNameWidth = dims.width;
					measuredNameHeight = dims.height;
					// Tell SvelteFlow to re-measure node from DOM
					updateNodeInternals(id);
				});
			}
		} else {
			renderedNameHtml = null;
			measuredNameWidth = null;
			measuredNameHeight = null;
		}
	});

	// Check if this node allows dynamic ports
	const allowsDynamicInputs = $derived(typeDef?.ports.maxInputs === null);
	const allowsDynamicOutputs = $derived(typeDef?.ports.maxOutputs === null);
	const syncPorts = $derived(typeDef?.ports.syncPorts ?? false);

	// Rotation state (0, 1, 2, 3 = 0°, 90°, 180°, 270°) - stored in node params
	const rotation = $derived((data.params?.['_rotation'] as number) || 0);

	// Port is horizontal (left/right) or vertical (top/bottom)
	const isVertical = $derived(rotation === 1 || rotation === 3);

	// Preview position: opposite side of inputs (rotation → side mapping is in utils)
	const previewPosition = $derived(() => previewSideForRotation(rotation));

	const maxPortsOnSide = $derived(Math.max(data.inputs.length, data.outputs.length));
	const pinnedCount = $derived(validPinnedParams().length);

	// Measured name dimensions for math rendering (null if not measured or no math)
	const measuredName = $derived(
		nameHasMath && measuredNameWidth !== null && measuredNameHeight !== null
			? { width: measuredNameWidth, height: measuredNameHeight }
			: null
	);

	// Node dimensions - calculated from shared utility (same as SvelteFlow bounds).
	// Port-label visibility no longer enters the calculation; labels render
	// outside the block bounds and don't affect layout.
	const nodeDimensions = $derived(calculateNodeDimensions(
		data.name,
		data.inputs.length,
		data.outputs.length,
		pinnedCount,
		rotation,
		typeDef?.name,
		measuredName,
		showIcon
	));

	// Check if this is a Subsystem or Interface node (using shapes utility)
	const isSubsystemNode = $derived(isSubsystem(data));
	const isInterfaceNode = $derived(data.type === NODE_TYPES.INTERFACE);
	const isSubsystemType = $derived(isSubsystemNode || isInterfaceNode);

	// Handle double-click to open properties dialog or drill into subsystem
	function handleDoubleClick(event: MouseEvent) {
		event.stopPropagation();
		if (isSubsystemNode) {
			// Drill down into subsystem
			graphStore.drillDown(id);
		} else {
			openNodeDialog(id);
		}
	}

	// Get min ports from type definition
	const minInputs = $derived(typeDef?.ports.minInputs ?? 1);
	const minOutputs = $derived(typeDef?.ports.minOutputs ?? 1);

	// Get shape class from unified shapes utility
	const shapeClass = $derived(() => typeDef ? getShapeCssClass(typeDef) : 'shape-default');

	// Custom node color (defaults to pathsim-blue)
	// Missing blocks (type not registered) override any custom color so the
	// whole block — name, handles, hover state — picks up the error red.
	const nodeColor = $derived(
		!typeDef && data.type !== NODE_TYPES.SUBSYSTEM && data.type !== NODE_TYPES.INTERFACE
			? 'var(--error)'
			: data.color || 'var(--accent)'
	);

	// Handle pinned param change
	function handlePinnedParamChange(paramName: string, value: string) {
		historyStore.mutate(() => graphStore.updateNodeParams(id, { [paramName]: value }));
	}

	// Format value for display
	function formatParamValue(value: unknown): string {
		if (value === null || value === undefined) return '';
		if (typeof value === 'object') return JSON.stringify(value);
		return String(value);
	}

	// Format default value for placeholder (Python style)
	function formatDefault(value: unknown): string {
		if (value === null || value === undefined) return 'None';
		if (typeof value === 'object') return JSON.stringify(value);
		return String(value);
	}

	// Highlight connected edges when node is selected
	$effect(() => {
		if (selected) {
			selectedNodeHighlight.set({ nodeId: id, color: nodeColor });
		} else {
			selectedNodeHighlight.update((current) => {
				if (current?.nodeId === id) return null;
				return current;
			});
		}
	});
</script>

<!-- Load KaTeX CSS for math rendering in node names -->
<svelte:head>
	<link rel="stylesheet" href={getKatexCssUrl()} />
</svelte:head>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="node {shapeClass()}"
	class:selected
	class:vertical={isVertical}
	class:preview-hovered={showPreview}
	class:subsystem-type={isSubsystemType}
	class:missing-type={!typeDef && data.type !== NODE_TYPES.SUBSYSTEM && data.type !== NODE_TYPES.INTERFACE}
	data-rotation={rotation}
	style="width: {nodeDimensions.width}px; height: {nodeDimensions.height}px; --node-color: {nodeColor}; --preview-gap: {PREVIEW_GAP}px;"
	ondblclick={handleDoubleClick}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<!-- Plot preview for recording nodes -->
	{#if (hasPreloaded || previewsPinned) && hasPlotData}
		<div
			class="plot-preview-popup preview-{previewPosition()}"
			class:visible={showPreview || previewsPinned}
		>
			<PlotPreview nodeId={id} />
		</div>
	{/if}

	<!-- Glow effect for selected state -->
	{#if selected}
		<div class="selection-glow"></div>
	{/if}

	<!-- Clip wrapper - contains all visible content, clips to rounded corners -->
	<div class="node-clip">
		<!-- Node content -->
		<div class="node-content" class:has-icon={showIcon}>
			{#if renderedNameHtml}
				<span class="node-name">{@html renderedNameHtml}</span>
			{:else}
				<span class="node-name">{data.name}</span>
			{/if}
			{#if showIcon}
				<div class="node-icon">
					<BlockIcon icon={typeDef?.icon ?? ''} title={typeDef?.name} />
				</div>
			{:else if typeDef}
				<span class="node-type">{typeDef.name}</span>
			{:else if data.type !== NODE_TYPES.SUBSYSTEM && data.type !== NODE_TYPES.INTERFACE}
				<span class="node-type missing">{data.type} (missing)</span>
			{/if}
		</div>

		<!-- Pinned parameters -->
		{#if validPinnedParams().length > 0 && typeDef}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div class="pinned-params" onclick={(e) => e.stopPropagation()} ondblclick={(e) => e.stopPropagation()}>
				{#each validPinnedParams() as paramName}
					{@const paramDef = typeDef.params.find(p => p.name === paramName)}
					{#if paramDef}
						<div class="pinned-param">
							<label for="pinned-{id}-{paramName}">{paramName}</label>
							<input
								id="pinned-{id}-{paramName}"
								type="text"
								value={formatParamValue(data.params[paramName])}
								placeholder={formatDefault(paramDef.default)}
								oninput={(e) => handlePinnedParamChange(paramName, e.currentTarget.value)}
								onmousedown={(e) => e.stopPropagation()}
								onfocus={(e) => e.stopPropagation()}
								use:paramInput
							/>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>

	<!-- Output port controls are hidden for syncPorts blocks, whose outputs follow the inputs -->
	<NodePorts
		{id}
		inputs={data.inputs}
		outputs={data.outputs}
		{rotation}
		{nodeColor}
		{selected}
		{showInputLabels}
		{showOutputLabels}
		dynamicInputs={allowsDynamicInputs}
		dynamicOutputs={allowsDynamicOutputs && !syncPorts}
		{minInputs}
		{minOutputs}
		busInputs={busPorts.get(id)?.inputs}
		busOutputs={busPorts.get(id)?.outputs}
	/>
</div>

<style>
	.node {
		position: relative;
		/* Dimensions set via inline style using grid constants */
		/* Note: center-origin handled by SvelteFlow's nodeOrigin={[0.5, 0.5]} */
		background: var(--surface-raised);
		border: 1px solid var(--edge);
		font-size: 10px;
		overflow: visible; /* Allow handles to extend outside */
		--node-radius: 8px;
	}

	/* Shape variants - set both border-radius and custom property for inner clipping */
	.shape-pill {
		--node-radius: 20px;
		border-radius: var(--node-radius);
	}

	.shape-rect {
		--node-radius: 4px;
		border-radius: var(--node-radius);
	}

	.shape-circle {
		--node-radius: 16px;
		border-radius: var(--node-radius);
	}

	.shape-diamond {
		--node-radius: 4px;
		border-radius: var(--node-radius);
		transform: rotate(45deg);
	}

	.shape-diamond .node-content {
		transform: rotate(-45deg);
	}

	.shape-mixed {
		--node-radius: 12px;
		border-radius: 12px 4px 12px 4px;
	}

	.shape-default {
		--node-radius: 8px;
		border-radius: var(--node-radius);
	}

	/* Subsystem/Interface dashed border */
	.node.subsystem-type {
		border-style: dashed;
	}

	/* Selection state */
	.node.selected {
		border-color: var(--node-color);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--node-color) 25%, transparent);
	}

	.selection-glow {
		display: none;
	}

	/* Bring node to front when preview is hovered */
	:global(.svelte-flow__node:has(.preview-hovered)) {
		z-index: 1000 !important;
	}

	/* Clip wrapper - fills node, clips content to rounded corners */
	.node-clip {
		position: absolute;
		inset: 0;
		overflow: hidden;
		border-radius: max(0px, calc(var(--node-radius, 8px) - 1px));
		display: flex;
		flex-direction: column;
	}

	/* Content - centered in available space */
	.node-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 6px 12px;
		text-align: center;
		line-height: 1.2;
		min-width: 0;
		overflow: hidden;
	}

	.node-name {
		display: block;
		font-weight: 600;
		font-size: 10px;
		color: var(--node-color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		letter-spacing: -0.2px;
	}

	/* KaTeX math rendering in node names */
	.node-name:has(:global(.katex)) {
		overflow: visible;
		text-overflow: clip;
	}

	.node-name :global(.katex) {
		font-size: 1em;
		font-weight: 600;
		color: inherit;
	}

	.node-name :global(.katex-html) {
		white-space: nowrap;
	}

	.node-name :global(.math-error) {
		color: var(--error);
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.node-type {
		display: block;
		font-size: 8px;
		color: var(--text-muted);
		margin-top: 2px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.node-content.has-icon {
		padding: 2px 4px 4px;
	}

	.node-content.has-icon .node-name {
		font-size: 9px;
		font-weight: 500;
	}

	.node-icon {
		flex: 1;
		min-height: 0;
		margin-top: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--node-color);
	}

	.node-type.missing {
		color: var(--error);
		font-weight: 500;
	}

	/* Visual marker for nodes whose block type isn't registered (e.g. file
	 * loaded with a toolbox dependency the user hasn't installed). Same
	 * shape as a normal block, just dressed in error red so it's obvious
	 * something is wrong. */
	.node.missing-type {
		--node-color: var(--error);
		border-color: var(--error);
		background: var(--error-bg);
	}

	/* Port handles: paint the outer pentagon red so the missing block
	 * carries its error state out to its connections. The inner cutout
	 * picks up the red-tinted body so it visually merges with the block. */
	:global(.node.missing-type .svelte-flow__handle::before) {
		background: var(--error);
	}
	:global(.node.missing-type .svelte-flow__handle::after) {
		background: color-mix(in srgb, var(--error-bg) 60%, var(--surface-raised));
	}

	/* Pinned parameters - rectangular, clipped by node-clip's overflow:hidden */
	.pinned-params {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 4px 8px 6px;
		border-top: 1px solid var(--border);
		background: var(--surface);
		border-radius: 0;
		overflow: hidden;
	}

	.pinned-param {
		display: flex;
		align-items: center;
		gap: 4px;
		min-width: 0;
		max-width: 100%;
	}

	.pinned-param label {
		flex-shrink: 0;
		font-size: 8px;
		color: var(--text-disabled);
		max-width: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.pinned-param input {
		flex: 1;
		min-width: 0;
		height: 20px;
		padding: 2px 6px;
		font-size: 8px;
		font-family: var(--font-mono);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		color: var(--text);
		transition: all var(--transition-fast);
	}

	.pinned-param input:hover {
		border-color: var(--border-focus);
	}

	.pinned-param input:focus {
		outline: none;
		border-color: var(--node-color);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--node-color) 20%, transparent);
	}

	.pinned-param input::placeholder {
		color: var(--text-muted);
	}

	/* Handles - Hollow arrow/pentagon shape with rounded corners */
	:global(.node .svelte-flow__handle) {
		width: 10px;
		height: 8px;
		background: transparent;
		border: none;
		border-radius: 0;
	}

	/* Outer shape (the border) - rounded pentagon */
	:global(.node .svelte-flow__handle::before) {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--edge);
		clip-path: path('M 1.00 0.00 L 5.00 0.00 Q 6.00 0.00 6.71 0.71 L 9.29 3.29 Q 10.00 4.00 9.29 4.71 L 6.71 7.29 Q 6.00 8.00 5.00 8.00 L 1.00 8.00 Q 0.00 8.00 0.00 7.00 L 0.00 1.00 Q 0.00 0.00 1.00 0.00 Z');
		transition: background 0.15s ease, filter 0.15s ease;
	}

	/* Inner cutout (makes it hollow) - generated by scripts/generate-handle-paths.js */
	:global(.node .svelte-flow__handle::after) {
		content: '';
		position: absolute;
		inset: 1px;
		background: var(--surface-raised);
		clip-path: path('M 0.80 0.00 L 3.79 0.00 Q 4.59 0.00 5.15 0.57 L 7.02 2.43 Q 7.59 3.00 7.02 3.57 L 5.15 5.43 Q 4.59 6.00 3.79 6.00 L 0.80 6.00 Q 0.00 6.00 0.00 5.20 L 0.00 0.80 Q 0.00 0.00 0.80 0.00 Z');
	}

	:global(.node .svelte-flow__handle:hover::before),
	:global(.node.selected .svelte-flow__handle::before) {
		background: var(--node-color);
		filter: drop-shadow(0 0 2px var(--node-color));
	}

	:global(.node .svelte-flow__handle:hover::after),
	:global(.node.selected .svelte-flow__handle::after) {
		display: none;
	}

	:global(.node .svelte-flow__handle.connecting::before) {
		background: var(--accent);
		filter: drop-shadow(0 0 3px var(--accent));
	}

	:global(.node .svelte-flow__handle.connecting::after) {
		display: none;
	}

	/* Arrow pointing right (rotation 0 - default) */
	:global(.node[data-rotation="0"] .svelte-flow__handle::before) {
		clip-path: path('M 1.00 0.00 L 5.00 0.00 Q 6.00 0.00 6.71 0.71 L 9.29 3.29 Q 10.00 4.00 9.29 4.71 L 6.71 7.29 Q 6.00 8.00 5.00 8.00 L 1.00 8.00 Q 0.00 8.00 0.00 7.00 L 0.00 1.00 Q 0.00 0.00 1.00 0.00 Z');
	}
	:global(.node[data-rotation="0"] .svelte-flow__handle::after) {
		clip-path: path('M 0.80 0.00 L 3.79 0.00 Q 4.59 0.00 5.15 0.57 L 7.02 2.43 Q 7.59 3.00 7.02 3.57 L 5.15 5.43 Q 4.59 6.00 3.79 6.00 L 0.80 6.00 Q 0.00 6.00 0.00 5.20 L 0.00 0.80 Q 0.00 0.00 0.80 0.00 Z');
	}

	/* Arrow pointing down (rotation 1) */
	:global(.node[data-rotation="1"] .svelte-flow__handle) {
		width: 8px;
		height: 10px;
	}
	:global(.node[data-rotation="1"] .svelte-flow__handle::before) {
		clip-path: path('M 1.00 0.00 L 7.00 0.00 Q 8.00 0.00 8.00 1.00 L 8.00 5.00 Q 8.00 6.00 7.29 6.71 L 4.71 9.29 Q 4.00 10.00 3.29 9.29 L 0.71 6.71 Q 0.00 6.00 0.00 5.00 L 0.00 1.00 Q 0.00 0.00 1.00 0.00 Z');
	}
	:global(.node[data-rotation="1"] .svelte-flow__handle::after) {
		clip-path: path('M 0.80 0.00 L 5.20 0.00 Q 6.00 0.00 6.00 0.80 L 6.00 3.79 Q 6.00 4.59 5.43 5.15 L 3.57 7.02 Q 3.00 7.59 2.43 7.02 L 0.57 5.15 Q 0.00 4.59 0.00 3.79 L 0.00 0.80 Q 0.00 0.00 0.80 0.00 Z');
	}

	/* Arrow pointing left (rotation 2) */
	:global(.node[data-rotation="2"] .svelte-flow__handle::before) {
		clip-path: path('M 5.00 0.00 L 9.00 0.00 Q 10.00 0.00 10.00 1.00 L 10.00 7.00 Q 10.00 8.00 9.00 8.00 L 5.00 8.00 Q 4.00 8.00 3.29 7.29 L 0.71 4.71 Q 0.00 4.00 0.71 3.29 L 3.29 0.71 Q 4.00 0.00 5.00 0.00 Z');
	}
	:global(.node[data-rotation="2"] .svelte-flow__handle::after) {
		clip-path: path('M 4.21 0.00 L 7.20 0.00 Q 8.00 0.00 8.00 0.80 L 8.00 5.20 Q 8.00 6.00 7.20 6.00 L 4.21 6.00 Q 3.41 6.00 2.85 5.43 L 0.98 3.57 Q 0.41 3.00 0.98 2.43 L 2.85 0.57 Q 3.41 0.00 4.21 0.00 Z');
	}

	/* Arrow pointing up (rotation 3) */
	:global(.node[data-rotation="3"] .svelte-flow__handle) {
		width: 8px;
		height: 10px;
	}
	:global(.node[data-rotation="3"] .svelte-flow__handle::before) {
		clip-path: path('M 4.71 0.71 L 7.29 3.29 Q 8.00 4.00 8.00 5.00 L 8.00 9.00 Q 8.00 10.00 7.00 10.00 L 1.00 10.00 Q 0.00 10.00 0.00 9.00 L 0.00 5.00 Q 0.00 4.00 0.71 3.29 L 3.29 0.71 Q 4.00 0.00 4.71 0.71 Z');
	}
	:global(.node[data-rotation="3"] .svelte-flow__handle::after) {
		clip-path: path('M 3.57 0.98 L 5.43 2.85 Q 6.00 3.41 6.00 4.21 L 6.00 7.20 Q 6.00 8.00 5.20 8.00 L 0.80 8.00 Q 0.00 8.00 0.00 7.20 L 0.00 4.21 Q 0.00 3.41 0.57 2.85 L 2.43 0.98 Q 3.00 0.41 3.57 0.98 Z');
	}

	/* Plot preview popup - base styles */
	.plot-preview-popup {
		position: absolute;
		z-index: 1000;
		pointer-events: none;
		opacity: 0;
		visibility: hidden;
	}

	.plot-preview-popup.visible {
		opacity: 1;
		visibility: visible;
		animation: fadeIn 0.15s ease-out;
	}

	/* Preview position: right (default, inputs on left) */
	.plot-preview-popup.preview-right {
		left: calc(100% + var(--preview-gap));
		top: 50%;
		transform: translateY(-50%);
	}

	/* Preview position: left (inputs on right) */
	.plot-preview-popup.preview-left {
		right: calc(100% + var(--preview-gap));
		top: 50%;
		transform: translateY(-50%);
	}

	/* Preview position: top (inputs on bottom) */
	.plot-preview-popup.preview-top {
		bottom: calc(100% + var(--preview-gap));
		left: 50%;
		transform: translateX(-50%);
	}

	/* Preview position: bottom (inputs on top) */
	.plot-preview-popup.preview-bottom {
		top: calc(100% + var(--preview-gap));
		left: 50%;
		transform: translateX(-50%);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
