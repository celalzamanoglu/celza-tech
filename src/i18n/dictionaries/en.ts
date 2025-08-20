export const dictionary = {
  header: {
    tagline: "Infinite possibilities. Perfectly built.",
    nav: {
      services: "Services",
      projects: "Projects",
      team: "Team",
      contact: "Contact",
    },
  },
  hero: {
    headlinePrefix: "Creative, high quality, and reliable ",
    words: ["apps", "websites", "automations"],
    paragraph:
      "We build production‑grade web apps, cross‑platform mobile apps, reliable backend services, and AI‑driven automation so your team can move faster with confidence.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Explore services",
  },
  services: {
    title: "What we do",
    items: [
      {
        title: "Web Applications",
        description: "High‑performance, accessible web apps with modern stacks.",
      },
      {
        title: "Cross‑platform Mobile Apps",
        description: "iOS, Android, and desktop from a single codebase.",
      },
      {
        title: "Backend Services",
        description: "Secure, scalable APIs, databases, observability, and ops.",
      },
      {
        title: "AI‑driven Automation",
        description: "Agentic workflows to eliminate toil and accelerate teams.",
      },
    ],
  },
  projects: {
    title: "Selected work",
    items: [
      {
        subtitle: "Mobile Apps",
        description: "iOS and Android apps connecting local businesses and communities.",
      },
      {
        subtitle: "Website",
        description: "Brand‑forward site with lively animations and conversions in mind.",
      },
      {
        subtitle: "Portfolio",
        description: "Personal portfolio showcasing selected products, apps, and experiments.",
      },
      {
        subtitle: "Web App",
        description: "AI‑powered gym companion for workouts and plans.",
      },
    ],
  },
  team: {
    title: "Team",
    role: "Founder & CEO",
    location: "Istanbul, Türkiye",
  },
  contact: {
    title: "Contact",
    lead: "We'd love to hear about your project. Reach out and we'll reply within 24–48 hours.",
  },
  footer: {
    rights: "© {year} Celza, Inc. All rights reserved.",
    links: {
      about: "About",
      projects: "Projects",
    },
  },
} as const;
