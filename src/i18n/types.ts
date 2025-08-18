export interface Dictionary {
  header: {
    tagline: string;
    nav: {
      services: string;
      projects: string;
      team: string;
      contact: string;
    };
  };
  hero: {
    headlinePrefix: string;
    words: readonly string[];
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    items: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    items: ReadonlyArray<{
      subtitle: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    role: string;
    location: string;
  };
  contact: {
    title: string;
    lead: string;
  };
  footer: {
    rights: string;
    links: {
      about: string;
      projects: string;
    };
  };
}
