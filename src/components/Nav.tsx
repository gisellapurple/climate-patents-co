import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-cream/85 border-b border-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight">
          Climate Patent Collective<span className="text-orange">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
          <Link href="/industries" className="hover:text-orange transition-colors">Industries</Link>
          <Link href="/case-studies" className="hover:text-orange transition-colors">Case studies</Link>
          <Link href="/about" className="hover:text-orange transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-orange transition-colors">Pricing</Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-orange text-cream text-sm px-4 py-2 rounded-[4px] hover:brightness-110 transition"
        >
          Book consultation
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/15 mt-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Climate Patent Collective<span className="text-orange">.</span></div>
          <p className="text-sm text-ink/65 mt-3 max-w-[36ch]">
            The only patent agency built for climate tech. Flat fees, fast filings, real strategy.
          </p>
          <a
            href="mailto:alex@climatepatents.co"
            className="text-sm text-ink/70 hover:text-orange mt-6 inline-block"
          >
            alex@climatepatents.co
          </a>
        </div>
        <FooterCol title="Services">
          <a href="/services/patent-strategy">Patent strategy</a>
          <a href="/services/patent-drafting">Drafting</a>
          <a href="/services/patent-prosecution">Prosecution</a>
        </FooterCol>
        <FooterCol title="Company">
          <a href="/about">About</a>
          <a href="/case-studies">Case studies</a>
          <a href="/for-partners">For partners</a>
        </FooterCol>
        <FooterCol title="Get in touch">
          <a href="/contact">Book consultation</a>
          <a href="/pricing">Pricing</a>
        </FooterCol>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-6 flex items-center justify-between text-xs text-ink/55 font-mono">
          <span>© {new Date().getFullYear()} Climate Patent Collective</span>
          <span>Built for climate founders.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-wider text-ink/55 mb-4">{title}</div>
      <div className="flex flex-col gap-2 text-sm [&_a:hover]:text-orange [&_a]:transition-colors">
        {children}
      </div>
    </div>
  );
}
