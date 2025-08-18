"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { LanguageSwitcher } from "./index";
import type { Locale } from "@/i18n/config";

type MobileMenuItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: MobileMenuItem[];
  currentLocale: Locale;
  className?: string;
};

export default function MobileMenu({ items, currentLocale, className = "" }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) setOpen(false);
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

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.04] dark:hover:bg-white/[.08] backdrop-blur"
      >
        {open ? (
          <HiOutlineXMark className="h-5 w-5 text-black/70 dark:text-white/70" />
        ) : (
          <HiOutlineBars3 className="h-5 w-5 text-black/70 dark:text-white/70" />
        )}
      </button>
      {open && (
        <div
          ref={panelRef}
          className="absolute right-0 mt-2 w-56 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-background/90 backdrop-blur shadow-lg z-50 p-2"
          role="menu"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm hover:bg-black/[.04] dark:hover:bg-white/[.08]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 border-t border-black/[.06] dark:border-white/[.09] pt-2">
            <LanguageSwitcher currentLocale={currentLocale} className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
