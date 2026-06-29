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
      "Alex spent nearly a decade representing Silicon Valley startups from pre-seed through Series D, with clients including Airbnb, Apple, Dropbox, Facebook, and Uber. He started his career at Fenwick & West, then joined a boutique firm specializing in early-stage patent strategy before founding the Climate Patent Collective in 2022.",
      "His first climate tech project was as a student at Harvey Mudd College, where he designed instrumentation for heliostats in a solar-thermal field. He has drafted and prosecuted patents on everything from machine learning to material chemistry, and from 5G telecommunications to decentralized carbon credit platforms.",
      "Outside of work, Alex races triathlons and plays a lot of board games.",
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
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[22ch]">
                A patent agency built to make a difference to the problems that matter most.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Origin story */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className="md:col-span-5">
                <h2 className="font-display font-medium text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.022em] max-w-[16ch]">
                  We started a patent firm because the old one wasn&rsquo;t going to file your patents.
                </h2>
              </Reveal>
              <Reveal delay={180} className="md:col-span-6 md:col-start-7">
                <div className="text-[15.5px] md:text-[16px] leading-[1.7] text-ink/72 space-y-5 border-l-2 border-sage/30 pl-6">
                  <p>
                    Alex spent his early career at Fenwick &amp; West drafting patents for
                    companies like Airbnb, Apple, Dropbox, Facebook, and Uber. The work was
                    technically interesting and the paychecks were good. He also kept noticing
                    something. The same firm that gave Apple a dozen attorneys on a single deal
                    would barely return phone calls from the climate founders who couldn&rsquo;t
                    afford $1,500-an-hour billing.
                  </p>
                  <p>
                    After a decade of this, the math stopped working. The world had ten years to
                    halve emissions. The companies actually building the technology to do it were
                    getting the worst patent service in Silicon Valley, and often getting priced
                    out entirely.
                  </p>
                  <p>
                    So in 2023, Alex started the Climate Patent Collective. The thesis is
                    straightforward: climate tech startups deserve the same quality of patent
                    representation that Apple gets, at prices they can actually afford, from
                    people who care whether the technology ships.
                  </p>
                  <p>
                    Three years later, we&rsquo;ve built a small team and a network of
                    accelerators and venture funds who refer their portfolio companies to us. We
                    file patents on direct air capture, solid-state batteries, electrolyzers,
                    perovskite solar, AD biogas, and most of what you&rsquo;d find in the
                    climate stack.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em] mb-14">
                Meet the team
              </h2>
            </Reveal>
            <div className="space-y-16">
              {TEAM.map((person, i) => (
                <Reveal key={person.name} delay={i * 100}>
                  <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start pb-16 border-b border-rule last:border-0 last:pb-0">
                    {/* Headshot */}
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
                    {/* Bio */}
                    <div className="md:col-span-8 md:col-start-5">
                      <p className="text-[12px] text-sage uppercase tracking-wider font-medium mb-2">
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

        {/* Advisors */}
        <section className="bg-bg border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.022em] mb-14">
                Advisors
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {ADVISORS.map((person, i) => (
                <Reveal key={person.name} delay={i * 100}>
                  <div>
                    {/* Headshot */}
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-bg-tint border border-rule mb-5 relative">
                      <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <p className="text-[12px] text-sage uppercase tracking-wider font-medium mb-1">
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
