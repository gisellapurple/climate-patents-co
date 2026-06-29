import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-[6px] bg-bg/85 border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-medium text-[16px] leading-none tracking-[-0.012em] hover:text-rust transition-colors"
        >
          Climate Patent Collective<span className="text-rust">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[14.5px]">
          <Link href="/services" className="hover:text-rust transition-colors">Services</Link>
          <Link href="/industries" className="hover:text-rust transition-colors">Industries</Link>
          <Link href="/case-studies" className="hover:text-rust transition-colors">Case studies</Link>
          <Link href="/pricing" className="hover:text-rust transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-rust transition-colors">About</Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-bg px-5 py-2.5 rounded-md text-[13.5px] font-medium hover:bg-rust transition-colors group"
        >
          Book a call
          <span className="inline-block transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule mt-0 bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display font-medium text-2xl leading-tight">
            Climate Patent Collective<span className="text-rust">.</span>
          </div>
          <p className="text-[14.5px] text-ink/65 mt-4 max-w-[40ch] leading-[1.6]">
            The only patent agency built for climate tech. Flat fees, fast filings, robust IP strategies.
          </p>
          <a
            href="mailto:alex@climatepatents.co"
            className="text-[14.5px] text-ink mt-6 inline-block sage-underline pb-0.5"
          >
            alex@climatepatents.co
          </a>
        </div>
        <FooterCol title="Services">
          <a href="/services">All services</a>
          <a href="/pricing">Pricing</a>
          <a href="/industries">Industries</a>
        </FooterCol>
        <FooterCol title="Company">
          <a href="/about">About</a>
          <a href="/case-studies">Case studies</a>
          <a href="/partners">Partners</a>
        </FooterCol>
        <FooterCol title="Connect">
          <a href="/contact">Book a call</a>
          <a href="mailto:alex@climatepatents.co">Email us</a>
        </FooterCol>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-5 flex items-center justify-between text-[12px] text-ink/55">
          <span>© {new Date().getFullYear()} Climate Patent Collective</span>
          <span className="italic text-sage">climatepatents.co</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[14px] font-medium italic text-sage mb-4">{title}</div>
      <div className="flex flex-col gap-2.5 text-[14px] [&_a:hover]:text-rust [&_a]:transition-colors">
        {children}
      </div>
    </div>
  );
}
