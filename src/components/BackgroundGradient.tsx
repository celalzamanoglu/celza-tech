"use client";

export const BackgroundGradient = () => {
  const topLeftGradient = `radial-gradient(1000px circle at 0% 10%, rgba(19,185,247,0.15), transparent 90%)`;
  const topRightGradient = `radial-gradient(1000px circle at 80% 3%, rgba(168,85,247,0.19), transparent 90%)`;
  const bottomLeftGradient = `radial-gradient(1000px circle at 20% 90%, rgba(168,85,247,0.19), transparent 80%)`;
  const bottomRightGradient = `radial-gradient(1000px circle at 80% 95%, rgba(19,185,247,0.15), transparent 90%)`;

  const background = `
    ${topLeftGradient},
    ${topRightGradient},
    ${bottomLeftGradient},
    ${bottomRightGradient}
  `;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background }}
        aria-hidden
      />
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
