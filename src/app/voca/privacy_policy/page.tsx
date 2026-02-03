import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Voca privacy policy — your data stays on your device. No collection, no tracking, no third‑party sharing.",
};

export default function VocaPrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b border-black/[.08] dark:border-white/[.145] bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Voca</span>
          <Link
            href="https://celza.tech"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            celza.tech
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12 md:py-16">
        <article className="space-y-6 text-foreground">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Privacy Policy for Voca
          </h1>
          <p className="text-sm text-foreground/60 mb-8">Last updated: January 27, 2026</p>

          <p className="text-base leading-relaxed text-foreground/90">
            Voca is an English-learning widget app that shows you new words, idioms, and phrasal
            verbs every day. We are committed to keeping your information private and on your
            device.
          </p>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Data collection</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Voca does <strong>not</strong> collect, store, or share any personal data. We do not
              require an account or any identifiable information to use the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Where your data lives</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              All data that you create in the app—including favorites, view history, and
              preferences—is stored only on your device. Nothing is sent to our servers or any
              third party. If you uninstall the app, this data is removed with it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Analytics and tracking</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              We do not use analytics, advertising, or tracking of any kind. No third-party SDKs
              are used for data collection or behavioral analysis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Payments and Subscriptions</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              If you subscribe to Voca Pro, payment is processed by Apple through the App Store.
              We do not collect or have access to your payment information. Apple&apos;s privacy
              practices apply to these transactions. You can review Apple&apos;s privacy policy at{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                https://www.apple.com/legal/privacy/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Changes to this policy</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              If we update this privacy policy, we will change the &quot;Last updated&quot; date
              above and, when the app is updated, you will see the latest version in the app or on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Contact</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Questions about privacy or the app? Reach us at{" "}
              <a
                href="mailto:hi@celza.tech"
                className="text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                hi@celza.tech
              </a>
              .
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
