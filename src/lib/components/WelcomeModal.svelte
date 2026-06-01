<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from '$lib/components/icons/Icon.svelte';
	import { PATHVIEW_VERSION, EXTRACTED_VERSIONS } from '$lib/constants/dependencies';
	import { startGuidedTour, type TourId } from '$lib/tours';

	interface Example {
		name: string;
		description: string;
		filename: string;
		basename: string;
	}

	interface Props {
		onNew: () => void;
		onClose: () => void;
		onLoadExample: (url: string) => void;
	}

	let { onNew, onClose, onLoadExample }: Props = $props();

	const examples: Example[] = [
		{ filename: 'feedback-system.json', basename: 'feedback-system', name: 'Feedback System', description: 'Linear feedback system with delayed step excitation' },
		{ filename: 'harmonic-oscillator.json', basename: 'harmonic-oscillator', name: 'Harmonic Oscillator', description: 'Linear spring-mass-damper system' },
		{ filename: 'squarewave-lpf.json', basename: 'squarewave-lpf', name: 'Squarewave LPF', description: 'Low pass filtering of a square wave' },
		{ filename: 'pid-subsystem.json', basename: 'pid-subsystem', name: 'PID Loop', description: 'Classic PID control loop as subsystem' },
		{ filename: 'thermostat.json', basename: 'thermostat', name: 'Thermostat', description: 'Relay based thermostat heating system' },
		{ filename: 'cascade-subsystem.json', basename: 'cascade-subsystem', name: 'Cascade PI', description: 'Cascade PI controller with subsystems' },
		{ filename: 'bouncing-ball.json', basename: 'bouncing-ball', name: 'Bouncing Ball', description: 'Bouncing ball with event-based collision' },
		{ filename: 'fmcw-radar.json', basename: 'fmcw-radar', name: 'FMCW Radar', description: 'Frequency-modulated continuous wave radar' },
		{ filename: 'vanderpol.json', basename: 'vanderpol', name: 'Van der Pol', description: 'Van der Pol oscillator system' }
	];

	let isDark = $state(true);

	onMount(() => {
		const updateTheme = () => {
			isDark = document.documentElement.getAttribute('data-theme') !== 'light';
		};
		updateTheme();

		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

		return () => observer.disconnect();
	});

	function handleNew() {
		onNew();
		onClose();
	}

	function handleStartTour(id: TourId) {
		onClose();
		// Wait for the banner's slide-out so highlights aren't covered
		setTimeout(() => startGuidedTour(id), 350);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
<div
	class="welcome-backdrop"
	transition:fade={{ duration: 200 }}
	onclick={onClose}
	role="presentation"
></div>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<aside
	class="welcome-banner"
	transition:fly={{ x: -900, duration: 320, easing: cubicOut, opacity: 1 }}
	role="dialog"
	aria-label="Welcome"
	tabindex="-1"
>
	<svg class="banner-edge" preserveAspectRatio="none" viewBox="0 0 110 100" aria-hidden="true">
		<line
			x1="0"
			y1="0"
			x2="110"
			y2="100"
			stroke="currentColor"
			stroke-width="2.5"
			vector-effect="non-scaling-stroke"
		/>
	</svg>

	<div class="banner-content">
		<div class="version-info">
			pathview {PATHVIEW_VERSION} · {Object.entries(EXTRACTED_VERSIONS).map(([pkg, ver]) => `${pkg.replace('_', '-')} ${ver}`).join(' · ')}
		</div>

		<div class="header">
			<img src="{base}/pathview_logo.png" alt="PathView" class="logo" />
			<p class="tagline">Visual block-diagram editor for the PathSim simulation framework</p>
		</div>

		<div class="actions">
			<button class="action-card" onclick={handleNew}>
				<Icon name="new-canvas" size={20} />
				<span class="action-label">New</span>
			</button>

			<a href="https://pathsim.org" target="_blank" class="action-card">
				<Icon name="home" size={20} />
				<span class="action-label">Home</span>
			</a>

			<a href="https://docs.pathsim.org" target="_blank" class="action-card">
				<Icon name="book" size={20} />
				<span class="action-label">Docs</span>
			</a>

			<a href="https://github.com/pathsim/pathview" target="_blank" class="action-card">
				<Icon name="github" size={20} />
				<span class="action-label">GitHub</span>
			</a>

			<a href="https://github.com/pathsim/pathview/issues/new/choose" target="_blank" class="action-card">
				<Icon name="alert-triangle" size={20} />
				<span class="action-label">Issue</span>
			</a>

			<a href="https://milanrother.com/#services" target="_blank" class="action-card">
				<Icon name="activity" size={20} />
				<span class="action-label">Consulting</span>
			</a>
		</div>

		<div class="separator"></div>

		<div class="tour-section">
			<div class="tour-text">
				<strong>Guided Tours</strong>
				<span>Step-by-step walkthroughs that highlight the editor's main areas in turn so you know what each does.</span>
			</div>
			<div class="tour-buttons">
				<button class="action-card" onclick={() => handleStartTour('start')}>
					<Icon name="compass" size={20} />
					<span class="action-label">Start</span>
				</button>
				<button class="action-card" onclick={() => handleStartTour('modeling')}>
					<Icon name="shapes" size={20} />
					<span class="action-label">Modeling</span>
				</button>
				<button class="action-card" onclick={() => handleStartTour('simulation')}>
					<Icon name="play-circle" size={20} />
					<span class="action-label">Simulation</span>
				</button>
			</div>
		</div>

		<div class="separator"></div>

		<div class="examples-section">
			<div class="examples-grid">
				{#each examples as example}
					<button
						type="button"
						class="example-card"
						onclick={() => onLoadExample(`${base}/examples/${example.filename}`)}
					>
						<div class="example-info">
							<div class="example-name">{example.name}</div>
							<div class="example-description">{example.description}</div>
						</div>
						<div class="example-preview">
							<img
								src="{base}/examples/screenshots/{example.basename}-{isDark ? 'dark' : 'light'}.png"
								alt="{example.name} preview"
								loading="lazy"
								decoding="async"
								onerror={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
							/>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</aside>

<style>
	.welcome-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.18);
		backdrop-filter: blur(5px);
		z-index: var(--z-modal);
	}

	.welcome-banner {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 64vw;
		max-width: 900px;
		min-width: 480px;
		background: var(--surface);
		box-shadow: 4px 0 24px rgba(0, 0, 0, 0.25);
		z-index: calc(var(--z-modal) + 1);
		clip-path: polygon(0 0, calc(100% - 110px) 0, 100% 100%, 0 100%);
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.banner-edge {
		position: absolute;
		top: 0;
		right: 0;
		width: 110px;
		height: 100%;
		color: var(--border);
		pointer-events: none;
	}

	.banner-content {
		flex: 1;
		min-height: 0;
		padding: 28px 150px 28px 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.version-info {
		position: absolute;
		top: 10px;
		left: 16px;
		font-size: 9px;
		color: var(--text-disabled);
	}

	.header {
		text-align: center;
		padding: 20px 0 8px;
	}

	.logo {
		height: 92px;
	}

	.tagline {
		margin: 10px 0 0;
		font-size: 13px;
		color: var(--text-muted);
		letter-spacing: 0.2px;
	}

	.tour-section {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 8px;
		align-items: center;
	}

	.tour-text {
		grid-column: 1 / 4;
	}

	.tour-buttons {
		grid-column: 4 / -1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	.tour-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		line-height: 1.35;
		color: var(--text-muted);
	}

	.tour-text strong {
		font-size: 10px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.tour-text span {
		font-size: 11px;
	}

	.actions {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 8px;
	}

	.action-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding: 6px 8px;
		background: transparent;
		border: none;
		border-radius: var(--radius-md);
		color: var(--text-muted);
		cursor: pointer;
		text-decoration: none;
		font-family: inherit;
	}

	.action-card :global(svg) {
		color: var(--accent);
		transition: transform 0.15s ease;
	}

	.action-card:hover :global(svg) {
		transform: scale(1.2);
	}

	.action-label {
		font-size: 11px;
		font-weight: 500;
	}

	.separator {
		height: 1px;
		background: var(--border);
		margin: 4px -150px 4px -32px;
	}

	.examples-section {
		display: flex;
		flex-direction: column;
		min-height: 0;
		flex: 1;
	}

	.examples-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: min-content;
		align-items: start;
		gap: 10px;
		overflow-y: auto;
		min-height: 0;
		flex: 1;
		/* Padding so card shadows aren't clipped by overflow; matching negative
		   margins keep the layout box the same size. */
		padding: 12px;
		margin: -12px -52px 0 -12px;
	}

	.example-card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
		padding: 0;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		cursor: pointer;
		text-align: left;
		overflow: hidden;
		font-family: inherit;
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
		text-align: left;
		background: var(--surface-raised);
		border-bottom: 1px solid var(--border);
		border-radius: var(--radius-md) var(--radius-md) 0 0;
		transition: padding 0.15s ease;
	}

	.example-name {
		font-size: 11px;
		font-weight: 500;
		color: var(--text-muted);
	}

	.example-description {
		font-size: 10px;
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

	@media (max-width: 900px) {
		.welcome-banner {
			width: 78vw;
			min-width: 0;
		}
	}

	@media (max-width: 700px) {
		.welcome-banner {
			width: 95vw;
			clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 100%, 0 100%);
		}

		.banner-edge {
			width: 60px;
		}

		.banner-content {
			padding-right: 90px;
		}
	}

	@media (max-width: 500px) {
		.actions {
			grid-template-columns: repeat(3, 1fr);
		}

		.examples-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
