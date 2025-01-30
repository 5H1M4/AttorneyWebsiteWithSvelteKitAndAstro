import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as each, d as add_attribute } from "../../chunks/ssr.js";
import { a as addMessages, i as init, $ as $locale, b as $format } from "../../chunks/runtime.js";
import { I as Icon } from "../../chunks/Icon.js";
const app = "";
const Globe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "globe" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Globe$1 = Globe;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu$1 = Menu;
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact"
    },
    home: {
      title: "Jon Kola:    Law Student, Youth Delegate, and Social Change Advocate",
      subtitle: "Dedicated to making a positive impact through international law, human rights advocacy, and youth empowerment.",
      cta: {
        primary: "Learn More",
        secondary: "Get in Touch"
      }
    },
    about: {
      title: "About Jon Kola",
      paragraph1: "As a dedicated law student with a focus on International Law, Human Rights, and Political Sciences, I am passionate about creating positive change through diplomacy and advocacy.",
      paragraph2: "My journey in international relations and policy development has been shaped by various roles, from representing youth interests at the Council of Europe to contributing to OSCE initiatives.",
      paragraph3: "I believe in the power of youth engagement and education to build stronger, more inclusive societies. Through my work with various organizations, I strive to bridge gaps between policy makers and young people."
    },
    experience: {
      title: "Professional Experience",
      positions: {
        delegate: {
          title: "Youth Delegate from Albania",
          org: "Council of Europe",
          description: "Represented Albania in the Congress of Local and Regional Authorities, contributing to discussions on local and European policymaking."
        },
        manager: {
          title: "Project Manager",
          org: "Institute of Social Studies and Humanities",
          description: "Led and managed projects focused on social studies and humanities, ensuring alignment with organizational goals."
        },
        secretary: {
          title: "Secretary General",
          org: "ELSA Albania",
          description: "Led administrative operations and strategic initiatives, managing board activities and external relations."
        },
        expert: {
          title: "Pool of Young Experts",
          org: "OSCE",
          description: "Contributed expertise in youth policy and regional initiatives as part of the OSCE advisory group."
        }
      }
    },
    skills: {
      title: "Skills & Expertise",
      categories: {
        legal: {
          title: "Legal & Policy Expertise",
          items: ["International Law", "Human Rights", "Political Science", "EU Regulations", "Policy Development"]
        },
        project: {
          title: "Project Management",
          items: ["Cross-cultural Projects", "Strategic Planning", "Stakeholder Communication", "Goal Setting", "Risk Management"]
        },
        advocacy: {
          title: "Advocacy & Diplomacy",
          items: ["Public Speaking", "Negotiation", "International Relations", "Youth Advocacy", "Diplomatic Protocol"]
        }
      }
    },
    contact: {
      title: "Get in Touch",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      },
      success: "Message sent successfully!",
      error: "There was an error sending your message. Please try again."
    }
  },
  al: {
    nav: {
      home: "Kryefaqja",
      about: "Rreth",
      experience: "Eksperienca",
      skills: "Aftësitë",
      contact: "Kontakt"
    },
    home: {
      title: "Jon Kola: Student i Drejtësisë, Delegat i të Rinjve dhe Avokat i Ndryshimit Social",
      subtitle: "I dedikuar për të bërë një ndikim pozitiv përmes së drejtës ndërkombëtare, mbrojtjes së të drejtave të njeriut dhe fuqizimit të të rinjve.",
      cta: {
        primary: "Mëso më shumë",
        secondary: "Na Kontaktoni"
      }
    },
    about: {
      title: "Rreth Jon Kola",
      paragraph1: "Si student i dedikuar i drejtësisë me fokus në të Drejtën Ndërkombëtare, të Drejtat e Njeriut dhe Shkencat Politike, jam i pasionuar për të krijuar ndryshime pozitive përmes diplomacisë dhe avokimisë.",
      paragraph2: "Rruga ime në marrëdhëniet ndërkombëtare dhe zhvillimin e politikave është formuar nga role të ndryshme, nga përfaqësimi i interesave të të rinjve në Këshillin e Evropës deri në kontributin në iniciativat e OSBE-së.",
      paragraph3: "Besoj në fuqinë e angazhimit dhe edukimit të të rinjve për të ndërtuar shoqëri më të forta dhe përfshirëse. Përmes punës sime me organizata të ndryshme, përpiqem të ndërtoj urë midis vendimmarrësve dhe të rinjve."
    },
    experience: {
      title: "Eksperienca Profesionale",
      positions: {
        delegate: {
          title: "Delegat i të Rinjve nga Shqipëria",
          org: "Këshilli i Evropës",
          description: "Përfaqësova Shqipërinë në Kongresin e Autoriteteve Lokale dhe Rajonale, duke kontribuar në diskutimet për politikat lokale dhe evropiane."
        },
        manager: {
          title: "Menaxher Projekti",
          org: "Instituti i Studimeve Sociale dhe Humanitare",
          description: "Drejtova dhe menaxhova projekte të fokusuara në studimet sociale dhe humanitare."
        },
        secretary: {
          title: "Sekretar i Përgjithshëm",
          org: "ELSA Shqipëri",
          description: "Drejtova operacionet administrative dhe iniciativat strategjike."
        },
        expert: {
          title: "Ekspert i të Rinjve",
          org: "OSBE",
          description: "Kontribova ekspertizë në politikat rinore dhe iniciativat rajonale."
        }
      }
    },
    skills: {
      title: "Aftësitë dhe Ekspertiza",
      categories: {
        legal: {
          title: "Ekspertizë Ligjore dhe Politike",
          items: ["E Drejta Ndërkombëtare", "Të Drejtat e Njeriut", "Shkenca Politike", "Rregulloret e BE-së", "Zhvillimi i Politikave"]
        },
        project: {
          title: "Menaxhimi i Projekteve",
          items: ["Projekte Ndërkulturore", "Planifikim Strategjik", "Komunikim me Palët", "Vendosja e Objektivave", "Menaxhimi i Riskut"]
        },
        advocacy: {
          title: "Avokim dhe Diplomaci",
          items: ["Të Folurit Publik", "Negocim", "Marrëdhënie Ndërkombëtare", "Avokim Rinor", "Protokoll Diplomatik"]
        }
      }
    },
    contact: {
      title: "Na Kontaktoni",
      form: {
        name: "Emri",
        email: "Email",
        message: "Mesazhi",
        submit: "Dërgo Mesazhin"
      },
      success: "Mesazhi u dërgua me sukses!",
      error: "Pati një problem në dërgimin e mesazhit. Ju lutemi provoni përsëri."
    }
  }
};
addMessages("en", translations.en);
addMessages("al", translations.al);
init({
  fallbackLocale: "en",
  initialLocale: "en"
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale$1, $$unsubscribe_locale;
  let $_, $$unsubscribe__;
  $$unsubscribe_locale = subscribe($locale, (value) => $locale$1 = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const navigation = [
    { name: $_("nav.home"), href: "#home" },
    { name: $_("nav.about"), href: "#about" },
    {
      name: $_("nav.experience"),
      href: "#experience"
    },
    { name: $_("nav.skills"), href: "#skills" },
    {
      name: $_("nav.contact"),
      href: "#contact"
    }
  ];
  $$unsubscribe_locale();
  $$unsubscribe__();
  return `<header class="fixed w-full bg-navy/90 backdrop-blur-sm z-50"><nav class="container py-4"><div class="flex items-center justify-between"> <div class="flex-none"><button class="flex items-center gap-2 text-sm hover:text-gold transition-colors">${validate_component(Globe$1, "Globe").$$render($$result, { class: "w-4 h-4" }, {}, {})} <span>${escape($locale$1 === "al" ? "AL" : "EN")}</span></button></div>  <div class="flex-1 flex justify-center" data-svelte-h="svelte-37dd1f"><a href="/" class="text-2xl font-bold text-gold flex items-center gap-2">JK
          <img src="/logo.svg" alt="JK Logo" class="w-8 h-8"></a></div>  <div class="flex-1 flex justify-end items-center gap-4"><button class="md:hidden">${`${validate_component(Menu$1, "Menu").$$render($$result, { class: "w-6 h-6" }, {}, {})}`}</button> <ul class="hidden md:flex items-center gap-8">${each(navigation, (item) => {
    return `<li><a${add_attribute("href", item.href, 0)} class="hover:text-gold transition-colors">${escape(item.name)}</a> </li>`;
  })}</ul></div></div> ${``}</nav></header> <main>${slots.default ? slots.default({}) : ``}</main> <footer class="bg-charcoal mt-20"><div class="container py-8"><div class="flex flex-col md:flex-row justify-between items-center gap-4"><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Jon Kola. All rights reserved.</p> <div class="flex gap-4" data-svelte-h="svelte-fhhsj1"><a href="https://www.linkedin.com/in/jon-kola/" target="_blank" rel="noopener noreferrer" class="hover:text-gold"><i class="fab fa-linkedin"></i> LinkedIn</a> <a href="https://www.instagram.com/jonkola_/" target="_blank" rel="noopener noreferrer" class="hover:text-gold"><i class="fab fa-instagram"></i> Instagram</a></div></div></div></footer>`;
});
export {
  Layout as default
};
