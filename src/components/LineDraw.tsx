"use client";

import { useEffect, useRef, useState } from "react";

export function LineDraw({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDrawn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setDrawn(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative h-px w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-ink/15" />
      <div
        className="absolute inset-y-0 left-0 bg-ink/40 transition-[width] duration-[1400ms] ease-out"
        style={{ width: drawn ? "100%" : "0%" }}
      />
    </div>
  );
}
