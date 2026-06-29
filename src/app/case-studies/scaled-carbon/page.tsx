import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";
const PROSE = "mx-auto max-w-[680px]";

const STUDY = {
  name: "Scaled Carbon",
  headline: "An international MRV patent on a small budget.",
  sector: "Carbon removal / Ocean MRV",
  subsector: "Ocean MRV for carbon removal",
  stage: "Early stage",
  website: "https://scaledcarbon.com",
  bg: "bg-[#EDE8E6]",
  sections: [
    {
      label: "The company",
      body: [
        "Scaled Carbon's core technology is MRV (measurement, reporting, verification) for ocean enhanced weathering. The chemistry of ocean enhanced weathering is well understood. The hard part is proving that when minerals get added to the ocean, the carbon sequestration actually happens at the scale claimed. Without trustworthy MRV, the carbon credits don't hold up. Without credits, the projects don't get funded. Scaled Carbon is building the layer that closes that loop.",
      ],
    },
    {
      label: "The challenge",
      body: [
        "We had two constraints to work with. First, Scaled Carbon was early stage and didn't have a big budget for patent work. Second, the technology needed international protection from day one. Ocean weathering projects happen in territorial waters all over the world, and the MRV stack needs to be defensible in every market the company might eventually operate in.",
      ],
    },
    {
      label: "The approach",
      body: [
        "We drafted a single comprehensive patent application designed to anchor an international filing strategy. The scope was carefully built to cover the verification methodology in a way that would hold up across jurisdictions, while keeping the drafting effort within a budget Scaled Carbon could afford at their stage.",
        "The application was filed as a PCT (international) application, which preserves the company's right to file in more than 150 countries for up to 30 months after the priority date. That bought Scaled Carbon time to figure out which specific markets to commit to, while keeping the priority date locked in everywhere.",
      ],
    },
    {
      label: "The outcome",
      body: [
        "The PCT application received an entirely positive international search report. That's about as strong a signal as international examination gives, meaning the search authority found no prior art that would block the claims. Scaled Carbon is now preparing to enter the national phase in multiple countries, building out the geographic footprint that matches their commercial roadmap.",
      ],
    },
  ],
  quote: {
    text: "Founder quote placeholder. Suggested coverage: the experience of getting a strong international filing on a startup budget, what the positive search report has meant for the company, the path forward for national-phase filings.",
    author: "[Name]",
    title: "[Title] at Scaled Carbon",
  },
};

const OTHER_STUDIES = [
  { name: "Aquaporo", slug: "aquaporo", sector: "Atmospheric water harvesting", bg: "bg-[#E6E8ED]" },
  { name: "BikeOn", slug: "bikeon", sector: "E-mobility & micromobility", bg: "bg-[#E8EDE6]" },
  { name: "Kawa Project", slug: "kawa", sector: "Sustainable food & ingredients", bg: "bg-[#EDE6E6]" },
  { name: "Ulysses", slug: "ulysses", sector: "Maritime robotics & physical AI", bg: "bg-[#E8EDE6]" },
];

export default function ScaledCarbonCaseStudy() {
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
                <Image src="/cs-scaled-carbon.png" alt="Scaled Carbon" fill className="object-cover object-top" sizes="100vw" />
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
