<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { BRAND } from '$lib/constants/brand';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// Drive the CSS accent override (data-brand) for the active build's brand.
	// Set on hydration (synchronously, not onMount) to minimize any flash.
	if (typeof document !== 'undefined') {
		document.documentElement.dataset.brand = BRAND.key;
	}

	// whatsmytraffic-Analytics nur auf der Web-Version (view.pathsim.org),
	// nicht in der Standalone-/pip-Version.
	onMount(() => {
		if (location.hostname !== 'view.pathsim.org') return;
		const s = document.createElement('script');
		s.defer = true;
		s.src = 'https://whatsmytraffic.com/beacon.js';
		s.dataset.websiteId = '4fcc8497-cf99-4df4-bedd-36f46b4b9c72';
		document.head.appendChild(s);
	});
</script>

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
</style>
