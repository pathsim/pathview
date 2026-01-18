/**
 * Edge rendering for SVG export
 */

import type { Position } from '@xyflow/svelte';
import type { NodeInstance, Connection } from '$lib/types/nodes';
import type { RenderContext } from './types';
import { getEdgePath, ARROW_PATH } from './edgePath';
import { getNodeDimensions } from './nodes';

/** Calculate handle center position for a node */
function getHandleCenter(
	node: NodeInstance,
	portIndex: number,
	isOutput: boolean
): { x: number; y: number; position: Position } {
	const { x, y } = node.position;
	const { width, height } = getNodeDimensions(node);
	const rotation = (node.params?.['_rotation'] as number) || 0;
	const isVertical = rotation === 1 || rotation === 3;

	const total = isOutput ? node.outputs.length : node.inputs.length;

	// Calculate position along edge
	const percent = total === 1 ? 0.5 : (portIndex + 1) / (total + 1);

	// Determine which side based on rotation
	// Inputs: left(0), top(1), right(2), bottom(3)
	// Outputs: right(0), bottom(1), left(2), top(3)
	let position: Position;
	if (!isOutput) {
		position = (['left', 'top', 'right', 'bottom'] as Position[])[rotation];
	} else {
		position = (['right', 'bottom', 'left', 'top'] as Position[])[rotation];
	}

	let hx: number, hy: number;

	if (isVertical) {
		// Handles on top/bottom
		hx = x + width * percent;
		if (position === 'top') {
			hy = y;
		} else {
			hy = y + height;
		}
	} else {
		// Handles on left/right
		hy = y + height * percent;
		if (position === 'left') {
			hx = x;
		} else {
			hx = x + width;
		}
	}

	return { x: hx, y: hy, position };
}

/** Render a connection to SVG */
export function renderConnection(
	connection: Connection,
	nodesMap: Map<string, NodeInstance>,
	ctx: RenderContext
): string {
	const sourceNode = nodesMap.get(connection.sourceNodeId);
	const targetNode = nodesMap.get(connection.targetNodeId);

	if (!sourceNode || !targetNode) return '';

	const source = getHandleCenter(sourceNode, connection.sourcePortIndex, true);
	const target = getHandleCenter(targetNode, connection.targetPortIndex, false);

	const { path, arrow } = getEdgePath({
		sourceX: source.x,
		sourceY: source.y,
		sourcePosition: source.position,
		targetX: target.x,
		targetY: target.y,
		targetPosition: target.position,
		borderRadius: 8
	});

	return `<g class="edge" data-id="${connection.id}">
	<path d="${path}" fill="none" stroke="${ctx.theme.edge}" stroke-width="1.5"/>
	<g transform="translate(${arrow.x.toFixed(2)}, ${arrow.y.toFixed(2)}) rotate(${arrow.angle})">
		<path d="${ARROW_PATH}" fill="${ctx.theme.edge}"/>
	</g>
</g>`;
}
