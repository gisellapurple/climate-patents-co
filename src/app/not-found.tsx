import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <p className="font-display text-[120px] md:text-[180px] leading-none tracking-[-0.04em] text-ink/8 select-none mb-6">
                404
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display font-normal text-[36px] sm:text-[48px] md:text-[56px] leading-[1.06] tracking-[-0.025em] max-w-[18ch]">
                This page doesn&rsquo;t exist.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-[16px] text-ink/55 max-w-[44ch] leading-[1.55]">
                You may have followed a broken link, or the page may have moved.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2.5 bg-ink text-bg pl-5 pr-4 py-3 rounded-md text-[13.5px] font-medium hover:bg-rust transition-colors"
                >
                  Go home
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-[15px] inline-flex items-center gap-1.5 sage-underline pb-0.5"
                >
                  Get in touch <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
