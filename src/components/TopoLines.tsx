"use client";

import { useEffect, useRef } from "react";

export function TopoLines({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`parallax pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ willChange: "transform" }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-[140%] w-full opacity-[0.16]"
        fill="none"
        stroke="#5A6F50"
        strokeWidth="1"
      >
        {Array.from({ length: 22 }).map((_, i) => {
          const amp = 30 + (i % 5) * 8;
          const yBase = 60 + i * 38;
          const phase = (i % 4) * 90;
          const d = `M -50 ${yBase} Q 240 ${yBase - amp} 480 ${yBase} T 1010 ${
            yBase + amp / 2
          } T 1500 ${yBase - amp / 3}`;
          return <path key={i} d={d} transform={`translate(0, ${Math.sin(phase) * 4})`} />;
        })}
      </svg>
    </div>
  );
}
