"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const overlay = mounted && open
    ? createPortal(
        <div
          className="fixed inset-0 z-[35] flex flex-col px-6 pt-20"
          style={{ backgroundColor: "#F5F3EC" }}
        >
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[2.2rem] leading-[1.2] tracking-[-0.03em] text-ink py-3 border-b border-rule hover:text-rust transition-colors"
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
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden relative z-[50] flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-ink/5 transition-colors"
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
      {overlay}
    </>
  );
}
