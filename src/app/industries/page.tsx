import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

// span: 1 | 2 | 3 (columns in a 3-col grid)
// Layout fills perfectly: 2+1 / 1+1+1 / 1+2 / 1+1+1 / 3
const INDUSTRIES = [
  { name: "Energy Storage & Batteries",          body: "Lithium-ion, solid-state, flow batteries, sodium-ion, long-duration storage, BMS, and grid-scale storage systems.",                                                  href: "/industries/energy-storage",          bg: "bg-[#E6E8ED]", span: 2 },
  { name: "Carbon Capture, Removal & Utilization", body: "Direct air capture, point-source capture, mineralization, ocean-based removal, carbon utilization, and MRV.",                                                          href: "/industries/carbon-capture",          bg: "bg-[#E8EDE6]", span: 1 },
  { name: "Solar & Renewable Energy",            body: "Photovoltaics, perovskite cells, concentrated solar, BIPV, solar manufacturing, and balance of systems.",                                                              href: "/industries/solar",                   bg: "bg-[#EDE8E1]", span: 1 },
  { name: "Hydrogen & Alternative Fuels",        body: "Electrolyzers, green hydrogen production, fuel cells, hydrogen storage, sustainable aviation fuel, and e-fuels.",                                                       href: "/industries/hydrogen",                bg: "bg-[#E6EBF0]", span: 1 },
  { name: "Sustainable Transportation & EVs",    body: "Battery electric vehicles, charging infrastructure, EV thermal management, drivetrains, alternative powertrains.",                                                      href: "/industries/sustainable-transportation", bg: "bg-[#EDEDEB]", span: 1 },
  { name: "Sustainable Agriculture & Ag-Tech",   body: "Precision agriculture, alternative proteins, controlled environment agriculture, soil health, biological inputs, methane reduction.",                                    href: "/industries/sustainable-agriculture",  bg: "bg-[#EAF0E6]", span: 1 },
  { name: "Sustainable Aviation",                body: "Sustainable aviation fuel (SAF), electric aircraft, hydrogen propulsion, and aerospace decarbonization.",                                                              href: "/industries/sustainable-aviation",     bg: "bg-[#E6EBF0]", span: 2 },
  { name: "Green Buildings & HVAC",              body: "Heat pumps, building electrification, advanced HVAC, sustainable materials, and smart building systems.",                                                              href: "/industries/green-buildings",          bg: "bg-[#EDE9E6]", span: 1 },
  { name: "Circular Economy & Recycling",        body: "Chemical recycling, advanced sorting, materials recovery, and product lifecycle technologies.",                                                                        href: "/industries/circular-economy",         bg: "bg-[#EDEDEB]", span: 1 },
  { name: "Geothermal",                          body: "Enhanced geothermal systems (EGS), advanced geothermal systems (AGS), superhot rock, and closed-loop systems.",                                                       href: "/industries/geothermal",              bg: "bg-[#EDE8E3]", span: 1 },
  { name: "Climate AI & Software",               body: "MRV platforms, grid optimization software, climate analytics, and AI for decarbonization.",                                                                           href: "/industries/climate-ai-software",      bg: "bg-[#E8EDE6]", span: 3 },
];

const spanClass: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-1 md:col-span-2",
  3: "col-span-1 md:col-span-3",
};

const imageHeight: Record<number, string> = {
  1: "h-48",
  2: "h-56",
  3: "h-64",
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Patents for the technologies that matter.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-[16px] md:text-[17px] text-ink/65 max-w-[52ch] leading-[1.55]">
                We work across the climate stack, from energy storage to direct air capture to ag-tech.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.022em] max-w-[16ch]">
                  The climate stack isn&rsquo;t one industry.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <div className="text-[15.5px] md:text-[16px] leading-[1.65] text-ink/75 space-y-5 border-l-2 border-sage/30 pl-6">
                  <p>
                    Climate tech isn&rsquo;t one industry. It&rsquo;s dozens of industries
                    with their own technical literatures, their own prior art landscapes, and
                    their own strategic IP considerations.
                  </p>
                  <p>
                    A battery startup and a carbon capture startup don&rsquo;t have much in
                    common at the molecular level. But they do share something at the patent
                    level: the firms that file most of the patents in their space were not
                    designed to work with them. We were. Below are the industries we know best.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bento grid */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INDUSTRIES.map((industry, i) => {
                const isWide = industry.span === 3;
                return (
                  <Reveal key={industry.href} delay={i * 40} className={spanClass[industry.span]}>
                    <div className="block h-full rounded-2xl border border-rule overflow-hidden">
                      {isWide ? (
                        // Full-width: horizontal layout
                        <div className="flex flex-col md:flex-row h-full">
                          <div className={`${industry.bg} md:w-2/5 h-56 md:h-auto shrink-0`} />
                          <div className="flex flex-col justify-center px-8 py-8 md:py-10 flex-1 bg-bg">
                            <h3 className="font-display font-medium text-[22px] md:text-[26px] leading-[1.2] mb-3">
                              {industry.name}
                            </h3>
                            <p className="text-[14.5px] text-ink/60 leading-[1.65] max-w-[48ch]">
                              {industry.body}
                            </p>
                          </div>
                        </div>
                      ) : (
                        // Standard: stacked layout
                        <>
                          <div className={`${industry.bg} w-full ${imageHeight[industry.span]}`} />
                          <div className="px-6 py-5 bg-bg">
                            <h3 className="font-display font-medium text-[18px] md:text-[19px] leading-[1.25] mb-2">
                              {industry.name}
                            </h3>
                            <p className="text-[13.5px] text-ink/55 leading-[1.65]">
                              {industry.body}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[20ch] mb-9">
                Don&rsquo;t see your sector?
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[16px] text-ink/65 max-w-[48ch] leading-[1.55] mb-9">
                If you&rsquo;re working on something at the edge of the climate stack,
                we&rsquo;d still love to talk. Book a free consultation and we&rsquo;ll tell
                you whether we&rsquo;re the right fit.
              </p>
            </Reveal>
            <Reveal delay={240}>
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
