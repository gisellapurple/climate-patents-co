import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";
const PROSE = "mx-auto max-w-[680px]";

const STUDY = {
  name: "BikeOn",
  headline: "Patent protection on a complex mechanical device, in time for a public Kickstarter launch.",
  sector: "Sustainable transportation / Micromobility",
  subsector: "E-mobility & micromobility",
  stage: "Pre-launch",
  website: "https://bikeon.com",
  bg: "bg-[#E8EDE6]",
  sections: [
    {
      label: "The company",
      body: [
        "BikeOn builds bicycle electrification products, power meters, and supporting accessories for the e-mobility category. The hardware sits at the consumer end of climate tech: products designed to shift personal transportation away from cars and toward bikes, with manufacturing handled overseas and distribution running through both direct-to-consumer and traditional retail channels.",
      ],
    },
    {
      label: "The challenge",
      body: [
        "A few things made this engagement non-trivial. The core invention was a complex mechanical device that needed careful drafting around moving parts and the interfaces between components. Manufacturing was in China, which made international IP rights important from day one, and the budget was lean as it usually is for hardware startups before launch.",
        "There was also a hard deadline. BikeOn was planning to launch on Kickstarter, which counts as a public disclosure under patent law. The IP work had to be on file before the campaign went live, or the team would lose the ability to file in jurisdictions where prior disclosure is disqualifying.",
      ],
    },
    {
      label: "The approach",
      body: [
        "We filed a single carefully scoped international patent application that covered the mechanical innovation across the key jurisdictions for both manufacturing protection (China) and commercial markets. The claims were drafted to be defensible across borders, since \"allowable in the US\" wouldn't have been enough.",
        "We also took over an existing patent case from BikeOn's previous counsel. The transition involved coordinating document transfer and picking up the prosecution strategy without any billing overlap.",
      ],
    },
    {
      label: "The outcome",
      body: [
        "The international application received a positive international search report, and BikeOn launched on Kickstarter shortly after, hitting its funding goal quickly. The IP foundation was on file before the public disclosure, which preserved options for follow-on filings as the product line expands.",
      ],
    },
  ],
  quote: {
    text: "Founder quote placeholder. Suggested coverage: the experience of working under a Kickstarter deadline, the value of international patent protection given Chinese manufacturing, the transition from previous counsel.",
    author: "[Name]",
    title: "[Title] at BikeOn",
  },
};

const OTHER_STUDIES = [
  { name: "Aquaporo", slug: "aquaporo", sector: "Atmospheric water harvesting", bg: "bg-[#E6E8ED]" },
  { name: "Kawa Project", slug: "kawa", sector: "Sustainable food & ingredients", bg: "bg-[#EDE6E6]" },
  { name: "Scaled Carbon", slug: "scaled-carbon", sector: "Ocean MRV for carbon removal", bg: "bg-[#EDE8E6]" },
  { name: "Ulysses", slug: "ulysses", sector: "Maritime robotics & physical AI", bg: "bg-[#E8EDE6]" },
];

export default function BikeOnCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-16 md:pb-20`}>
            <Reveal>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-[13px] text-ink/45 hover:text-rust transition-colors mb-8"
              >
                ← Case studies
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display font-normal text-[40px] sm:text-[52px] md:text-[62px] leading-[1.04] tracking-[-0.025em] max-w-[22ch]">
                {STUDY.name}: {STUDY.headline}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 inline-flex flex-wrap gap-px rounded-xl border border-rule overflow-hidden bg-rule">
                <div className="bg-bg px-5 py-3.5">
                  <p className="text-[11px] text-ink/40 uppercase tracking-wider font-medium mb-1">Sector</p>
                  <p className="text-[14px] font-medium">{STUDY.subsector}</p>
                </div>
                <div className="bg-bg px-5 py-3.5">
                  <p className="text-[11px] text-ink/40 uppercase tracking-wider font-medium mb-1">Stage at engagement</p>
                  <p className="text-[14px] font-medium">{STUDY.stage}</p>
                </div>
                <div className="bg-bg px-5 py-3.5">
                  <p className="text-[11px] text-ink/40 uppercase tracking-wider font-medium mb-1">Website</p>
                  <a href={STUDY.website} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-sage hover:text-rust transition-colors">Visit site →</a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className={`${PAGE}`}>
              <div className="relative w-full rounded-2xl overflow-hidden h-72 md:h-96">
                <Image src="/cs-bikeon.png" alt="BikeOn" fill className="object-cover object-top" sizes="100vw" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Body */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className={`${PROSE} space-y-16`}>
              {STUDY.sections.map((s, i) => (
                <Reveal key={s.label} delay={i * 60}>
                  <div>
                    <p className="section-label text-sage mb-5">{s.label}</p>
                    <div className="space-y-5">
                      {s.body.map((p, j) => {
                        if (i === 0 && j === 0) {
                          const parts = p.split(STUDY.name);
                          return (
                            <p key={j} className="text-[15.5px] md:text-[16px] text-ink/75 leading-[1.7]">
                              {parts[0]}
                              <a href={STUDY.website} target="_blank" rel="noopener noreferrer" className="underline decoration-sage/40 underline-offset-2 hover:text-rust transition-colors">{STUDY.name}</a>
                              {parts.slice(1).join(STUDY.name)}
                            </p>
                          );
                        }
                        return (
                          <p key={j} className="text-[15.5px] md:text-[16px] text-ink/75 leading-[1.7]">
                            {p}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={280}>
                <figure className="border-l-2 border-sage/40 pl-7 mt-2">
                  <blockquote className="font-display font-normal text-[20px] md:text-[22px] leading-[1.45] tracking-[-0.015em] text-ink/85">
                    &ldquo;{STUDY.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-[13.5px] text-ink/45">
                    — <span className="font-medium text-ink/65">{STUDY.quote.author}</span>, {STUDY.quote.title}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Other case studies */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em] mb-10">
                More case studies
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {OTHER_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 70}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group block rounded-2xl border border-rule overflow-hidden hover:border-sage/40 transition-colors"
                  >
                    <div className="relative h-48 w-full"><Image src={`/cs-${cs.slug}.png`} alt={cs.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>
                    <div className="px-6 py-5 flex items-center justify-between">
                      <div>
                        <p className="font-display font-medium text-[20px] group-hover:text-rust transition-colors">{cs.name}</p>
                        <p className="text-[14.5px] text-ink/50 mt-1">{cs.sector}</p>
                      </div>
                      <span className="text-[14px] text-ink/40 group-hover:text-rust group-hover:translate-x-1 transition-all inline-flex items-center gap-1 shrink-0">
                        Read the case study <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
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
