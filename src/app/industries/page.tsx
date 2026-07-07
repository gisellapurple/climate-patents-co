import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const INDUSTRIES = [
  {
    name: "Energy Storage & Batteries",
    body: "Lithium-ion, solid-state, flow batteries, sodium-ion, long-duration storage, BMS, and grid-scale storage systems.",
    img: "/indp-energy.jpg",
    bg: "bg-bg",
    accent: "#B7D36B",
  },
  {
    name: "Carbon Capture, Removal & Utilization",
    body: "Direct air capture, point-source capture, mineralization, ocean-based removal, carbon utilization, and MRV.",
    img: "/indp-carbon.jpg",
    bg: "bg-bg-alt",
    accent: "#7FAE6A",
  },
  {
    name: "Solar & Renewable Energy",
    body: "Photovoltaics, perovskite cells, concentrated solar, BIPV, solar manufacturing, and balance of systems.",
    img: "/indp-solar.jpg",
    bg: "bg-bg",
    accent: "#AFCFE3",
  },
  {
    name: "Hydrogen & Alternative Fuels",
    body: "Electrolyzers, green hydrogen production, fuel cells, hydrogen storage, sustainable aviation fuel, and e-fuels.",
    img: "/indp-hydrogen.jpg",
    bg: "bg-bg-alt",
    accent: "#B7D36B",
  },
  {
    name: "Sustainable Transportation & EVs",
    body: "Battery electric vehicles, charging infrastructure, EV thermal management, drivetrains, alternative powertrains.",
    img: "/indp-transport.jpg",
    bg: "bg-bg",
    accent: "#C96A43",
  },
  {
    name: "Sustainable Agriculture & Ag-Tech",
    body: "Precision agriculture, alternative proteins, controlled environment agriculture, soil health, biological inputs, methane reduction.",
    img: "/indp-agtech.jpg",
    bg: "bg-bg-alt",
    accent: "#7FAE6A",
  },
  {
    name: "Sustainable Aviation",
    body: "Sustainable aviation fuel (SAF), electric aircraft, hydrogen propulsion, and aerospace decarbonization.",
    img: "/indp-aviation.jpg",
    bg: "bg-bg",
    accent: "#2F6154",
  },
  {
    name: "Green Buildings & HVAC",
    body: "Heat pumps, building electrification, advanced HVAC, sustainable materials, and smart building systems.",
    img: "/indp-buildings.jpg",
    bg: "bg-bg-alt",
    accent: "#AFCFE3",
  },
  {
    name: "Circular Economy & Recycling",
    body: "Chemical recycling, advanced sorting, materials recovery, and product lifecycle technologies.",
    img: "/indp-circular.jpg",
    bg: "bg-bg",
    accent: "#B7D36B",
  },
  {
    name: "Geothermal",
    body: "Enhanced geothermal systems (EGS), advanced geothermal systems (AGS), superhot rock, and closed-loop systems.",
    img: "/indp-geothermal.jpg",
    bg: "bg-bg-alt",
    accent: "#C96A43",
  },
  {
    name: "Climate AI & Software",
    body: "MRV platforms, grid optimization software, climate analytics, and AI for decarbonization.",
    img: "/indp-climateai.jpg",
    bg: "bg-bg",
    accent: "#B7D36B",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative bg-bg overflow-hidden" style={{ minHeight: "60vh" }}>
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[55%] z-0 pointer-events-none select-none overflow-hidden"
            style={{ background: "var(--bg)" }}
          >
            <div className="absolute inset-0">
              <Image
                src="/ind-hero.jpg"
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
              <circle className="ind-node ind-node-1" r="5" />
              <circle className="ind-node ind-node-2" r="3" />
              <circle className="ind-node ind-node-3" r="4" />
              <circle
                cx="380" cy="290" r="90"
                fill="none"
                stroke="rgba(17,17,17,0.15)"
                strokeWidth="0.75"
                className="ind-pulse"
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

          <div className="absolute inset-0 bg-bg/55 md:hidden pointer-events-none z-[1]" />

          <div
            className={`${PAGE} relative z-10 flex flex-col justify-center`}
            style={{ minHeight: "60vh", paddingTop: "6rem", paddingBottom: "4rem" }}
          >
            <div className="max-w-[50%] md:max-w-[44%]">
              <Reveal>
                <h1
                  className="font-display font-normal leading-[0.95] tracking-[-0.045em]"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
                >
                  Patents for the technologies that matter.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="large-body mt-7 text-ink/65 max-w-[36ch] leading-[1.5]">
                  We work across the climate stack, from energy storage to direct air capture to ag-tech.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-9">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-lime hover:text-ink transition-colors"
                  >
                    Book a free consultation
                    <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <style>{`
            .ind-node { fill: #2478ff; opacity: 0.8; }
            .ind-node-1 {
              offset-path: path("M250 420 C380 350 520 310 680 280");
              animation: indMove 15s linear infinite;
            }
            .ind-node-2 {
              fill: #B7D36B;
              offset-path: path("M180 510 C330 450 480 420 640 400");
              animation: indMove 22s linear infinite;
            }
            .ind-node-3 {
              fill: #C96A43;
              offset-path: path("M360 180 C480 220 610 235 750 215");
              animation: indMove 28s linear infinite;
            }
            .ind-pulse {
              transform-origin: 380px 290px;
              animation: indPulse 10s ease-in-out infinite;
            }
            @keyframes indMove {
              from { offset-distance: 0%; }
              to   { offset-distance: 100%; }
            }
            @keyframes indPulse {
              0%, 100% { transform: scale(1);    opacity: 0.10; }
              50%       { transform: scale(1.06); opacity: 0.25; }
            }
          `}</style>
        </section>

        {/* ══════════════════ INTRO ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[14ch]">
                  The climate stack isn&apos;t one industry.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7 md:pt-3">
                <div
                  className="text-[16px] md:text-[17px] leading-[1.7] text-ink/72 space-y-5 max-w-[56ch] pl-7"
                  style={{ borderLeft: "2px solid var(--lime)" }}
                >
                  <p>
                    A battery startup and a carbon capture startup may not have much in common at
                    the molecular level, but many climate tech companies share the same goals,
                    deal with the same market forces, and seek funding from the same sources. We
                    know how to design patent portfolios that protect what climate tech startups
                    have in common.
                  </p>
                  <p>
                    Our team has a broad but rigorous technical background across mechanical,
                    electrical, and chemical engineering. We value cross-disciplinary and
                    outside-the-box thinking. We thrive during brainstorming sessions and love
                    learning new things.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════ EDITORIAL INDUSTRY ROWS ══════════════════ */}
        {INDUSTRIES.map((ind, i) => {
          const imageLeft = i % 2 === 0;
          const isDark = ind.bg === "bg-charcoal";

          return (
            <section key={ind.name} className={`${ind.bg} border-t border-rule overflow-hidden`}>
              <div className="grid md:grid-cols-2 gap-0" style={{ minHeight: "440px" }}>

                {/* Image panel */}
                <div
                  className={`relative ${imageLeft ? "md:order-1" : "md:order-2"} order-1`}
                  style={{ minHeight: "340px" }}
                >
                  <Image
                    src={ind.img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                  {/* Subtle accent strip at bottom of image */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ background: ind.accent }}
                  />
                </div>

                {/* Text panel */}
                <div
                  className={`flex flex-col justify-center px-10 md:px-16 lg:px-20 py-14 ${imageLeft ? "md:order-2" : "md:order-1"} order-2`}
                >
                  {/* Accent indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block w-8 h-px" style={{ background: ind.accent }} />
                    <span
                      className={`text-[11px] tracking-[0.1em] uppercase font-medium ${isDark ? "text-white/35" : "text-ink/35"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <Reveal>
                    <h2
                      className={`font-display font-medium leading-[1.1] tracking-[-0.03em] mb-5 ${isDark ? "text-white" : "text-ink"}`}
                      style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
                    >
                      {ind.name}
                    </h2>
                  </Reveal>

                  <Reveal delay={120}>
                    <p className={`text-[15.5px] leading-[1.7] max-w-[42ch] ${isDark ? "text-white/60" : "text-ink/65"}`}>
                      {ind.body}
                    </p>
                  </Reveal>
                </div>

              </div>
            </section>
          );
        })}

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
                Don&apos;t see your sector?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[16px] md:text-[17px] text-white/55 max-w-[48ch] leading-[1.6] mb-10">
                If you&apos;re working on something at the edge of the climate stack,
                we&apos;d still love to talk. Book a free consultation and we&apos;ll tell
                you whether we&apos;re the right fit.
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
