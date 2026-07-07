import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const SERVICES = [
  {
    title: "Patent Strategy & Portfolio Planning",
    body: "Figure out what to file and what to skip, with an 18-month budget you can actually plan around.",
    href: "/services/patent-strategy",
    img: "/svc-strategy.jpg",
    accent: "#B7D36B",
  },
  {
    title: "Provisional Patent Applications",
    body: "A fast, affordable way to establish a priority date — filed to a standard that holds up internationally.",
    href: "/services/provisional-patent-application",
    img: "/svc-provisional.jpg",
    accent: "#7FAE6A",
  },
  {
    title: "Non-Provisional Patent Applications",
    body: "The full patent application. Drafted with prosecution in mind, on a timeline that matches your fundraise.",
    href: "/services/non-provisional-patent-application",
    img: "/svc-nonprov.jpg",
    accent: "#2F6154",
  },
  {
    title: "PCT (International) Patent Applications",
    body: "File once, preserve your right to file in over 150 countries. We handle the strategy and the paperwork.",
    href: "/services/pct-international-patent",
    img: "/svc-pct.jpg",
    accent: "#AFCFE3",
  },
  {
    title: "Patent Prosecution & Office Actions",
    body: "USPTO responses, examiner interviews, international reports, and appeals.",
    href: "/services/patent-prosecution",
    img: "/svc-prosecution.jpg",
    accent: "#C96A43",
  },
];

const INCLUDED = [
  "All consultations, drafting, internal and external review",
  "Patent drawings",
  "Information disclosure statements (IDSs)",
  "USPTO filing coordination",
  "USPTO fees",
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative bg-bg overflow-hidden" style={{ minHeight: "56vh" }}>
          {/* Hero image — right side */}
          <div className="absolute inset-y-0 right-0 w-full md:w-[55%] z-0 pointer-events-none select-none overflow-hidden" style={{ background: "var(--bg)" }}>
            <div className="absolute inset-0">
              <Image
                src="/svc-hero.jpg"
                alt=""
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Animated nodes */}
            <svg
              viewBox="0 0 800 600"
              className="absolute inset-0 w-full h-full"
              style={{ overflow: "visible", pointerEvents: "none" }}
              aria-hidden
            >
              <circle className="svc-node svc-node-1" r="5" />
              <circle className="svc-node svc-node-2" r="3.5" />
              <circle className="svc-node svc-node-3" r="4" />
              <circle className="svc-node svc-node-4" r="2.5" />
              <circle
                cx="420" cy="280" r="80"
                fill="none"
                stroke="rgba(17,17,17,0.18)"
                strokeWidth="0.75"
                className="svc-pulse"
              />
            </svg>

            {/* Left fade */}
            <div
              className="absolute inset-y-0 left-0 w-3/4"
              style={{
                background:
                  "linear-gradient(to right, var(--bg) 0%, var(--bg) 20%, color-mix(in srgb, var(--bg) 55%, transparent) 60%, transparent 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-32"
              style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
            />
          </div>

          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-bg/55 md:hidden pointer-events-none z-[1]" />

          <div
            className={`${PAGE} relative z-10 flex flex-col justify-center`}
            style={{ minHeight: "56vh", paddingTop: "6rem", paddingBottom: "4rem" }}
          >
            <div className="max-w-[50%] md:max-w-[44%]">
              <Reveal>
                <h1 className="font-display font-normal leading-[0.95] tracking-[-0.045em]"
                    style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}>
                  Patent services for climate startups.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="large-body mt-7 text-ink/65 max-w-[36ch] leading-[1.5]">
                  Everything you need to build a defensible portfolio, priced for a startup balance sheet.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
                  >
                    Book a free consultation
                    <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </Link>
                  <Link href="/pricing" className="text-[14.5px] inline-flex items-center gap-1.5 sage-underline pb-0.5">
                    See pricing <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <style>{`
            .svc-node { fill: #2478ff; opacity: 0.82; }
            .svc-node-1 {
              offset-path: path("M300 400 C420 320 560 290 700 260");
              animation: svcMove 14s linear infinite;
            }
            .svc-node-2 {
              fill: #B7D36B;
              offset-path: path("M200 480 C350 410 500 370 660 350");
              animation: svcMove 20s linear infinite;
            }
            .svc-node-3 {
              fill: #C96A43;
              offset-path: path("M400 200 C520 240 650 255 780 240");
              animation: svcMove 26s linear infinite;
            }
            .svc-node-4 {
              fill: #2478ff; opacity: 0.5;
              offset-path: path("M150 560 C300 510 450 490 600 470");
              animation: svcMove 32s linear infinite;
            }
            .svc-pulse {
              transform-origin: 420px 280px;
              animation: svcPulse 9s ease-in-out infinite;
            }
            @keyframes svcMove {
              from { offset-distance: 0%; }
              to   { offset-distance: 100%; }
            }
            @keyframes svcPulse {
              0%, 100% { transform: scale(1);    opacity: 0.12; }
              50%       { transform: scale(1.07); opacity: 0.28; }
            }
          `}</style>
        </section>

        {/* ══════════════════ INTRO ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[14ch]">
                  Every service is a flat fee.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7 md:pt-3">
                <div
                  className="text-[16px] md:text-[17px] leading-[1.7] text-ink/72 space-y-5 max-w-[56ch] pl-7"
                  style={{ borderLeft: "2px solid var(--lime)" }}
                >
                  <p>
                    We work with climate tech startups at every stage, from your first provisional
                    through acquisition due diligence support. Most of our clients start with a
                    strategy session and a single provisional, and expand their portfolio from
                    there. We excel at deriving maximum value from the budget you have available.
                  </p>
                  <p>
                    Our flat fees are priced to enable us to provide unlimited strategic guidance
                    to our clients. By making sure our fees are truly all-inclusive, you
                    don&apos;t have to worry about a surprise bill when you reach out to us.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════ SERVICES ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title max-w-[22ch] mb-12">
                What we do.
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICES.map((s, i) => (
                <Reveal key={s.href} delay={i * 70}>
                  <Link href={s.href} className="pillar-card group block h-full">
                    <div className="h-[3px] rounded-t-2xl" style={{ background: s.accent }} />
                    {/* Square image container */}
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                      <Image
                        src={s.img}
                        alt=""
                        width={800}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        aria-hidden
                      />
                    </div>
                    <div className="h-px mx-6" style={{ background: "var(--rule)" }} />
                    <div className="px-5 py-6 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display font-medium text-[16px] leading-[1.25] text-ink mb-2">
                          {s.title}
                        </h3>
                        <p className="text-[13px] leading-[1.65] text-ink/60">{s.body}</p>
                      </div>
                      <span className="shrink-0 mt-0.5 text-ink/25 group-hover:text-ink group-hover:translate-x-1 inline-block transition-all text-[13px]">→</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ PRICING CALLOUT ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start">

              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[14ch] mb-6">
                  We publish our flat fees up front.
                </h2>
                <p className="text-[15px] text-ink/60 leading-[1.65] max-w-[36ch] mb-8">
                  So you can plan around them before you even talk to us.
                </p>
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
                >
                  See pricing
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
              </Reveal>

              <Reveal delay={180} className="md:col-span-6 md:col-start-7 space-y-8 md:pt-3">
                <div className="text-[16px] leading-[1.7] text-ink/72 space-y-5">
                  <p>
                    Most other patent firms in the country bill by the hour. We don&apos;t.
                    Every project we take on is priced as a flat fee, and in your first strategy
                    session, we map out an 18-month portfolio budget that plans around
                    fundraises, grants, and product milestones.
                  </p>
                </div>

                {/* What's included */}
                <div>
                  <p className="text-[11px] tracking-[0.08em] uppercase text-ink/40 mb-5 font-medium">
                    What&apos;s included in every flat fee
                  </p>
                  <ul className="space-y-3">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink/75 leading-[1.5]">
                        <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-ink/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[13px] text-ink/40 leading-[1.6]">
                    Any optional official fees not included in our standard fees are passed through at cost.
                  </p>
                </div>

                {/* Pricing comparison */}
                <p className="text-[15px] text-ink/70 leading-[1.65]">
                  We price our work to come in roughly{" "}
                  <span className="text-ink font-medium">60% below typical big law rates</span>{" "}
                  and{" "}
                  <span className="text-ink font-medium">40% below typical boutique firms</span>{" "}
                  serving venture-backed startups.
                </p>
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
          <div className={`${PAGE} relative z-10 py-28 md:py-40 text-center`}>
            <Reveal delay={150}>
              <h2 className="section-title text-white max-w-[16ch] mx-auto">
                Ready to build your portfolio?
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 text-[16px] md:text-[17px] text-white/55 max-w-[48ch] mx-auto leading-[1.6]">
                Book a free 30-minute consultation. We&apos;ll map out exactly what you need
                and what it will cost — before you commit to anything.
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
