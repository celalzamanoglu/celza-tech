"use client";

import { useRef } from "react";
import Image from "next/image";

type Item = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function HorizontalList({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = () => (scrollerRef.current?.clientWidth ?? 320) * 0.9;
  const scrollLeft = () => scrollerRef.current?.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  const scrollRight = () => scrollerRef.current?.scrollBy({ left: scrollByAmount(), behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[calc(100vw-3rem)] sm:w-[460px] rounded-xl bg-background border border-black/[.08] dark:border-white/[.145] p-5 hover:shadow-md transition-shadow"
          >
            {item.imageSrc ? (
              <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg border border-black/[.06] dark:border-white/[.08]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) calc(100vw - 3rem), 460px"
                />
              </div>
            ) : null}
            <div className="text-sm text-black/60 dark:text-white/60">{item.subtitle}</div>
            <h3 className="mt-1 font-medium hover:underline underline-offset-4">{item.title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{item.description}</p>
          </a>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />

      <div className="hidden sm:flex items-center gap-2 absolute -top-12 right-0">
        <button
          type="button"
          onClick={scrollLeft}
          className="pointer-events-auto h-9 w-9 rounded-md border border-black/[.08] dark:border-white/[.145] bg-background/90 backdrop-blur hover:bg-black/[.04] dark:hover:bg-white/[.08]"
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={scrollRight}
          className="pointer-events-auto h-9 w-9 rounded-md border border-black/[.08] dark:border-white/[.145] bg-background/90 backdrop-blur hover:bg-black/[.04] dark:hover:bg-white/[.08]"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
}
