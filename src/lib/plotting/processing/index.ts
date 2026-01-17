/**
 * Processing module exports
 */

export { createRenderQueue, type RenderQueue } from './renderQueue';

// Singleton instance for the application
import { createRenderQueue } from './renderQueue';
import { RENDER_QUEUE_FPS } from '../core/constants';

/** Global render queue for all plot updates */
export const plotRenderQueue = createRenderQueue({
	fps: RENDER_QUEUE_FPS,
	name: 'PlotRenderQueue'
});
