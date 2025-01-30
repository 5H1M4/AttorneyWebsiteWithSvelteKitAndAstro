

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.987c18fe.js","_app/immutable/chunks/scheduler.bf00ab1b.js","_app/immutable/chunks/index.72ee3eaa.js","_app/immutable/chunks/arrow-right.805b8b60.js","_app/immutable/chunks/Icon.19ebcad4.js"];
export const stylesheets = [];
export const fonts = [];
