"use client";

import Image from "next/image";

export function TopoCluster() {
  return (
    <div
      className="absolute inset-y-0 right-0 w-full md:w-[60%] z-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Base image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-abstract.png"
          alt=""
          fill
          priority
          style={{ objectFit: "contain", objectPosition: "center right" }}
        />
      </div>

      {/* Animated SVG overlay */}
      <svg
        viewBox="0 0 800 700"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible", pointerEvents: "none" }}
      >
        {/* Drifting nodes */}
        <circle className="h-node h-node-1" r="5" />
        <circle className="h-node h-node-2" r="3.5" />
        <circle className="h-node h-node-3" r="4.5" />
        <circle className="h-node h-node-4" r="3" />
        <circle className="h-node h-node-5" r="2.5" />

        {/* Pulsing ring — centred on the circular forms in the image */}
        <circle
          cx="490" cy="310" r="100"
          fill="none"
          stroke="rgba(17,17,17,0.2)"
          strokeWidth="0.9"
          className="h-pulse"
        />
        {/* Second ring, offset */}
        <circle
          cx="560" cy="430" r="72"
          fill="none"
          stroke="rgba(17,17,17,0.12)"
          strokeWidth="0.7"
          className="h-pulse-2"
        />
      </svg>

      {/* Left-edge gradient fade so image blends into the bg */}
      <div
        className="absolute inset-y-0 left-0 w-2/3"
        style={{
          background: "linear-gradient(to right, var(--bg) 0%, var(--bg) 20%, color-mix(in srgb, var(--bg) 60%, transparent) 60%, transparent 100%)",
        }}
      />
      {/* Bottom-edge fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, var(--bg), transparent)",
        }}
      />

      <style>{`
        .h-node { fill: #2478ff; opacity: 0.88; }

        .h-node-1 {
          offset-path: path("M200 350 C330 270 460 300 600 230 S770 200 840 240");
          animation: hMove 13s linear infinite;
        }
        .h-node-2 {
          fill: #d8ff4f;
          offset-path: path("M280 500 C410 420 540 380 680 360");
          animation: hMove 18s linear infinite;
        }
        .h-node-3 {
          fill: #f15a2b;
          offset-path: path("M480 200 C580 260 700 275 800 255");
          animation: hMove 22s linear infinite;
        }
        .h-node-4 {
          fill: #19b6b6;
          offset-path: path("M120 600 C280 540 400 510 540 490 S700 475 800 510");
          animation: hMove 27s linear infinite;
        }
        .h-node-5 {
          fill: #2478ff;
          opacity: 0.5;
          offset-path: path("M360 160 C460 200 580 210 700 190");
          animation: hMove 31s linear infinite;
        }

        .h-pulse {
          transform-origin: 490px 310px;
          animation: hPulse 9s ease-in-out infinite;
        }
        .h-pulse-2 {
          transform-origin: 560px 430px;
          animation: hPulse 12s ease-in-out infinite;
          animation-delay: -4s;
        }

        @keyframes hMove {
          from { offset-distance: 0%; }
          to   { offset-distance: 100%; }
        }
        @keyframes hPulse {
          0%, 100% { transform: scale(1);    opacity: 0.15; }
          50%       { transform: scale(1.06); opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
