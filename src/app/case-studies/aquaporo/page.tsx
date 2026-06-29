import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";
const PROSE = "mx-auto max-w-[680px]";

const STUDY = {
  slug: "aquaporo",
  name: "Aquaporo",
  headline: "Provisionals filed before the seed raise.",
  sector: "Deep tech / Climate adaptation",
  subsector: "Atmospheric water harvesting",
  stage: "Pre-seed",
  website: "https://www.aquaporo.com",
  bg: "bg-[#E6E8ED]",
  sections: [
    {
      label: "The company",
      body: [
        "Aquaporo is building an alternative to desalination. Instead of pulling fresh water out of the ocean at high energy cost, their technology harvests potable water directly from the air. The implications for drought-stricken communities are significant. The implications for the energy cost of producing fresh water are arguably more so.",
      ],
    },
    {
      label: "The challenge",
      body: [
        "Atmospheric water generation has a thick prior art base. Decades of academic research and industrial filings sit between any new entrant and a defensible patent claim, and consumer product disclosures add another layer on top of that.",
        "The Aquaporo team had also spent time on this technology during a university research program. Some of their own earlier disclosures were potentially blocking foreign filings, which made the patent strategy a different problem than starting from a blank slate.",
        "On top of all that, Aquaporo was approaching its seed raise. They needed provisional patents on file before talking to investors, and they needed someone who could speak credibly to those patents during diligence calls with a corporate VC.",
      ],
    },
    {
      label: "The approach",
      body: [
        "We started with a strategy session to identify what was actually patentable given the prior art, including the team's own academic publications. From there, we moved fast. Three provisional applications were filed in quick succession, each targeting a different angle of the technology so the team had real strategic options going into the raise.",
        "During the seed raise itself, we joined diligence calls with their corporate VC. We walked through the strength and scope of each provisional and answered technical IP questions in real time, so the Aquaporo team didn't have to translate or defer.",
      ],
    },
    {
      label: "The outcome",
      body: [
        "Aquaporo closed their seed round. The three provisionals later converted into two non-provisional applications, with two of the originals strategically combined into a single stronger filing, and both received allowable subject matter from the USPTO. The path to issued patents is now in view.",
      ],
    },
  ],
  quote: {
    text: "Founder quote placeholder. Suggested coverage: the speed of provisional filings, the experience of having patent counsel on diligence calls, what the allowance results have meant for the company.",
    author: "[Name]",
    title: "[Title] at Aquaporo",
  },
};

const OTHER_STUDIES = [
  { name: "BikeOn", slug: "bikeon", sector: "E-mobility & micromobility", bg: "bg-[#E8EDE6]" },
  { name: "Kawa Project", slug: "kawa", sector: "Sustainable food & ingredients", bg: "bg-[#EDE6E6]" },
  { name: "Scaled Carbon", slug: "scaled-carbon", sector: "Ocean MRV for carbon removal", bg: "bg-[#EDE8E6]" },
  { name: "Ulysses", slug: "ulysses", sector: "Maritime robotics & physical AI", bg: "bg-[#E8EDE6]" },
];

export default function AquaporoCaseStudy() {
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

            {/* Meta card */}
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
                <Image src="/cs-aquaporo.png" alt="Aquaporo" fill className="object-cover object-top" sizes="100vw" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Body sections */}
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

              {/* Quote */}
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
                        <p className="font-display font-medium text-[20px] group-hover:text-rust transition-colors">
                          {cs.name}
                        </p>
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
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
