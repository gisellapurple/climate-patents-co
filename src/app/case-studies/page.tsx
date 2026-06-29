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
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[20ch]">
                Hear from real climate tech startups who&rsquo;ve worked with us.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Case study cards */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-2 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 80}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group block rounded-2xl border border-rule overflow-hidden hover:border-sage/40 transition-colors"
                  >
                    <div className="relative h-64 w-full">
                      <Image src={cs.img} alt={cs.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className="px-6 py-5 flex items-center justify-between bg-bg">
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
        <section className="bg-bg border-t border-rule">
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
