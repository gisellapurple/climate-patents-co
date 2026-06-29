import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { LogoCarousel } from "@/components/LogoCarousel";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const ARRANGEMENTS = [
  "Discounted flat-fee rates for portfolio companies",
  "Free IP strategy sessions for new portfolio companies",
  "Workshops and educational content for your founders",
  "IP due diligence on portfolio investments",
  "Quarterly office hours for portfolio CTOs and founders",
];

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Patent partners for the climate ecosystem.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-[16px] md:text-[17px] text-ink/65 max-w-[52ch] leading-[1.55]">
                We work with the investors and accelerators backing climate tech, so your
                portfolio companies get the patent representation they actually need.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[14ch]">
                  Your portfolio deserves better.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <div className="text-[15.5px] md:text-[16px] leading-[1.65] text-ink/75 space-y-5 border-l-2 border-sage/30 pl-6">
                  <p>
                    Your portfolio companies are getting overcharged by big law. (You probably
                    already know this.) The founders you back are spending capital you raised on
                    hourly rates that don&rsquo;t reflect the value they&rsquo;re getting. Or
                    they&rsquo;re not filing patents at all, which is its own problem when
                    you&rsquo;re trying to defend the company in a Series B diligence call.
                  </p>
                  <p>
                    We started the Climate Patent Collective to be the alternative. We work with
                    climate VCs, accelerators, and operators to make sure their portfolio companies
                    have access to high-quality, affordable, climate-fluent patent representation.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How we partner */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-4">
                <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em]">
                  How we partner
                </h2>
                <p className="mt-4 text-[15px] text-ink/55 leading-[1.6]">
                  We&rsquo;re flexible on structure. Common arrangements include:
                </p>
              </Reveal>
              <Reveal delay={160} className="md:col-span-6 md:col-start-7">
                <ul className="space-y-0 divide-y divide-rule">
                  {ARRANGEMENTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 py-5">
                      <span className="mt-[3px] shrink-0 text-[12px] text-ink/35 font-medium tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15.5px] text-ink/75 leading-[1.6]">
                        {i === 0 ? (
                          <>Discounted flat-fee rates for portfolio companies{" "}<span className="text-rust font-medium">(typically 10% off)</span></>
                        ) : item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Current partners */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em] mb-10">
                Current partners
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <LogoCarousel />
            </Reveal>
          </div>
        </section>

        {/* IP due diligence */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em] max-w-[16ch]">
                  IP due diligence for investors
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <p className="text-[15.5px] md:text-[16px] leading-[1.65] text-ink/75">
                  For investors considering an investment in a climate tech company, we offer
                  fast, focused IP due diligence. We&rsquo;ll review the company&rsquo;s
                  existing patent portfolio (if any), identify gaps and risks, evaluate
                  freedom-to-operate exposure, and give you a memo your investment committee
                  can use.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Let's talk */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.022em] max-w-[20ch] mb-9">
                Let&rsquo;s talk.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[16px] text-ink/65 max-w-[52ch] leading-[1.55] mb-9">
                If you&rsquo;re interested in partnering with the Climate Patent Collective,
                or you want to talk through what an IP due diligence engagement could look like,
                get in touch.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-7">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-rust transition-colors"
                >
                  Book a call
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
                <a
                  href="mailto:alex@climatepatents.co?subject=New%20Partnership%3F"
                  className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5"
                >
                  Email Alex <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
