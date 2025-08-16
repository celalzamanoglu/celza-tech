"use client";

import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type AnimatedProps = PropsWithChildren<{
  className?: string;
  /** Delay the reveal animation in milliseconds */
  delayMs?: number;
}>;

export const FadeIn = ({ children, className = "", delayMs = 0 }: AnimatedProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform opacity-0 translate-y-4 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
