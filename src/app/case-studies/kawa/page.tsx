import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";
const PROSE = "mx-auto max-w-[680px]";

const STUDY = {
  name: "Kawa Project",
  headline: "A pre-seed flavoring patent with broad allowance.",
  sector: "Sustainable food & ingredients",
  subsector: "Cocoa substitute",
  stage: "Pre-seed",
  website: "https://www.thekawaproject.com",
  bg: "bg-[#EDE6E6]",
  sections: [
    {
      label: "The company",
      body: [
        "Kawa is turning spent coffee grounds into a cocoa substitute. The carbon math is striking. Cocoa is one of the highest-emission non-meat consumables per kilogram, driven by land use change, tropical deforestation, and a long supply chain. A spent-coffee-based alternative replaces that footprint with a feedstock that's already in the waste stream.",
      ],
    },
    {
      label: "The challenge",
      body: [
        "Kawa Project came to us early. They were pre-seed, operating on a small budget, and didn't have much exposure to patent law. They needed someone who could explain the process clearly, take a strategic view of their IP, and work within a budget that matched their stage.",
      ],
    },
    {
      label: "The approach",
      body: [
        "We started by walking the founders through the basics of patent strategy. What a provisional gets you. When to file a non-provisional. How prosecution actually works. What claim scope means in practice for a food product. That foundation made every subsequent decision faster, because the founders weren't asking us to translate jargon every time we proposed a step.",
        "For the actual patent work, we focused the application on the flavoring methods that turned the underlying chemistry into a defensible product. That's where the real moat lived, and that's where the strongest claim scope was available.",
        "Kawa Project came to us through Cool Climate Collective, one of our VC partners. That referral relationship made the engagement smoother on both sides, and Kawa Project picked up the standard 10% partner discount on our flat fees.",
      ],
    },
    {
      label: "The outcome",
      body: [
        "The application received a quick allowance with relatively broad claim scope on the flavoring methods. For a pre-seed company filing its first patent, that's a strong outcome and a meaningful asset to put in front of future investors.",
      ],
    },
  ],
  quote: {
    text: "Founder quote placeholder. Suggested coverage: the experience of working with a patent firm as a first-time inventor, what the allowance has meant for the business, the value of the partner referral.",
    author: "[Name]",
    title: "[Title] at Kawa",
  },
};

const OTHER_STUDIES = [
  { name: "Aquaporo", slug: "aquaporo", sector: "Atmospheric water harvesting", bg: "bg-[#E6E8ED]" },
  { name: "BikeOn", slug: "bikeon", sector: "E-mobility & micromobility", bg: "bg-[#E8EDE6]" },
  { name: "Scaled Carbon", slug: "scaled-carbon", sector: "Ocean MRV for carbon removal", bg: "bg-[#EDE8E6]" },
  { name: "Ulysses", slug: "ulysses", sector: "Maritime robotics & physical AI", bg: "bg-[#E8EDE6]" },
];

export default function KawaCaseStudy() {
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
                <Image src="/cs-kawa.png" alt="Kawa Project" fill className="object-cover object-top" sizes="100vw" />
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
