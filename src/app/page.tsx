import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { RotatingWord } from "@/components/RotatingWord";
import { ContourBackground } from "@/components/ContourBackground";
import { LineDraw } from "@/components/LineDraw";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";

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
  { name: "Ulysses", slug: "ulysses", sector: "Maritime robotics & physical AI" },
  { name: "Aquaporo", slug: "aquaporo", sector: "Atmospheric water harvesting" },
  { name: "Scaled Carbon", slug: "scaled-carbon", sector: "Ocean MRV for carbon removal" },
];

const SERVICES = [
  {
    n: "01",
    title: "Patent Strategy & Portfolio Planning",
    body: "We figure out what to file and what to skip.",
    href: "/services/patent-strategy",
  },
  {
    n: "02",
    title: "Patent Drafting",
    body: "Provisionals, non-provisionals, PCT applications, continuations, and more.",
    href: "/services/patent-drafting",
  },
  {
    n: "03",
    title: "Patent Prosecution & Office Actions",
    body: "USPTO office actions, examiner interviews, international reports, appeals, and more.",
    href: "/services/patent-prosecution",
  },
];

const TESTIMONIALS = [
  {
    q: "Alex is exceptionally talented and has been amazing to work with over the years. He played an instrumental role in helping to build up my company's patent portfolio from startup phase through post-acquisition.",
    name: "Joel Ong",
    title: "VP Technology and Software (Production), Stratasys. Former Founder & CTO, Origin.",
  },
  {
    q: "Alex is easy to work with and did a great job of transforming our team's ideation into cohesive, unique, and valuable intellectual property.",
    name: "Johnny Stefanski",
    title: "Head of Operations, Zitara Technologies.",
  },
  {
    q: "Alex helped with a number of ZaiNar patents and was great to work with. I highly recommend working with him.",
    name: "Daniel Jacker",
    title: "CEO, ZaiNar.",
  },
];

const PARTNERS = [
  "Lowercarbon",
  "Third Derivative",
  "gener8tor",
  "Cool Climate Collective",
  "4ward.vc",
  "Enduring Planet",
  "Riffle",
  "Anthropocene",
];

const PILLARS = [
  {
    title: "Strategy first.",
    body: "Your patent plan should match your fundraising plan and your product roadmap. Most firms start with what's technically patentable. We start with what you actually need to protect, and what your next investor is going to ask about it.",
  },
  {
    title: "Flat fees, transparent budgets.",
    body: "Every project is a flat fee. In your first strategy session we map out your full portfolio budget for the next 18 months, so there are no billing surprises in the middle of a fundraise.",
  },
  {
    title: "Fast turnarounds.",
    body: "We can have a provisional drafted and filed in three weeks. Non-provisionals run on a schedule that matches your fundraise. If you need something on the books before a board meeting, tell us and we'll work backward from there.",
  },
  {
    title: "Climate fluency.",
    body: "We've drafted patents on solid-state batteries, direct air capture, perovskite solar, AD biogas, electrolyzers, EV charging protocols, precision ag systems, and a lot more.",
  },
];

export default function Home() {
  return (
    <>
      <ContourBackground />
      <Nav />
      <main className="flex-1 relative">
        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-6 md:px-12 pt-28 md:pt-40 pb-24 md:pb-36">
            <Reveal>
              <h1 className="font-display text-[48px] sm:text-[72px] md:text-[112px] lg:text-[132px] leading-[0.98] tracking-[-0.025em] max-w-[15ch]">
                The only patent agency built for <RotatingWord />.
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-ink text-cream pl-6 pr-5 py-3.5 text-[14px] hover:bg-orange transition-colors"
                >
                  Book a free consultation
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
                <Link
                  href="/case-studies"
                  className="text-[14px] inline-flex items-center gap-2 border-b border-ink/40 pb-0.5 hover:border-orange hover:text-orange transition-colors"
                >
                  See case studies <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* STATS */}
          <div className="mx-auto max-w-[1320px] px-6 md:px-12 pb-20">
            <LineDraw />
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 py-12">
                <Stat num="100" suffix="patents prosecuted since 2023" />
                <Stat num="40" suffix="climate startups served and growing" />
              </div>
            </Reveal>
            <LineDraw />
          </div>
        </section>

        {/* LOGO WALL */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-16 md:py-24">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/55 mb-10">
              Trusted by climate founders backed by
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-baseline gap-x-12 gap-y-6">
              {PARTNERS.map((p, i) => (
                <span key={p} className="font-display text-2xl md:text-[28px] text-ink/65 hover:text-ink transition-colors">
                  {p}
                  {i < PARTNERS.length - 1 && (
                    <span className="text-ink/25 ml-12" aria-hidden>·</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* THE PROBLEM */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-40">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <Reveal className="md:col-span-7">
              <h2 className="font-display text-[44px] md:text-[80px] leading-[1.02] tracking-[-0.02em]">
                Big law wasn&apos;t <br className="hidden md:block" /> built for you.
              </h2>
            </Reveal>
            <Reveal delay={200} className="md:col-span-5 md:pt-6">
              <div className="text-[17px] md:text-[18px] leading-[1.6] text-ink/80 space-y-6 max-w-[44ch]">
                <p>
                  Most patent firms bill by the hour. They treat a resource-strapped climate
                  startup the same way they treat Apple, and you can feel it in your invoice. By
                  the time you&apos;ve spent $50K on a portfolio you don&apos;t fully understand,
                  you&apos;ve also missed two product pivots and a fundraise.
                </p>
                <p>
                  We started the Climate Patent Collective in 2023 because the founders working on
                  climate shouldn&apos;t have to choose between filing their patents properly and
                  being able to make payroll.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24">
          <LineDraw className="mb-20" />
          <div className="grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-12 mb-12">
              <h2 className="font-display text-[40px] md:text-[64px] leading-[1.04] tracking-[-0.02em] max-w-[20ch]">
                What you get when you work with us.
              </h2>
            </Reveal>
            <div className="md:col-span-12 grid md:grid-cols-2 gap-x-20 gap-y-16">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <Pillar n={`0${i + 1}`} title={p.title} body={p.body} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <LineDraw className="mb-20" />
          <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
            <Reveal className="md:col-span-7">
              <h2 className="font-display text-[40px] md:text-[64px] leading-[1.04] tracking-[-0.02em] max-w-[20ch]">
                Patents for the technologies that matter.
              </h2>
            </Reveal>
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-[17px] text-ink/70 max-w-[34ch]">We work across the climate stack.</p>
            </Reveal>
          </div>

          <ol className="border-t border-ink/20">
            {INDUSTRIES.map((name, i) => (
              <li key={name} className="border-b border-ink/20 group">
                <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_80px] items-center gap-6 py-5 md:py-7 transition-colors group-hover:bg-ink/[0.02]">
                  <span className="font-mono text-[12px] text-ink/45 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[24px] md:text-[34px] leading-tight">
                    {name}
                  </span>
                  <span className="hidden md:block font-mono text-[11px] text-ink/40 tracking-wider text-right">
                    {String(i + 1).padStart(2, "0")} / {INDUSTRIES.length}
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link
              href="/industries"
              className="text-[14px] inline-flex items-center gap-2 border-b border-ink/40 pb-0.5 hover:border-orange hover:text-orange transition-colors"
            >
              See all industries <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <LineDraw className="mb-20" />
          <Reveal>
            <h2 className="font-display text-[40px] md:text-[64px] leading-[1.04] tracking-[-0.02em] max-w-[20ch] mb-16">
              Hear from real climate tech founders.
            </h2>
          </Reveal>

          <ol className="border-t border-ink/20">
            {CASE_STUDIES.map((cs, i) => (
              <li key={cs.slug} className="border-b border-ink/20">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_auto_60px] items-center gap-6 py-8 md:py-10 group hover:bg-ink/[0.02] transition-colors"
                >
                  <span className="font-mono text-[12px] text-ink/45 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[28px] md:text-[42px] leading-tight">
                    {cs.name}
                  </span>
                  <span className="hidden md:block text-[14px] text-ink/60">{cs.sector}</span>
                  <span className="hidden md:inline-flex justify-end text-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link
              href="/case-studies"
              className="text-[14px] inline-flex items-center gap-2 border-b border-ink/40 pb-0.5 hover:border-orange hover:text-orange transition-colors"
            >
              See all case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <LineDraw className="mb-20" />
          <Reveal>
            <h2 className="font-display text-[40px] md:text-[64px] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-20">
              Everything you need to build a defensible portfolio.
            </h2>
          </Reveal>
          <div className="border-t border-ink/20">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid md:grid-cols-[80px_5fr_6fr_60px] items-start md:items-center gap-6 py-10 border-b border-ink/20 hover:bg-ink/[0.02] transition-colors"
              >
                <span className="font-mono text-[12px] text-ink/45 tracking-wider">{s.n}</span>
                <span className="font-display text-[26px] md:text-[34px] leading-tight">
                  {s.title}
                </span>
                <p className="text-[16px] md:text-[17px] text-ink/75 max-w-[50ch]">{s.body}</p>
                <span className="hidden md:inline-flex justify-end text-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/services"
              className="text-[14px] inline-flex items-center gap-2 border-b border-ink/40 pb-0.5 hover:border-orange hover:text-orange transition-colors"
            >
              Explore all services <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <LineDraw className="mb-20" />
          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/45 mb-6">
                    Testimonial / 0{i + 1}
                  </div>
                  <blockquote className="font-display text-[22px] md:text-[26px] leading-[1.3]">
                    <span className="text-orange italic">&ldquo;</span>
                    {t.q}
                    <span className="text-orange italic">&rdquo;</span>
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-ink/15 text-[14px]">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-ink/60 mt-1">{t.title}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <LineDraw className="mb-20" />
          <div className="grid md:grid-cols-12 gap-12">
            <Reveal className="md:col-span-7">
              <h2 className="font-display text-[40px] md:text-[64px] leading-[1.04] tracking-[-0.02em] max-w-[16ch]">
                We&apos;re part of the climate community.
              </h2>
            </Reveal>
            <Reveal delay={200} className="md:col-span-5 md:pt-4 space-y-6 text-[17px] text-ink/80">
              <p className="max-w-[44ch]">
                The Climate Patent Collective works with the accelerators and venture funds shaping
                climate tech. When you work with us, you get warm intros into the parts of the
                ecosystem you actually need.
              </p>
              <p className="text-[16px]">
                Referred by one of our partners?{" "}
                <span className="text-orange">You get 10% off our flat fees.</span>
              </p>
              <Link
                href="/for-partners"
                className="text-[14px] inline-flex items-center gap-2 border-b border-ink/40 pb-0.5 hover:border-orange hover:text-orange transition-colors"
              >
                Become a partner <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-12 py-24 md:py-32">
          <LineDraw className="mb-20" />
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <Reveal className="md:col-span-7">
              <h2 className="font-display text-[40px] md:text-[64px] leading-[1.04] tracking-[-0.02em] max-w-[18ch]">
                Answers to the questions founders ask first.
              </h2>
            </Reveal>
          </div>
          <FAQ />
        </section>

        {/* CLOSING CTA */}
        <section className="relative py-32 md:py-48">
          <div className="mx-auto max-w-[1320px] px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-display text-[56px] md:text-[112px] lg:text-[140px] leading-[0.98] tracking-[-0.025em] max-w-[16ch] mx-auto">
                Let&apos;s protect what you&apos;re building.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-[17px] md:text-[19px] text-ink/75 max-w-[56ch] mx-auto">
                Book a free 30-minute consultation. We&apos;ll talk through your technology and your
                roadmap, and you&apos;ll leave knowing whether we&apos;re the right fit.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-14">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-ink text-cream pl-7 pr-6 py-4 text-[14px] hover:bg-orange transition-colors"
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

function Stat({ num, suffix }: { num: string; suffix: string }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <span className="font-display text-[88px] md:text-[120px] leading-[0.9] tracking-[-0.03em]">
          {num}
        </span>
        <span className="font-display text-[44px] md:text-[64px] leading-none text-orange mt-1">
          +
        </span>
      </div>
      <div className="mt-4 text-[15px] text-ink/70 max-w-[28ch]">{suffix}</div>
    </div>
  );
}

function Pillar({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-[60px_1fr] gap-6">
      <span className="font-mono text-[12px] text-ink/45 tracking-wider pt-2">{n}</span>
      <div>
        <div className="font-display text-[26px] md:text-[32px] leading-[1.15] mb-4">{title}</div>
        <p className="text-[16px] md:text-[17px] text-ink/75 max-w-[44ch] leading-[1.6]">{body}</p>
      </div>
    </div>
  );
}
