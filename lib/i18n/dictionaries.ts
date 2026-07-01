export type Lang = "en" | "es";

export const dictionaries = {
  en: {
    nav: {
      logoAlt: "Alicia Underwater logo",
      home: "Home",
      about: "About",
      offers: "Offers",
      contact: "Contact",
      gallery: "Gallery",
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
    about: {
      label: "About",
      heading: "The story behind the lens",
      paragraphs: [
        "I grew up between the mountains and the sea, but it was the moment I took my first breath-hold dive off the Costa Brava that everything changed. Underwater, time slows down. Light bends. Life moves without noise. I knew I had to find a way to bring that world to the surface.",
        "Combining freediving with photography felt like the most natural thing in the world — one teaches you stillness, the other teaches you to see. Together they let me enter the ocean on its own terms, without tanks or noise, and come back with images that feel alive.",
        "Today I run workshops and experiences from Barcelona and along the Costa Brava coast, working with photographers who want to learn to dive, divers who want to learn to shoot, and curious souls who simply want to discover what lies beneath.",
      ],
      location: "Costa Brava · Barcelona",
    },
    contact: {
      label: "Contact",
      heading: "Get in touch",
      description: "Whether you're a photographer, a diver, or simply curious — reach out and let's talk about your next underwater adventure.",
      location: "Costa Brava · Barcelona",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about yourself and what you're looking for...",
        submit: "Send message",
      },
      success: "Thank you! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
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
      home: "Inicio",
      about: "Sobre mí",
      offers: "Ofertas",
      contact: "Contacto",
      gallery: "Galería",
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
    about: {
      label: "Sobre mí",
      heading: "La historia detrás del objetivo",
      paragraphs: [
        "Crecí entre montañas y mar, pero fue el momento en que hice mi primera inmersión en apnea frente a la Costa Brava cuando todo cambió. Bajo el agua, el tiempo se ralentiza. La luz se dobla. La vida se mueve sin ruido. Supe que tenía que encontrar la manera de traer ese mundo a la superficie.",
        "Combinar la apnea con la fotografía me pareció lo más natural del mundo: una te enseña la quietud, la otra te enseña a ver. Juntas me permiten entrar al océano en sus propios términos, sin botellas ni ruido, y volver con imágenes que se sienten vivas.",
        "Hoy organizo talleres y experiencias desde Barcelona y a lo largo de la Costa Brava, trabajando con fotógrafos que quieren aprender a bucear, buceadores que quieren aprender a fotografiar, y almas curiosas que simplemente quieren descubrir qué hay bajo la superficie.",
      ],
      location: "Costa Brava · Barcelona",
    },
    contact: {
      label: "Contacto",
      heading: "Ponte en contacto",
      description: "Seas fotógrafo, buceador o simplemente curioso — escríbeme y hablemos de tu próxima aventura submarina.",
      location: "Costa Brava · Barcelona",
      fields: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@correo.com",
        messagePlaceholder: "Cuéntame sobre ti y qué estás buscando...",
        submit: "Enviar mensaje",
      },
      success: "¡Gracias! Te responderé pronto.",
      error: "Algo salió mal. Por favor inténtalo de nuevo.",
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
  nav: { logoAlt: string; home: string; about: string; offers: string; contact: string; gallery: string };
  hero: { slides: ReadonlyArray<{ title: string; description: string }> };
  about: {
    label: string;
    heading: string;
    paragraphs: ReadonlyArray<string>;
    location: string;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    location: string;
    fields: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
    success: string;
    error: string;
  };
  footer: {
    links: { linkedin: string; instagram: string; website: string };
    noCookies: string;
    copyright: string;
  };
};
