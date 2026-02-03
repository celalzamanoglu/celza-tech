import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Voca — English-learning app with vocabulary, idioms, and phrasal verbs. Pro subscription, content, and liability.",
};

export default function VocaTermsOfUsePage() {
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
            Terms of Use for Voca
          </h1>
          <p className="text-sm text-foreground/60 mb-8">Last updated: January 27, 2026</p>

          <p className="text-base leading-relaxed text-foreground/90">
            Welcome to Voca. By using this app, you agree to these terms. If you do not agree,
            please do not use the app.
          </p>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">About Voca</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Voca is an English-learning app that displays vocabulary, idioms, and phrasal verbs
              through widgets on your device. The app is provided &quot;as is&quot; for personal,
              non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Subscriptions</h2>
            <p className="text-base leading-relaxed text-foreground/90 mb-4">
              Voca offers an optional Pro subscription with additional features. If you choose to
              subscribe:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-foreground/90 ml-1">
              <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
              <li>
                Your subscription automatically renews unless you cancel at least 24 hours before
                the end of the current period
              </li>
              <li>
                Your account will be charged for renewal within 24 hours prior to the end of the
                current period
              </li>
              <li>
                You can manage or cancel your subscription anytime in your device&apos;s Settings
                &gt; Apple ID &gt; Subscriptions
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Cancellation and Refunds</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              You can cancel your subscription at any time through your Apple ID settings.
              Cancellation takes effect at the end of the current billing period. Refunds are
              handled by Apple according to their refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Content</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              The vocabulary content in Voca is for educational purposes. While we strive for
              accuracy, we do not guarantee that all definitions or examples are error-free.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Your Responsibilities</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              You agree not to misuse the app, reverse-engineer it, or use it for any unlawful
              purpose.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Limitation of Liability</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Voca is provided without warranties of any kind. We are not liable for any damages
              arising from your use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Changes to These Terms</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              We may update these terms from time to time. Continued use of the app after changes
              means you accept the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mt-8 mb-3">Contact</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Questions? Reach us at{" "}
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
