/**
 * Icon Mode Store
 *
 * Controls global display mode for blocks: text-only or icon (Simulink-style).
 * Toggle with 'I' key. Persists to localStorage.
 */

import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'pathview-iconMode';

function getInitialValue(): boolean {
	if (!browser) return false;
	return localStorage.getItem(STORAGE_KEY) === 'true';
}

const store = writable<boolean>(getInitialValue());

store.subscribe((value) => {
	if (browser) {
		localStorage.setItem(STORAGE_KEY, String(value));
	}
});

export const iconModeStore = {
	subscribe: store.subscribe,
	toggle(): void {
		store.update((current) => !current);
	},
	set(value: boolean): void {
		store.set(value);
	},
	get(): boolean {
		return get(store);
	}
};
