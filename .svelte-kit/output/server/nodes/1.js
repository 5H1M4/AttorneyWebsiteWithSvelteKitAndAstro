

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f882dd75.js","_app/immutable/chunks/scheduler.bf00ab1b.js","_app/immutable/chunks/index.72ee3eaa.js","_app/immutable/chunks/singletons.eaf2110b.js","_app/immutable/chunks/index.ff67a2a6.js"];
export const stylesheets = [];
export const fonts = [];
