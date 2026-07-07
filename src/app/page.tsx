import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { TopoCluster } from "@/components/TopoCluster";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { IndustryTile } from "@/components/IndustryTile";

/* ─── Data ──────────────────────────────────────────────────────── */

// Order matters — CSS grid auto-places these to create the editorial layout:
// Energy (featured/tall) anchors col1 rows 1-2; Carbon anchors col1 rows 3-4;
// Climate AI (wide) becomes a full-width strip at the bottom.
const INDUSTRIES: { name: string; img: string; featured?: boolean; wide?: boolean }[] = [
  { name: "Energy Storage & Batteries",            img: "/ind-energy.jpg",    featured: true  },
  { name: "Solar & Renewable Energy",              img: "/ind-solar.jpg"                      },
  { name: "Hydrogen & Alternative Fuels",          img: "/ind-hydrogen.jpg"                   },
  { name: "Sustainable Transportation & EVs",      img: "/ind-transport.jpg"                  },
  { name: "Sustainable Aviation",                  img: "/ind-aviation.jpg"                   },
  { name: "Carbon Capture, Removal & Utilization", img: "/ind-carbon.jpg"                     },
  { name: "Green Buildings & HVAC",                img: "/ind-buildings.jpg"                  },
  { name: "Sustainable Agriculture & Ag-Tech",     img: "/ind-agtech.jpg"                     },
  { name: "Circular Economy & Recycling",          img: "/ind-circular.jpg"                   },
  { name: "Geothermal",                            img: "/ind-geothermal.jpg"                 },
  { name: "Climate AI & Software",                 img: "/ind-climateai.jpg"                  },
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
    border: false,
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
    border: false,
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
    border: true,
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
    border: false,
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
    border: true,
  },
];

const PILLARS = [
  {
    title: "Strategy first",
    body: "Your patent strategy should communicate your mission and what makes you different. Most firms apply strategy one patent at a time; we take a portfolio-level approach to make sure every patent application we file tells a coherent story about your technology and your business.",
    img: "/pillar-strategy.jpg",
    accentBg: "bg-citron",
    accentBar: "#B7D36B",
  },
  {
    title: "Flat fees, transparent budgets",
    body: "Every project is flat-fee. In your first strategy session, we map out your full portfolio budget for the next 18 months, so there are no billing surprises.",
    img: "/pillar-fees.jpg",
    accentBg: "bg-forest",
    accentBar: "#2F6154",
  },
  {
    title: "Fast turnarounds",
    body: "We turn around fully drafted patent applications within three weeks on average. We plan far ahead of major deadlines and milestones to ensure there are no emergencies or rushed jobs.",
    img: "/pillar-fast.jpg",
    accentBg: "bg-rust",
    accentBar: "#C96A43",
  },
  {
    title: "Climate fluency",
    body: "We've drafted patents on ocean-enhanced weathering, direct air capture, heat pumps, short-haul transport electric drones, EV charging protocols, precision ag systems, and a lot more. You won't spend your first call explaining why your technology is important.",
    img: "/pillar-climate.jpg",
    accentBg: "bg-moss",
    accentBar: "#7FAE6A",
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
        <section className="relative bg-bg overflow-hidden">
          {/* Mobile: graphic above text */}
          <div
            className="md:hidden relative w-full overflow-hidden"
            style={{ height: "60vw" }}
            aria-hidden
          >
            <Image
              src="/hero-abstract.png"
              alt=""
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "center right" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-14"
              style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
            />
          </div>

          {/* Desktop: absolutely-positioned cluster */}
          <div className="hidden md:block">
            <TopoCluster />
          </div>

          <div
            className={`${PAGE} relative z-10 flex flex-col justify-center pt-4 pb-14 md:pt-[7rem] md:pb-[6rem] md:min-h-[90vh]`}
          >
            <div className="max-w-full md:max-w-[46%]">
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
                  <span className="text-rust font-bold">100+</span> patents for{" "}
                  <span className="text-rust font-bold">40+</span> climate startups since 2023.
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
                    Most patent firms bill by the hour. They treat climate startups the same way
                    they&apos;d treat any other corporate client, and you can feel it when you get
                    the bill. At the end of the month, you get an expensive and unpredictable
                    invoice that punishes you every time you ask for help.
                  </p>
                  <p>
                    We started the Climate Patent Collective in 2023 because founders working on
                    climate should have access to strategic, approachable, and mission-aligned
                    patent representation.
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
            {/* 2×2 editorial grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="pillar-card">
                  <div className="h-[3px] rounded-t-2xl" style={{ background: p.accentBar }} />
                  <div className="relative w-full overflow-hidden pillar-card-img">
                    <Image
                      src={p.img}
                      alt=""
                      width={1200}
                      height={700}
                      className="w-full h-full object-cover"
                      aria-hidden
                    />
                  </div>
                  <div className="h-px mx-6" style={{ background: "var(--rule)" }} />
                  <div className="px-6 py-7">
                    <h3 className="font-display font-medium text-[20px] leading-[1.2] text-ink mb-3">{p.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-ink/65">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
              >
                About us
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════ SERVICES ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title max-w-[22ch] mb-12">
                Everything you need to build a defensible portfolio.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-12 gap-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.href} delay={i * 70} className={s.span}>
                  <div
                    className={`service-panel ${s.bg} ${s.text} ${s.dots} ${s.border ? "border border-rule" : ""} rounded-2xl p-8 md:p-10 h-full min-h-[200px] flex flex-col gap-4 relative`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`block w-5 h-px ${s.text === "text-white" ? "bg-white/30" : "bg-ink/20"} rounded`} />
                      <span className={`text-[11px] tracking-[0.1em] uppercase font-medium ${s.text === "text-white" ? "text-white/35" : "text-ink/30"}`}>
                        {s.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-[20px] md:text-[22px] leading-[1.2] mb-3">
                        {s.title}
                      </h3>
                      <p className={`text-[14px] md:text-[14.5px] leading-[1.65] ${s.text === "text-white" ? "text-white/65" : "text-ink/65"}`}>
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
              >
                Explore all services
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════ TESTIMONIALS ══════════════════ */}
        <section className="bg-charcoal border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
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
            <Reveal delay={240}>
              <div className="mt-12">
                <Link
                  href="/case-studies"
                  className="group inline-flex items-center gap-2.5 bg-white/10 text-white pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
                >
                  See case studies
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
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

            <div className="industries-grid">
              {INDUSTRIES.map((ind) => (
                <IndustryTile
                  key={ind.name}
                  title={ind.name}
                  image={ind.img}
                  featured={ind.featured}
                  wide={ind.wide}
                />
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/industries"
                className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
              >
                See all industries
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </div>
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
                <p className="text-[14px] text-ink/70 max-w-[44ch]">
                  Referred by one of our partners?{" "}
                  <span className="text-rust font-medium">You get 10% off our flat fees.</span>
                </p>
                <Link
                  href="/partners"
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
            style={{ border: "1px solid rgba(183,211,107,0.18)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(183,211,107,0.10)" }}
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
                  className="group inline-flex items-center gap-2.5 bg-lime text-ink pl-6 pr-5 py-3.5 rounded-md text-[14px] font-medium hover:bg-white transition-colors"
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
