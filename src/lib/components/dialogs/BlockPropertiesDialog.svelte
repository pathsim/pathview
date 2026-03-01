<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { graphStore } from '$lib/stores/graph';
	import { historyStore } from '$lib/stores/history';
	import { nodeDialogStore, closeNodeDialog } from '$lib/stores/nodeDialog';
	import { nodeRegistry, type NodeInstance } from '$lib/nodes';
	import { generateBlockCode } from '$lib/pyodide/pathsimRunner';
	import { codeContextStore } from '$lib/stores/codeContext';
	import { generateBlockCodeHeader } from '$lib/utils/codePreviewHeader';
	import { getDocstring } from '$lib/nodes/docstrings';
	import { themeStore, type Theme } from '$lib/stores/theme';
	import { tooltip } from '$lib/components/Tooltip.svelte';
	import { paramInput } from '$lib/actions/paramInput';
	import { loadCodeMirrorModules, createEditorExtensions, type CodeMirrorModules } from '$lib/utils/codemirror';
	import ColorPicker from './shared/ColorPicker.svelte';
	import DocumentationSection from './shared/DocumentationSection.svelte';
	import Icon from '$lib/components/icons/Icon.svelte';
	import { DEFAULT_NODE_COLOR } from '$lib/utils/colors';
	import { exportComponent } from '$lib/schema/componentOps';
	import { NODE_TYPES } from '$lib/constants/nodeTypes';
	import { exportRecordingData } from '$lib/utils/csvExport';
	import { createRecordingDataState } from '$lib/stores/recordingData.svelte';

	// Code preview state (declared early — referenced by subscription below)
	let showCode = $state(false);
	let previewCode = $state('');
	let editorContainer = $state<HTMLDivElement | undefined>(undefined);
	let editorView: import('@codemirror/view').EditorView | null = null;
	let cmModules: CodeMirrorModules | null = null;
	let editorLoading = $state(true);
	let copied = $state(false);
	let currentTheme = $state<Theme>('dark');

	function destroyEditor() {
		if (editorView) {
			editorView.destroy();
			editorView = null;
		}
	}

	// Get the node from store
	let nodeId = $state<string | null>(null);
	let node = $state<NodeInstance | null>(null);

	const unsubscribeDialog = nodeDialogStore.subscribe((id) => {
		nodeId = id;
		if (id) {
			node = graphStore.getNode(id) || null;
			// Reset to properties view when opening a new node
			showCode = false;
			destroyEditor();
		} else {
			node = null;
			showCode = false;
			destroyEditor();
		}
	});

	// Keep node updated when params change
	const unsubscribeNodes = graphStore.nodesArray.subscribe((nodes) => {
		if (nodeId) {
			node = nodes.find(n => n.id === nodeId) || null;
		}
	});

	const unsubscribeTheme = themeStore.subscribe((theme) => {
		currentTheme = theme;
		if (editorView && cmModules && editorContainer) {
			recreateEditor();
		}
	});

	onDestroy(() => {
		unsubscribeDialog();
		unsubscribeNodes();
		unsubscribeTheme();
		destroyEditor();
	});

	// Get type definition
	const typeDef = $derived(node ? nodeRegistry.get(node.type) : null);

	// Get docstring for current node type
	const docstringHtml = $derived(typeDef?.blockClass ? getDocstring(typeDef.blockClass) : undefined);

	// Get current color for display
	const currentColor = $derived(node?.color || DEFAULT_NODE_COLOR);

	// Handle color selection
	function handleColorSelect(color: string | undefined) {
		if (!node) return;
		const nodeId = node.id;
		historyStore.mutate(() => graphStore.updateNodeColor(nodeId, color));
	}

	function getExtensions() {
		if (!cmModules) return [];
		return createEditorExtensions(cmModules, currentTheme === 'dark', {
			readOnly: true
		});
	}

	function recreateEditor() {
		if (!editorView || !editorContainer || !cmModules) return;
		const currentCode = editorView.state.doc.toString();
		editorView.destroy();
		editorView = new cmModules.EditorView({
			doc: currentCode,
			extensions: getExtensions(),
			parent: editorContainer
		});
	}

	async function initEditor() {
		if (!editorContainer) return;

		destroyEditor();
		editorLoading = true;

		cmModules = await loadCodeMirrorModules();

		editorView = new cmModules.EditorView({
			doc: previewCode,
			extensions: getExtensions(),
			parent: editorContainer
		});

		editorLoading = false;
	}

	// Toggle code view
	function toggleCodeView() {
		if (showCode) {
			showCode = false;
			destroyEditor();
		} else {
			if (!node) return;
			const allNodes = graphStore.getAllNodes();
			const allConnections = graphStore.getAllConnections().map(c => c.connection);
			const codeContext = codeContextStore.getCode();
			const header = generateBlockCodeHeader(node, codeContext);
			const blockCode = generateBlockCode(node, allNodes, allConnections);
			previewCode = header + blockCode;
			copied = false;
			showCode = true;
			setTimeout(() => initEditor(), 0);
		}
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(previewCode);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	// Export block/subsystem
	function handleExport() {
		if (!node) return;
		const type = node.type === NODE_TYPES.SUBSYSTEM ? 'subsystem' : 'block';
		exportComponent(type, node.id);
	}

	// Check if node can be exported (not Interface blocks)
	const canExport = $derived(node?.type !== NODE_TYPES.INTERFACE);

	// Check if node is a recording node (Scope or Spectrum)
	const isRecordingNode = $derived(node?.type === 'Scope' || node?.type === 'Spectrum');

	// Shared recording data state (for CSV export button)
	const recordingData = createRecordingDataState();

	// Reactively check if exportable data exists
	const hasData = $derived(
		nodeId && node && isRecordingNode
			? recordingData.hasData(nodeId, node.type)
			: false
	);

	// Export recording data to CSV
	function handleExportCsv() {
		if (!node || !nodeId) return;
		exportRecordingData(nodeId, node.name, node.type);
	}

	// Handle parameter change
	// All values are stored as raw Python expressions (strings)
	// No parsing or type coercion - user writes valid Python syntax
	function handleParamChange(paramName: string, value: string) {
		if (!node) return;
		const nodeId = node.id;
		historyStore.mutate(() => graphStore.updateNodeParams(nodeId, { [paramName]: value }));
	}

	// Check if a parameter is pinned to the node
	function isParamPinned(paramName: string): boolean {
		return node?.pinnedParams?.includes(paramName) ?? false;
	}

	// Toggle pin state for a parameter
	function togglePinParam(paramName: string) {
		if (!node) return;
		const nodeId = node.id;
		const currentPinned = node.pinnedParams ?? [];
		const newPinned = currentPinned.includes(paramName)
			? currentPinned.filter(p => p !== paramName)
			: [...currentPinned, paramName];
		historyStore.mutate(() => graphStore.updateNode(nodeId, { pinnedParams: newPinned }));
	}

	// Handle name change
	function handleNameChange(name: string) {
		if (!node) return;
		const nodeId = node.id;
		historyStore.mutate(() => graphStore.updateNodeName(nodeId, name));
	}

	// Format value for display
	function formatValue(value: unknown): string {
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

	// Handle backdrop click
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeNodeDialog();
		}
	}

	// Handle escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeNodeDialog();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if nodeId && node && typeDef}
	<div class="dialog-backdrop" onclick={handleBackdropClick} transition:fade={{ duration: 150 }} role="presentation">
		<div class="properties-dialog glass-panel" style="--node-color: {currentColor}" transition:scale={{ start: 0.95, duration: 150, easing: cubicOut }} role="dialog" tabindex="-1" aria-labelledby="dialog-title">
			<div class="dialog-header">
				{#if showCode}
					<span id="dialog-title">Python Code</span>
				{:else}
					<div class="node-info">
						<input
							id="dialog-title"
							class="node-name-input"
							type="text"
							value={node.name}
							oninput={(e) => handleNameChange(e.currentTarget.value)}
							use:paramInput
						/>
						<span class="node-type">{typeDef.name}</span>
					</div>
				{/if}
				<div class="header-actions">
					{#if showCode}
						<!-- Copy button in code view -->
						<button
							class="icon-btn"
							class:success={copied}
							onclick={copyToClipboard}
							use:tooltip={copied ? "Copied!" : "Copy to Clipboard"}
							aria-label="Copy to Clipboard"
						>
							{#if copied}
								<Icon name="check" size={16} />
							{:else}
								<Icon name="copy" size={16} />
							{/if}
						</button>
					{:else}
						<!-- Color picker -->
						<ColorPicker
							currentColor={currentColor}
							defaultColor={DEFAULT_NODE_COLOR}
							onSelect={handleColorSelect}
						/>
						<!-- CSV Export button for recording nodes -->
						{#if isRecordingNode}
							<button
								class="icon-btn"
								onclick={handleExportCsv}
								disabled={!hasData}
								use:tooltip={hasData ? "Export CSV" : "Run simulation to export data"}
								aria-label="Export CSV"
							>
								<Icon name="table" size={16} />
							</button>
						{/if}
						<!-- Export button -->
						{#if canExport}
							<button
								class="icon-btn"
								onclick={handleExport}
								use:tooltip={"Export"}
								aria-label="Export"
							>
								<Icon name="upload" size={16} />
							</button>
						{/if}
					{/if}
					<!-- Toggle code view button -->
					<button
						class="icon-btn"
						onclick={toggleCodeView}
						use:tooltip={showCode ? "View Properties" : "View Python Code"}
						aria-label={showCode ? "View Properties" : "View Python Code"}
					>
						<Icon name={showCode ? "settings" : "braces"} size={16} />
					</button>
					<button class="icon-btn" onclick={closeNodeDialog} aria-label="Close">
						<Icon name="x" size={16} />
					</button>
				</div>
			</div>

			<div class="dialog-body" class:flush={showCode}>
				{#if showCode}
					<!-- Code view -->
					<div class="code-preview" bind:this={editorContainer}>
						{#if editorLoading}
							<div class="loading">Loading...</div>
						{/if}
					</div>
				{:else}
					<!-- Parameters -->
					{#if typeDef.params.length > 0}
						<div class="section">
							<div class="section-title">Parameters</div>
							<div class="params-grid">
								{#each typeDef.params as param}
									{@const value = node.params[param.name]}
									{@const pinned = isParamPinned(param.name)}
									<div class="param-item">
										<label for="param-{param.name}">
											<span>{param.name}</span>
											{#if param.description}
												<span class="help-icon" use:tooltip={param.description}>?</span>
											{/if}
										</label>
										<div class="param-input-row">
											{#if param.options && param.options.length > 0}
												<select
													id="param-{param.name}"
													value={formatValue(value)}
													onchange={(e) => handleParamChange(param.name, e.currentTarget.value)}
												>
													{#each param.options as option}
														<option value={option}>{option}</option>
													{/each}
												</select>
											{:else}
												<input
													id="param-{param.name}"
													type="text"
													value={formatValue(value)}
													placeholder={formatDefault(param.default)}
													oninput={(e) => handleParamChange(param.name, e.currentTarget.value)}
													use:paramInput
												/>
											{/if}
											<!-- Pin toggle button -->
											<button
												class="pin-btn"
												class:pinned
												onclick={() => togglePinParam(param.name)}
												use:tooltip={pinned ? "Unpin from node" : "Pin to node"}
												aria-label={pinned ? "Unpin from node" : "Pin to node"}
											>
												<Icon name={pinned ? 'pin-filled' : 'pin'} size={14} />
											</button>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{:else}
						<div class="no-params">No configurable parameters</div>
					{/if}

					<!-- Documentation section (lazy loaded) -->
					<DocumentationSection docstringHtml={docstringHtml} />
				{/if}
			</div>

			{#if !showCode}
				<div class="dialog-footer">
					<span class="hint">R rotate · X flip horizontal · Y flip vertical</span>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Uses global .properties-dialog styles from app.css */

	/* Block-specific: param input row with pin button */
	.param-input-row {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.param-input-row > :first-child {
		flex: 1;
		min-width: 0;
	}

	/* Pin button */
	.pin-btn {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border: none;
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--text-muted);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.pin-btn :global(svg) {
		display: block;
		flex-shrink: 0;
	}

	.pin-btn:hover {
		background: var(--surface-hover);
		color: var(--text-muted);
	}

	.pin-btn.pinned {
		color: var(--node-color);
	}

	.pin-btn.pinned:hover {
		color: var(--node-color);
		filter: brightness(1.2);
	}

	/* Remove padding when showing code editor */
	.dialog-body.flush {
		padding: 0;
		border-radius: 0 0 var(--radius-lg) var(--radius-lg);
		overflow: hidden;
	}

	/* Code preview */
	.code-preview {
		overflow: hidden;
		max-height: 600px;
	}

	.code-preview :global(.cm-editor) {
		max-height: 600px;
	}

	.code-preview :global(.cm-scroller) {
		overflow: auto;
	}

	.code-preview :global(.cm-content) {
		padding: 0;
	}

	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		color: var(--text-muted);
		font-size: 12px;
	}
</style>
