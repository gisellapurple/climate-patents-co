"use client";

import Image from "next/image";
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
    <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
      {/* Quote — left */}
      <div className="md:col-span-6">
        <span className="block font-display text-[56px] leading-none mb-6" style={{ color: "var(--lime)" }}>
          &ldquo;
        </span>

        <blockquote
          className="font-display text-[20px] md:text-[26px] leading-[1.4] tracking-[-0.015em] text-white/90 transition-opacity duration-300"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {t.q}
        </blockquote>

        <figcaption
          className="mt-10 flex items-center gap-4 transition-opacity duration-300"
          style={{ opacity: animating ? 0 : 1 }}
        >
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

        {/* Progress dots */}
        <div className="flex items-center gap-2.5 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-6 h-1.5 bg-lime"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Logo wall — right */}
      <div className="md:col-span-5 md:col-start-8 flex items-center self-center">
        <Image
          src="/client-logos.png"
          alt="CPC clients"
          width={1080}
          height={1260}
          className="w-full h-auto"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.75 }}
        />
      </div>
    </div>
  );
}
