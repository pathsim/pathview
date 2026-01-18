/**
 * Event rendering for SVG export
 */

import type { EventInstance } from '$lib/types/events';
import type { RenderContext } from './types';
import { eventRegistry } from '$lib/events/registry';
import { EVENT } from '$lib/constants/dimensions';

/** Escape XML special characters */
function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/** Render an event to SVG */
export function renderEvent(event: EventInstance, ctx: RenderContext): string {
	const cx = event.position.x + EVENT.center;
	const cy = event.position.y + EVENT.center;
	const color = event.color || ctx.theme.accent;
	const typeDef = eventRegistry.get(event.type);

	const parts: string[] = [];

	// Diamond shape (rotated square)
	parts.push(
		`<rect x="${cx - EVENT.diamondOffset}" y="${cy - EVENT.diamondOffset}" width="${EVENT.diamondSize}" height="${EVENT.diamondSize}" rx="4" fill="none" stroke="${ctx.theme.edge}" stroke-width="1" transform="rotate(45 ${cx} ${cy})"/>`
	);

	// Labels
	if (ctx.options.showLabels) {
		// Event name
		const nameY = ctx.options.showTypeLabels ? cy - 4 : cy;
		parts.push(
			`<text x="${cx}" y="${nameY}" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="10" font-weight="600" font-family="system-ui, -apple-system, sans-serif">${escapeXml(event.name)}</text>`
		);

		// Type label
		if (ctx.options.showTypeLabels && typeDef) {
			parts.push(
				`<text x="${cx}" y="${cy + 10}" text-anchor="middle" dominant-baseline="middle" fill="${ctx.theme.textMuted}" font-size="8" font-family="system-ui, -apple-system, sans-serif">${escapeXml(typeDef.name)}</text>`
			);
		}
	}

	return `<g class="event" data-id="${event.id}">
	${parts.join('\n\t')}
</g>`;
}
