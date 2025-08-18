"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { HiChevronDown } from "react-icons/hi2";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  className?: string;
};

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
};

const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  tr: "🇹🇷",
  de: "🇩🇪",
};

export default function LanguageSwitcher({ currentLocale, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const switchTo = (nextLocale: Locale) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const nextPath = segments.join("/") || "/";
    setOpen(false);
    router.push(nextPath);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.04] dark:hover:bg-white/[.08] backdrop-blur"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {LOCALE_FLAGS[currentLocale]}
        </span>
        <span className="text-xs font-medium tracking-wide">{LOCALE_LABELS[currentLocale]}</span>
        <HiChevronDown className="h-4 w-4 text-black/50 dark:text-white/50" />
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Select language"
          className="absolute right-0 mt-2 w-44 rounded-md border border-black/[.08] dark:border-white/[.145] bg-background/90 backdrop-blur shadow-lg z-50"
        >
          <ul className="py-1 px-1">
            {locales.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  onClick={() => switchTo(loc)}
                  className={`w-full px-3 py-2 text-left text-sm flex items-center justify-between rounded-md hover:rounded-md hover:bg-black/[.04] dark:hover:bg-white/[.08] ${
                    loc === currentLocale ? "font-medium" : ""
                  }`}
                  role="menuitem"
                >
                  <span className="inline-flex items-center gap-2">
                    <span aria-hidden="true" className="text-base leading-none">
                      {LOCALE_FLAGS[loc]}
                    </span>
                    <span>{LOCALE_LABELS[loc]}</span>
                  </span>
                  {loc === currentLocale ? <span className="text-xs text-black/60 dark:text-white/60">✓</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
