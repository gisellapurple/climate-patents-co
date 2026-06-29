"use client";

import { useEffect } from "react";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const PAGE = "mx-auto max-w-[1280px] px-6 md:px-10";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-bg">
          <div className={`${PAGE} pt-20 md:pt-28 pb-24 md:pb-32`}>
            <Reveal>
              <h1 className="font-display font-normal text-[42px] sm:text-[58px] md:text-[68px] leading-[1.02] tracking-[-0.025em] max-w-[14ch]">
                Let&rsquo;s talk.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-[16px] md:text-[17px] text-ink/65 max-w-[52ch] leading-[1.55]">
                Book a free 30-minute consultation. We&rsquo;ll talk through your technology
                and your roadmap, and you&rsquo;ll leave knowing whether we&rsquo;re the right fit.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Booking widget */}
        <section className="bg-bg-alt border-t border-rule">
          <div className={`${PAGE} py-24 md:py-32`}>
            <Reveal>
              <div className="rounded-2xl border border-rule overflow-hidden bg-bg">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/alex-flake/30-minute-consultation"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </Reveal>

            {/* Below widget row */}
            <div className="mt-12 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              {/* Left: Other ways to reach us */}
              <Reveal delay={120} className="md:col-span-4">
                <h2 className="font-display font-medium text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.022em] mb-5">
                  Other ways to reach us
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-[12px] text-ink/40 uppercase tracking-wider font-medium">Email</span>
                    <p className="mt-1">
                      <a
                        href="mailto:alex@climatepatents.co"
                        className="text-[15px] text-ink/80 hover:text-rust transition-colors"
                      >
                        alex@climatepatents.co
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-ink/40 uppercase tracking-wider font-medium">LinkedIn</span>
                    <p className="mt-1">
                      <a
                        href="#"
                        className="text-[15px] text-ink/80 hover:text-rust transition-colors"
                      >
                        Alex Flake
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-sage uppercase tracking-wider font-medium">Referred by a partner?</span>
                    <p className="mt-1 text-[14.5px] text-ink/60 leading-[1.65]">
                      If an accelerator or VC partner referred you, mention it during your
                      consultation. You get 10% off all flat fees.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Right: No commitment */}
              <Reveal delay={220} className="md:col-span-5 md:col-start-7">
                <div className="border-l-2 border-sage/30 pl-6">
                  <p className="text-[15px] text-ink/65 leading-[1.65]">
                    There&rsquo;s no commitment to engage after the consultation. If
                    we&rsquo;re not the right fit, we&rsquo;ll often refer you to
                    someone who is.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
