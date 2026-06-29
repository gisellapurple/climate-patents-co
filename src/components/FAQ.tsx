"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Does my technology fall within what you work on?",
    a: "We work with a wide range of climate tech and sustainability-focused startups. If your technology reduces greenhouse gas emissions, improves resource efficiency, or helps climate resilience, it almost certainly fits.",
  },
  {
    q: "What is the process for getting started?",
    a: "First, you book a free consultation so we can learn about your technology and goals. If there's mutual interest, we send you an engagement letter. From there, we schedule a strategy call to define the timeline and subject matter for your patent work.",
  },
  {
    q: "When should I schedule a consultation?",
    a: "The earlier the better. Reach out as soon as you have a clear idea of your business and your R&D plans, even if they're still evolving. We can develop a strategy from there and update it as your business matures.",
  },
  {
    q: "How does your flat-fee system work?",
    a: "We work on a flat-fee basis for every project that has a deliverable: drafting, searches, office action responses, and PCT applications. Consultations, strategy sessions, filing coordination, drawing fees, and edits are all included.",
  },
  {
    q: "How does the partner discount work?",
    a: "If a partner referred you, mention it during your consultation and get 10% off all flat fees.",
  },
  {
    q: "What is the turnaround time for a patent application?",
    a: "We typically complete provisional patent applications within about three weeks of your invention disclosure. For non-provisional applications, engage us at least eight weeks before your target filing date.",
  },
  {
    q: "What if I have existing patent counsel and want to switch?",
    a: "If you engage with us, we can transition your portfolio and coordinate document transfer from your current counsel. We don't co-manage portfolios with other firms.",
  },
  {
    q: 'How is the Climate Patent Collective a "collective"?',
    a: "One of our priorities is keeping a strong network across the climate ecosystem. We connect our clients with relevant accelerators, VCs, and other mission-aligned service providers.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-rule">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-rule">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-10 py-6 text-left group transition-colors hover:bg-bg-tint/40 px-2 -mx-2"
              aria-expanded={isOpen}
            >
              <span className="font-display font-medium text-[18px] md:text-[20px] leading-[1.3]">
                {item.q}
              </span>
              <span
                className={`mt-2 inline-block w-3 h-3 relative shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <span className="absolute top-1/2 left-0 right-0 h-px bg-rust" />
                <span className="absolute left-1/2 top-0 bottom-0 w-px bg-rust" />
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-7 pr-14 text-[14.5px] text-ink/72 max-w-[68ch] leading-[1.65]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
