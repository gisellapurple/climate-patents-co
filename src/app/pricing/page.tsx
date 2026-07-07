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

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section
          className="relative bg-bg overflow-hidden"
          style={{ minHeight: "56vh", backgroundColor: "var(--bg)" }}
        >
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[62%] z-0 pointer-events-none select-none overflow-hidden"
            style={{ backgroundColor: "var(--bg)" }}
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

          <div className="absolute inset-0 md:hidden pointer-events-none z-[1]" style={{ backgroundColor: "rgba(245,243,236,0.55)" }} />

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
            </div>
          </div>
        </section>

        {/* ══════════════════ NO HOURLY BILLING ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[16ch]">
                  60% below typical big law rates.
                </h2>
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
                    <div className="px-6 pt-6 pb-5 border-b border-rule">
                      <h3
                        className="font-display font-medium leading-[1.05] tracking-[-0.03em] text-ink"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
                      >
                        {group.label}
                      </h3>
                      <p className="text-[13px] text-ink/45 mt-1.5 leading-snug">{group.detail}</p>
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
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

              <Reveal>
                <h2 className="font-display font-medium text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.025em] mb-4">
                  Strategic support package
                </h2>
                <p className="text-[15px] text-ink/65 leading-[1.65] mb-6">
                  For startups filing five or more patents per year, we offer a strategic
                  support package billed as a monthly retainer.
                </p>
                <ul className="space-y-3 mb-7">
                  {RETAINER_INCLUDES.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-ink/20" />
                      <span className="text-[14.5px] text-ink/70 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-display font-medium text-[18px] text-ink/50">$[X,XXX]/month</p>
              </Reveal>

              <Reveal delay={160}>
                <div className="border-t-2 pt-8" style={{ borderColor: "var(--lime)" }}>
                  <p className="text-[11px] tracking-[0.1em] uppercase font-medium text-ink/35 mb-4">Partner discount</p>
                  <h2 className="font-display font-medium text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.025em] mb-4">
                    10% off for referred founders.
                  </h2>
                  <p className="text-[15px] text-ink/65 leading-[1.65]">
                    If an accelerator or VC partner referred you, you get 10% off all flat fees.
                    Mention the referral during your consultation and we&rsquo;ll apply the discount.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ══════════════════ WHAT'S INCLUDED ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-4">
                <h2 className="section-title">What&rsquo;s included.</h2>
                <p className="mt-4 text-[15px] text-ink/55 leading-[1.6]">
                  Every flat-fee project includes:
                </p>
              </Reveal>
              <Reveal delay={160} className="md:col-span-6 md:col-start-7">
                <ul className="divide-y divide-rule border-t border-rule">
                  {WHATS_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 py-4">
                      <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-ink/20" />
                      <span className="text-[15px] text-ink/75 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
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
