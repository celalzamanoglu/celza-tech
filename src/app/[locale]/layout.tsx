import type { Metadata } from "next";
import { isSupportedLocale, type Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: {
    template: "%s | Celza",
    default: "Celza, Inc. – Web, Mobile, Backend & AI Automation",
  },
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Validate the locale param to avoid unexpected values
  const _locale = isSupportedLocale(params.locale) ? (params.locale as Locale) : "en";
  return children;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export const dynamicParams = false;
