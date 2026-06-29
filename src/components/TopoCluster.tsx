"use client";

import { useEffect, useRef } from "react";

export function TopoCluster() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";
    const NS = "http://www.w3.org/2000/svg";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cx = 920;
    const cy = 260;
    const N = 16;

    const perturb = (a: number) =>
      Math.sin(a * 2 + 0.6) * 22 +
      Math.sin(a * 3 + 2.4) * 13 +
      Math.sin(a * 5 + 1.7) * 7 +
      Math.sin(a * 7 + 0.3) * 3.6 +
      Math.sin(a * 11 + 1.1) * 2.0;

    const paths: SVGPathElement[] = [];

    for (let i = 0; i < N; i++) {
      const R = 44 + i * 26;
      const steps = 120;
      const pts: [number, number][] = [];
      for (let s = 0; s < steps; s++) {
        const a = (s / steps) * Math.PI * 2;
        const r = R + perturb(a);
        const ang = a - 0.08;
        const x = cx + Math.cos(ang) * r * 1.18;
        const y = cy + Math.sin(ang) * r * 0.94;
        pts.push([x, y]);
      }
      const n = pts.length;
      let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let k = 0; k < n; k++) {
        const p0 = pts[(k - 1 + n) % n];
        const p1 = pts[k];
        const p2 = pts[(k + 1) % n];
        const p3 = pts[(k + 2) % n];
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      d += " Z";

      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("stroke", "#5A8054");
      path.setAttribute("stroke-width", "0.45");
      path.setAttribute("fill", "none");
      path.setAttribute("vector-effect", "non-scaling-stroke");
      path.setAttribute("class", "topo-contour");
      path.setAttribute("stroke", i < 5 ? "#5A8054" : "#6B9464");
      path.style.opacity = String(Math.max(0.22, 0.90 - i * 0.04));
      svg.appendChild(path);
      paths.push(path);
    }

    if (reduced) return;

    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.style.transition = `stroke-dashoffset 1800ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 70}ms`;
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        paths.forEach((path) => {
          path.style.strokeDashoffset = "0";
        });
      });
    });
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        maskImage: "radial-gradient(ellipse 75% 110% at 88% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 110% at 88% 50%, black 40%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1100 500"
        preserveAspectRatio="xMaxYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      />
    </div>
  );
}
