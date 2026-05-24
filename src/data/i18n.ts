export const i18n = {
  es: {
    nav: {
      about: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Ingeniero de Software Frontend",
      bio: "Más de 5 años construyendo aplicaciones web escalables. Especializado en React, Next.js y TypeScript, con enfoque en design systems, arquitectura frontend y la intersección entre producto e ingeniería.",
      cta: "Escríbeme",
      location: "México",
      status: "Abierto a oportunidades",
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          company: "Tiendas 3B",
          role: "Software Engineer – Frontend",
          period: "Oct 2022 – Presente",
          bullets: [
            "Lideró el desarrollo de un design system corporativo, mejorando la consistencia visual y la velocidad de desarrollo.",
            "Construyó componentes escalables con React, TypeScript, Storybook y Tailwind CSS.",
            "Implementó flujos de autenticación con OAuth usando NextAuth.",
            "Mentorizó desarrolladores frontend en clean code y testing.",
          ],
        },
        {
          company: "Yema & Co",
          role: "Software Engineer – Frontend Jr",
          period: "Ago 2021 – Oct 2022",
          bullets: [
            "Desarrolló features para la plataforma e-commerce con React y Tailwind CSS.",
            "Contribuyó al sistema POS usando Apollo Client y GraphQL.",
            "Tradujo diseños de Figma a componentes React accesibles.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          name: "Tabe",
          desc: "Sistema de gestión para restaurantes",
          url: "https://tabe.mx/",
          tags: ["React", "Next.js", "TypeScript", "Nestjs", "Prisma", "Neon"],
          cta: "Visitar",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      categories: [
        {
          label: "Frontend",
          items: [
            "React",
            "React Native",
            "Next.js",
            "Astro",
            "Tailwind CSS",
            "Storybook",
            "Turborepo",
          ],
        },
        {
          label: "Lenguajes",
          items: ["JavaScript", "TypeScript", "SQL", "GraphQL"],
        },
        {
          label: "Testing",
          items: ["Jest", "React Testing Library", "Cypress", "Playwright"],
        },
        { label: "Backend", items: ["Node.js", "Express", "Nestjs"] },
        {
          label: "Herramientas",
          items: [
            "Git",
            "Docker",
            "Jira",
            "Figma",
            "Postman",
            "Claude Code",
            "Cursor",
          ],
        },
      ],
    },
    certifications: {
      title: "Certificaciones",
      items: [
        {
          name: "Design Systems with Storybook, v2",
          platform: "Frontend Masters",
          instructor: "Steve Kinney",
          date: "Oct 2025",
          hours: "4h 9min",
          pdf: "/certs/design-systems-storybook.pdf",
        },
      ],
    },
    contact: {
      title: "Contacto",
      heading: "¿Trabajamos juntos?",
      sub: "Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
      cta: "Escríbeme",
      or: "o encuéntrame en",
    },
  },
  en: {
    nav: {
      about: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Frontend Software Engineer",
      bio: "5+ years building scalable web apps. Specialized in React, Next.js, and TypeScript, with a focus on design systems, frontend architecture, and the intersection of product and engineering.",
      cta: "Get in touch",
      location: "Mexico",
      status: "Open to opportunities",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "Tiendas 3B",
          role: "Software Engineer – Frontend",
          period: "Oct 2022 – Present",
          bullets: [
            "Led the development of a company-wide design system, improving UI consistency and dev speed.",
            "Built scalable components with React, TypeScript, Storybook, and Tailwind CSS.",
            "Implemented auth flows with OAuth providers using NextAuth.",
            "Mentored frontend developers in clean code and testing strategies.",
          ],
        },
        {
          company: "Yema & Co",
          role: "Software Engineer – Frontend Jr",
          period: "Aug 2021 – Oct 2022",
          bullets: [
            "Developed features for the e-commerce platform with React and Tailwind CSS.",
            "Contributed to building a POS system using Apollo Client and GraphQL.",
            "Translated Figma designs into accessible React components.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Tabe",
          desc: "Web platform for management and organization.",
          url: "https://tabe.mx/",
          tags: ["React", "Next.js", "TypeScript"],
          cta: "Visit",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          label: "Frontend",
          items: [
            "React",
            "React Native",
            "Next.js",
            "Astro",
            "Tailwind CSS",
            "Storybook",
            "Turborepo",
          ],
        },
        {
          label: "Languages",
          items: ["JavaScript", "TypeScript", "SQL", "GraphQL"],
        },
        {
          label: "Testing",
          items: ["Jest", "React Testing Library", "Cypress", "Playwright"],
        },
        { label: "Backend", items: ["Node.js", "Express"] },
        {
          label: "Tools",
          items: ["Git", "Docker", "Jira", "Figma", "Postman"],
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          name: "Design Systems with Storybook, v2",
          platform: "Frontend Masters",
          instructor: "Steve Kinney",
          date: "Oct 2025",
          hours: "4h 9min",
          pdf: "/certs/design-systems-storybook.pdf",
        },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Shall we work together?",
      sub: "I'm always open to new opportunities and collaborations.",
      cta: "Get in touch",
      or: "or find me on",
    },
  },
} as const;

export type Lang = keyof typeof i18n;
export type I18nData = typeof i18n.es;
