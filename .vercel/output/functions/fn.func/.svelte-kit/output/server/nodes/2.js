import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.8dfc67d5.js","_app/immutable/chunks/scheduler.bf00ab1b.js","_app/immutable/chunks/index.72ee3eaa.js","_app/immutable/chunks/Icon.19ebcad4.js","_app/immutable/chunks/runtime.1c4150de.js","_app/immutable/chunks/index.ff67a2a6.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.eaf2110b.js","_app/immutable/chunks/arrow-right.805b8b60.js"];
export const stylesheets = [];
export const fonts = [];
