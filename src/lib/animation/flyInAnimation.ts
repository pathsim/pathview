/**
 * Single-Node Fly-In Animation
 *
 * Animates a newly placed node flying in from the left edge of the viewport.
 * Reuses the CSS animation infrastructure from assemblyAnimation.
 *
 * Usage:
 *   import { runFlyInAnimation } from '$lib/animation/flyInAnimation';
 *
 *   // Inside SvelteFlow context (FlowUpdater):
 *   runFlyInAnimation(nodeId, position, getViewport);
 */

// ============================================================================
// Configuration
// ============================================================================

const CONFIG = {
	duration: 300,           // Animation duration (ms)
	flyDistanceMargin: 100,  // Extra margin beyond viewport edge (px in flow coords)
	domReadyDelay: 50        // Wait for DOM to render after node creation (ms)
};

// ============================================================================
// Types
// ============================================================================

export interface ViewportInfo {
	zoom: number;
	x: number;       // Viewport pan x
	y: number;       // Viewport pan y
	width: number;   // Canvas width in pixels
	height: number;  // Canvas height in pixels
}

// ============================================================================
// Animation Function
// ============================================================================

/**
 * Animate a single node flying in from the cursor position
 *
 * @param nodeId - The ID of the node to animate
 * @param targetPosition - The node's final position in flow coordinates
 * @param getViewport - Function to get current viewport info
 * @param cursorScreen - Cursor position in screen coordinates (optional)
 * @param screenToFlow - Function to convert screen to flow coordinates (optional)
 */
export function runFlyInAnimation(
	nodeId: string,
	targetPosition: { x: number; y: number },
	getViewport: () => ViewportInfo,
	cursorScreen?: { x: number; y: number } | null,
	screenToFlow?: (pos: { x: number; y: number }) => { x: number; y: number }
): void {
	let flyFromX: number;
	let flyFromY: number;

	if (cursorScreen && screenToFlow) {
		// Convert cursor screen position to flow coordinates
		const cursorFlow = screenToFlow(cursorScreen);
		// Calculate offset from target position (fly-from is relative to final position)
		flyFromX = cursorFlow.x - targetPosition.x;
		flyFromY = cursorFlow.y - targetPosition.y;
	} else {
		// Fallback: fly from left edge of viewport
		const viewport = getViewport();
		const leftEdgeX = -viewport.x / viewport.zoom;
		flyFromX = leftEdgeX - CONFIG.flyDistanceMargin - targetPosition.x;
		flyFromY = 0;
	}

	// Poll for DOM element (typically appears within 1-2 frames)
	let attempts = 0;
	const maxAttempts = 20;

	function tryAnimate() {
		const nodeEl = document.querySelector(`[data-id="${nodeId}"]`) as HTMLElement;

		if (!nodeEl) {
			attempts++;
			if (attempts < maxAttempts) {
				requestAnimationFrame(tryAnimate);
			}
			return;
		}

		// Immediately set initial position to prevent flicker
		// This positions the node at the start of the animation before CSS takes over
		nodeEl.style.translate = `${flyFromX}px ${flyFromY}px`;
		nodeEl.style.scale = '0.8';
		nodeEl.style.opacity = '0';

		// Set CSS variables for the animation
		nodeEl.style.setProperty('--fly-from-x', `${flyFromX}px`);
		nodeEl.style.setProperty('--fly-from-y', `${flyFromY}px`);
		nodeEl.style.setProperty('--assembly-duration', `${CONFIG.duration}ms`);
		nodeEl.style.setProperty('--assembly-delay', '0ms');

		// Start animation in next frame (after initial styles are applied)
		requestAnimationFrame(() => {
			// Remove inline styles and let animation take over
			nodeEl.style.removeProperty('translate');
			nodeEl.style.removeProperty('scale');
			nodeEl.style.removeProperty('opacity');

			// Add the assembling class to trigger the CSS animation
			nodeEl.classList.add('assembling');

			// Cleanup after animation completes
			setTimeout(() => {
				nodeEl.classList.remove('assembling');
				nodeEl.style.removeProperty('--fly-from-x');
				nodeEl.style.removeProperty('--fly-from-y');
				nodeEl.style.removeProperty('--assembly-duration');
				nodeEl.style.removeProperty('--assembly-delay');
			}, CONFIG.duration + 50);
		});
	}

	requestAnimationFrame(tryAnimate);
}
