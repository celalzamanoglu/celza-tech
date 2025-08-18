import type { Metadata } from "next";
import { isSupportedLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: {
    template: "%s | Celza",
    default: "Celza, Inc. – Web, Mobile, Backend & AI Automation",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Validate the locale param to avoid unexpected values (no-op for now)
  if (!isSupportedLocale(locale)) {
    // fallback handled by middleware; keep component pure
  }
  return children;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }, { locale: "de" }, { locale: "es" }, { locale: "ru" }];
}

export const dynamicParams = false;
