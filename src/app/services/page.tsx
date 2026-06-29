import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const SERVICES = [
  {
    title: "Patent Strategy & Portfolio Planning",
    body: "Figure out what to file and what to skip, with an 18-month budget you can actually plan around.",
    href: "/services/patent-strategy",
  },
  {
    title: "Provisional Patent Applications",
    body: "A fast, affordable way to establish a priority date.",
    href: "/services/provisional-patent-application",
  },
  {
    title: "Non-Provisional Patent Applications",
    body: "The full patent application. Drafted with prosecution in mind, on a timeline that matches your fundraise.",
    href: "/services/non-provisional-patent-application",
  },
  {
    title: "PCT (International) Patent Applications",
    body: "File once, preserve your right to file in over 150 countries. We handle the strategy and the paperwork.",
    href: "/services/pct-international-patent",
  },
  {
    title: "Patent Prosecution & Office Actions",
    body: "USPTO responses, examiner interviews, international reports, and appeals.",
    href: "/services/patent-prosecution",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Patent services for climate startups.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-[16px] md:text-[17px] text-ink/65 max-w-[52ch] leading-[1.55]">
                Everything you need to build a defensible portfolio, priced for a startup balance sheet.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Intro + services */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-20">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.022em] max-w-[16ch]">
                  Every service is a flat fee.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <div className="text-[15.5px] md:text-[16px] leading-[1.65] text-ink/75 space-y-5 border-l-2 border-sage/30 pl-6">
                  <p>
                    We work with climate tech startups at every stage, from your first
                    provisional through a Series B portfolio. Most of our clients start with
                    a strategy session and a single provisional, and grow into a full patent
                    program from there.
                  </p>
                  <p>
                    Below is what we do. Every service is priced as a flat fee — no hourly
                    billing, no surprises mid-fundraise.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Services grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((s, i) => (
                <Reveal key={s.href} delay={i * 70}>
                  <div className="flex flex-col h-full p-8 rounded-2xl border border-rule bg-bg">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="block w-5 h-px bg-rust" />
                      <span className="text-[12px] text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display font-medium text-[20px] md:text-[23px] leading-[1.2] tracking-[-0.018em] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[15px] text-ink/65 leading-[1.65] flex-1">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing callout */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <Reveal className="md:col-span-7">
                <h2 className="font-display font-medium text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.022em] max-w-[20ch]">
                  We publish our flat-fee numbers up front.
                </h2>
                <p className="mt-5 text-[15.5px] text-ink/65 leading-[1.65] max-w-[52ch]">
                  So you can plan around them before you even talk to us.
                </p>
              </Reveal>
              <Reveal delay={180} className="md:col-span-4 md:col-start-9">
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-rust transition-colors"
                >
                  See pricing
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
              </Reveal>
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
