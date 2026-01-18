/**
 * Edge rendering for SVG export
 */

import type { Edge, Position } from '@xyflow/svelte';
import type { NodeInstance } from '$lib/types/nodes';
import type { RenderContext } from './types';
import { getEdgePath, ARROW_PATH } from './edgePath';
import { getNodeDimensions } from './nodes';
import { NODE } from '$lib/constants/dimensions';
import { getHandlePath } from '$lib/constants/handlePaths';

/** Map Position values to handle positions */
function getHandleCenter(
	node: NodeInstance,
	handleId: string,
	isSource: boolean
): { x: number; y: number; position: Position } {
	const { x, y } = node.position;
	const { width, height } = getNodeDimensions(node);
	const rotation = (node.params?.['_rotation'] as number) || 0;
	const isVertical = rotation === 1 || rotation === 3;

	// Determine if this is an input or output handle
	const inputIndex = node.inputs.findIndex((p) => p.id === handleId);
	const outputIndex = node.outputs.findIndex((p) => p.id === handleId);
	const isInput = inputIndex >= 0;
	const index = isInput ? inputIndex : outputIndex;
	const total = isInput ? node.inputs.length : node.outputs.length;

	// Calculate position along edge
	const percent = total === 1 ? 0.5 : (index + 1) / (total + 1);

	// Determine which side based on rotation
	let position: Position;
	if (isInput) {
		position = (['left', 'top', 'right', 'bottom'] as Position[])[rotation];
	} else {
		position = (['right', 'bottom', 'left', 'top'] as Position[])[rotation];
	}

	const handlePath = getHandlePath(rotation);
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

/** Render an edge to SVG */
export function renderEdge(
	edge: Edge,
	nodesMap: Map<string, NodeInstance>,
	ctx: RenderContext
): string {
	const sourceNode = nodesMap.get(edge.source);
	const targetNode = nodesMap.get(edge.target);

	if (!sourceNode || !targetNode) return '';

	const sourceHandleId = edge.sourceHandle || `${edge.source}-output-0`;
	const targetHandleId = edge.targetHandle || `${edge.target}-input-0`;

	const source = getHandleCenter(sourceNode, sourceHandleId, true);
	const target = getHandleCenter(targetNode, targetHandleId, false);

	const { path, arrow } = getEdgePath({
		sourceX: source.x,
		sourceY: source.y,
		sourcePosition: source.position,
		targetX: target.x,
		targetY: target.y,
		targetPosition: target.position,
		borderRadius: 8
	});

	return `<g class="edge" data-id="${edge.id}">
	<path d="${path}" fill="none" stroke="${ctx.theme.edge}" stroke-width="1.5"/>
	<g transform="translate(${arrow.x.toFixed(2)}, ${arrow.y.toFixed(2)}) rotate(${arrow.angle})">
		<path d="${ARROW_PATH}" fill="${ctx.theme.edge}"/>
	</g>
</g>`;
}
