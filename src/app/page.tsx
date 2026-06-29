import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { RotatingWord } from "@/components/RotatingWord";
import { TopoLines } from "@/components/TopoLines";
import { SectionMarker } from "@/components/SectionMarker";
import { FAQ } from "@/components/FAQ";

const INDUSTRIES = [
  ["Energy Storage & Batteries", "energy-storage"],
  ["Solar & Renewable Energy", "solar"],
  ["Carbon Capture, Removal & Utilization", "carbon-capture"],
  ["Hydrogen & Alternative Fuels", "hydrogen"],
  ["Sustainable Transportation & EVs", "sustainable-transportation"],
  ["Sustainable Aviation", "sustainable-aviation"],
  ["Green Buildings & HVAC", "green-buildings"],
  ["Sustainable Agriculture & Ag-Tech", "sustainable-agriculture"],
  ["Circular Economy & Recycling", "circular-economy"],
  ["Geothermal", "geothermal"],
  ["Climate AI & Software", "climate-ai"],
];

const CASE_STUDIES = [
  {
    name: "Ulysses",
    slug: "ulysses",
    sector: "Maritime robotics & physical AI",
    stage: "Engaged at seed",
    outcome:
      "Built the portfolio that supported a $38M Series A from a16z. Two international applications, both with positive search reports.",
  },
  {
    name: "Aquaporo",
    slug: "aquaporo",
    sector: "Atmospheric water harvesting",
    stage: "Engaged at pre-seed",
    outcome:
      "Three provisionals filed in quick succession before the seed raise. Allowable subject matter on conversion.",
  },
  {
    name: "Scaled Carbon",
    slug: "scaled-carbon",
    sector: "Ocean MRV for carbon removal",
    stage: "Engaged at early stage",
    outcome:
      "A single comprehensive PCT application on a small budget. Entirely positive international search report.",
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
    body: "USPTO office actions, examiner interviews, international reports, and appeals. We treat prosecution as strategy work — part of why allowance rates climb after switching to us.",
    href: "/services/patent-prosecution",
  },
];

const TESTIMONIALS = [
  {
    q: "Alex is exceptionally talented and has been amazing to work with over the years. He played an instrumental role in helping to build up my company's patent portfolio from startup phase through post-acquisition.",
    name: "Joel Ong",
    title: "VP Technology and Software (Production) at Stratasys. Former Founder & CTO at Origin.",
  },
  {
    q: "Alex is easy to work with and did a great job of transforming our team's ideation into cohesive, unique, and valuable intellectual property.",
    name: "Johnny Stefanski",
    title: "Head of Operations at Zitara Technologies.",
  },
  {
    q: "Alex helped with a number of ZaiNar patents and was great to work with. I highly recommend working with him.",
    name: "Daniel Jacker",
    title: "CEO of ZaiNar.",
  },
];

const PARTNER_LOGOS = [
  "Lowercarbon",
  "Third Derivative",
  "gener8tor",
  "Cool Climate Collective",
  "4ward.vc",
  "Enduring Planet",
  "Riffle",
  "Anthropocene",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <TopoLines />
          <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="section-marker mb-10">§ 01 / climate tech, patented</div>
            <h1 className="font-display text-[44px] sm:text-[64px] md:text-[84px] leading-[1.04] tracking-[-0.02em] max-w-[14ch]">
              Patents built for <RotatingWord />.
            </h1>
            <p className="mt-8 max-w-[60ch] text-lg md:text-[19px] leading-[1.55] text-ink/80">
              We&apos;re the only patent agency built for climate tech. You&apos;ll know what your
              full portfolio is going to cost before we draft a single application, and we can have
              your first provisional filed in three weeks.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="bg-orange text-cream px-6 py-3 rounded-[4px] text-sm hover:brightness-110 transition"
              >
                Book a free consultation
              </Link>
              <Link
                href="/case-studies"
                className="text-sm inline-flex items-center gap-2 hover:text-orange transition-colors"
              >
                See case studies <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* STATS BAR */}
          <div className="relative border-y border-ink/15 bg-cream">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <Stat
                label="Patents prosecuted"
                num="100"
                plus
                suffix="since 2023"
              />
              <Stat
                label="Climate startups served"
                num="40"
                plus
                suffix="and growing"
              />
            </div>
          </div>
        </section>

        {/* LOGO WALL */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-20">
          <p className="font-mono text-xs uppercase tracking-wider text-ink/55 mb-8">
            Trusted by climate founders backed by
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 items-center">
            {PARTNER_LOGOS.map((p) => (
              <div
                key={p}
                className="font-display text-xl md:text-2xl text-ink/60 hover:text-ink transition-colors"
              >
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="02" label="the problem" />
          <div className="grid md:grid-cols-12 gap-10">
            <h2 className="md:col-span-5 font-display text-4xl md:text-5xl leading-[1.1]">
              Big law wasn&apos;t built for you.
            </h2>
            <div className="md:col-span-6 md:col-start-7 text-lg leading-[1.6] text-ink/80 space-y-6 max-w-[60ch]">
              <p>
                Most patent firms bill by the hour. They treat a resource-strapped climate startup
                the same way they treat Apple, and you can feel it in your invoice. By the time
                you&apos;ve spent $50K on a portfolio you don&apos;t fully understand, you&apos;ve
                also missed two product pivots and a fundraise.
              </p>
              <p>
                We started the Climate Patent Collective in 2022 because the founders working on
                climate shouldn&apos;t have to choose between filing their patents properly and
                being able to make payroll.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CLIMATE TEAMS CHOOSE US */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="03" label="why climate teams choose us" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-[18ch] mb-16">
            What you get when you work with us.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            <Pillar
              title="Strategy first."
              body="Your patent plan should match your fundraising plan and your product roadmap. Most firms start with what's technically patentable. We start with what you actually need to protect, and what your next investor is going to ask about it."
            />
            <Pillar
              title="Flat fees, transparent budgets."
              body="Every project is a flat fee. In your first strategy session we map out your full portfolio budget for the next 18 months, so there are no billing surprises in the middle of a fundraise."
            />
            <Pillar
              title="Fast turnarounds."
              body="We can have a provisional drafted and filed in three weeks. Non-provisionals run on a schedule that matches your fundraise. If you need something on the books before a board meeting, tell us and we'll work backward from there."
            />
            <Pillar
              title="Climate fluency."
              body="We've drafted patents on solid-state batteries, direct air capture, perovskite solar, AD biogas, electrolyzers, EV charging protocols, precision ag systems, and a lot more. You won't spend your first call explaining what your technology does."
            />
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="04" label="industries" />
          <div className="flex items-end justify-between flex-wrap gap-8 mb-12">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-[20ch]">
              Patents for the technologies that matter.
            </h2>
            <Link
              href="/industries"
              className="text-sm hover:text-orange transition-colors inline-flex items-center gap-2"
            >
              See all industries <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/15">
            {INDUSTRIES.map(([name, slug]) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="group relative border-r border-b border-ink/15 p-6 md:p-8 hover:bg-ink/[0.02] transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-xl md:text-2xl leading-snug">{name}</span>
                  <span className="text-orange opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="05" label="case studies" />
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <h2 className="md:col-span-7 font-display text-4xl md:text-5xl leading-[1.1] max-w-[18ch]">
              Real founders. Real portfolios.
            </h2>
            <p className="md:col-span-5 text-lg text-ink/70 self-end max-w-[40ch]">
              A testimonial is a sentence. A case study is the whole story.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group border border-ink/15 p-7 hover:border-ink/30 transition-colors relative bg-cream"
              >
                <div className="absolute bottom-0 left-0 right-0 h-px bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink/55 mb-6">
                  {cs.sector} · {cs.stage}
                </div>
                <div className="font-display text-2xl mb-4">{cs.name}</div>
                <p className="text-sm text-ink/75 italic leading-relaxed">{cs.outcome}</p>
                <div className="mt-8 text-sm inline-flex items-center gap-2 group-hover:text-orange transition-colors">
                  Read case study <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/case-studies"
              className="text-sm hover:text-orange transition-colors inline-flex items-center gap-2"
            >
              See all case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="06" label="services" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-[20ch] mb-16">
            Everything you need to build a defensible portfolio.
          </h2>
          <div className="border-t border-ink/15">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid md:grid-cols-12 gap-8 py-10 border-b border-ink/15 hover:bg-ink/[0.02] -mx-6 md:-mx-10 px-6 md:px-10 transition-colors"
              >
                <div className="md:col-span-5 font-display text-2xl md:text-3xl leading-snug">
                  {s.title}
                </div>
                <p className="md:col-span-6 text-ink/75 max-w-[60ch]">{s.body}</p>
                <span className="md:col-span-1 text-orange md:text-right md:self-center opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm hover:text-orange transition-colors inline-flex items-center gap-2"
            >
              Explore all services <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="07" label="in their words" />
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="border-t border-ink/15 pt-8">
                <blockquote className="font-display text-xl md:text-2xl leading-snug italic text-ink/90">
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-ink/60 mt-1">{t.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="08" label="partners" />
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-6">
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
                We&apos;re part of the climate community.
              </h2>
              <p className="text-lg text-ink/75 max-w-[50ch]">
                The Climate Patent Collective works with the accelerators and venture funds shaping
                climate tech. When you work with us, you get warm intros into the parts of the
                ecosystem you actually need.
              </p>
              <p className="mt-6 text-base text-ink/75">
                Referred by one of our partners?{" "}
                <span className="text-orange">You get 10% off our flat fees.</span>
              </p>
              <Link
                href="/for-partners"
                className="mt-8 inline-flex items-center gap-2 text-sm hover:text-orange transition-colors"
              >
                Become a partner <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-x-8 gap-y-6 content-start">
              {PARTNER_LOGOS.map((p) => (
                <div key={p} className="font-display text-lg text-ink/55">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-24">
          <SectionMarker id="09" label="frequently asked" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-16 max-w-[20ch]">
            Answers to the questions founders ask first.
          </h2>
          <FAQ />
        </section>

        {/* CLOSING CTA */}
        <section className="relative overflow-hidden">
          <TopoLines />
          <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 py-32 text-center">
            <div className="section-marker mb-10">§ 10 / let&apos;s talk</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-[-0.02em] max-w-[18ch] mx-auto">
              Let&apos;s protect what you&apos;re building.
            </h2>
            <p className="mt-8 text-lg text-ink/75 max-w-[58ch] mx-auto">
              Book a free 30-minute consultation. We&apos;ll talk through your technology and your
              roadmap, and you&apos;ll leave knowing whether we&apos;re the right fit. There&apos;s
              nothing on the meter.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex bg-orange text-cream px-7 py-3.5 rounded-[4px] text-sm hover:brightness-110 transition"
              >
                Book a free consultation →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({
  label,
  num,
  plus,
  suffix,
}: {
  label: string;
  num: string;
  plus?: boolean;
  suffix: string;
}) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-wider text-ink/55 mb-3">{label}</div>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[56px] md:text-[72px] leading-none">
          {num}
          {plus && <span className="text-orange">+</span>}
        </span>
        <span className="text-sm text-ink/65">{suffix}</span>
      </div>
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-[26px] leading-snug mb-4">{title}</div>
      <p className="text-ink/75 max-w-[55ch]">{body}</p>
    </div>
  );
}
