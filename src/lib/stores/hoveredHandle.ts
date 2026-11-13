import { writable } from 'svelte/store';

// Hovered handle (single handle hover)
export const hoveredHandle = writable<{ nodeId: string; handleId: string; color?: string } | null>(null);
