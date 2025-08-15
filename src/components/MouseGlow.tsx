"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });

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
      window.removeEventListener("pointermove", onMove as any);
    };
  }, []);

  const background = `
    radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.14), transparent 60%),
    radial-gradient(900px circle at 12% 10%, rgba(168,85,247,0.08), transparent 60%),
    radial-gradient(900px circle at 88% 30%, rgba(250,204,21,0.08), transparent 60%)
  `;

  return <div className="pointer-events-none fixed inset-0 -z-10" style={{ background }} aria-hidden />;
}
