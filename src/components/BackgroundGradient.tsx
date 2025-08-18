"use client";

export const BackgroundGradient = () => {
  // Smooth responsive radii and transparency stops using clamp to preserve separation across viewports
  const topLeftGradient = `radial-gradient(clamp(700px, 60vw, 1100px) circle at 0% 10%, rgba(19,185,247,0.14), transparent clamp(60%, 75%, 90%))`;
  const topRightGradient = `radial-gradient(clamp(700px, 58vw, 1100px) circle at 80% 6%, rgba(168,85,247,0.18), transparent clamp(62%, 78%, 90%))`;
  const bottomLeftGradient = `radial-gradient(clamp(680px, 57vw, 1050px) circle at 18% 90%, rgba(168,85,247,0.18), transparent clamp(58%, 72%, 88%))`;
  const bottomRightGradient = `radial-gradient(clamp(700px, 60vw, 1100px) circle at 82% 94%, rgba(19,185,247,0.14), transparent clamp(62%, 78%, 90%))`;
  const background = `${topLeftGradient}, ${topRightGradient}, ${bottomLeftGradient}, ${bottomRightGradient}`;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background }} aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 -z-5"
        style={{
          background: "color-mix(in oklab, var(--background) 15%, transparent)",
          backdropFilter: "blur(20px)",
          border: "1px solid color-mix(in oklab, var(--foreground) 8%, transparent)",
        }}
        aria-hidden
      />
    </>
  );
};
