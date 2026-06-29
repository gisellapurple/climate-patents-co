import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const FEES = [
  { service: "Patent strategy session (initial engagement)",  fee: "$[X,XXX]",   prefix: false },
  { service: "Provisional patent application",               fee: "$[X,XXX]",   prefix: false },
  { service: "Non-provisional (utility) patent application", fee: "$[XX,XXX]",  prefix: false },
  { service: "PCT (international) patent application",       fee: "$[X,XXX]",   prefix: false },
  { service: "Continuation or continuation-in-part",         fee: "$[X,XXX]",   prefix: false },
  { service: "Design patent application",                    fee: "$[X,XXX]",   prefix: false },
  { service: "Office action response",                       fee: "$[X,XXX]",   prefix: false },
  { service: "Examiner interview",                           fee: "$[X,XXX]",   prefix: false },
  { service: "Patent landscape investigation",               fee: "$[X,XXX]",   prefix: true  },
  { service: "Freedom-to-operate (FTO) analysis",            fee: "$[XX,XXX]",  prefix: true  },
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
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[14ch]">
                Flat-fee pricing.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-[16px] md:text-[17px] text-ink/65 max-w-[52ch] leading-[1.55]">
                Know what your patent portfolio costs before we draft the first application.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.022em] max-w-[16ch]">
                  No hourly billing ever.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <div className="text-[15.5px] md:text-[16px] leading-[1.65] text-ink/75 space-y-5 border-l-2 border-sage/30 pl-6">
                  <p>
                    Almost every other patent firm in the country bills by the hour. We
                    don&rsquo;t. Every project we take on is priced as a flat fee, and in your
                    first strategy session we map out your 18-month portfolio budget so you can
                    plan around fundraises, grants, and product milestones.
                  </p>
                  <p>
                    Our flat fees include all consultations, drafting, internal review, your
                    revisions, patent drawings, information disclosure statements (IDSs), and
                    USPTO filing coordination. The only additional costs are USPTO government
                    fees, which we pass through at cost.
                  </p>
                  <p>
                    We price our work to come in roughly{" "}
                    <span className="text-rust font-medium">60% below typical big law rates</span>{" "}
                    and{" "}
                    <span className="text-rust font-medium">40% below typical boutique firms</span>{" "}
                    serving venture-backed startups.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Fee table */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em] mb-10">
                Standard flat fees
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-rule overflow-hidden">
                {FEES.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between gap-8 px-7 py-5 ${i < FEES.length - 1 ? "border-b border-rule" : ""} ${i % 2 === 0 ? "bg-bg" : "bg-bg-alt"}`}
                  >
                    <span className="text-[15px] text-ink/80 leading-snug">{row.service}</span>
                    <span className="shrink-0 font-display font-medium text-[15px] text-ink/50 tabular-nums">
                      {row.prefix && <span className="text-[12px] mr-0.5">from </span>}
                      {row.fee}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Strategic support + partner discount */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

              {/* Strategic support */}
              <Reveal>
                <h2 className="font-display font-medium text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.018em] mb-4">
                  Strategic support package
                </h2>
                <p className="text-[15px] text-ink/65 leading-[1.65] mb-6">
                  For startups filing five or more patents per year, we offer a strategic
                  support package billed as a monthly retainer.
                </p>
                <ul className="space-y-3 mb-7">
                  {RETAINER_INCLUDES.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-sage/60" />
                      <span className="text-[14.5px] text-ink/70 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-display font-medium text-[18px] text-ink/50">$[X,XXX]/month</p>
              </Reveal>

              {/* Partner discount */}
              <Reveal delay={160}>
                <div className="border-t-2 border-sage/40 pt-8">
                  <p className="text-[12px] text-sage uppercase tracking-wider font-medium mb-4">Partner discount</p>
                  <h2 className="font-display font-medium text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.018em] mb-4">
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

        {/* What's included */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-4">
                <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em]">
                  What&rsquo;s included
                </h2>
                <p className="mt-4 text-[15px] text-ink/55 leading-[1.6]">
                  Every flat-fee project includes:
                </p>
              </Reveal>
              <Reveal delay={160} className="md:col-span-6 md:col-start-7">
                <ul className="divide-y divide-rule border-t border-rule">
                  {WHATS_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 py-4">
                      <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-sage/60" />
                      <span className="text-[15px] text-ink/75 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[20ch] mb-9">
                Ready to build your portfolio?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-rust transition-colors"
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
