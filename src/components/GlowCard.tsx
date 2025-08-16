"use client";

import { type PropsWithChildren } from "react";

type GlowCardProps = PropsWithChildren<{
  className?: string;
}>;

export const GlowCard = ({ className = "", children }: GlowCardProps) => {
  return (
    <div
      className={`glow-card ${className}`}
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--mouse-x", `${x}%`);
        el.style.setProperty("--mouse-y", `${y}%`);
      }}
    >
      {children}
    </div>
  );
};
