

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.c2e093ec.js","_app/immutable/chunks/scheduler.bf00ab1b.js","_app/immutable/chunks/index.72ee3eaa.js"];
export const stylesheets = [];
export const fonts = [];
