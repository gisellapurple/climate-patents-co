"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "climate founders",
  "battery teams",
  "carbon companies",
  "hydrogen pioneers",
  "DAC engineers",
  "ocean tech teams",
];

export function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 3000);
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
          className="absolute inset-0 italic text-orange transition-opacity duration-700 ease-in-out whitespace-nowrap"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
