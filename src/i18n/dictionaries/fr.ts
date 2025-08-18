export const dictionary = {
  header: {
    tagline: "Des possibilités infinies. Parfaitement réalisé.",
    nav: {
      services: "Services",
      projects: "Projets",
      team: "Équipe",
      contact: "Contact",
    },
  },
  hero: {
    headlinePrefix: "Nous concevons, développons et exploitons des ",
    words: ["applications", "sites web", "services", "agents"],
    paragraph:
      "Nous créons des applications web prêtes pour la production, des apps mobiles multiplateformes, des backends fiables et de l'automatisation basée sur l'IA pour permettre à votre équipe d'avancer plus vite en toute confiance.",
    ctaPrimary: "Nous contacter",
    ctaSecondary: "Découvrir les services",
  },
  services: {
    title: "Ce que nous faisons",
    items: [
      {
        title: "Applications Web",
        description: "Applications web performantes et accessibles avec des stacks modernes.",
      },
      {
        title: "Mobile multiplateforme",
        description: "iOS, Android et desktop à partir d'une base de code unique.",
      },
      {
        title: "Services Backend",
        description: "APIs sécurisées et scalables, bases de données, observabilité et opérations.",
      },
      {
        title: "Automatisation IA",
        description: "Workflows agentiques pour éliminer les tâches répétitives et accélérer les équipes.",
      },
    ],
  },
  projects: {
    title: "Travaux sélectionnés",
    items: [
      {
        subtitle: "Applications mobiles",
        description: "Applications iOS et Android reliant entreprises locales et communautés.",
      },
      {
        subtitle: "Site web",
        description: "Site orienté marque avec animations dynamiques et focus conversion.",
      },
      {
        subtitle: "Portfolio",
        description: "Portfolio personnel présentant des produits, apps et expériences sélectionnés.",
      },
      {
        subtitle: "Application web",
        description: "Compagnon de salle de sport propulsé par l'IA pour entraînements et plans.",
      },
    ],
  },
  team: {
    title: "Équipe",
    role: "Fondateur & CEO",
    location: "Istanbul, Turquie",
  },
  contact: {
    title: "Contact",
    lead: "Parlez-nous de votre projet. Écrivez-nous et nous répondrons sous 24–48 heures.",
  },
  footer: {
    rights: "© {year} Celza, Inc. Tous droits réservés.",
    links: {
      about: "À propos",
      projects: "Projets",
    },
  },
} as const;
