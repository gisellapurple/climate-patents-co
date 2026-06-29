"use client";

import { useEffect, useRef } from "react";

export function ContourBackground() {
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
        el.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Concentric topographic ovals offset to upper-right, layered.
  // A real contour map: nested closed loops with slight irregularities.
  const rings = 14;
  const loops = Array.from({ length: rings }).map((_, i) => {
    const t = i / (rings - 1);
    const rx = 220 + i * 95;
    const ry = 160 + i * 70;
    const wobble = 6 + i * 1.2;
    const points: string[] = [];
    const steps = 80;
    for (let s = 0; s <= steps; s++) {
      const a = (s / steps) * Math.PI * 2;
      const w = Math.sin(a * 3 + i * 0.6) * wobble + Math.cos(a * 5 + i) * (wobble * 0.4);
      const x = Math.cos(a) * (rx + w);
      const y = Math.sin(a) * (ry + w * 0.7);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return { d: `M ${points.join(" L ")} Z`, opacity: 0.18 - t * 0.08 };
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="parallax pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      <svg
        viewBox="-200 -200 2400 2400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-[140vh] w-full"
        fill="none"
        stroke="#5A6F50"
        strokeWidth="1"
      >
        <g transform="translate(1500 200)">
          {loops.map((l, i) => (
            <path key={i} d={l.d} style={{ opacity: l.opacity }} />
          ))}
        </g>
      </svg>
    </div>
  );
}
