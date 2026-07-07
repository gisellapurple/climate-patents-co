import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

const TEAM = [
  {
    name: "Alex Flake",
    title: "Founder & Patent Agent",
    photo: "/team-alex.jpg",
    bio: [
      "Alex spent his early career at Fenwick & West drafting patents for companies like Airbnb, Apple, Dropbox, Facebook, and Uber. The work was technically interesting, but felt disconnected and impersonal. After Fenwick, Alex moved to a boutique patent firm focused entirely on venture-backed startups. There, he got much closer to real innovators and hands-on patent strategy that works for fast-moving companies. But his clients were rarely aligned with what he was passionate about.",
      "The climate companies he did represent were different. Longer times to market, more varied sources of funding, and a greater international focus.",
      "So in 2023, Alex started the Climate Patent Collective. The thesis is straightforward: climate tech startups deserve patent representation that understands what makes the climate space unique and sticks with them through every boom and bust of the climate tech funding cycle.",
      "Three years later, we've built a small team and a network of accelerators and venture funds that refer their portfolio companies to us. We file patents on direct air capture, ecosystem rehabilitation, EV charging, heat pumps, and e-mobility, and everything in between.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alexander-flake/" },
      { label: "Email", href: "mailto:alex@climatepatents.co" },
    ],
  },
  {
    name: "Danielle Dubno",
    title: "Contract Patent Agent",
    photo: "/team-danielle.webp",
    bio: [
      "Danielle is a patent agent with more than four years of in-house, boutique firm, and big law experience. She has drafted and prosecuted patents for companies of all sizes and stages, on technologies ranging from AR gaming to AI-driven precision machining to high-efficiency fuel cells. She has a degree in general engineering with an emphasis in environmental sciences from Harvey Mudd College.",
      "Outside of work, Danielle sews, makes crafts, and hangs out with her cats.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/danielle-dubno-3a65b8190/" },
    ],
  },
];

const ADVISORS = [
  {
    name: "Robert Sachs",
    title: "Advisor",
    photo: "/team-bob.webp",
    bio: "Bob is one of the most well-known patent lawyers in Silicon Valley. He spent nearly 19 years as a partner at Fenwick & West, has published over 150 articles on patent eligibility and patent law, presented at over 30 conferences, and currently serves as Vice Chair of the Intellectual Property Owner's Section 101 Legislative Task Force. He has also participated in amicus briefs before the Federal Circuit and Supreme Court. His former clients include Google, Dreamworks, Dropbox, McKesson, PriceSCAN, and Vulcan.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/robertsachs/" },
    ],
  },
  {
    name: "Mehrad Yaghmai",
    title: "VC Advisor",
    photo: "/team-mehrad.webp",
    bio: "Mehrad is a partner at Cool Climate Collective, where he invests in and supports early-stage climate tech founders. Before that, he was the Program Director of Terra's Climate Change for VCs program and a partner at Climate Foundry. He has also mentored multiple Techstars cohorts.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mehrady/" },
    ],
  },
];

function SocialLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex items-center gap-5 mt-6">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-[13.5px] text-ink/50 hover:text-rust transition-colors sage-underline pb-0.5"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative bg-bg overflow-hidden" style={{ minHeight: "56vh" }}>
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[55%] z-0 pointer-events-none select-none overflow-hidden"
            style={{ background: "var(--bg)" }}
          >
            <div className="absolute inset-0">
              <Image
                src="/about-hero.jpg"
                alt=""
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
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
            style={{ minHeight: "56vh", paddingTop: "6rem", paddingBottom: "4rem" }}
          >
            <div className="max-w-[50%] md:max-w-[44%]">
              <Reveal>
                <h1
                  className="font-display font-normal leading-[0.95] tracking-[-0.045em]"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
                >
                  A patent agency built for the climate transition.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="large-body mt-7 text-ink/65 max-w-[36ch] leading-[1.5]">
                  We started CPC because climate tech founders deserve better than what the old model offers.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════ ORIGIN STORY ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="section-title max-w-[16ch]">
                  How we got here.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7 md:pt-3">
                <div
                  className="text-[16px] md:text-[17px] leading-[1.7] text-ink/72 space-y-5 max-w-[56ch] pl-7"
                  style={{ borderLeft: "2px solid var(--lime)" }}
                >
                  <p>
                    Alex spent his early career at Fenwick &amp; West drafting patents for
                    companies like Airbnb, Apple, Dropbox, Facebook, and Uber. The work was
                    technically interesting, but felt disconnected and impersonal. After Fenwick,
                    Alex moved to a boutique patent firm focused entirely on venture-backed
                    startups. There, he got much closer to real innovators and hands-on patent
                    strategy that works for fast-moving companies. But his clients were rarely
                    aligned with what he was passionate about.
                  </p>
                  <p>
                    The climate companies he did represent were different. Longer times to market,
                    more varied sources of funding, and a greater international focus.
                  </p>
                  <p>
                    So in 2023, Alex started the Climate Patent Collective. The thesis is
                    straightforward: climate tech startups deserve patent representation that
                    understands what makes the climate space unique and sticks with them through
                    every boom and bust of the climate tech funding cycle.
                  </p>
                  <p>
                    Three years later, we&rsquo;ve built a small team and a network of
                    accelerators and venture funds that refer their portfolio companies to us. We
                    file patents on direct air capture, ecosystem rehabilitation, EV charging,
                    heat pumps, and e-mobility, and everything in between.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════ TEAM ══════════════════ */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title mb-16">
                Meet the team.
              </h2>
            </Reveal>
            <div className="space-y-16">
              {TEAM.map((person, i) => (
                <Reveal key={person.name} delay={i * 100}>
                  <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start pb-16 border-b border-rule last:border-0 last:pb-0">
                    <div className="md:col-span-3">
                      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-bg-tint border border-rule relative">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-8 md:col-start-5">
                      <p className="text-[11px] tracking-[0.1em] uppercase font-medium text-ink/35 mb-2">
                        {person.title}
                      </p>
                      <h3 className="font-display font-medium text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.02em] mb-6">
                        {person.name}
                      </h3>
                      <div className="space-y-4">
                        {person.bio.map((p, j) => (
                          <p key={j} className="text-[15.5px] text-ink/72 leading-[1.7]">
                            {p}
                          </p>
                        ))}
                      </div>
                      <SocialLinks links={person.links} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ ADVISORS ══════════════════ */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-36`}>
            <Reveal>
              <h2 className="section-title mb-16">
                Advisors.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {ADVISORS.map((person, i) => (
                <Reveal key={person.name} delay={i * 100}>
                  <div>
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-bg-tint border border-rule mb-5 relative">
                      <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <p className="text-[11px] tracking-[0.1em] uppercase font-medium text-ink/35 mb-1">
                      {person.title}
                    </p>
                    <h3 className="font-display font-medium text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.018em] mb-4">
                      {person.name}
                    </h3>
                    <p className="text-[15px] text-ink/65 leading-[1.7]">{person.bio}</p>
                    <SocialLinks links={person.links} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
                Ready to build your portfolio?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[16px] md:text-[17px] text-white/55 max-w-[48ch] leading-[1.6] mb-10">
                Book a free 30-minute consultation. We&rsquo;ll map out exactly what you need
                and what it will cost — before you commit to anything.
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
