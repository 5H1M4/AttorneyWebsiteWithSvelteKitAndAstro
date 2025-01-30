

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e219e8ef.js","_app/immutable/chunks/scheduler.bf00ab1b.js","_app/immutable/chunks/index.72ee3eaa.js","_app/immutable/chunks/Icon.19ebcad4.js","_app/immutable/chunks/runtime.1c4150de.js","_app/immutable/chunks/index.ff67a2a6.js"];
export const stylesheets = ["_app/immutable/assets/0.44c2e9f0.css"];
export const fonts = [];
