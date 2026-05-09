<!--
  Shared dialog shell — provides backdrop + scaled glass-panel wrapper +
  Escape-to-close + click-outside-to-close. Inner markup (header/body/footer)
  stays in each consumer so existing dialogs can adopt this incrementally
  without churning their content.

  Custom keyboard handling stays in the consumer (extra svelte:window listener);
  if the consumer also handles Escape, set `closeOnEscape={false}` to avoid
  double-firing.
-->
<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';

	interface Props {
		open: boolean;
		onClose: () => void;
		ariaLabelledby?: string;
		dataTour?: string;
		role?: 'dialog' | 'alertdialog';
		closeOnEscape?: boolean;
		closeOnBackdrop?: boolean;
		backdropFadeDuration?: number;
		dialogScaleDuration?: number;
		backdropClass?: string;
		dialogClass?: string;
		dialogStyle?: string;
		children: Snippet;
	}

	let {
		open,
		onClose,
		ariaLabelledby,
		dataTour,
		role = 'dialog',
		closeOnEscape = true,
		closeOnBackdrop = true,
		backdropFadeDuration = 150,
		dialogScaleDuration = 150,
		backdropClass = 'dialog-backdrop',
		dialogClass = 'dialog glass-panel',
		dialogStyle,
		children
	}: Props = $props();

	function handleBackdropClick(e: MouseEvent) {
		if (!closeOnBackdrop) return;
		if (e.target === e.currentTarget) onClose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		if (closeOnEscape && e.key === 'Escape') onClose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
	<div
		class={backdropClass}
		transition:fade={{ duration: backdropFadeDuration }}
		onclick={handleBackdropClick}
		role="presentation"
	>
		<div
			class={dialogClass}
			style={dialogStyle}
			data-tour={dataTour}
			transition:scale={{ start: 0.95, duration: dialogScaleDuration, easing: cubicOut }}
			{role}
			tabindex="-1"
			aria-modal="true"
			aria-labelledby={ariaLabelledby}
		>
			{@render children()}
		</div>
	</div>
{/if}
