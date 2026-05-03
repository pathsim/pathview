<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from '$lib/components/icons/Icon.svelte';
	import { tooltip } from '$lib/components/Tooltip.svelte';
	import {
		TOOLBOX_CATALOG,
		performInstall,
		discoverToolbox,
		registerToolbox,
		uninstallToolbox,
		upsertToolbox,
		removeToolbox,
		toolboxes,
		type CatalogEntry,
		type ToolboxConfig,
		type ToolboxSource,
		type BlockSelection,
		type EventSelection,
		type IntrospectedBlock,
		type IntrospectedEvent
	} from '$lib/toolbox';

	type Step = 'manager' | 'source' | 'trust' | 'install' | 'select' | 'customize';
	type SourceTab = 'catalog' | 'pypi' | 'url' | 'file';

	interface Props {
		open: boolean;
		/** Optional existing toolbox to edit; jumps straight into install/discover. */
		editing?: ToolboxConfig | null;
		onClose: () => void;
		onSaved?: (toolbox: ToolboxConfig) => void;
	}

	let { open, editing = null, onClose, onSaved }: Props = $props();

	let step = $state<Step>('manager');
	let tab = $state<SourceTab>('catalog');

	// Reactive list of installed toolboxes (drives manager and catalog filter)
	let installed = $state<ToolboxConfig[]>([]);
	toolboxes.subscribe((list) => (installed = list));

	// Source-step inputs
	let pypiPkg = $state('');
	let pypiVersion = $state('');
	let pypiImportPath = $state('');
	let urlValue = $state('');
	let urlImportPath = $state('');
	let fileName = $state('');
	let fileContent = $state('');
	let displayNameInput = $state('');
	let eventsImportPathInput = $state('');

	// Build artifact across the wizard
	let resolvedSource = $state<ToolboxSource | null>(null);
	let resolvedImportPath = $state('');
	let resolvedDisplayName = $state('');
	let resolvedEventsImportPath = $state<string | undefined>(undefined);
	let toolboxId = $state('');
	let categoryByClass = $state<Record<string, string>>({});

	// Install + discover state
	let installStatus = $state<'idle' | 'installing' | 'discovering' | 'done' | 'error'>('idle');
	let installMessage = $state('');
	let installError = $state('');
	let discoveredBlocks = $state<IntrospectedBlock[]>([]);
	let discoveredEvents = $state<IntrospectedEvent[]>([]);

	// Selection state
	let blockSelections = $state<BlockSelection[]>([]);
	let eventSelections = $state<EventSelection[]>([]);
	let categoryEdits = $state<Record<string, string>>({});

	// Customize-step state
	let activeCustomize = $state<string | null>(null);

	$effect(() => {
		if (!open) return;
		if (editing) {
			startEdit(editing);
		} else {
			resetFresh();
		}
	});

	function resetFresh() {
		step = 'manager';
		tab = 'catalog';
		pypiPkg = pypiVersion = pypiImportPath = '';
		urlValue = urlImportPath = '';
		fileName = fileContent = '';
		displayNameInput = '';
		eventsImportPathInput = '';
		resolvedSource = null;
		resolvedImportPath = '';
		resolvedDisplayName = '';
		resolvedEventsImportPath = undefined;
		toolboxId = '';
		categoryByClass = {};
		installStatus = 'idle';
		installMessage = '';
		installError = '';
		discoveredBlocks = [];
		discoveredEvents = [];
		blockSelections = [];
		eventSelections = [];
		categoryEdits = {};
		activeCustomize = null;
	}

	function startEdit(t: ToolboxConfig) {
		resetFresh();
		resolvedSource = t.source;
		resolvedImportPath = t.importPath;
		resolvedDisplayName = t.displayName;
		resolvedEventsImportPath = t.eventsImportPath;
		toolboxId = t.id;
		blockSelections = t.blocks.map((b) => ({ ...b }));
		eventSelections = t.events.map((e) => ({ ...e }));
		runInstallAndDiscover();
	}

	function startAddToolbox() {
		// Coming from manager → go to source picker
		step = 'source';
	}

	async function handleManagerUninstall(t: ToolboxConfig) {
		await uninstallToolbox(t);
		removeToolbox(t.id);
	}

	function pickCatalog(entry: CatalogEntry) {
		resolvedSource = entry.source;
		resolvedImportPath = entry.importPath;
		resolvedDisplayName = entry.displayName;
		resolvedEventsImportPath = entry.eventsImportPath;
		toolboxId = entry.id;
		categoryByClass = entry.categoryByClass ?? {};
		step = 'trust';
	}

	function confirmPyPI() {
		if (!pypiPkg.trim()) return;
		const pkg = pypiPkg.trim();
		resolvedSource = { type: 'pypi', pkg, version: pypiVersion.trim() || undefined };
		resolvedImportPath = (pypiImportPath.trim() || pkg).replace(/-/g, '_');
		resolvedDisplayName = displayNameInput.trim() || pkg;
		resolvedEventsImportPath = eventsImportPathInput.trim() || undefined;
		toolboxId = `pypi:${pkg}`;
		categoryByClass = {};
		step = 'trust';
	}

	function confirmUrl() {
		if (!urlValue.trim() || !urlImportPath.trim()) return;
		resolvedSource = { type: 'url', url: urlValue.trim() };
		resolvedImportPath = urlImportPath.trim();
		resolvedDisplayName = displayNameInput.trim() || urlImportPath.trim();
		resolvedEventsImportPath = eventsImportPathInput.trim() || undefined;
		toolboxId = `url:${urlValue.trim()}`;
		categoryByClass = {};
		step = 'trust';
	}

	async function handleFileChange(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;
		fileName = file.name;
		fileContent = await file.text();
	}

	function confirmFile() {
		if (!fileName || !fileContent) return;
		resolvedSource = { type: 'inline', filename: fileName, code: fileContent };
		resolvedImportPath = '';
		resolvedDisplayName = displayNameInput.trim() || fileName.replace(/\.py$/, '');
		resolvedEventsImportPath = undefined;
		toolboxId = `inline:${fileName}`;
		categoryByClass = {};
		step = 'trust';
	}

	async function runInstallAndDiscover() {
		if (!resolvedSource) return;
		step = 'install';
		installError = '';
		try {
			installStatus = 'installing';
			installMessage = describeInstall(resolvedSource);
			const result = await performInstall(resolvedSource, resolvedImportPath || undefined);
			resolvedImportPath = result.importPath;

			installStatus = 'discovering';
			installMessage = `Inspecting ${resolvedImportPath}…`;
			const discovered = await discoverToolbox({
				importPath: resolvedImportPath,
				eventsImportPath: resolvedEventsImportPath
			});
			discoveredBlocks = discovered.blocks;
			discoveredEvents = discovered.events;

			blockSelections = discovered.blocks.map((b) => {
				const existing = blockSelections.find((s) => s.className === b.className);
				return existing ?? { className: b.className, enabled: true };
			});
			eventSelections = discovered.events.map((e) => {
				const existing = eventSelections.find((s) => s.className === e.className);
				return existing ?? { className: e.className, enabled: true };
			});
			categoryEdits = {};
			for (const b of discovered.blocks) {
				categoryEdits[b.className] =
					blockSelections.find((s) => s.className === b.className)?.override?.category ??
					categoryByClass[b.className] ??
					resolvedDisplayName;
			}

			installStatus = 'done';
			installMessage = `Found ${discovered.blocks.length} block${
				discovered.blocks.length === 1 ? '' : 's'
			}${discovered.events.length ? ` and ${discovered.events.length} event(s)` : ''}.`;
			step = 'select';
		} catch (err) {
			installStatus = 'error';
			installError = err instanceof Error ? err.message : String(err);
		}
	}

	function describeInstall(s: ToolboxSource): string {
		if (s.type === 'pypi')
			return `Installing ${s.pkg}${s.version ? `==${s.version}` : ''} via micropip…`;
		if (s.type === 'url') return `Installing wheel from ${s.url}…`;
		if (s.type === 'inline') return `Loading ${s.filename}…`;
		return 'Installing…';
	}

	function toggleBlock(className: string) {
		blockSelections = blockSelections.map((s) =>
			s.className === className ? { ...s, enabled: !s.enabled } : s
		);
	}
	function toggleEvent(className: string) {
		eventSelections = eventSelections.map((s) =>
			s.className === className ? { ...s, enabled: !s.enabled } : s
		);
	}
	function setAllBlocks(enabled: boolean) {
		blockSelections = blockSelections.map((s) => ({ ...s, enabled }));
	}
	const enabledBlockCount = $derived(blockSelections.filter((s) => s.enabled).length);

	function applyCategoryEdit(className: string) {
		const cat = categoryEdits[className]?.trim();
		blockSelections = blockSelections.map((s) =>
			s.className === className
				? { ...s, override: { ...(s.override ?? {}), category: cat || undefined } }
				: s
		);
	}

	function setOverride(
		className: string,
		field: 'name' | 'color' | 'shape',
		value: string | undefined
	) {
		blockSelections = blockSelections.map((s) =>
			s.className === className
				? { ...s, override: { ...(s.override ?? {}), [field]: value || undefined } }
				: s
		);
	}

	function getOverride(className: string) {
		return blockSelections.find((s) => s.className === className)?.override ?? {};
	}

	async function save() {
		if (!resolvedSource) return;
		for (const className of Object.keys(categoryEdits)) {
			applyCategoryEdit(className);
		}
		const config: ToolboxConfig = {
			id: toolboxId,
			displayName: resolvedDisplayName,
			source: resolvedSource,
			importPath: resolvedImportPath,
			eventsImportPath: resolvedEventsImportPath,
			blocks: blockSelections,
			events: eventSelections,
			installedAt: new Date().toISOString()
		};
		await registerToolbox(config, {
			blocks: discoveredBlocks,
			events: discoveredEvents,
			categoryByClass
		});
		upsertToolbox(config);
		onSaved?.(config);
		onClose();
	}

	// Catalog entries that aren't already installed
	const availableCatalog = $derived.by(() => {
		const installedIds = new Set(installed.map((t) => t.id));
		return TOOLBOX_CATALOG.filter((e) => !installedIds.has(e.id));
	});

	// Step-specific footer actions (dot index, back target, primary)
	type FooterPrimary = { label: string; fn: () => void; disabled?: boolean } | null;
	const dotIndex = $derived(
		step === 'source' ? 0 : step === 'trust' ? 1 : step === 'install' ? 2 : step === 'select' ? 3 : step === 'customize' ? 4 : -1
	);

	const backTarget = $derived.by((): Step | null => {
		if (step === 'source') return 'manager';
		if (step === 'trust') return 'source';
		if (step === 'install') return installStatus === 'error' ? 'source' : null;
		if (step === 'select') return editing ? null : 'trust';
		if (step === 'customize') return 'select';
		return null;
	});

	const primary = $derived.by((): FooterPrimary => {
		if (step === 'manager') return null; // Add button is in body
		if (step === 'source') {
			if (tab === 'catalog') return null; // cards do the work
			if (tab === 'pypi') return { label: 'Continue', fn: confirmPyPI, disabled: !pypiPkg.trim() };
			if (tab === 'url')
				return { label: 'Continue', fn: confirmUrl, disabled: !urlValue.trim() || !urlImportPath.trim() };
			if (tab === 'file') return { label: 'Continue', fn: confirmFile, disabled: !fileName };
		}
		if (step === 'trust') return { label: 'I trust this, install', fn: runInstallAndDiscover };
		if (step === 'install') {
			if (installStatus === 'error') return { label: 'Retry', fn: runInstallAndDiscover };
			return null;
		}
		if (step === 'select') return { label: 'Save', fn: save };
		if (step === 'customize') return { label: 'Save', fn: save };
		return null;
	});

	function handleBackdrop(e: MouseEvent) {
		if (e.target === e.currentTarget) onClose();
	}
	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'Escape') onClose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="dialog-backdrop" transition:fade={{ duration: 150 }} onclick={handleBackdrop} role="presentation">
		<div
			class="dialog glass-panel wizard"
			transition:scale={{ start: 0.95, duration: 150, easing: cubicOut }}
			role="dialog"
			aria-modal="true"
			aria-labelledby="wizard-title"
		>
			<div class="dialog-header">
				<span id="wizard-title">Toolbox manager</span>
				<div class="header-actions">
					<button class="icon-btn" onclick={onClose} aria-label="Close">
						<Icon name="x" size={16} />
					</button>
				</div>
			</div>

			<div class="wizard-body">
				{#if step === 'manager'}
					<div class="manager">
						{#if installed.length === 0}
							<div class="empty">
								<span>No toolboxes installed yet</span>
								<span class="hint">Add one to extend the block library at runtime.</span>
							</div>
						{:else}
							<div class="installed-list">
								{#each installed as t (t.id)}
									<div class="installed-row">
										<div class="installed-meta">
											<div class="installed-name">{t.displayName}</div>
											<div class="installed-source">
												{#if t.source.type === 'pypi'}
													pip · {t.source.pkg}{t.source.version ? `==${t.source.version}` : ''}
												{:else if t.source.type === 'url'}
													url · {t.source.url}
												{:else if t.source.type === 'inline'}
													file · {t.source.filename}
												{:else}
													{t.source.type}
												{/if}
												· {t.blocks.filter((b) => b.enabled).length} block{t.blocks.filter((b) => b.enabled).length === 1 ? '' : 's'}
											</div>
										</div>
										<button
											class="icon-btn"
											onclick={() => startEdit(t)}
											use:tooltip={'Edit'}
											aria-label="Edit"
										>
											<Icon name="settings" size={14} />
										</button>
										<button
											class="icon-btn"
											onclick={() => handleManagerUninstall(t)}
											use:tooltip={'Uninstall'}
											aria-label="Uninstall"
										>
											<Icon name="trash" size={14} />
										</button>
									</div>
								{/each}
							</div>
						{/if}
						<button class="add-row" onclick={startAddToolbox}>
							<Icon name="plus" size={14} />
							<span>Add toolbox</span>
						</button>
					</div>
				{:else if step === 'source'}
					<div class="header-tabs">
						<button class="header-tab" class:active={tab === 'catalog'} onclick={() => (tab = 'catalog')}>Catalog</button>
						<button class="header-tab" class:active={tab === 'pypi'} onclick={() => (tab = 'pypi')}>PyPI</button>
						<button class="header-tab" class:active={tab === 'url'} onclick={() => (tab = 'url')}>URL</button>
						<button class="header-tab" class:active={tab === 'file'} onclick={() => (tab = 'file')}>File</button>
					</div>

					{#if tab === 'catalog'}
						<div class="catalog-grid">
							{#each availableCatalog as entry (entry.id)}
								<button class="catalog-card" onclick={() => pickCatalog(entry)}>
									<div class="catalog-name">{entry.displayName}</div>
									<div class="catalog-desc">{entry.description}</div>
									<div class="catalog-tags">
										{#each entry.tags as tag}
											<span class="tag">{tag}</span>
										{/each}
									</div>
								</button>
							{:else}
								<div class="empty">
									<span>Catalog empty</span>
									<span class="hint">Everything from the catalog is already installed.</span>
								</div>
							{/each}
						</div>
					{:else if tab === 'pypi'}
						<div class="form">
							<label>
								<span>Package</span>
								<input bind:value={pypiPkg} placeholder="pathsim-batt" />
							</label>
							<label>
								<span>Version (optional)</span>
								<input bind:value={pypiVersion} placeholder="0.1.2" />
							</label>
							<label>
								<span>Import path (optional)</span>
								<input bind:value={pypiImportPath} placeholder="pathsim_batt.blocks" />
							</label>
							<label>
								<span>Display name (optional)</span>
								<input bind:value={displayNameInput} placeholder="defaults to package name" />
							</label>
							<label>
								<span>Events import path (optional)</span>
								<input bind:value={eventsImportPathInput} placeholder="pathsim_batt.events" />
							</label>
						</div>
					{:else if tab === 'url'}
						<div class="form">
							<label>
								<span>Wheel URL</span>
								<input bind:value={urlValue} placeholder="https://…/pathsim_x-0.1-py3-none-any.whl" />
							</label>
							<label>
								<span>Import path</span>
								<input bind:value={urlImportPath} placeholder="pathsim_x.blocks" />
							</label>
							<label>
								<span>Display name (optional)</span>
								<input bind:value={displayNameInput} placeholder="defaults to import path" />
							</label>
							<label>
								<span>Events import path (optional)</span>
								<input bind:value={eventsImportPathInput} placeholder="pathsim_x.events" />
							</label>
						</div>
					{:else if tab === 'file'}
						<div class="form">
							<label class="file-drop">
								<input type="file" accept=".py" onchange={handleFileChange} />
								<span class="muted">{fileName || 'Choose a .py file'}</span>
							</label>
							<label>
								<span>Display name (optional)</span>
								<input bind:value={displayNameInput} placeholder="defaults to file name" />
							</label>
						</div>
					{/if}
				{:else if step === 'trust'}
					<div class="trust">
						<div class="warning-icon"><Icon name="zap" size={20} /></div>
						<h3>You're about to run third-party code</h3>
						<p>
							PathView will install <strong>{resolvedDisplayName}</strong> and import it into Pyodide. The code runs
							in your browser, sandboxed inside this tab — but it can still make network requests, read clipboard
							data, or consume CPU/memory.
						</p>
						<p>Only continue if you trust the source.</p>
						<div class="source-recap">
							{#if resolvedSource?.type === 'pypi'}
								<code>pip install {resolvedSource.pkg}{resolvedSource.version ? `==${resolvedSource.version}` : ''}</code>
							{:else if resolvedSource?.type === 'url'}
								<code>{resolvedSource.url}</code>
							{:else if resolvedSource?.type === 'inline'}
								local file <code>{resolvedSource.filename}</code> ({resolvedSource.code.length.toLocaleString()} chars)
							{/if}
						</div>
					</div>
				{:else if step === 'install'}
					<div class="install">
						{#if installStatus === 'error'}
							<div class="error">
								<div class="error-title">Installation failed</div>
								<pre>{installError}</pre>
							</div>
						{:else}
							<div class="spinner-row">
								<span class="spinner"></span>
								<span>{installMessage}</span>
							</div>
						{/if}
					</div>
				{:else if step === 'select'}
					<div class="select-step">
						<div class="row-toolbar">
							<div class="muted">{enabledBlockCount} of {blockSelections.length} blocks selected</div>
							<div class="row-toolbar-actions">
								<button class="ghost" onclick={() => setAllBlocks(true)}>Select all</button>
								<button class="ghost" onclick={() => setAllBlocks(false)}>None</button>
								<button class="ghost" onclick={() => (step = 'customize')}>Customize…</button>
							</div>
						</div>
						<div class="block-table" role="table">
							<div class="block-row block-head" role="row">
								<span></span><span>Block</span><span>Description</span><span>Category</span>
							</div>
							{#each blockSelections as sel (sel.className)}
								{@const block = discoveredBlocks.find((b) => b.className === sel.className)}
								{#if block}
									<div class="block-row" role="row">
										<input type="checkbox" checked={sel.enabled} onchange={() => toggleBlock(sel.className)} />
										<span class="block-name">{sel.className}</span>
										<span class="block-desc">{block.description.split('\n')[0]}</span>
										<input
											class="cat-input"
											bind:value={categoryEdits[sel.className]}
											onblur={() => applyCategoryEdit(sel.className)}
										/>
									</div>
								{/if}
							{/each}
						</div>

						{#if discoveredEvents.length > 0}
							<h4>Events</h4>
							<div class="block-table" role="table">
								{#each eventSelections as sel (sel.className)}
									<div class="block-row event-row" role="row">
										<input type="checkbox" checked={sel.enabled} onchange={() => toggleEvent(sel.className)} />
										<span class="block-name">{sel.className}</span>
										<span class="block-desc">
											{discoveredEvents.find((e) => e.className === sel.className)?.description.split('\n')[0] ?? ''}
										</span>
										<span></span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{:else if step === 'customize'}
					<div class="customize-step">
						<p class="muted">
							Optional UI overrides. Anything left blank uses the default from the Python class or the catalog.
						</p>
						{#each blockSelections.filter((s) => s.enabled) as sel (sel.className)}
							{@const ov = getOverride(sel.className)}
							<div class="custom-row">
								<button
									class="custom-head"
									onclick={() => (activeCustomize = activeCustomize === sel.className ? null : sel.className)}
								>
									<span>{sel.className}</span>
									<span class="muted">
										{[ov.name && `name: ${ov.name}`, ov.category && `cat: ${ov.category}`, ov.color && `color`, ov.shape && `shape: ${ov.shape}`]
											.filter(Boolean)
											.join(' · ') || 'no overrides'}
									</span>
								</button>
								{#if activeCustomize === sel.className}
									<div class="custom-body">
										<label>
											<span>Display name</span>
											<input
												value={ov.name ?? ''}
												oninput={(e) => setOverride(sel.className, 'name', (e.target as HTMLInputElement).value)}
												placeholder={sel.className}
											/>
										</label>
										<label>
											<span>Color</span>
											<input
												type="color"
												value={ov.color ?? '#0070C0'}
												oninput={(e) => setOverride(sel.className, 'color', (e.target as HTMLInputElement).value)}
											/>
										</label>
										<label>
											<span>Shape</span>
											<select
												value={ov.shape ?? ''}
												onchange={(e) =>
													setOverride(sel.className, 'shape', (e.target as HTMLSelectElement).value || undefined)}
											>
												<option value="">default</option>
												<option value="pill">pill</option>
												<option value="rect">rect</option>
												<option value="circle">circle</option>
												<option value="diamond">diamond</option>
											</select>
										</label>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="wizard-footer">
				<div class="step-dots">
					{#if dotIndex >= 0}
						{#each Array(5) as _, i}
							<span class="step-dot" class:active={i === dotIndex} class:done={i < dotIndex}></span>
						{/each}
					{/if}
				</div>
				<div class="footer-actions">
					{#if backTarget}
						<button class="ghost" onclick={() => (step = backTarget!)}>Back</button>
					{/if}
					{#if primary}
						<button onclick={primary.fn} disabled={primary.disabled}>{primary.label}</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Uses global .dialog-backdrop, .dialog-header, .glass-panel, .icon-btn,
	   .ghost button, default button, input/select/textarea from app.css */

	.wizard {
		width: 90%;
		max-width: 560px;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.wizard-body {
		flex: 1;
		min-height: 0;
		padding: var(--space-md) var(--space-lg);
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.wizard-footer {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border-top: 1px solid var(--border);
	}

	.step-dots {
		display: flex;
		gap: var(--space-xs);
		align-items: center;
	}

	.step-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--border);
	}

	.step-dot.active {
		background: var(--accent);
	}

	.step-dot.done {
		background: color-mix(in srgb, var(--accent) 50%, transparent);
	}

	.footer-actions {
		display: flex;
		gap: var(--space-sm);
	}

	/* Manager view */
	.manager {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.installed-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.installed-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
	}

	.installed-row:hover {
		border-color: var(--border-focus);
	}

	.installed-meta {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.installed-name {
		font-size: var(--font-md);
		font-weight: 600;
		color: var(--text);
	}

	.installed-source {
		font-size: var(--font-sm);
		color: var(--text-muted);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.add-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		padding: var(--space-sm);
		background: transparent;
		border: 1px dashed var(--border);
		border-radius: var(--radius-md);
		color: var(--text-muted);
		cursor: pointer;
	}

	.add-row:hover {
		background: var(--surface-hover);
		color: var(--text);
		border-color: var(--border-focus);
	}

	/* Pill tabs (matching plot panel header-tab pattern) */
	.header-tabs {
		display: flex;
		gap: var(--space-xs);
		flex-wrap: wrap;
	}

	.header-tab {
		display: flex;
		align-items: center;
		gap: 6px;
		height: 24px;
		padding: 0 10px;
		font-size: var(--font-sm);
		font-weight: 500;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 12px;
		color: var(--text-muted);
		cursor: pointer;
	}

	.header-tab:hover {
		background: var(--surface-hover);
		border-color: var(--border-focus);
		color: var(--text);
	}

	.header-tab.active {
		background: color-mix(in srgb, var(--accent) 15%, var(--surface));
		border-color: var(--accent);
		color: var(--accent);
	}

	.catalog-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-sm);
	}

	.catalog-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding: var(--space-md);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		text-align: left;
		cursor: pointer;
	}

	.catalog-card:hover {
		background: var(--surface-hover);
		border-color: var(--border-focus);
	}

	.catalog-name {
		font-weight: 600;
		font-size: var(--font-md);
		color: var(--text);
	}

	.catalog-desc {
		color: var(--text-muted);
		font-size: var(--font-base);
		line-height: 1.4;
	}

	.catalog-tags {
		display: flex;
		gap: var(--space-xs);
		flex-wrap: wrap;
	}

	.tag {
		font-size: var(--font-sm);
		color: var(--text-muted);
		background: var(--surface);
		padding: 2px var(--space-xs);
		border-radius: var(--radius-sm);
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.form label {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		font-size: var(--font-base);
		color: var(--text-muted);
	}

	.file-drop {
		border: 1px dashed var(--border);
		padding: var(--space-lg);
		border-radius: var(--radius-md);
		cursor: pointer;
		text-align: center;
	}

	.file-drop:hover {
		border-color: var(--border-focus);
	}

	.file-drop input {
		display: none;
	}

	.muted {
		color: var(--text-muted);
		font-size: var(--font-base);
	}

	.empty {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding: var(--space-xl);
		text-align: center;
		color: var(--text-muted);
		font-size: var(--font-md);
	}

	.empty .hint {
		font-size: var(--font-sm);
		color: var(--text-disabled);
	}

	.trust {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.trust h3 {
		margin: 0;
		font-size: var(--font-lg);
		color: var(--text);
		font-weight: 600;
	}

	.trust p {
		margin: 0;
		color: var(--text-muted);
		font-size: var(--font-md);
		line-height: 1.5;
	}

	.warning-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: color-mix(in srgb, var(--warning) 20%, transparent);
		color: var(--warning);
	}

	.source-recap {
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border-radius: var(--radius-sm);
		font-size: var(--font-base);
		color: var(--text-muted);
	}

	.source-recap code {
		font-family: var(--font-mono);
		color: var(--text);
	}

	.spinner-row {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		color: var(--text);
		font-size: var(--font-md);
	}

	.spinner {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 2px solid var(--border);
		border-top-color: var(--accent);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.error {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.error-title {
		color: var(--error);
		font-weight: 600;
		font-size: var(--font-md);
	}

	.error pre {
		margin: 0;
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border: 1px solid var(--error-bg);
		border-radius: var(--radius-sm);
		font-family: var(--font-mono);
		font-size: var(--font-base);
		color: var(--text);
		white-space: pre-wrap;
		word-break: break-word;
	}

	.row-toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
	}

	.row-toolbar-actions {
		display: flex;
		gap: var(--space-xs);
	}

	.block-table {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
		background: var(--surface);
	}

	.block-row {
		display: grid;
		grid-template-columns: 24px minmax(90px, 130px) 1fr 120px;
		gap: var(--space-sm);
		align-items: center;
		padding: var(--space-xs) var(--space-sm);
		font-size: var(--font-md);
		color: var(--text);
		border-bottom: 1px solid var(--border);
	}

	.block-row:last-child {
		border-bottom: none;
	}

	.block-row.block-head {
		background: var(--surface-raised);
		color: var(--text-muted);
		font-size: var(--font-sm);
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.block-row.event-row {
		grid-template-columns: 24px minmax(90px, 130px) 1fr 0;
	}

	.block-name {
		font-weight: 500;
	}

	.block-desc {
		color: var(--text-muted);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.cat-input {
		font-size: var(--font-base);
		padding: var(--space-xs) var(--space-sm);
	}

	h4 {
		margin: var(--space-sm) 0 0;
		font-size: var(--font-sm);
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--text-muted);
		font-weight: 600;
	}

	.custom-row {
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
		background: var(--surface);
	}

	.custom-head {
		display: flex;
		justify-content: space-between;
		gap: var(--space-sm);
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-raised);
		border: none;
		border-radius: 0;
		text-align: left;
		font-size: var(--font-md);
		color: var(--text);
		cursor: pointer;
	}

	.custom-head:hover {
		background: var(--surface-hover);
	}

	.custom-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
	}

	.custom-body label {
		display: grid;
		grid-template-columns: 100px 1fr;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-base);
		color: var(--text-muted);
	}

	input[type='color'] {
		width: 40px;
		height: 28px;
		padding: 2px;
		cursor: pointer;
	}
</style>
