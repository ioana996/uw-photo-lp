export type Lang = "en" | "es";

export const dictionaries = {
  en: {
    nav: {
      logoAlt: "Alicia Underwater logo",
    },
    hero: {
      slides: [
        {
          title: "Dive Into a New World",
          description:
            "Discover the magic of the underwater realm through the lens of a freediver.",
        },
        {
          title: "Photography Meets Freedom",
          description:
            "Learn to capture breathtaking images beneath the surface of Costa Brava.",
        },
        {
          title: "Your Ocean Adventure Awaits",
          description:
            "Join guided experiences for photographers, divers, and curious souls alike.",
        },
      ],
    },
    footer: {
      links: {
        linkedin: "LinkedIn",
        instagram: "Instagram",
        website: "Website",
      },
      noCookies: "We store no cookies.",
      copyright: `© ${new Date().getFullYear()} Alicia Underwater. All rights reserved.`,
    },
  },
  es: {
    nav: {
      logoAlt: "Logo de Alicia Underwater",
    },
    hero: {
      slides: [
        {
          title: "Sumérgete en un Nuevo Mundo",
          description:
            "Descubre la magia del reino submarino a través de los ojos de una apneísta.",
        },
        {
          title: "Fotografía y Libertad",
          description:
            "Aprende a capturar imágenes impresionantes bajo la superficie de la Costa Brava.",
        },
        {
          title: "Tu Aventura en el Océano te Espera",
          description:
            "Únete a experiencias guiadas para fotógrafos, buceadores y almas curiosas.",
        },
      ],
    },
    footer: {
      links: {
        linkedin: "LinkedIn",
        instagram: "Instagram",
        website: "Sitio web",
      },
      noCookies: "No almacenamos cookies.",
      copyright: `© ${new Date().getFullYear()} Alicia Underwater. Todos los derechos reservados.`,
    },
  },
} as const;

export type Dictionary = {
  nav: { logoAlt: string };
  hero: { slides: ReadonlyArray<{ title: string; description: string }> };
  footer: {
    links: { linkedin: string; instagram: string; website: string };
    noCookies: string;
    copyright: string;
  };
};
