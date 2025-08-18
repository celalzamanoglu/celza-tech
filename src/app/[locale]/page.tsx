import Image from "next/image";
import { FadeIn, GlowCard, HorizontalList, Marquee, HeroHeadlineText, LanguageSwitcher } from "@/components";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { getDictionary } from "@/i18n/get-dictionary";
import { isSupportedLocale, type Locale } from "@/i18n/config";

export default async function Home({ params }: { params: { locale: string } }) {
  const locale = isSupportedLocale(params.locale) ? (params.locale as Locale) : "en";
  const t = await getDictionary(locale);

  const marqueeItems = [
    { label: "Vercel", icon: "vercel" as const, href: "https://vercel.com" },
    { label: "Next.js", icon: "nextjs" as const, href: "https://nextjs.org" },
    {
      label: "Supabase",
      icon: "supabase" as const,
      href: "https://supabase.com",
    },
    { label: "Prisma", icon: "prisma" as const, href: "https://www.prisma.io" },
    { label: "OpenAI", icon: "openai" as const, href: "https://openai.com" },
    {
      label: "Google Cloud",
      icon: "googlecloud" as const,
      href: "https://cloud.google.com",
    },
    { label: "Figma", icon: "figma" as const, href: "https://www.figma.com" },
    { label: "React", icon: "react" as const, href: "https://react.dev" },
    { label: "Meta", icon: "meta" as const, href: "https://about.meta.com" },
    { label: "Laravel", icon: "laravel" as const, href: "https://laravel.com" },
    { label: "Stripe", icon: "stripe" as const, href: "https://stripe.com" },
    {
      label: "Docker",
      icon: "docker" as const,
      href: "https://www.docker.com",
    },
    {
      label: "PostgreSQL",
      icon: "postgresql" as const,
      href: "https://www.postgresql.org",
    },
    { label: "n8n", icon: "n8n" as const, href: "https://n8n.io" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full h-16 border-b border-black/[.08] dark:border-white/[.145] bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-full">
          <div className="flex items-baseline gap-3">
            <a href="#about" aria-label="Home" className="text-xl font-semibold tracking-tight hover:opacity-80">
              Celza
            </a>
            <span className="text-sm text-black/60 dark:text-white/60">{t.header.tagline}</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline underline-offset-4">
              {t.header.nav.services}
            </a>
            <a href="#projects" className="hover:underline underline-offset-4">
              {t.header.nav.projects}
            </a>
            <a href="#team" className="hover:underline underline-offset-4">
              {t.header.nav.team}
            </a>
            <a href="#contact" className="hover:underline underline-offset-4">
              {t.header.nav.contact}
            </a>
            <LanguageSwitcher currentLocale={locale} />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="">
          <div className="max-w-5xl mx-auto px-6 min-h-[calc(100svh-4rem)] flex flex-col justify-center -translate-y-2 sm:-translate-y-4 md:-translate-y-6">
            <FadeIn>
              <h1 className="display-hero font-semibold tracking-tight">
                <HeroHeadlineText prefix={t.hero.headlinePrefix} words={t.hero.words} />
              </h1>
            </FadeIn>
            <FadeIn delayMs={100}>
              <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-3xl">{t.hero.paragraph}</p>
            </FadeIn>
            <FadeIn delayMs={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 btn-glow"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-black/[.08] dark:border-white/[.145] text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.08] backdrop-blur"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="">
          <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.services.title}</h2>
            </FadeIn>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <FadeIn>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">{t.services.items[0].title}</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">{t.services.items[0].description}</p>
                </GlowCard>
              </FadeIn>
              <FadeIn delayMs={80}>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">{t.services.items[1].title}</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">{t.services.items[1].description}</p>
                </GlowCard>
              </FadeIn>
              <FadeIn delayMs={160}>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">{t.services.items[2].title}</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">{t.services.items[2].description}</p>
                </GlowCard>
              </FadeIn>
              <FadeIn delayMs={240}>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">{t.services.items[3].title}</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">{t.services.items[3].description}</p>
                </GlowCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Tech partners / tools marquee via react-icons */}
        <Marquee items={marqueeItems} speed={70} />

        <section id="projects" className="">
          <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.projects.title}</h2>
            </FadeIn>
            <div className="mt-8">
              <HorizontalList
                items={[
                  {
                    title: "MySyde",
                    subtitle: t.projects.items[0].subtitle,
                    description: t.projects.items[0].description,
                    href: "https://mysyde.com/",
                    imageSrc: "/mysyde-app-website.png",
                    imageAlt: "MySyde mobile apps website preview",
                  },
                  {
                    title: "Milkyway Epoxy",
                    subtitle: t.projects.items[1].subtitle,
                    description: t.projects.items[1].description,
                    href: "https://milkywayepoxy.com/",
                    imageSrc: "/milkwayepoxy-company-website.png",
                    imageAlt: "Milkyway Epoxy company website preview",
                  },
                  {
                    title: "Celal Zamanoglu",
                    subtitle: t.projects.items[2].subtitle,
                    description: t.projects.items[2].description,
                    href: "https://celalzamanoglu.dev/",
                    imageSrc: "/celal-zamanoglu-portfolio.png",
                    imageAlt: "Celal Zamanoglu portfolio preview",
                  },
                  {
                    title: "GymmerAI",
                    subtitle: t.projects.items[3].subtitle,
                    description: t.projects.items[3].description,
                    href: "https://gymmerai.vercel.app",
                    imageSrc: "/gymmerai-web-app.png",
                    imageAlt: "GymmerAI web app preview",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section id="team" className="">
          <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.team.title}</h2>
            </FadeIn>
            <FadeIn delayMs={80}>
              <div className="mt-6 grid sm:grid-cols-[auto_1fr] gap-4 items-start">
                <div className="relative h-24 w-24 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/celal-zamanoglu-profile-picture.jpeg"
                    alt="Celal Zamanoglu"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <div className="text-sm text-black/60 dark:text-white/60">{t.team.role}</div>
                  <h3 className="text-lg font-medium">Celal Zamanoglu</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{t.team.location}</p>
                  <a className="text-sm underline underline-offset-4" href="mailto:contact@celalzamanoglu.dev">
                    contact@celalzamanoglu.dev
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="contact" className="">
          <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.contact.title}</h2>
            </FadeIn>
            <FadeIn delayMs={80}>
              <p className="mt-3 text-sm sm:text-base text-black/70 dark:text-white/70 max-w-2xl">{t.contact.lead}</p>
            </FadeIn>
            <FadeIn delayMs={160}>
              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-black/70 dark:text-white/70">
                <div className="flex items-start gap-3">
                  <HiOutlineEnvelope className="mt-0.5 h-5 w-5 text-black/60 dark:text-white/60" />
                  <a href="mailto:hi@celza.tech" className="underline underline-offset-4 hover:no-underline">
                    hi@celza.tech
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlinePhone className="mt-0.5 h-5 w-5 text-black/60 dark:text-white/60" />
                  <a href="tel:+13022445999" className="underline underline-offset-4 hover:no-underline">
                    +1 302 244-5999
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineMapPin className="mt-0.5 h-5 w-5 text-black/60 dark:text-white/60" />
                  <div>
                    <div>1111B S Governors Ave STE 39417</div>
                    <div>Dover, DE 19904</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="mt-16 sm:mt-20 border-t border-black/[.08] dark:border-white/[.145]">
        <div className="max-w-5xl mx-auto px-6 py-10 text-sm flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center justify-between">
          <p className="text-black/70 dark:text-white/70">
            {t.footer.rights.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a className="hover:underline underline-offset-4" href="#about">
              {t.footer.links.about}
            </a>
            <a className="hover:underline underline-offset-4" href="#projects">
              {t.footer.links.projects}
            </a>
            <a className="hover:underline underline-offset-4" href="mailto:hi@celza.tech">
              hi@celza.tech
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
