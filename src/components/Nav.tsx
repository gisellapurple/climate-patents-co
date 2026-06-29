import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-[6px] bg-cream/80 border-b border-ink/10">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[22px] leading-none tracking-tight">
          Climate Patent Collective<span className="text-orange">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[13px]">
          <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
          <Link href="/industries" className="hover:text-orange transition-colors">Industries</Link>
          <Link href="/case-studies" className="hover:text-orange transition-colors">Case studies</Link>
          <Link href="/about" className="hover:text-orange transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-orange transition-colors">Pricing</Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-[13px] border-b border-ink/40 pb-0.5 hover:border-orange hover:text-orange transition-colors"
        >
          Book consultation <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/15 mt-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display text-3xl leading-tight">
            Climate Patent <br /> Collective<span className="text-orange">.</span>
          </div>
          <p className="text-[15px] text-ink/65 mt-6 max-w-[36ch]">
            The only patent agency built for climate tech. Flat fees, fast filings, robust IP
            strategy.
          </p>
          <a
            href="mailto:alex@climatepatents.co"
            className="text-[15px] text-ink/75 hover:text-orange mt-8 inline-block border-b border-ink/30 hover:border-orange pb-0.5"
          >
            alex@climatepatents.co
          </a>
        </div>
        <FooterCol title="Services">
          <a href="/services/patent-strategy">Strategy</a>
          <a href="/services/patent-drafting">Drafting</a>
          <a href="/services/patent-prosecution">Prosecution</a>
        </FooterCol>
        <FooterCol title="Company">
          <a href="/about">About</a>
          <a href="/case-studies">Case studies</a>
          <a href="/for-partners">Partners</a>
        </FooterCol>
        <FooterCol title="Get in touch">
          <a href="/contact">Book a call</a>
          <a href="/pricing">Pricing</a>
        </FooterCol>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 py-6 flex items-center justify-between text-[11px] text-ink/55 font-mono tracking-wider">
          <span>© {new Date().getFullYear()} Climate Patent Collective</span>
          <span>climatepatents.co</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <div className="font-mono text-[11px] tracking-[0.14em] text-ink/55 mb-5">{title}</div>
      <div className="flex flex-col gap-2.5 text-[15px] [&_a:hover]:text-orange [&_a]:transition-colors">
        {children}
      </div>
    </div>
  );
}
