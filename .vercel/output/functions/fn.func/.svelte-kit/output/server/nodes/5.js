

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.4007809e.js","_app/immutable/chunks/scheduler.bf00ab1b.js","_app/immutable/chunks/index.72ee3eaa.js"];
export const stylesheets = [];
export const fonts = [];
