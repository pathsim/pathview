/**
 * Global input-mode flag. While a tour is running, pathview's own keyboard
 * handlers (canvas pan, node nudge, shortcut hotkeys, …) check this flag
 * and bow out so driver.js's navigation isn't fighting them.
 *
 * Cleaner than the previous approach of intercepting arrow keys at capture
 * phase on `window` and synthetically clicking driver.js's nav buttons.
 */
import { writable, get } from 'svelte/store';

export type InputMode = 'normal' | 'tour';

export const inputMode = writable<InputMode>('normal');

/** Synchronous read of the current mode. Use this in keydown handlers
 *  for an early `return` before any preventDefault. */
export const isTourActive = (): boolean => get(inputMode) === 'tour';
