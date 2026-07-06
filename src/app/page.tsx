import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { TopoCluster } from "@/components/TopoCluster";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

/* ─── Data ──────────────────────────────────────────────────────── */

const INDUSTRIES: { name: string; span: string; bg: string; text: string; dots: string }[] = [
  { name: "Energy Storage & Batteries",           span: "md:col-span-2", bg: "bg-lime",      text: "text-ink",   dots: "tech-dots-lime" },
  { name: "Solar & Renewable Energy",             span: "md:col-span-1", bg: "bg-charcoal",  text: "text-white", dots: "tech-dots-dark" },
  { name: "Carbon Capture, Removal & Utilization",span: "md:col-span-1", bg: "bg-surface",   text: "text-ink",   dots: "tech-dots-light" },
  { name: "Hydrogen & Alternative Fuels",          span: "md:col-span-2", bg: "bg-charcoal",  text: "text-white", dots: "tech-dots-dark" },
  { name: "Sustainable Transportation & EVs",     span: "md:col-span-1", bg: "bg-soft-gray", text: "text-ink",   dots: "tech-dots-light" },
  { name: "Sustainable Aviation",                 span: "md:col-span-1", bg: "bg-surface",   text: "text-ink",   dots: "tech-dots-light" },
  { name: "Green Buildings & HVAC",               span: "md:col-span-1", bg: "bg-lime",      text: "text-ink",   dots: "tech-dots-lime" },
  { name: "Sustainable Agriculture & Ag-Tech",    span: "md:col-span-2", bg: "bg-charcoal",  text: "text-white", dots: "tech-dots-dark" },
  { name: "Circular Economy & Recycling",         span: "md:col-span-1", bg: "bg-soft-gray", text: "text-ink",   dots: "tech-dots-light" },
  { name: "Geothermal",                           span: "md:col-span-1", bg: "bg-surface",   text: "text-ink",   dots: "tech-dots-light" },
  { name: "Climate AI & Software",                span: "md:col-span-2", bg: "bg-lime",      text: "text-ink",   dots: "tech-dots-lime" },
];

const CASE_STUDIES = [
  { name: "Ulysses",        slug: "ulysses",        sector: "Maritime robotics & physical AI",    featured: true },
  { name: "Aquaporo",       slug: "aquaporo",       sector: "Atmospheric water harvesting",        featured: false },
  { name: "Scaled Carbon",  slug: "scaled-carbon",  sector: "Ocean MRV for carbon removal",        featured: false },
  { name: "BikeOn",         slug: "bikeon",         sector: "E-mobility & micromobility",          featured: false },
];

const SERVICES = [
  {
    title: "Patent Strategy & Portfolio Planning",
    body: "Figure out what to file and what to skip, with an 18-month budget you can actually plan around.",
    href: "/services/patent-strategy",
    bg: "bg-lime",
    text: "text-ink",
    dots: "tech-dots-lime",
    span: "md:col-span-7",
    num: "01",
  },
  {
    title: "Provisional Patent Applications",
    body: "A fast, affordable way to establish a priority date.",
    href: "/services/provisional-patent-application",
    bg: "bg-charcoal",
    text: "text-white",
    dots: "tech-dots-dark",
    span: "md:col-span-5",
    num: "02",
  },
  {
    title: "Non-Provisional Patent Applications",
    body: "The full patent application. Drafted with prosecution in mind, on a timeline that matches your fundraise.",
    href: "/services/non-provisional-patent-application",
    bg: "bg-surface",
    text: "text-ink",
    dots: "tech-dots-light",
    span: "md:col-span-4",
    num: "03",
  },
  {
    title: "PCT (International) Patent Applications",
    body: "File once, preserve your right to file in over 150 countries. We handle the strategy and the paperwork.",
    href: "/services/pct-international-patent",
    bg: "bg-soft-gray",
    text: "text-ink",
    dots: "tech-dots-light",
    span: "md:col-span-4",
    num: "04",
  },
  {
    title: "Patent Prosecution & Office Actions",
    body: "USPTO responses, examiner interviews, international reports, and appeals.",
    href: "/services/patent-prosecution",
    bg: "bg-surface",
    text: "text-ink",
    dots: "tech-dots-light",
    span: "md:col-span-4",
    num: "05",
  },
];

const PILLARS = [
  {
    title: "Strategy first",
    body: "Your patent plan should match your fundraising plan and your product roadmap. Most firms start with what's technically patentable. We start with what you actually need to protect, and what your next investor is going to ask about it.",
    bg: "bg-surface border border-rule",
    text: "text-ink",
    numColor: "text-ink/20",
    accentColor: "bg-rust",
  },
  {
    title: "Flat fees, transparent budgets",
    body: "Every project is a flat fee. In your first strategy session we map out your full portfolio budget for the next 18 months, so there are no billing surprises in the middle of a fundraise.",
    bg: "bg-lime",
    text: "text-ink",
    numColor: "text-ink/25",
    accentColor: "bg-ink",
  },
  {
    title: "Fast turnarounds",
    body: "We can have a provisional drafted and filed in three weeks. Non-provisionals run on a schedule that matches your fundraise. If you need something on the books before a board meeting, tell us and we'll work backward from there.",
    bg: "bg-charcoal",
    text: "text-white",
    numColor: "text-white/20",
    accentColor: "bg-lime",
  },
  {
    title: "Climate fluency",
    body: "We've drafted patents on solid-state batteries, direct air capture, perovskite solar, AD biogas, electrolyzers, EV charging protocols, precision ag systems, and a lot more. You won't spend your first call explaining what your technology does.",
    bg: "bg-soft-gray",
    text: "text-ink",
    numColor: "text-ink/20",
    accentColor: "bg-rust",
  },
];

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative bg-bg overflow-hidden" style={{ minHeight: "90vh" }}>
          <TopoCluster />
          <div
            className={`${PAGE} relative z-10 flex flex-col justify-center`}
            style={{ minHeight: "90vh", paddingTop: "7rem", paddingBottom: "6rem" }}
          >
            <div className="max-w-[52%] md:max-w-[46%]">
              {/* Label */}
              <Reveal>
                <div className="flex items-center gap-3 mb-10">
                  <span className="block w-6 h-px bg-rust" />
                  <span className="text-[11.5px] text-ink/45 tracking-[0.1em] uppercase font-medium">
                    Climate Patent Collective
                  </span>
                </div>
              </Reveal>

              {/* Headline */}
              <Reveal>
                <h1 className="hero-title">
                  The only patent agency built for climate tech.
                </h1>
              </Reveal>

              {/* Sub */}
              <Reveal delay={220}>
                <p className="large-body mt-8 text-ink/65 max-w-[40ch] leading-[1.5]">
                  Flat fees, fast filings, and real IP strategy. We&apos;ve prosecuted{" "}
                  <span className="text-rust font-medium">100+</span> patents for{" "}
                  <span className="text-rust font-medium">40+</span> climate startups since 2023.
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={380}>
                <div className="mt-10 flex flex-wrap items-center gap-7">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
                  >
                    Book a free consultation
                    <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </Link>
                  <Link href="/case-studies" className="text-[14.5px] inline-flex items-center gap-1.5 sage-underline pb-0.5">
                    See case studies <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile: show a subtle bg tint so text stays readable over faded image */}
          <div className="absolute inset-0 bg-bg/55 md:hidden pointer-events-none z-[1]" />
        </section>

        {/* ══════════════════ LOGOS ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-10`}>
            <Reveal>
              <p className="italic text-sage text-[14px] mb-7 tracking-wide">
                Trusted by climate founders backed by
              </p>
            </Reveal>
            <Reveal delay={120}>
              <LogoCarousel />
            </Reveal>
          </div>
        </section>

        {/* ══════════════════ PROBLEM ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[12ch]">
                  Big law wasn&apos;t built for you.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7 md:pt-3">
                <div
                  className="text-[16px] md:text-[17px] leading-[1.7] text-ink/72 space-y-5 max-w-[56ch] pl-7"
                  style={{ borderLeft: "2px solid var(--lime)" }}
                >
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

        {/* ══════════════════ WHY ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title max-w-[18ch] mb-14">
                Why climate teams choose us.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className={`pillar-card ${p.bg} ${p.text} rounded-2xl p-9 md:p-11 h-full flex flex-col`}>
                    {/* Number + accent mark */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className={`block w-5 h-0.5 ${p.accentColor} rounded-full`} />
                      <span className={`text-[11px] tracking-[0.1em] uppercase font-medium ${p.numColor}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Oversized number watermark */}
                    <div className={`font-display text-[5rem] leading-none tracking-[-0.06em] mb-4 ${p.numColor}`} aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className={`font-display font-medium text-[24px] md:text-[26px] leading-[1.15] mb-4`}>
                      {p.title}
                    </h3>
                    <p className={`text-[14.5px] md:text-[15px] leading-[1.7] flex-1 opacity-75`}>
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ INDUSTRIES ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title max-w-[22ch] mb-12">
                Patents for the technologies that matter.
              </h2>
            </Reveal>

            {/* Tile grid */}
            <div className="grid md:grid-cols-3 gap-3">
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind.name} delay={i * 35}>
                  <div className={`industry-tile ${ind.bg} ${ind.span} ${ind.dots} rounded-xl p-7 md:p-9 min-h-[160px] md:min-h-[180px] flex flex-col justify-between relative`}>
                    <div className="tile-wash" />
                    {/* Index */}
                    <span className={`block font-display text-[11px] tracking-[0.1em] uppercase ${ind.text} opacity-30 mb-6`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Name */}
                    <span className={`font-display font-medium text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.02em] ${ind.text}`}>
                      {ind.name}
                    </span>
                    {/* Corner accent */}
                    <svg
                      className="absolute top-5 right-5 opacity-25"
                      width="20" height="20" viewBox="0 0 20 20" fill="none"
                      aria-hidden
                    >
                      <circle cx="10" cy="10" r="8" stroke={ind.text === "text-white" ? "#fff" : "#111"} strokeWidth="0.8" />
                      <circle cx="10" cy="10" r="3" stroke={ind.text === "text-white" ? "#fff" : "#111"} strokeWidth="0.8" />
                    </svg>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/industries" className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5">
                See all industries <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════ CASE STUDIES ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title max-w-[20ch] mb-12">
                Hear from real climate tech founders.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-4">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 80}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className={`dossier-card group block rounded-2xl border border-rule overflow-hidden hover:border-ink/25 transition-colors ${
                      cs.featured ? "md:col-span-2" : ""
                    }`}
                  >
                    {/* Image panel */}
                    <div className={`dossier-img-wrap w-full ${cs.featured ? "h-72 md:h-80" : "h-52"}`}>
                      <Image
                        src={`/cs-${cs.slug}.png`}
                        alt={cs.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Metadata footer */}
                    <div className="px-6 py-5 bg-bg flex items-center justify-between gap-4">
                      <div>
                        {/* Sector tag */}
                        <span className="inline-block text-[10.5px] tracking-[0.08em] uppercase text-ink/40 mb-1.5">
                          {cs.sector}
                        </span>
                        <p className="font-display font-medium text-[18px] leading-tight group-hover:text-rust transition-colors">
                          {cs.name}
                        </p>
                      </div>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-rule flex items-center justify-center text-[12px] text-ink/40 group-hover:bg-ink group-hover:text-bg group-hover:border-ink transition-all">
                        →
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

        {/* ══════════════════ SERVICES ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title max-w-[22ch] mb-12">
                Everything you need to build a defensible portfolio.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-12 gap-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.href} delay={i * 70} className={s.span}>
                  <Link
                    href={s.href}
                    className={`service-panel group block ${s.bg} ${s.text} ${s.dots} rounded-2xl p-8 md:p-10 h-full min-h-[220px] flex flex-col justify-between relative`}
                  >
                    {/* Number + accent line */}
                    <div className="flex items-center gap-3 mb-auto">
                      <span className={`block w-5 h-px ${s.text === "text-white" ? "bg-white/30" : "bg-ink/20"} rounded`} />
                      <span className={`text-[11px] tracking-[0.1em] uppercase font-medium ${s.text === "text-white" ? "text-white/35" : "text-ink/30"}`}>
                        {s.num}
                      </span>
                    </div>

                    {/* Large decorative number */}
                    <div
                      className={`font-display text-[4rem] md:text-[5rem] leading-none tracking-[-0.06em] mb-3 mt-4 ${s.text === "text-white" ? "text-white/10" : "text-ink/08"}`}
                      aria-hidden
                    >
                      {s.num}
                    </div>

                    <div>
                      <h3 className={`font-display font-medium text-[20px] md:text-[22px] leading-[1.2] mb-3`}>
                        {s.title}
                      </h3>
                      <p className={`text-[14px] md:text-[14.5px] leading-[1.65] ${s.text === "text-white" ? "text-white/65" : "text-ink/65"}`}>
                        {s.body}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className={`mt-6 text-[13px] inline-flex items-center gap-1.5 ${s.text === "text-white" ? "text-white/45" : "text-ink/40"} group-hover:gap-2.5 transition-all`}>
                      Explore <span aria-hidden>→</span>
                    </div>
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

        {/* ══════════════════ TESTIMONIALS ══════════════════ */}
        <section className="bg-charcoal border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            {/* Section label */}
            <Reveal>
              <div className="flex items-center gap-3 mb-12">
                <span className="block w-6 h-px bg-lime" />
                <span className="text-[11.5px] text-white/40 tracking-[0.1em] uppercase font-medium">
                  What founders say
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <TestimonialCarousel />
            </Reveal>
          </div>
        </section>

        {/* ══════════════════ PARTNERS ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-12">
              <Reveal className="md:col-span-6">
                <h2 className="section-title max-w-[16ch]">
                  We&apos;re part of the climate community.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:pt-3 space-y-5 text-[15.5px] text-ink/75 leading-[1.65]">
                <p className="max-w-[44ch]">
                  The Climate Patent Collective works with the accelerators and venture funds
                  shaping climate tech. When you work with us, you get warm intros into the parts
                  of the ecosystem you actually need.
                </p>
                <p className="text-[14.5px] text-ink/85 max-w-[44ch] flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide"
                    style={{ background: "var(--lime)", color: "var(--ink)" }}
                  >
                    10% OFF
                  </span>
                  <span>
                    Referred by one of our partners?{" "}
                    <span className="text-rust font-medium">You get 10% off our flat fees.</span>
                  </span>
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

        {/* ══════════════════ FAQ ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 mb-12">
              <Reveal className="md:col-span-7">
                <h2 className="section-title max-w-[18ch]">
                  Answers to the questions founders ask first.
                </h2>
              </Reveal>
            </div>
            <FAQ />
          </div>
        </section>

        {/* ══════════════════ CLOSING CTA ══════════════════ */}
        <section className="relative overflow-hidden bg-charcoal border-t border-rule">
          {/* Subtle dot grid */}
          <div className="absolute inset-0 tech-dots-dark opacity-60 pointer-events-none" />
          {/* Lime accent ring */}
          <div
            className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(216,255,79,0.15)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(216,255,79,0.08)" }}
          />

          <div className={`${PAGE} relative z-10 py-28 md:py-40 text-center`}>
            <Reveal delay={150}>
              <h2 className="section-title text-white max-w-[16ch] mx-auto">
                Let&apos;s protect what you&apos;re building.
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 text-[16px] md:text-[17px] text-white/55 max-w-[52ch] mx-auto leading-[1.6]">
                Book a free 30-minute consultation. We&apos;ll talk through your technology and
                your roadmap, and you&apos;ll leave knowing whether we&apos;re the right fit.
                There&apos;s nothing on the meter.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-lime text-ink pl-6 pr-5 py-3.5 rounded-md text-[14px] font-semibold hover:bg-white transition-colors"
                >
                  Book a free consultation
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
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
