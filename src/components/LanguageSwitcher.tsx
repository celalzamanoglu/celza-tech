"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  className?: string;
};

export default function LanguageSwitcher({ currentLocale, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const nextLocale: Locale = currentLocale === "en" ? "tr" : "en";
    if (!pathname) return;
    const segments = pathname.split("/");
    // segments[0] is "" because pathname starts with "/"
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const nextPath = segments.join("/") || "/";
    router.push(nextPath);
  };

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Change language"
      className={`inline-flex items-center gap-2 h-9 px-3 rounded-md border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.04] dark:hover:bg-white/[.08] backdrop-blur ${className}`}
    >
      <HiOutlineGlobeAlt className="h-4 w-4 text-black/70 dark:text-white/70" />
      <span className="text-xs font-medium tracking-wide">{currentLocale.toUpperCase()}</span>
    </button>
  );
}
