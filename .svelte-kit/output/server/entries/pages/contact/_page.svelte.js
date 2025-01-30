import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Linkedin$1 = Linkedin;
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mail$1 = Mail;
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MapPin = Map_pin;
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "phone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Phone$1 = Phone;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-sc4f8i_START -->${$$result.title = `<title>Contact - Jon Kola</title>`, ""}<!-- HEAD_svelte-sc4f8i_END -->`, ""} <section class="py-20"><div class="container"><div class="max-w-4xl mx-auto"><h1 class="text-4xl font-bold text-center mb-12" data-svelte-h="svelte-11ck3w0">Get in Touch</h1> <div class="grid md:grid-cols-2 gap-12"><div class="space-y-8"><div><h2 class="text-2xl font-bold mb-4" data-svelte-h="svelte-1whj2uc">Contact Information</h2> <div class="space-y-4"><a href="mailto:contact@jonkola.com" class="flex items-center gap-3 text-offwhite/80 hover:text-gold">${validate_component(Mail$1, "Mail").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span data-svelte-h="svelte-11u974x">contact@jonkola.com</span></a> <a href="tel:+355123456789" class="flex items-center gap-3 text-offwhite/80 hover:text-gold">${validate_component(Phone$1, "Phone").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span data-svelte-h="svelte-tbvhb">+355 123 456 789</span></a> <div class="flex items-center gap-3 text-offwhite/80">${validate_component(MapPin, "MapPin").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span data-svelte-h="svelte-65w0o9">Tirana, Albania</span></div> <a href="https://www.linkedin.com/in/jon-kola/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-offwhite/80 hover:text-gold">${validate_component(Linkedin$1, "Linkedin").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span data-svelte-h="svelte-xfrcj5">LinkedIn Profile</span></a></div></div></div> <form class="space-y-6" data-svelte-h="svelte-bfqp9k"><div><label for="name" class="block text-sm font-medium mb-2">Name</label> <input type="text" id="name" class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"></div> <div><label for="email" class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email" class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"></div> <div><label for="message" class="block text-sm font-medium mb-2">Message</label> <textarea id="message" rows="4" class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"></textarea></div> <button type="submit" class="btn btn-primary w-full">Send Message</button></form></div></div></div></section>`;
});
export {
  Page as default
};
