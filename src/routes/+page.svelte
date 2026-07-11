<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import FlowCanvas from '$lib/components/FlowCanvas.svelte';
	import Icon from '$lib/components/icons/Icon.svelte';
	import Tooltip, { tooltip } from '$lib/components/Tooltip.svelte';
	import { BRAND } from '$lib/constants/brand';
	import { PATHVIEW_VERSION } from '$lib/constants/dependencies';
	import { EXAMPLES, DEFAULT_EXAMPLE } from '$lib/constants/examples';
	import { themeStore, type Theme } from '$lib/stores/theme';
	import { toggleThemeWithTransition } from '$lib/utils/themeTransition';
	import { AUTOSAVE_KEY, kvGet, hasFileSystemAccess, type RecentFile } from '$lib/schema/handleStore';
	import { loadGraphFile, listRecentFiles, openRecentFile, removeRecentFile } from '$lib/schema/fileOps';
	import type { GraphFile } from '$lib/nodes/types';
	import { triggerFitView } from '$lib/stores/viewActions';
	import { consoleStore } from '$lib/stores/console';

	// Deep links (?model= / ?modelgh=) land directly in the editor, carrying
	// the full query string (also covers theme/fancyloading/backend params).
	// The landing never renders in that case.
	const redirecting =
		typeof window !== 'undefined' &&
		(() => {
			const params = new URLSearchParams(window.location.search);
			return params.has('model') || params.has('modelgh');
		})();

	const editorHref = `${base}/editor`;

	let currentTheme = $state<Theme>('dark');

	// Hero preview: the autosaved session if one exists, a bundled example
	// otherwise. Loaded into the global graph store, so clicking through to
	// the editor shows exactly this model (no restore prompt).
	let preview = $state<'loading' | 'session' | 'example'>('loading');

	const recentsSupported = hasFileSystemAccess();
	let recentFiles = $state<RecentFile[]>([]);

	function relativeTime(ts: number): string {
		const mins = Math.floor((Date.now() - ts) / 60000);
		if (mins < 1) return 'just now';
		if (mins < 60) return `${mins} min ago`;
		const hours = Math.floor(mins / 60);
		if (hours < 24) return `${hours} h ago`;
		const days = Math.floor(hours / 24);
		return days === 1 ? 'yesterday' : `${days} days ago`;
	}

	function exampleHref(filename: string): string {
		return `${editorHref}?model=${encodeURIComponent(`${base}/examples/${filename}`)}`;
	}

	async function handleOpenRecent(id: string) {
		// The click is the user gesture for the permission re-prompt. Toolbox
		// install stays deferred — no backend runs here; the editor catches up.
		const result = await openRecentFile(id, {
			deferToolboxInstall: true,
			backendReady: new Promise(() => {})
		});
		if (result.success && result.type === 'model') {
			void goto(editorHref);
		} else {
			if (result.error) consoleStore.error(`[open recent] ${result.error}`);
			// Stale entries were evicted by openRecentFile — refresh the list
			recentFiles = await listRecentFiles();
		}
	}

	async function handleRemoveRecent(id: string, e: MouseEvent) {
		e.stopPropagation();
		await removeRecentFile(id);
		recentFiles = await listRecentFiles();
	}

	onMount(() => {
		if (redirecting) {
			void goto(`${editorHref}${window.location.search}`, { replaceState: true });
			return;
		}

		const unsubTheme = themeStore.subscribe((t) => (currentTheme = t));

		void (async () => {
			try {
				const snapshot = await kvGet<GraphFile>(AUTOSAVE_KEY);
				if (snapshot?.version && snapshot.graph?.nodes?.length) {
					// Never-resolving gate keeps the toolbox install (needs the
					// Python backend) deferred; missing blocks render as
					// placeholders in the preview and upgrade in the editor.
					await loadGraphFile(snapshot, { deferToolboxInstall: true, backendReady: new Promise(() => {}) });
					preview = 'session';
				} else {
					const res = await fetch(`${base}/examples/${DEFAULT_EXAMPLE.filename}`);
					if (!res.ok) throw new Error(`HTTP ${res.status}`);
					const file = (await res.json()) as GraphFile;
					await loadGraphFile(file, { deferToolboxInstall: true, backendReady: new Promise(() => {}) });
					preview = 'example';
				}
				setTimeout(() => triggerFitView(), 150);
			} catch (e) {
				console.warn('[landing] hero preview load failed:', e);
				preview = 'example';
			}
		})();

		void listRecentFiles().then((list) => (recentFiles = list));

		return () => unsubTheme();
	});
</script>

<svelte:head>
	<title>{BRAND.name} · Visual editor for {BRAND.framework}</title>
	<meta
		name="description"
		content="Visual block-diagram editor for the {BRAND.framework} simulation framework. Build, simulate and share dynamical system models in the browser."
	/>
	<link rel="icon" type="image/png" href="{base}/favicon.png" />
</svelte:head>

{#if !redirecting}
	<div class="landing">
		<!-- Same nav chrome as the editor (.nav from the component library) -->
		<header class="nav landing-nav">
			<div class="nav-side">
				<a class="icon-btn" href={editorHref} use:tooltip={'Open Editor'} aria-label="Open Editor">
					<Icon name="play" size={16} />
				</a>
			</div>
			<div class="nav-side">
				<a class="icon-btn" href="https://docs.pathsim.org" target="_blank" use:tooltip={'Documentation'} aria-label="Documentation">
					<Icon name="book" size={14} />
				</a>
				<a class="icon-btn" href="https://github.com/pathsim/pathview" target="_blank" use:tooltip={'GitHub'} aria-label="GitHub">
					<Icon name="github" size={14} />
				</a>
				<button class="icon-btn" onclick={(e) => toggleThemeWithTransition(e)} use:tooltip={'Toggle theme'} aria-label="Toggle theme">
					<Icon name={currentTheme === 'dark' ? 'sun' : 'moon'} size={14} />
				</button>
			</div>
		</header>

		<main>
			<!-- Hero -->
			<section class="hero">
				<img src="{base}/{BRAND.logo}" alt={BRAND.name} class="hero-logo" />
				<p class="hero-tagline">
					Visual block-diagram editor for the {BRAND.framework} simulation framework
				</p>
				<p class="hero-description">
					Build dynamical system models from blocks, simulate them right in the browser and
					export them as {BRAND.framework} Python code. No install required.
				</p>
				<div class="hero-actions">
					<a href="{editorHref}?new=1" class="action-card">
						<Icon name="new-canvas" size={20} />
						<span>New</span>
					</a>
					<a href={BRAND.home} target="_blank" class="action-card">
						<Icon name="home" size={20} />
						<span>PathSim</span>
					</a>
					<a href="https://docs.pathsim.org" target="_blank" class="action-card">
						<Icon name="book" size={20} />
						<span>Docs</span>
					</a>
					<a href="https://github.com/pathsim/pathview" target="_blank" class="action-card">
						<Icon name="github" size={20} />
						<span>GitHub</span>
					</a>
					<a href="https://github.com/pathsim/pathview/issues/new/choose" target="_blank" class="action-card">
						<Icon name="alert-triangle" size={20} />
						<span>Issue</span>
					</a>
					<a href="https://milanrother.com/#services" target="_blank" class="action-card">
						<Icon name="activity" size={20} />
						<span>Consulting</span>
					</a>
				</div>

				<!-- Mini editor tile: live read-only canvas of the current model -->
				<a class="hero-visual card interactive" href={editorHref} aria-label="Open in editor">
					<div class="panel-header preview-header">
						<span>
							{#if preview === 'session'}
								Your last session
							{:else if preview === 'example'}
								Example: {DEFAULT_EXAMPLE.name}
							{:else}
								Loading…
							{/if}
						</span>
						<span class="preview-open">
							Open
							<Icon name="arrow-right" size={12} />
						</span>
					</div>
					<div class="preview-canvas">
						<FlowCanvas readonly />
					</div>
				</a>

				<div class="hero-version">pathview {PATHVIEW_VERSION}</div>
			</section>

			{#if recentsSupported && recentFiles.length > 0}
				<div class="separator"></div>

				<!-- Recent files -->
				<section>
					<h2 class="section-label">Recent files</h2>
					<div class="recents">
						{#each recentFiles as recent (recent.id)}
							<button class="recent-row card interactive" onclick={() => handleOpenRecent(recent.id)}>
								<Icon name="file" size={14} />
								<span class="recent-name">{recent.name}</span>
								<span class="recent-time">{relativeTime(recent.lastOpened)}</span>
								<span
									class="icon-btn recent-remove"
									role="button"
									tabindex="0"
									onclick={(e) => handleRemoveRecent(recent.id, e)}
									onkeydown={(e) => e.key === 'Enter' && handleRemoveRecent(recent.id, e as unknown as MouseEvent)}
									use:tooltip={'Remove from list'}
									aria-label="Remove from recent files"
								>
									<Icon name="x" size={12} />
								</span>
							</button>
						{/each}
					</div>
				</section>
			{/if}

			<div class="separator"></div>

			<!-- Guided tours -->
			<section>
				<h2 class="section-label">Guided tours</h2>
				<p class="section-description">
					Step-by-step walkthroughs that highlight the editor's main areas in turn so you know
					what each does.
				</p>
				<div class="tour-grid">
					<a href="{editorHref}?tour=start" class="tour-card card interactive">
						<Icon name="compass" size={20} />
						<div>
							<div class="tour-name">Start</div>
							<div class="tour-description">Navigation, panels, view controls, files and help</div>
						</div>
					</a>
					<a href="{editorHref}?tour=modeling" class="tour-card card interactive">
						<Icon name="shapes" size={20} />
						<div>
							<div class="tour-name">Modeling</div>
							<div class="tour-description">Build and customise block-diagram models</div>
						</div>
					</a>
					<a href="{editorHref}?tour=simulation" class="tour-card card interactive">
						<Icon name="play-circle" size={20} />
						<div>
							<div class="tour-name">Simulation</div>
							<div class="tour-description">Run, tune and inspect simulations</div>
						</div>
					</a>
				</div>
			</section>

			<div class="separator"></div>

			<!-- Examples -->
			<section>
				<h2 class="section-label">Examples</h2>
				<p class="section-description">
					Ready-made models covering controls, signal processing, events and more. Click one to
					open it in the editor.
				</p>
				<div class="examples-grid">
					{#each EXAMPLES as example (example.filename)}
						<a href={exampleHref(example.filename)} class="example-card">
							<div class="example-info">
								<div class="example-name">{example.name}</div>
								<div class="example-description">{example.description}</div>
							</div>
							<div class="example-preview">
								<img
									src="{base}/examples/screenshots/{example.basename}-{currentTheme}.png"
									alt="{example.name} preview"
									loading="lazy"
									decoding="async"
									onerror={(e) => {
										(e.currentTarget as HTMLImageElement).style.display = 'none';
									}}
								/>
							</div>
						</a>
					{/each}
				</div>
			</section>

			<div class="separator"></div>

			<footer>
				<nav class="footer-links">
					<a href="https://github.com/pathsim/pathview" target="_blank">GitHub</a>
					<a href="https://docs.pathsim.org" target="_blank">Docs</a>
					<a href={BRAND.home} target="_blank">{BRAND.framework}</a>
					<a href="https://milanrother.com/#services" target="_blank">Consulting</a>
				</nav>
				<div class="footer-note">pathview {PATHVIEW_VERSION} · {BRAND.framework} ecosystem</div>
			</footer>
		</main>
	</div>

	<Tooltip />
{/if}

<style>
	.landing {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}

	/* ── Nav ─────────────────────────────────────────────────────────────── */
	/* Chrome from .nav (component library); the landing pins it while scrolling. */
	.landing-nav {
		position: sticky;
		top: 0;
		z-index: var(--z-sticky);
	}

	/* ── Layout ──────────────────────────────────────────────────────────── */
	main {
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	section {
		padding: var(--space-xl) 0;
	}

	/* Separators span the full viewport, not just the content column */
	main .separator {
		margin-inline: calc(50% - 50vw);
	}

	.section-description {
		margin: var(--space-sm) 0 var(--space-lg);
		font-size: var(--font-base);
		color: var(--text-muted);
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-xl) 0 var(--space-2xl);
	}

	.footer-links {
		display: flex;
		gap: var(--space-lg);
	}

	.footer-links a {
		font-size: var(--font-base);
		color: var(--text-muted);
		text-decoration: none;
	}

	.footer-links a:hover {
		color: var(--accent);
	}

	.footer-note {
		font-size: var(--font-xs);
		color: var(--text-disabled);
	}

	/* ── Hero ────────────────────────────────────────────────────────────── */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
		padding: var(--space-2xl) 0 var(--space-xl);
		text-align: center;
	}

	.hero-logo {
		height: 92px;
		width: auto;
	}

	.hero-tagline {
		font-size: 13px;
		color: var(--text-muted);
		letter-spacing: 0.2px;
	}

	.hero-description {
		font-size: var(--font-base);
		color: var(--text-muted);
		max-width: 480px;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
	}

	.hero-version {
		font-size: var(--font-xs);
		color: var(--text-disabled);
	}

	/* Mini editor tile — full content width */
	.hero-visual {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: var(--space-sm);
		text-decoration: none;
		color: inherit;
		text-align: left;
		box-shadow: var(--shadow-lg);
	}

	.preview-header {
		border-radius: var(--radius-lg) var(--radius-lg) 0 0;
	}

	/* Inherits the panel-header typography (uppercase, muted) */
	.preview-open {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.preview-canvas {
		width: 100%;
		aspect-ratio: 21 / 9;
		pointer-events: none;
	}

	/* ── Recents ─────────────────────────────────────────────────────────── */
	.recents {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-top: var(--space-lg);
	}

	.recent-row {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-sm) var(--space-md);
		text-align: left;
		font-size: var(--font-base);
		color: var(--text-muted);
	}

	.recent-row:hover {
		background: var(--surface-raised);
	}

	.recent-name {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.recent-time {
		font-size: var(--font-sm);
		color: var(--text-muted);
	}

	.recent-remove {
		width: 24px;
		height: 24px;
	}

	/* ── Tours ───────────────────────────────────────────────────────────── */
	.tour-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.tour-card {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md) var(--space-lg);
		text-decoration: none;
		color: var(--accent);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.tour-name {
		font-size: var(--font-base);
		font-weight: 500;
		color: var(--text-muted);
	}

	.tour-description {
		font-size: var(--font-sm);
		color: var(--text-muted);
		margin-top: 2px;
	}

	/* ── Examples ────────────────────────────────────────────────────────── */
	.examples-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	/* Same card recipe as the welcome banner had: raised info strip that
	   reveals the description on hover, screenshot below. */
	.example-card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
	}

	.example-card:hover {
		border-color: var(--accent);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 25%, transparent);
	}

	.example-info {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		padding: 6px 8px;
		background: var(--surface-raised);
		border-bottom: 1px solid var(--border);
		border-radius: var(--radius-md) var(--radius-md) 0 0;
		transition: padding 0.15s ease;
	}

	.example-name {
		font-size: var(--font-base);
		font-weight: 500;
		color: var(--text-muted);
	}

	.example-description {
		font-size: var(--font-sm);
		color: var(--text-muted);
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition: max-height 0.15s ease, opacity 0.15s ease, margin 0.15s ease;
	}

	.example-card:hover .example-description {
		max-height: 100px;
		opacity: 1;
		margin-top: 4px;
	}

	.example-preview {
		background: var(--surface);
		width: 100%;
		padding-top: 28px;
	}

	.example-preview img {
		display: block;
		width: 100%;
		height: auto;
	}

	/* ── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 900px) {
		.tour-grid,
		.examples-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.tour-grid,
		.examples-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
