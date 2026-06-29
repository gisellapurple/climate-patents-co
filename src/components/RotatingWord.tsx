"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "climate tech",
  "batteries",
  "carbon removal",
  "hydrogen",
  "DAC",
  "ocean tech",
  "solar",
  "ag-tech",
];

export function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="rotating-word relative inline-block align-baseline">
      <span aria-hidden className="invisible whitespace-nowrap">
        {WORDS.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      {WORDS.map((w, idx) => (
        <span
          key={w}
          className="absolute inset-0 italic text-orange whitespace-nowrap transition-[opacity,transform] duration-700 ease-out"
          style={{
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? "translateY(0)" : "translateY(0.1em)",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
