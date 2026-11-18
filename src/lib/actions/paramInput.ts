/**
 * Svelte action for entry fields: parameters, names and settings.
 *
 * An entry is committed by the `change` event of the field, which fires on
 * Enter or when the field is left, and only if the value changed. Fields
 * listen to `onchange`, not `oninput`, so a half typed value is never
 * committed: no undo step, live mutation or evaluation per keystroke.
 *
 * Features:
 * - Escape: restore the value the field had when it was focused and unfocus
 *   it, so no `change` fires and nothing is committed; stops propagation
 * - Enter: optionally blur (for single-line inputs, not textareas)
 *
 * Usage:
 *   <input onchange={(e) => commit(e.currentTarget.value)} use:paramInput />
 *   <input use:paramInput={{ blurOnEnter: true }} />
 *   <textarea use:paramInput />
 */

export interface ParamInputOptions {
	/** Restore and blur the input on Escape key (default: true) */
	blurOnEscape?: boolean;
	/** Blur input on Enter key - ignored for textareas (default: false) */
	blurOnEnter?: boolean;
}

const defaultOptions: ParamInputOptions = {
	blurOnEscape: true,
	blurOnEnter: false
};

export function paramInput(
	node: HTMLInputElement | HTMLTextAreaElement,
	options: ParamInputOptions = {}
) {
	const opts = { ...defaultOptions, ...options };

	// Value at focus, restored on Escape
	let focusValue = node.value;

	function handleFocus() {
		focusValue = node.value;
	}

	function handleKeydown(e: Event) {
		const event = e as KeyboardEvent;
		if (event.key === 'Escape' && opts.blurOnEscape) {
			event.stopPropagation();
			node.value = focusValue;
			node.blur();
		}

		// Enter to blur - only for inputs, not textareas (which need Enter for newlines)
		if (event.key === 'Enter' && opts.blurOnEnter && !(node instanceof HTMLTextAreaElement)) {
			event.stopPropagation();
			node.blur();
		}
	}

	node.addEventListener('focus', handleFocus);
	node.addEventListener('keydown', handleKeydown);
	node.setAttribute('autocomplete', 'off');

	return {
		update(newOptions: ParamInputOptions) {
			Object.assign(opts, defaultOptions, newOptions);
		},
		destroy() {
			node.removeEventListener('focus', handleFocus);
			node.removeEventListener('keydown', handleKeydown);
		}
	};
}
