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
    a: "We work on a flat-fee basis for every project that has a deliverable. That includes patent drafting (provisional and non-provisional), patent searches, office action responses, and PCT applications. Consultations, strategy sessions, filing coordination, drawing fees, and edits are all included.",
  },
  {
    q: "How does the partner discount work?",
    a: "If a partner referred you, mention it during your consultation and get 10% off all flat fees.",
  },
  {
    q: "What is the turnaround time for a patent application?",
    a: "We typically complete provisional patent applications within about three weeks of your invention disclosure. For non-provisional applications, we recommend engaging us at least eight weeks before your target filing date.",
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
    <div className="border-t border-ink/15">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-ink/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-8 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl md:text-2xl leading-snug">{item.q}</span>
              <span
                className={`mt-2 text-orange text-xl transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 text-ink/75 max-w-[68ch]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
