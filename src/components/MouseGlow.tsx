"use client";

import { useEffect, useState } from "react";

export const MouseGlow = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({
    x: -9999,
    y: -9999,
  });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      const { clientX, clientY } = e;
      raf = requestAnimationFrame(() => setPos({ x: clientX, y: clientY }));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
  const mouseGradient = `radial-gradient(1000px circle at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.05), transparent 20%)`;
  const topLeftGradient = `radial-gradient(1000px circle at 0% 10%, rgba(19,185,247,0.15), transparent 90%)`;
  const topRightGradient = `radial-gradient(1000px circle at 80% 3%, rgba(168,85,447,0.19), transparent 90%)`;
  const bottomLeftGradient = `radial-gradient(1000px circle at 20% 90%, rgba(168,85,447,0.19), transparent 80%)`;
  const bottomRightGradient = `radial-gradient(1000px circle at 80% 95%, rgba(19,185,247,0.15), transparent 90%)`;

  const background = `
    ${mouseGradient},
    ${topLeftGradient},
    ${topRightGradient},
    ${bottomLeftGradient},
    ${bottomRightGradient}
  `;

  return (
    <>
      {/* Radial gradient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background }}
        aria-hidden
      />
      {/* Glass effect overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-5"
        style={{
          background: "color-mix(in oklab, var(--background) 15%, transparent)",
          backdropFilter: "blur(20px)",
          border:
            "1px solid color-mix(in oklab, var(--foreground) 8%, transparent)",
        }}
        aria-hidden
      />
    </>
  );
};
