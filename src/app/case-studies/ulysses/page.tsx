import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";
const PROSE = "mx-auto max-w-[680px]";

const STUDY = {
  name: "Ulysses",
  headline: "From Lowercarbon-backed seed to a $38M a16z Series A.",
  sector: "Maritime robotics / Ecosystem restoration / Physical AI",
  subsector: "Maritime robotics & physical AI",
  stage: "Seed",
  website: "https://www.theoceancompany.com",
  bg: "bg-[#E8EDE6]",
  sections: [
    {
      label: "The company",
      body: [
        "Ulysses builds underwater autonomous drone fleets for ecosystem restoration. Their technology stack sits at the intersection of maritime hardware, autonomy, and what's increasingly being called physical AI. The applications range from coral and kelp restoration to a broader set of ocean ecosystem services that have historically been impossible to perform at scale.",
      ],
    },
    {
      label: "The challenge",
      body: [
        "Ulysses came to us through Lowercarbon Capital, who had backed the company at seed. The technical roadmap was ambitious and the fundraising arc was going to require a credible patent portfolio at every stage. They needed a partner who could move at their speed and treat IP as something that compounded across rounds. Most firms don't.",
      ],
    },
    {
      label: "The approach",
      body: [
        "We built the portfolio in stages, mapped to Ulysses' roadmap and fundraising milestones. The first filings established priority dates on the core hardware and autonomy stack, and international applications followed once the global market picture got clearer.",
        "Strategically, the work emphasized integration claims and system-level inventions, because in autonomous maritime tech the moat usually lives at the integration layer rather than in any single subsystem. Patents at that level are harder to design around, and more valuable in M&A diligence later.",
      ],
    },
    {
      label: "The outcome",
      body: [
        "Three patent application families now sit with us, two of them international filings, both with positive PCT search reports. That foundation gave Ulysses something concrete to walk Andreessen Horowitz through during diligence on their $38M Series A, and we've stayed on as their patent counsel since.",
      ],
    },
  ],
  quote: {
    text: "Founder quote placeholder. Suggested coverage: the experience of building a portfolio that scaled with the company's fundraising, the value of having patent counsel who could move at their speed, what the Series A process was like with the IP foundation already in place.",
    author: "[Name]",
    title: "[Title] at Ulysses",
  },
};

const OTHER_STUDIES = [
  { name: "Aquaporo", slug: "aquaporo", sector: "Atmospheric water harvesting", bg: "bg-[#E6E8ED]" },
  { name: "BikeOn", slug: "bikeon", sector: "E-mobility & micromobility", bg: "bg-[#E8EDE6]" },
  { name: "Kawa Project", slug: "kawa", sector: "Sustainable food & ingredients", bg: "bg-[#EDE6E6]" },
  { name: "Scaled Carbon", slug: "scaled-carbon", sector: "Ocean MRV for carbon removal", bg: "bg-[#EDE8E6]" },
];

export default function UlyssesCaseStudy() {
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
                <Image src="/cs-ulysses.png" alt="Ulysses" fill className="object-cover object-top" sizes="100vw" />
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
