import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const CASE_STUDIES = [
  { name: "Aquaporo",      slug: "aquaporo",      sector: "Atmospheric water harvesting",    img: "/cs-aquaporo.png"      },
  { name: "BikeOn",        slug: "bikeon",         sector: "E-mobility & micromobility",      img: "/cs-bikeon.png"        },
  { name: "Kawa Project",  slug: "kawa",           sector: "Sustainable food & ingredients",  img: "/cs-kawa.png"          },
  { name: "Scaled Carbon", slug: "scaled-carbon",  sector: "Ocean MRV for carbon removal",    img: "/cs-scaled-carbon.png" },
  { name: "Ulysses",       slug: "ulysses",        sector: "Maritime robotics & physical AI", img: "/cs-ulysses.png"       },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative bg-bg overflow-hidden" style={{ minHeight: "56vh" }}>
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[55%] z-0 pointer-events-none select-none overflow-hidden"
            style={{ background: "var(--bg)" }}
          >
            <div className="absolute inset-0">
              <Image
                src="/cs-hero.jpg"
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
              style={{ overflow: "hidden", pointerEvents: "none" }}
              aria-hidden
            >
              <circle className="cs-node cs-node-1" r="5" />
              <circle className="cs-node cs-node-2" r="3" />
              <circle className="cs-node cs-node-3" r="4" />
              <circle
                cx="420" cy="280" r="90"
                fill="none"
                stroke="rgba(17,17,17,0.12)"
                strokeWidth="0.75"
                className="cs-pulse"
              />
            </svg>
            <div
              className="absolute inset-y-0 left-0 w-3/4"
              style={{
                background:
                  "linear-gradient(to right, var(--bg) 0%, var(--bg) 10%, color-mix(in srgb, var(--bg) 12%, transparent) 38%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-28"
              style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
            />
          </div>

          <div className="absolute inset-0 md:hidden pointer-events-none z-[1]" style={{ backgroundColor: "rgba(245,243,236,0.55)" }} />

          <div
            className={`${PAGE} relative z-10 flex flex-col justify-center`}
            style={{ minHeight: "56vh", paddingTop: "6rem", paddingBottom: "4rem" }}
          >
            <div className="max-w-full md:max-w-[44%]">
              <Reveal>
                <h1
                  className="font-display font-normal leading-[0.95] tracking-[-0.045em]"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
                >
                  Hear from real climate founders.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="large-body mt-7 text-ink/65 max-w-[36ch] leading-[1.5]">
                  A few of the startups we&rsquo;ve worked with, in their own words.
                </p>
              </Reveal>
            </div>
          </div>

          <style>{`
            .cs-node { fill: #2478ff; opacity: 0.75; }
            .cs-node-1 {
              offset-path: path("M260 440 C380 370 510 330 660 305");
              animation: csMove 15s linear infinite;
            }
            .cs-node-2 {
              fill: #B7D36B;
              offset-path: path("M190 510 C330 450 480 415 640 395");
              animation: csMove 22s linear infinite;
            }
            .cs-node-3 {
              fill: #C96A43;
              offset-path: path("M370 185 C490 220 615 238 755 220");
              animation: csMove 28s linear infinite;
            }
            .cs-pulse {
              transform-origin: 420px 280px;
              animation: csPulse 10s ease-in-out infinite;
            }
            @keyframes csMove {
              from { offset-distance: 0%; }
              to   { offset-distance: 100%; }
            }
            @keyframes csPulse {
              0%, 100% { transform: scale(1);    opacity: 0.08; }
              50%       { transform: scale(1.06); opacity: 0.20; }
            }
          `}</style>
        </section>

        {/* ══════════════════ CASE STUDY CARDS ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-2 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 80}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group block rounded-2xl border border-rule overflow-hidden hover:border-ink/20 transition-colors"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={cs.img}
                        alt={cs.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="px-6 py-5 flex items-center justify-between bg-bg">
                      <div>
                        <p className="font-display font-medium text-[20px]">
                          {cs.name}
                        </p>
                        <p className="text-[14px] text-ink/45 mt-1">{cs.sector}</p>
                      </div>
                      <span className="text-[13px] text-ink/35 group-hover:text-ink group-hover:translate-x-1 transition-all inline-flex items-center gap-1 shrink-0">
                        Read <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
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
