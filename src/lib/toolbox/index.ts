/**
 * Runtime toolbox subsystem.
 *
 * Public surface for the rest of the app. Internal modules (installer,
 * extractor, register) wire into this from the next phases.
 */

export type {
	ToolboxConfig,
	ToolboxSource,
	ToolboxStorage,
	BlockSelection,
	EventSelection,
	BlockOverride
} from './types';
export { TOOLBOX_STORAGE_KEY } from './types';

export {
	toolboxes,
	toolboxIds,
	getToolbox,
	upsertToolbox,
	removeToolbox,
	replaceToolboxes
} from './store';
