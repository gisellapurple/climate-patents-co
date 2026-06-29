"use client";

import { Reveal } from "./Reveal";

const ROWS = [
  {
    left: "Hourly billing, surprise invoices mid-fundraise",
    right: "Flat fees, with your full 18-month budget mapped in session one",
  },
  {
    left: "Weeks or months for a provisional",
    right: "Three weeks from disclosure to filed provisional",
  },
  {
    left: "Strategy starts at “what’s technically patentable”",
    right: "Plans built around your roadmap and your next investor",
  },
  {
    left: "Generalist counsel learning your tech on your dime",
    right: "Climate-fluent across batteries, DAC, hydrogen, solar, and more",
  },
];

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M2.5 7.5 L5.7 10.3 L11.5 4"
        stroke="#5A8054"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <div className="mt-14 rounded-2xl bg-bg-tint border border-sage/25 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-9 pt-7 pb-4 gap-3 md:gap-0 border-b border-sage/20">
        <div className="text-[13px] text-ink/55">Most patent firms</div>
        <div className="text-[13px] font-medium text-ink md:pl-9">
          Climate Patent Collective<span className="text-rust">.</span>
        </div>
      </div>
      <div>
        {ROWS.map((r, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 px-7 md:px-9 py-5 md:py-6 gap-4 md:gap-0 ${
                i < ROWS.length - 1 ? "border-b border-sage/15" : ""
              }`}
            >
              <div className="text-[14.5px] text-ink/55 leading-[1.5] pr-6">
                {r.left}
              </div>
              <div className="text-[14.5px] text-ink leading-[1.5] md:pl-9 flex items-start gap-3">
                <Check />
                <span>{r.right}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
