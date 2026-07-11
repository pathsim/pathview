/**
 * Theme toggle with a radial "circle wipe" View Transition expanding from
 * the click position (or the center of a fallback element, e.g. when
 * triggered via keyboard shortcut). Falls back to a plain toggle when the
 * View Transitions API is unavailable.
 */

import { themeStore } from '$lib/stores/theme';

export function toggleThemeWithTransition(e?: MouseEvent, fallbackOrigin?: HTMLElement): void {
	const apply = () => themeStore.toggle();

	if (!document.startViewTransition) {
		apply();
		return;
	}

	let x: number, y: number;
	if (e) {
		x = e.clientX;
		y = e.clientY;
	} else if (fallbackOrigin) {
		const rect = fallbackOrigin.getBoundingClientRect();
		x = rect.left + rect.width / 2;
		y = rect.top + rect.height / 2;
	} else {
		apply();
		return;
	}

	const maxRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
	const transition = document.startViewTransition(apply);
	transition.ready.then(() => {
		document.documentElement.animate(
			{ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`] },
			{ duration: 500, easing: 'ease-out', pseudoElement: '::view-transition-new(root)' }
		);
	});
}
