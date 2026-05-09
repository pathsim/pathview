/**
 * Routing module public API
 */

// Route calculation
export { calculateRoute, calculateRouteWithWaypoints, calculateSimpleRoute, getPathCells } from './routeCalculator';

// Grid
export { SparseGrid } from './gridBuilder';

// Constants used by FlowCanvas
export {
	ROUTING_MARGIN,
	HANDLE_OFFSET,
	ARROW_INSET,
	ASYNC_BATCH_SIZE,
	WAYPOINT_MERGE_THRESHOLD,
	WAYPOINT_COLLINEAR_THRESHOLD,
	ROUTING_CONTEXT_PADDING,
	EDGE_SOURCE_OFFSET,
	EDGE_TARGET_OFFSET,
	EDGE_CORNER_RADIUS
} from './constants';

// Types
export type { Bounds, RoutingContext, RouteResult, Direction, PortStub } from './types';
