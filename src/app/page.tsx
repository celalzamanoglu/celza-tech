import Image from "next/image";
import { FadeIn, GlowCard, HorizontalList, MouseGlow } from "@/components";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MouseGlow />
      <header className="w-full border-b border-black/[.08] dark:border-white/[.145] bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-xl font-semibold tracking-tight">Celza</span>
            <span className="text-sm text-black/60 dark:text-white/60">Build fast. Ship confidently.</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline underline-offset-4">
              Services
            </a>
            <a href="#projects" className="hover:underline underline-offset-4">
              Projects
            </a>
            <a href="#team" className="hover:underline underline-offset-4">
              Team
            </a>
            <a href="#contact" className="hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="">
          <div className="max-w-5xl mx-auto px-6 py-16 sm:py-28">
            <FadeIn>
              <h1 className="display-hero font-semibold tracking-tight text-glow text-animated-gradient">
                We design, build, and run modern software.
              </h1>
            </FadeIn>
            <FadeIn delayMs={100}>
              <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-3xl">
                Celza builds production‑grade web apps, cross‑platform mobile apps, reliable backend services, and
                AI‑driven automation so your team can move faster with confidence.
              </p>
            </FadeIn>
            <FadeIn delayMs={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 btn-glow"
                >
                  Get in touch
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-black/[.08] dark:border-white/[.145] text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.08] backdrop-blur"
                >
                  Explore services
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="border-t border-black/[.06] dark:border-white/[.08]">
          <div className="max-w-5xl mx-auto px-6 py-14 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we do</h2>
            </FadeIn>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <FadeIn>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">Web Applications</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                    High‑performance, accessible web apps with modern stacks.
                  </p>
                </GlowCard>
              </FadeIn>
              <FadeIn delayMs={80}>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">Cross‑platform Mobile</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                    iOS, Android, and desktop from a single codebase.
                  </p>
                </GlowCard>
              </FadeIn>
              <FadeIn delayMs={160}>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">Backend Services</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                    Secure, scalable APIs, databases, observability, and ops.
                  </p>
                </GlowCard>
              </FadeIn>
              <FadeIn delayMs={240}>
                <GlowCard className="rounded-lg card-glass p-5">
                  <h3 className="font-medium">AI‑driven Automation</h3>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                    Agentic workflows to eliminate toil and accelerate teams.
                  </p>
                </GlowCard>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-black/[.06] dark:border-white/[.08]">
          <div className="max-w-5xl mx-auto px-6 py-14 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
            </FadeIn>
            <div className="mt-8">
              <HorizontalList
                items={[
                  {
                    title: "MySyde",
                    subtitle: "Mobile Apps",
                    description: "iOS and Android apps connecting local businesses and communities.",
                    href: "https://mysyde.com/",
                    imageSrc: "/mysyde-app-website.png",
                    imageAlt: "MySyde mobile apps website preview",
                  },
                  {
                    title: "Milkyway Epoxy",
                    subtitle: "Website",
                    description: "Brand‑forward site with lively animations and conversions in mind.",
                    href: "https://milkywayepoxy.com/",
                    imageSrc: "/milkwayepoxy-company-website.png",
                    imageAlt: "Milkyway Epoxy company website preview",
                  },
                  {
                    title: "Celal Zamanoglu",
                    subtitle: "Portfolio",
                    description: "Personal portfolio showcasing selected products, apps, and experiments.",
                    href: "https://celalzamanoglu.dev/",
                    imageSrc: "/celal-zamanoglu-portfolio.png",
                    imageAlt: "Celal Zamanoglu portfolio preview",
                  },
                  {
                    title: "GymmerAI",
                    subtitle: "Web App",
                    description: "AI‑powered gym companion for workouts and plans.",
                    href: "https://gymmerai.vercel.app",
                    imageSrc: "/gymmerai-web-app.png",
                    imageAlt: "GymmerAI web app preview",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section id="team" className="border-t border-black/[.06] dark:border-white/[.08]">
          <div className="max-w-5xl mx-auto px-6 py-14 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Team</h2>
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
                  <div className="text-sm text-black/60 dark:text-white/60">Founder & CEO</div>
                  <h3 className="text-lg font-medium">Celal Zamanoglu</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">Istanbul, Türkiye</p>
                  <a className="text-sm underline underline-offset-4" href="mailto:contact@celalzamanoglu.dev">
                    contact@celalzamanoglu.dev
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="contact" className="border-t border-black/[.06] dark:border-white/[.08]">
          <div className="max-w-5xl mx-auto px-6 py-14 sm:py-20">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
            </FadeIn>
            <FadeIn delayMs={80}>
              <p className="mt-3 text-sm sm:text-base text-black/70 dark:text-white/70 max-w-2xl">
                We&apos;d love to hear about your project. Reach out and we&apos;ll reply within 24–48 hours.
              </p>
            </FadeIn>
            <FadeIn delayMs={160}>
              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-black/70 dark:text-white/70">
                <div className="flex items-start gap-3">
                  <LocationIcon />
                  <div>
                    <div>1111B S Governors Ave STE 39417</div>
                    <div>Dover, DE 19904</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EmailIcon />
                  <a href="mailto:hi@celza.tech" className="underline underline-offset-4 hover:no-underline">
                    hi@celza.tech
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon />
                  <a href="tel:+13022445999" className="underline underline-offset-4 hover:no-underline">
                    +1 302 244-5999
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.08] dark:border-white/[.145]">
        <div className="max-w-5xl mx-auto px-6 py-10 text-sm flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center justify-between">
          <p className="text-black/70 dark:text-white/70">
            © {new Date().getFullYear()} Celza, Inc. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a className="hover:underline underline-offset-4" href="#about">
              About
            </a>
            <a className="hover:underline underline-offset-4" href="#projects">
              Projects
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
