"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Services",      href: "/services"      },
  { label: "Industries",    href: "/industries"    },
  { label: "Case studies",  href: "/case-studies"  },
  { label: "Pricing",       href: "/pricing"       },
  { label: "About",         href: "/about"         },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-ink/5 transition-colors"
      >
        <span
          className="block w-5 h-px bg-ink transition-all duration-300 origin-center"
          style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
        />
        <span
          className="block w-5 h-px bg-ink transition-all duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-5 h-px bg-ink transition-all duration-300 origin-center"
          style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-bg pt-16 px-6 flex flex-col md:hidden"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col gap-1 pt-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[2rem] leading-[1.2] tracking-[-0.03em] text-ink py-3 border-b border-rule hover:text-rust transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 rounded-md text-[14px] font-medium hover:bg-lime hover:text-ink transition-colors"
            >
              Book a call →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
