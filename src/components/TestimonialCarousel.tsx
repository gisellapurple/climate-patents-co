"use client";

import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    q: "Alex is exceptionally talented and has been amazing to work with over the years. He played an instrumental role in helping to build up my company's patent portfolio from startup phase through post-acquisition.",
    name: "Joel Ong",
    title: "VP Technology and Software, Stratasys",
    detail: "Former Founder & CTO, Origin",
  },
  {
    q: "Alex is easy to work with and did a great job of transforming our team's ideation into cohesive, unique, and valuable intellectual property.",
    name: "Johnny Stefanski",
    title: "Head of Operations, Zitara Technologies",
  },
  {
    q: "Alex helped with a number of ZaiNar patents and was great to work with. I highly recommend working with him.",
    name: "Daniel Jacker",
    title: "CEO, ZaiNar",
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating || idx === active) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setAnimating(false);
      }, 320);
    },
    [active, animating]
  );

  useEffect(() => {
    const id = setInterval(() => {
      goTo((active + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [active, goTo]);

  const t = TESTIMONIALS[active];

  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
      {/* Quote */}
      <div className="md:col-span-8">
        {/* Opening mark */}
        <span className="block font-display text-[56px] leading-none mb-6" style={{ color: "var(--lime)" }}>
          &ldquo;
        </span>

        <blockquote
          className="font-display text-[20px] md:text-[28px] leading-[1.4] tracking-[-0.015em] text-white/90 transition-opacity duration-300"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {t.q}
        </blockquote>

        <figcaption
          className="mt-10 flex items-center gap-4 transition-opacity duration-300"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {/* Avatar placeholder */}
          <span
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-charcoal"
            style={{ background: "var(--lime)" }}
          >
            {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </span>
          <div>
            <div className="font-medium text-[15px] text-white">{t.name}</div>
            <div className="text-[13px] text-white/45 mt-0.5 leading-snug">{t.title}</div>
            {t.detail && (
              <div className="text-[12px] text-white/30 mt-0.5 leading-snug">{t.detail}</div>
            )}
          </div>
        </figcaption>
      </div>

      {/* Controls */}
      <div className="md:col-span-4 md:pt-20 flex md:flex-col gap-6 md:gap-0 items-start md:items-end">
        <div className="flex md:flex-col gap-3 md:gap-4">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${item.name}`}
              className="group flex md:flex-row-reverse items-center gap-3 text-left"
            >
              <span
                className={`block shrink-0 transition-all duration-300 ${
                  i === active
                    ? "w-8 h-px bg-lime"
                    : "w-3 h-px bg-white/20 group-hover:bg-white/40"
                }`}
              />
              <span
                className={`text-[13px] transition-colors duration-300 ${
                  i === active ? "text-white font-medium" : "text-white/30 group-hover:text-white/55"
                }`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="hidden md:block mt-12 w-full">
          <div className="h-px bg-white/10 w-full relative overflow-hidden">
            <span
              className="absolute top-0 left-0 h-full transition-all duration-[5800ms] ease-linear"
              style={{
                width: animating ? "0%" : "100%",
                background: "var(--lime)",
              }}
              key={active}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
