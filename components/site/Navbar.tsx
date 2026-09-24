"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact, navLinks } from "@/data/site";
import { ArrowUpRight, Logo } from "./primitives";
import { lockScroll } from "./SmoothScroll";

const menuLinks = [...navLinks, { name: "Contact", id: "contact" }];

/** Scroll-spy: id of the section crossing the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    // Sections without a nav link are observed too, so nothing stays highlighted over them.
    [...menuLinks.map((l) => l.id), "stats", "showcase", "career", "skills"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

/** Reference `.top-button`: dark pill, mint dot, "Available for work" scrolling inside a faded window. */
function AvailablePill() {
  const phrase = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className="whitespace-nowrap leading-none text-white">
      Available for work
    </span>
  ));
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Available for work - chat on WhatsApp"
      className="flex items-center gap-3.5 overflow-hidden rounded-[3.75rem] border border-white/10 bg-[#041718] px-6 py-4 transition-colors hover:border-brand-mint/40"
    >
      <span className="relative flex h-2 w-2 flex-none">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-mint/60" />
        <span className="relative h-2 w-2 rounded-full bg-brand-mint" />
      </span>
      <span className="relative flex w-[7.5rem] overflow-hidden text-sm" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 z-10 w-4 bg-[linear-gradient(92deg,#041718,transparent)]" />
        <span className="absolute inset-y-0 right-0 z-10 w-4 bg-[linear-gradient(92deg,transparent,#041718)]" />
        <span className="flex flex-none animate-marquee gap-4 pr-4" style={{ "--marquee-duration": "13s" } as React.CSSProperties}>
          {phrase}
          {phrase}
        </span>
      </span>
    </a>
  );
}

/** Desktop header row inside the hero (not fixed): logo, secondary links, availability pill. */
export function TopBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 hidden lg:block">
      <div className="mx-auto flex w-[93%] max-w-7xl items-center justify-between pt-5">
        <a href="#home" aria-label="Sachin Prabuditha - home">
          <Logo className="text-[1.75rem]" />
        </a>
        <div className="flex items-center gap-12">
          <nav aria-label="Profiles" className="flex items-center gap-8">
            <a href={contact.cv} download="Sachin_Prabuditha-CV.pdf" className="text-white/80 transition-colors hover:text-white">
              Download CV
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white">
              LinkedIn
            </a>
          </nav>
          <AvailablePill />
        </div>
      </div>
    </div>
  );
}

/**
 * Reference `.navbar.is-home-page`: sits right after the hero and sticks 2rem from the
 * top once scrolled to. Zero net height (negative margin) so it overlays the next section.
 */
export function StickyNav() {
  const active = useActiveSection();
  return (
    <div className="pointer-events-none sticky top-8 z-50 -mb-[4.25rem] hidden h-[4.25rem] justify-center px-4 lg:flex">
      <nav
        aria-label="Main"
        className="pointer-events-auto flex items-center rounded-[5rem] border border-white/10 bg-[#04130e80] p-2.5 backdrop-blur-[30px]"
      >
        {navLinks.map(({ name, id }) => (
          <Fragment key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`mx-5 whitespace-nowrap border-b py-2 text-sm uppercase leading-none tracking-[0.125rem] transition-colors duration-200 2xl:mx-7 ${
                active === id ? "text-gradient border-brand-mint" : "border-transparent text-white hover:text-brand-cyan"
              }`}
            >
              {name}
            </a>
            <span className="h-6 w-px bg-white/10" aria-hidden="true" />
          </Fragment>
        ))}
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5 flex items-center gap-2 whitespace-nowrap py-2 text-sm uppercase leading-none tracking-[0.125rem] text-white transition-colors hover:text-brand-cyan 2xl:mx-7"
        >
          GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </nav>
    </div>
  );
}

/** Below lg: compact fixed bar (logo, hire me, menu) with a dropdown of every section. */
export function MobileNav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close on Escape or outside click; pause page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    lockScroll(true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      lockScroll(false);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 lg:hidden">
      <div className="relative w-full max-w-[60rem]">
        <div className="flex items-center gap-2.5 rounded-[5rem] border border-white/10 bg-[#04130ecc] p-2.5 backdrop-blur-[30px]">
          <a href="#home" className="shrink-0 pl-4 pr-2" aria-label="Sachin Prabuditha - back to top">
            <Logo gradient />
          </a>
          <a
            href="#contact"
            className="ml-auto flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#041718] px-5 py-3.5 text-sm text-white"
          >
            <span className="h-2 w-2 rounded-full bg-brand-mint" />
            <span className="hidden sm:inline">Available for work</span>
            <span className="sm:hidden">Hire me</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-1.5 rounded-full border border-white/10"
          >
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              id="mobile-menu"
              data-lenis-prevent
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full mt-2 flex max-h-[calc(100svh-7rem)] flex-col overflow-y-auto rounded-3xl border border-white/10 bg-[#04130ef2] p-3 backdrop-blur-[30px]"
            >
              {menuLinks.map(({ name, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "true" : undefined}
                    className={`block rounded-2xl px-5 py-4 text-sm uppercase tracking-[0.125rem] transition-colors hover:bg-white/5 ${
                      active === id ? "text-gradient" : "text-white"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl px-5 py-4 text-sm uppercase tracking-[0.125rem] text-white hover:bg-white/5"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
