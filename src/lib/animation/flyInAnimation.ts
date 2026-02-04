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
	duration: 500,           // Animation duration (ms) - matches assembly animation
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
 * Animate a single node flying in from the left edge of the viewport
 *
 * @param nodeId - The ID of the node to animate
 * @param targetPosition - The node's final position in flow coordinates
 * @param getViewport - Function to get current viewport info
 */
export function runFlyInAnimation(
	nodeId: string,
	targetPosition: { x: number; y: number },
	getViewport: () => ViewportInfo
): void {
	// Wait for DOM element to exist
	setTimeout(() => {
		const nodeEl = document.querySelector(`[data-id="${nodeId}"]`) as HTMLElement;
		if (!nodeEl) return;

		const viewport = getViewport();

		// Calculate left edge of viewport in flow coordinates
		const leftEdgeX = -viewport.x / viewport.zoom;

		// Fly from left edge (with margin) to target position
		// The fly-from value is relative to the node's final position
		const flyFromX = leftEdgeX - CONFIG.flyDistanceMargin - targetPosition.x;
		const flyFromY = 0; // Keep vertical position (fly horizontally)

		// Set CSS variables for the animation
		nodeEl.style.setProperty('--fly-from-x', `${flyFromX}px`);
		nodeEl.style.setProperty('--fly-from-y', `${flyFromY}px`);
		nodeEl.style.setProperty('--assembly-duration', `${CONFIG.duration}ms`);
		nodeEl.style.setProperty('--assembly-delay', '0ms');

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
	}, CONFIG.domReadyDelay);
}
