<script lang="ts">
	import { onDestroy } from 'svelte';
	import { confirmationStore, type ConfirmationOptions } from '$lib/stores/confirmation';
	import Icon from '$lib/components/icons/Icon.svelte';
	import DialogShell from '$lib/components/dialogs/shared/DialogShell.svelte';

	let state = $state<{
		open: boolean;
		options: ConfirmationOptions | null;
	}>({ open: false, options: null });

	const unsubscribe = confirmationStore.subscribe((s) => {
		state = { open: s.open, options: s.options };
	});
	onDestroy(unsubscribe);

	function handleConfirm() {
		confirmationStore.confirm();
	}

	function handleCancel() {
		confirmationStore.cancel();
	}

	function handleEnterKey(event: KeyboardEvent) {
		if (state.open && event.key === 'Enter') {
			handleConfirm();
		}
	}
</script>

<svelte:window onkeydown={handleEnterKey} />

<DialogShell
	open={state.open && state.options !== null}
	onClose={handleCancel}
	ariaLabelledby="confirmation-title"
	role="alertdialog"
	dialogClass="confirmation-dialog glass-panel"
>
	{#if state.options}
		<div class="dialog-header">
			<span id="confirmation-title">{state.options.title}</span>
			<button class="icon-btn" onclick={handleCancel} aria-label="Close">
				<Icon name="x" size={16} />
			</button>
		</div>

		<div class="dialog-body">
			<p id="confirmation-message">{state.options.message}</p>
		</div>

		<div class="dialog-actions">
			<button class="ghost" onclick={handleCancel}>
				{state.options.cancelText}
			</button>
			<button onclick={handleConfirm}>
				{state.options.confirmText}
			</button>
		</div>
	{/if}
</DialogShell>

<style>
	:global(.confirmation-dialog) {
		width: 90%;
		max-width: 320px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.dialog-body {
		padding: var(--space-md);
	}

	.dialog-body p {
		margin: 0;
		font-size: var(--font-sm);
		color: var(--text-muted);
		line-height: 1.5;
		white-space: pre-wrap;
	}

	.dialog-actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md) var(--space-md);
	}

	.dialog-actions button {
		padding: var(--space-sm) var(--space-md);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		font-size: 11px;
		font-weight: 500;
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.dialog-actions button.ghost {
		background: transparent;
		color: var(--text-muted);
	}

	.dialog-actions button.ghost:hover {
		background: var(--surface-hover);
		color: var(--text);
		border-color: var(--border-focus);
	}

	.dialog-actions button:not(.ghost) {
		background: var(--surface-raised);
		color: var(--text);
	}

	.dialog-actions button:not(.ghost):hover {
		background: var(--surface-hover);
		border-color: var(--border-focus);
	}
</style>
