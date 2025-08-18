export const dictionary = {
  header: {
    tagline: "Sonsuz olasılıklar. Kusursuzca inşa edilir.",
    nav: {
      services: "Servisler",
      projects: "Projeler",
      team: "Ekip",
      contact: "İletişim",
    },
  },
  hero: {
    headlinePrefix: "Modern ",
    words: ["uygulamalar", "web siteleri", "programlar", "arayüzler"],
    paragraph:
      "Üretim düzeyinde web uygulamaları, çapraz platform mobil uygulamalar, güvenilir arka uç servisleri ve yapay zekâ destekli otomasyonlar geliştiriyoruz; ekibinizin güvenle daha hızlı ilerlemesini sağlıyoruz.",
    ctaPrimary: "İletişime geç",
    ctaSecondary: "Hizmetleri keşfet",
  },
  services: {
    title: "Ne yapıyoruz",
    items: [
      {
        title: "Web Uygulamaları",
        description: "Yüksek performanslı ve modern web uygulamaları.",
      },
      {
        title: "Cross-Platform Mobil Uygulamalar",
        description: "Tek kod tabanından iOS, Android ve masaüstü uygulamaları. ",
      },
      {
        title: "Backend Servisleri",
        description: "Güvenli, ölçeklenebilir API'ler, veritabanları, mikroservisler ve fazlası.",
      },
      {
        title: "Yapay Zekâ Tabanlı Otomasyon",
        description: "Operasyonlarınızı hızlandıran ajan tabanlı otomasyonlar.",
      },
    ],
  },
  projects: {
    title: "Seçilmiş çalışmalar",
    items: [
      {
        subtitle: "Mobil Uygulamalar",
        description: "Yerel işletmeleri ve toplulukları bir araya getiren iOS ve Android uygulamaları.",
      },
      {
        subtitle: "Web Sitesi",
        description: "Canlı animasyonlar ve dönüşüm odaklı, markayı öne çıkaran bir site.",
      },
      {
        subtitle: "Portföy",
        description: "Seçilmiş ürünler, uygulamalar ve deneyleri sergileyen kişisel portföy.",
      },
      {
        subtitle: "Web Uygulaması",
        description: "Antrenman ve planlar için yapay zekâ destekli spor arkadaşı.",
      },
    ],
  },
  team: {
    title: "Ekip",
    role: "Kurucu ve CEO",
    location: "İstanbul, Türkiye",
  },
  contact: {
    title: "İletişim",
    lead: "Projeniz hakkında konuşmak isteriz. Bize ulaşın, 24–48 saat içinde dönüş yapalım.",
  },
  footer: {
    rights: "© {year} Celza, Inc. Tüm hakları saklıdır.",
    links: {
      about: "Hakkında",
      projects: "Projeler",
    },
  },
} as const;
