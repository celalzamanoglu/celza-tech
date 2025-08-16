"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiVercel,
  SiNextdotjs,
  SiSupabase,
  SiPrisma,
  SiOpenai,
  SiGooglecloud,
  SiFigma,
  SiReact,
  SiMeta,
  SiLaravel,
  SiStripe,
  SiDocker,
  SiPostgresql,
  SiN8N,
} from "react-icons/si";

const ICONS = {
  vercel: SiVercel,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  prisma: SiPrisma,
  openai: SiOpenai,
  googlecloud: SiGooglecloud,
  figma: SiFigma,
  react: SiReact,
  meta: SiMeta,
  laravel: SiLaravel,
  stripe: SiStripe,
  docker: SiDocker,
  postgresql: SiPostgresql,
  n8n: SiN8N,
} satisfies Record<string, IconType>;

type BrandItem = {
  label: string;
  icon: keyof typeof ICONS;
  href?: string;
};

export const Marquee = ({ items, speed = 70 }: { items: BrandItem[]; speed?: number }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2; // duplicated content
    track.style.setProperty("--marquee-distance", `${totalWidth}px`);
    const duration = totalWidth / speed;
    track.style.setProperty("--marquee-duration", `${duration}s`);
  }, [items, speed]);

  const content = (
    <div className="flex items-center gap-10 px-6">
      {items.map(({ label, icon, href }) => {
        const Icon = ICONS[icon];
        return (
          <a
            key={label}
            href={href ?? "#"}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className="group opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
            aria-label={label}
          >
            <span className="inline-flex items-center gap-2">
              <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white" />
              <span className="text-sm sm:text-base text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white">
                {label}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );

  return (
    <div className="overflow-hidden w-full border-y border-black/[.06] dark:border-white/[.08] py-4 my-16 sm:my-20">
      <div ref={trackRef} className="marquee-track">
        <div className="marquee-run flex">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};
