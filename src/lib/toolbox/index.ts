/**
 * Runtime toolbox subsystem.
 */

export type {
	ToolboxConfig,
	ToolboxSource,
	ToolboxStorage,
	BlockSelection,
	EventSelection,
	BlockOverride
} from './types';

export { toolboxes, upsertToolbox, removeToolbox } from './store';

export {
	installPackage,
	loadInlineModule,
	introspectBlocks,
	introspectEvents,
	uninstallModule,
	type IntrospectedBlock,
	type IntrospectedEvent
} from './installer';

export {
	performInstall,
	discoverToolbox,
	registerToolbox,
	uninstallToolbox
} from './register';

export { TOOLBOX_CATALOG, getCatalogEntry, type CatalogEntry } from './catalog';

export { bootstrapToolboxes } from './bootstrap';

export { installAndRegisterToolbox, type InstallSpec } from './installFlow';

export { seedPreloadedToolboxes } from './store';

export { collectRequiredToolboxes, findMissingRequirements } from './dependencies';

export { toolboxSourceKey, hashString } from './identity';
