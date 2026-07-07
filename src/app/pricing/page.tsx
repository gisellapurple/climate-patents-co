import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const GROUPS = [
  {
    label: "Plan",
    detail: "Strategy, research & analysis",
    accent: "var(--lime)",
    items: [
      { service: "Patent strategy session (initial engagement)", fee: "$[X,XXX]", prefix: false },
      { service: "Patent landscape investigation",              fee: "$[X,XXX]", prefix: true  },
      { service: "Freedom-to-operate (FTO) analysis",          fee: "$[XX,XXX]", prefix: true  },
    ],
  },
  {
    label: "File",
    detail: "Drafting & application filing",
    accent: "var(--powder-blue)",
    items: [
      { service: "Provisional patent application",               fee: "$[X,XXX]",  prefix: false },
      { service: "Non-provisional (utility) patent application", fee: "$[XX,XXX]", prefix: false },
      { service: "PCT (international) patent application",       fee: "$[X,XXX]",  prefix: false },
      { service: "Continuation or continuation-in-part",         fee: "$[X,XXX]",  prefix: false },
      { service: "Design patent application",                    fee: "$[X,XXX]",  prefix: false },
    ],
  },
  {
    label: "Respond",
    detail: "USPTO prosecution & responses",
    accent: "var(--rust)",
    items: [
      { service: "Office action response", fee: "$[X,XXX]", prefix: false },
      { service: "Examiner interview",     fee: "$[X,XXX]", prefix: false },
    ],
  },
];

const RETAINER_INCLUDES = [
  "Unlimited strategy consultations and advisory meetings",
  "Communication of your patent strategy with investors and other stakeholders",
  "Internal invention mining sessions with your engineering team",
  "Quarterly portfolio reviews and budget updates",
];

const WHATS_INCLUDED = [
  "Initial strategy meeting",
  "A shared strategy matrix, project timeline, and portfolio budget",
  "Updates to the strategy after each funding round",
  "All administrative costs (IDSs, etc.)",
  "USPTO government filing fees",
  "Foreign filing fees in national phase",
  "Local counsel fees in foreign jurisdictions",
];

function BudgetMap() {
  const bars = [
    { label: "Strategy",          x: 30,  y: 42,  w: 58,  fill: "var(--lime)",        opacity: 0.55 },
    { label: "Provisionals",      x: 49,  y: 78,  w: 175, fill: "var(--moss)",        opacity: 0.40 },
    { label: "Non-provisionals",  x: 146, y: 114, w: 174, fill: "var(--powder-blue)", opacity: 0.50 },
    { label: "PCT / International",x: 233, y: 150, w: 147, fill: "var(--charcoal)",   opacity: 0.15 },
  ];
  const milestones = [88, 224, 320];
  const ticks = [0, 3, 6, 9, 12, 18];

  return (
    <svg viewBox="0 0 400 210" className="w-full" aria-hidden>
      <defs>
        <pattern id="bmGrid" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="0.65" fill="var(--ink)" opacity="0.10" />
        </pattern>
      </defs>
      <rect width="400" height="210" fill="url(#bmGrid)" />

      {/* Measurement header */}
      <line x1="30" y1="20" x2="380" y2="20" stroke="var(--ink)" strokeWidth="0.6" opacity="0.18" />
      <line x1="30" y1="16" x2="30" y2="24" stroke="var(--ink)" strokeWidth="0.75" opacity="0.22" />
      <line x1="380" y1="16" x2="380" y2="24" stroke="var(--ink)" strokeWidth="0.75" opacity="0.22" />
      <text x="205" y="18" textAnchor="middle" fontSize="6" fill="var(--ink)" opacity="0.26" fontFamily="monospace" letterSpacing="0.1em">18 MONTHS</text>

      {/* Milestone dotted lines */}
      {milestones.map(x => (
        <line key={x} x1={x} y1="30" x2={x} y2="178" stroke="var(--ink)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.09" />
      ))}

      {/* Bars */}
      {bars.map((b, i) => (
        <g key={b.label}>
          <text x={b.x} y={b.y - 4} fontSize="6.5" fill="var(--ink)" opacity="0.38" fontFamily="system-ui" fontWeight="500">{b.label}</text>
          <rect x={b.x} y={b.y} width={b.w} height={14} rx="2.5" fill={b.fill} opacity={b.opacity} />
          {/* Right bracket */}
          <path
            d={`M ${b.x + b.w} ${b.y - 3} L ${b.x + b.w + 5} ${b.y - 3} L ${b.x + b.w + 5} ${b.y + 17} L ${b.x + b.w} ${b.y + 17}`}
            stroke={b.fill}
            strokeWidth="0.75"
            fill="none"
            opacity={b.opacity + 0.15}
          />
          <circle cx={b.x + b.w + 5} cy={b.y + 7} r="2.5" fill={b.fill} opacity={b.opacity + 0.2} />
        </g>
      ))}

      {/* Timeline axis */}
      <line x1="30" y1="185" x2="380" y2="185" stroke="var(--ink)" strokeWidth="0.6" opacity="0.18" />
      {ticks.map(m => {
        const x = 30 + (m / 18) * 350;
        return (
          <g key={m}>
            <line x1={x} y1="183" x2={x} y2="189" stroke="var(--ink)" strokeWidth="0.6" opacity="0.22" />
            <text x={x} y="200" textAnchor="middle" fontSize="6" fill="var(--ink)" opacity="0.28" fontFamily="monospace">M{m}</text>
          </g>
        );
      })}
    </svg>
  );
}

function QuarterlyRoadmap() {
  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  return (
    <div>
      <p className="text-[9px] tracking-[0.14em] uppercase font-mono text-white/25 mb-3">Annual support cycle</p>
      <svg viewBox="0 0 280 72" className="w-full" aria-hidden>
        <defs>
          <pattern id="qGrid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.5" fill="white" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="280" height="72" fill="url(#qGrid)" />
        <line x1="24" y1="28" x2="256" y2="28" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        {quarters.map((q, i) => {
          const x = 24 + i * 77;
          const isFirst = i === 0;
          return (
            <g key={q}>
              <circle cx={x} cy="28" r="5.5" fill="none" stroke={isFirst ? "var(--lime)" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
              {isFirst && <circle cx={x} cy="28" r="2.5" fill="var(--lime)" opacity="0.75" />}
              <text x={x} y="48" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{q}</text>
              {i < 3 && (
                <line x1={x + 5.5} y1="28" x2={x + 71.5} y2="28" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" strokeDasharray="3 3" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative bg-bg overflow-hidden" style={{ minHeight: "56vh" }}>
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[62%] z-0 pointer-events-none select-none overflow-hidden"
            style={{ background: "var(--bg)" }}
          >
            <div className="absolute inset-0">
              <Image src="/pricing-hero.jpg" alt="" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div
              className="absolute inset-y-0 left-0 w-3/4"
              style={{
                background: "linear-gradient(to right, var(--bg) 0%, var(--bg) 10%, color-mix(in srgb, var(--bg) 12%, transparent) 38%, transparent 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: "linear-gradient(to top, var(--bg), transparent)" }} />
          </div>

          <div className="absolute inset-0 bg-bg/55 md:hidden pointer-events-none z-[1]" />

          <div
            className={`${PAGE} relative z-10 flex flex-col justify-center`}
            style={{ minHeight: "56vh", paddingTop: "6rem", paddingBottom: "4rem" }}
          >
            <div className="max-w-[50%] md:max-w-[44%]">
              <Reveal>
                <h1
                  className="font-display font-normal leading-[0.95] tracking-[-0.045em]"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
                >
                  Flat-fee pricing.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="large-body mt-7 text-ink/65 max-w-[36ch] leading-[1.5]">
                  Know what your patent portfolio costs before we draft the first application.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["No hourly billing", "Fees published up front", "18-month portfolio budget"].map((chip) => (
                    <span
                      key={chip}
                      className="text-[11.5px] font-medium text-ink/55 border border-ink/12 rounded-full px-3 py-1"
                      style={{ background: "rgba(23,23,23,0.04)" }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════ NO HOURLY BILLING ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[14ch]">No hourly billing. Ever.</h2>
                <div
                  className="mt-10 rounded-xl border border-rule overflow-hidden bg-bg p-5"
                  style={{ maxWidth: "380px" }}
                >
                  <p className="text-[8px] tracking-[0.16em] uppercase font-mono text-ink/28 mb-3">
                    18-month portfolio plan
                  </p>
                  <BudgetMap />
                </div>
              </Reveal>

              <Reveal delay={180} className="md:col-span-6 md:col-start-7 md:pt-3">
                <div
                  className="text-[16px] md:text-[17px] leading-[1.7] text-ink/72 space-y-5 max-w-[56ch] pl-7"
                  style={{ borderLeft: "2px solid var(--lime)" }}
                >
                  <p>
                    Most other patent firms in the country bill by the hour. We don&rsquo;t.
                    Every project we take on is priced as a flat fee, and in your first strategy
                    session, we map out an 18-month portfolio budget that plans around
                    fundraises, grants, and product milestones.
                  </p>
                  <p>
                    Our flat fees include all consultations, drafting, internal and external
                    review, patent drawings, information disclosure statements (IDSs), USPTO
                    filing coordination, and USPTO fees. Any optional official fees not included
                    in our standard fees are passed through at cost.
                  </p>
                  <p>
                    We price our work to come in roughly{" "}
                    <span className="text-ink font-medium">60% below typical big law rates</span>{" "}
                    and{" "}
                    <span className="text-ink font-medium">40% below typical boutique firms</span>{" "}
                    serving venture-backed startups.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════ STANDARD FLAT FEES ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title mb-12">Standard flat fees.</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              {GROUPS.map((group, gi) => (
                <Reveal key={group.label} delay={gi * 80}>
                  <div className="border border-rule rounded-2xl overflow-hidden flex flex-col h-full">
                    {/* Accent top bar */}
                    <div className="h-[3px]" style={{ background: group.accent }} />
                    {/* Header */}
                    <div className="px-6 pt-5 pb-4 border-b border-rule">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-ink/22 select-none leading-none">[ ]</span>
                        <span className="text-[10.5px] tracking-[0.13em] uppercase font-medium text-ink/38">
                          {group.label}
                        </span>
                      </div>
                      <p className="text-[13px] text-ink/48 mt-0.5 leading-snug">{group.detail}</p>
                    </div>
                    {/* Fee rows */}
                    <div className="flex-1 flex flex-col divide-y divide-rule">
                      {group.items.map((item, j) => (
                        <div
                          key={j}
                          className={`flex items-center justify-between gap-4 px-6 py-4 ${j % 2 === 0 ? "bg-bg" : "bg-bg-alt/40"}`}
                        >
                          <span className="text-[13.5px] text-ink/78 leading-snug">{item.service}</span>
                          <span className="shrink-0 font-display font-medium text-[13.5px] text-ink/45 tabular-nums whitespace-nowrap">
                            {item.prefix && <span className="text-[11px] mr-0.5 font-normal opacity-70">from </span>}
                            {item.fee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ STRATEGIC SUPPORT + PARTNER DISCOUNT ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36 space-y-5`}>

            {/* Retainer card */}
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-charcoal" />
                <div className="absolute inset-0 tech-dots-dark opacity-40 pointer-events-none" />
                <div
                  className="absolute -bottom-28 -right-28 w-[360px] h-[360px] rounded-full pointer-events-none"
                  style={{ border: "1px solid rgba(183,211,107,0.14)" }}
                />
                <div
                  className="absolute -bottom-14 -right-14 w-[240px] h-[240px] rounded-full pointer-events-none"
                  style={{ border: "1px solid rgba(183,211,107,0.09)" }}
                />

                <div className="relative z-10 grid md:grid-cols-2">
                  {/* Left */}
                  <div className="px-10 md:px-14 py-12 md:py-16 border-b md:border-b-0 md:border-r border-white/10">
                    <p className="text-[10px] tracking-[0.14em] uppercase font-mono text-white/30 mb-5">
                      Strategic support package
                    </p>
                    <h3
                      className="font-display font-medium text-white leading-[1.1] tracking-[-0.03em] mb-5"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
                    >
                      For founders filing at scale.
                    </h3>
                    <p className="text-[15px] text-white/52 leading-[1.65] mb-8 max-w-[42ch]">
                      For startups filing five or more patents per year, we offer a strategic
                      support package billed as a monthly retainer.
                    </p>
                    <ul className="space-y-3">
                      {RETAINER_INCLUDES.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-[8px] shrink-0 w-[4px] h-[4px] rounded-full" style={{ background: "var(--lime)", opacity: 0.65 }} />
                          <span className="text-[14px] text-white/58 leading-[1.6]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: price + roadmap */}
                  <div className="px-10 md:px-14 py-12 md:py-16 flex flex-col justify-between gap-10">
                    <QuarterlyRoadmap />
                    <div>
                      <p className="text-[10px] tracking-[0.12em] uppercase font-mono text-white/25 mb-3">
                        Monthly retainer
                      </p>
                      <p
                        className="font-display font-medium text-white leading-none"
                        style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
                      >
                        $[X,XXX]
                        <span className="text-[15px] text-white/32 font-normal ml-2">/month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Partner discount card */}
            <Reveal delay={120}>
              <div className="grid md:grid-cols-3 rounded-2xl border border-rule overflow-hidden">
                {/* 10% visual */}
                <div className="relative flex items-center justify-center py-10 px-6 bg-bg border-b md:border-b-0 md:border-r border-rule overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-25 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, var(--lime) 0%, transparent 68%)" }}
                  />
                  <span
                    className="relative font-display font-medium leading-none tracking-[-0.04em]"
                    style={{ fontSize: "clamp(4.5rem, 9vw, 7.5rem)", color: "var(--lime)" }}
                  >
                    10%
                  </span>
                </div>
                {/* Text */}
                <div className="md:col-span-2 px-10 py-10 bg-bg flex flex-col justify-center">
                  <p className="text-[10px] tracking-[0.14em] uppercase font-mono text-ink/32 mb-3">
                    Partner discount
                  </p>
                  <h3 className="font-display font-medium text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.022em] mb-4">
                    10% off for referred founders.
                  </h3>
                  <p className="text-[15px] text-ink/65 leading-[1.65] max-w-[46ch]">
                    If an accelerator or VC partner referred you, you get 10% off all flat fees.
                    Mention the referral during your consultation and we&rsquo;ll apply the discount.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ══════════════════ WHAT'S INCLUDED ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-12">
              <Reveal className="md:col-span-4">
                <h2 className="section-title">What&rsquo;s included.</h2>
                <p className="mt-4 text-[15px] text-ink/52 leading-[1.6]">
                  Every flat-fee project includes:
                </p>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-rule overflow-hidden">
                {WHATS_INCLUDED.map((item, i) => {
                  const hasRight = i % 4 !== 3 && i + 1 < WHATS_INCLUDED.length;
                  const hasBottom = i + 4 < WHATS_INCLUDED.length;
                  return (
                    <div
                      key={i}
                      className={`relative px-5 py-6 ${hasRight ? "border-r border-rule" : ""} ${hasBottom ? "border-b border-rule" : ""} ${i % 2 === 0 ? "bg-bg" : "bg-bg-alt/50"}`}
                    >
                      <span className="absolute top-3 right-4 font-mono text-[9px] text-ink/16 select-none">↗</span>
                      <p className="text-[13.5px] text-ink/72 leading-[1.55] pr-4">{item}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════ CTA ══════════════════ */}
        <section className="relative overflow-hidden bg-charcoal border-t border-rule">
          <div className="absolute inset-0 tech-dots-dark opacity-60 pointer-events-none" />
          <div
            className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(183,211,107,0.18)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(183,211,107,0.10)" }}
          />
          <div className={`${PAGE} relative z-10 py-28 md:py-40`}>
            <Reveal>
              <h2 className="section-title text-white max-w-[18ch] mb-6">
                Ready to build your portfolio?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[16px] md:text-[17px] text-white/55 max-w-[48ch] leading-[1.6] mb-10">
                Book a free 30-minute consultation. We&rsquo;ll map out exactly what you need
                and what it will cost — before you commit to anything.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-lime text-ink pl-6 pr-5 py-3.5 rounded-md text-[14px] font-medium hover:bg-white transition-colors"
              >
                Book a free consultation
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
