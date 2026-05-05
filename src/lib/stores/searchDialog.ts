/**
 * Store for the global Search dialog. Promoted from local +page.svelte
 * state so external code (guided tours) can open/close it without
 * dispatching synthetic keyboard events.
 */
import { writable, get } from 'svelte/store';

const open = writable(false);

export const searchDialogStore = {
	subscribe: open.subscribe,
	open(): void {
		open.set(true);
	},
	close(): void {
		open.set(false);
	},
	isOpen(): boolean {
		return get(open);
	}
};
