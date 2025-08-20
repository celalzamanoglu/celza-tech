export const dictionary = {
  header: {
    tagline: "Nieskończone możliwości. Perfekcyjnie wykonane.",
    nav: {
      services: "Usługi",
      projects: "Projekty",
      team: "Zespół",
      contact: "Kontakt",
    },
  },
  hero: {
    headlinePrefix: "Kreatywne, wydajne i niezawodne ",
    words: ["aplikacje", "strony www", "automatyzacje"],
    paragraph:
      "Tworzymy produkcyjne aplikacje webowe, wieloplatformowe aplikacje mobilne, niezawodne backendy oraz automatyzację opartą na AI, aby Twój zespół działał szybciej i z większą pewnością.",
    ctaPrimary: "Skontaktuj się",
    ctaSecondary: "Poznaj usługi",
  },
  services: {
    title: "Co robimy",
    items: [
      {
        title: "Aplikacje webowe",
        description: "Wydajne i dostępne aplikacje webowe oparte na nowoczesnych stackach.",
      },
      {
        title: "Wieloplatformowe mobile",
        description: "iOS, Android i desktop z jednej bazy kodu.",
      },
      {
        title: "Usługi backendowe",
        description: "Bezpieczne, skalowalne API, bazy danych, obserwowalność i operacje.",
      },
      {
        title: "Automatyzacja z AI",
        description: "Przepływy agentowe eliminujące rutynę i przyspieszające pracę zespołów.",
      },
    ],
  },
  projects: {
    title: "Wybrane realizacje",
    items: [
      {
        subtitle: "Aplikacje mobilne",
        description: "Aplikacje iOS i Android łączące lokalne firmy i społeczności.",
      },
      {
        subtitle: "Strona internetowa",
        description: "Strona zorientowana na markę z żywymi animacjami i naciskiem na konwersję.",
      },
      {
        subtitle: "Portfolio",
        description: "Osobiste portfolio prezentujące wybrane produkty, aplikacje i eksperymenty.",
      },
      {
        subtitle: "Aplikacja webowa",
        description: "Wspierany przez AI towarzysz treningu do ćwiczeń i planów.",
      },
    ],
  },
  team: {
    title: "Zespół",
    role: "Założyciel i CEO",
    location: "Stambuł, Turcja",
  },
  contact: {
    title: "Kontakt",
    lead: "Chętnie poznamy Twój projekt. Napisz do nas – odpowiemy w ciągu 24–48 godzin.",
  },
  footer: {
    rights: "© {year} Celza, Inc. Wszelkie prawa zastrzeżone.",
    links: {
      about: "O nas",
      projects: "Projekty",
    },
  },
} as const;
