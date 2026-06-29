import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { TopoCluster } from "@/components/TopoCluster";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const INDUSTRIES = [
  "Energy Storage & Batteries",
  "Solar & Renewable Energy",
  "Carbon Capture, Removal & Utilization",
  "Hydrogen & Alternative Fuels",
  "Sustainable Transportation & EVs",
  "Sustainable Aviation",
  "Green Buildings & HVAC",
  "Sustainable Agriculture & Ag-Tech",
  "Circular Economy & Recycling",
  "Geothermal",
  "Climate AI & Software",
];

const CASE_STUDIES = [
  {
    name: "Ulysses",
    slug: "ulysses",
    sector: "Maritime robotics & physical AI",
    bg: "bg-[#E8EDE6]",
  },
  {
    name: "Aquaporo",
    slug: "aquaporo",
    sector: "Atmospheric water harvesting",
    bg: "bg-[#E6E8ED]",
  },
  {
    name: "Scaled Carbon",
    slug: "scaled-carbon",
    sector: "Ocean MRV for carbon removal",
    bg: "bg-[#EDE8E6]",
  },
  {
    name: "Coming soon",
    slug: "case-studies",
    sector: "Climate tech",
    bg: "bg-[#EDEDEB]",
  },
];

const SERVICES = [
  {
    title: "Patent Strategy & Portfolio Planning",
    body: "We figure out what to file and what to skip. Your IP plan should match your roadmap and your fundraise, and sometimes that means telling you not to file at all.",
    href: "/services/patent-strategy",
  },
  {
    title: "Patent Drafting",
    body: "Provisionals, non-provisionals, PCT applications, continuations, and design applications. Written by people who actually understand your technology.",
    href: "/services/patent-drafting",
  },
  {
    title: "Patent Prosecution & Office Actions",
    body: "USPTO office actions, examiner interviews, international reports, and appeals. We treat prosecution as strategy work, which is part of why our clients tend to see their allowance rates climb after switching to us.",
    href: "/services/patent-prosecution",
  },
];


const PILLARS = [
  {
    title: "Strategy first",
    body: "Your patent plan should match your fundraising plan and your product roadmap. Most firms start with what's technically patentable. We start with what you actually need to protect, and what your next investor is going to ask about it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="#5A8054" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" fill="#5A8054" opacity="0.35"/>
        <circle cx="10" cy="10" r="1.2" fill="#5A8054"/>
      </svg>
    ),
  },
  {
    title: "Flat fees, transparent budgets",
    body: "Every project is a flat fee. In your first strategy session we map out your full portfolio budget for the next 18 months, so there are no billing surprises in the middle of a fundraise.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="6.5" width="14" height="1.5" rx="0.75" fill="#B85A2B" opacity="0.8"/>
        <rect x="3" y="12" width="14" height="1.5" rx="0.75" fill="#B85A2B" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Fast turnarounds",
    body: "We can have a provisional drafted and filed in three weeks. Non-provisionals run on a schedule that matches your fundraise. If you need something on the books before a board meeting, tell us and we'll work backward from there.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="#B85A2B" strokeWidth="1.5"/>
        <path d="M10 6v4.5l2.8 2.8" stroke="#B85A2B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Climate fluency",
    body: "We've drafted patents on solid-state batteries, direct air capture, perovskite solar, AD biogas, electrolyzers, EV charging protocols, precision ag systems, and a lot more. You won't spend your first call explaining what your technology does.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3c0 4-4 6-4 9a4 4 0 008 0c0-3-4-5-4-9z" stroke="#5A8054" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M7.5 15.5c.7.3 1.7.5 2.5.5" stroke="#5A8054" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-bg">
          <TopoCluster />
          <div className={`${PAGE} relative pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[72px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] max-w-[16ch]">
                The only patent agency built for climate tech.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-7 text-[16px] md:text-[17px] text-ink/65 max-w-[52ch] leading-[1.55]">
                Flat fees, fast filings, and real IP strategy. We&apos;ve prosecuted{" "}
                <span className="text-rust font-medium">100+</span> patents for{" "}
                <span className="text-rust font-medium">40+</span> climate startups since 2023.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-9 flex flex-wrap items-center gap-7">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-rust transition-colors"
                >
                  Book a free consultation
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
                <Link
                  href="/case-studies"
                  className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5"
                >
                  See case studies <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LOGOS */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-10`}>
            <Reveal>
              <p className="italic text-sage text-[15px] mb-7">
                Trusted by climate founders backed by
              </p>
            </Reveal>
            <Reveal delay={120}>
              <LogoCarousel />
            </Reveal>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[14ch]">
                  Big law wasn&apos;t built for you.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <div className="text-[15.5px] md:text-[16px] leading-[1.65] text-ink/75 space-y-5 max-w-[58ch] border-l-2 border-sage/30 pl-6">
                  <p>
                    Most patent firms bill by the hour. They treat a resource-strapped climate
                    startup the same way they treat Apple, and you can feel it in your invoice. By
                    the time you&apos;ve spent $50K on a portfolio you don&apos;t fully understand, you&apos;ve also missed two
                    product pivots and a fundraise.
                  </p>
                  <p>
                    We started the Climate Patent Collective in 2022 because the founders working
                    on climate shouldn&apos;t have to choose between filing their patents properly
                    and being able to make payroll.
                  </p>

                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal delay={120}>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[20ch] mb-16">
                Why climate teams choose us.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4">
                      {p.icon}
                      <span className="text-[12.5px] text-ink/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display font-medium text-[22px] md:text-[24px] leading-[1.2] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[14.5px] md:text-[15px] text-ink/72 max-w-[48ch] leading-[1.65]">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
              <Reveal className="md:col-span-12">
                <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em]">
                  Patents for the technologies that matter.
                </h2>
              </Reveal>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-14 border-t border-rule">
              {INDUSTRIES.map((name, i) => (
                <Reveal key={name} delay={i * 40}>
                  <li className="border-b border-rule py-4 group cursor-default">
                    <div className="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-1.5">
                      <span className="block w-2 h-2 rounded-full bg-sage/30 group-hover:bg-rust transition-colors" />
                      <span className="font-display font-medium text-[18px] md:text-[19px] leading-snug">
                        {name}
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/industries" className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5">
                See all industries <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal delay={120}>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[22ch] mb-14">
                Hear from real climate tech founders.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 90}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group block rounded-2xl border border-rule overflow-hidden hover:border-sage/40 transition-colors"
                  >
                    <div className={`${cs.bg} h-56 w-full`} />
                    <div className="px-6 py-5 flex items-center justify-between">
                      <div>
                        <p className="font-display font-medium text-[18px] group-hover:text-rust transition-colors">{cs.name}</p>
                        <p className="text-[13px] text-ink/50 mt-0.5">{cs.sector}</p>
                      </div>
                      <span className="text-[13px] text-ink/40 group-hover:text-rust group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                        Read more <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/case-studies" className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5">
                See all case studies <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal delay={120}>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[24ch] mb-16">
                Everything you need to build a defensible portfolio.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <Reveal key={s.href} delay={i * 100}>
                  <Link
                    href={s.href}
                    className="group flex flex-col h-full p-7 rounded-2xl border border-rule bg-bg hover:bg-bg-tint hover:border-sage/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="block w-5 h-px bg-rust" />
                      <span className="text-[12px] text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display font-medium text-[20px] md:text-[22px] leading-[1.2] mb-4 group-hover:text-rust transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[14.5px] text-ink/72 leading-[1.6] mb-8 flex-1">{s.body}</p>
                    <span className="text-[13px] text-ink/55 inline-flex items-center gap-1.5 group-hover:text-rust transition-colors mt-auto">
                      Learn more
                      <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/services" className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5">
                Explore all services <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-bg-tint/50 border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <TestimonialCarousel />
            </Reveal>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-12">
              <Reveal className="md:col-span-6">
                <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[16ch]">
                  We&apos;re part of the climate community.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:pt-3 space-y-5 text-[15.5px] text-ink/75 leading-[1.65]">
                <p className="max-w-[44ch]">
                  The Climate Patent Collective works with the accelerators and venture funds
                  shaping climate tech. When you work with us, you get warm intros into the parts
                  of the ecosystem you actually need.
                </p>
                <p className="text-[14.5px] text-ink/85 max-w-[44ch]">
                  Referred by one of our partners?{" "}
                  <span className="text-rust font-medium">You get 10% off our flat fees.</span>
                </p>
                <Link
                  href="/for-partners"
                  className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5"
                >
                  Become a partner <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 mb-12">
              <Reveal className="md:col-span-7">
                <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[18ch]">
                  Answers to the questions founders ask first.
                </h2>
              </Reveal>
            </div>
            <FAQ />
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative overflow-hidden bg-bg-tint/60 border-t border-rule">
          <div className={`${PAGE} relative py-28 md:py-40 text-center`}>
            <Reveal delay={150}>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[18ch] mx-auto">
                Let&apos;s protect what you&apos;re building.
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 text-[16px] md:text-[17px] text-ink/70 max-w-[54ch] mx-auto leading-[1.55]">
                Book a free 30-minute consultation. We&apos;ll talk through your technology and
                your roadmap, and you&apos;ll leave knowing whether we&apos;re the right fit.
                There&apos;s nothing on the meter.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-6 pr-5 py-3.5 rounded-md text-[14px] font-medium hover:bg-rust transition-colors"
                >
                  Book a free consultation
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
