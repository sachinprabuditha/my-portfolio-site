"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { contact } from "@/data/site";
import { ArrowUpRight, Logo, Marquee, useMediaQuery } from "./primitives";

const socials = [
  { name: "Email", href: `mailto:${contact.email}`, Icon: HiOutlineMail },
  { name: "WhatsApp", href: contact.whatsapp, Icon: FaWhatsapp },
  { name: "LinkedIn", href: contact.linkedin, Icon: FaLinkedinIn },
  { name: "GitHub", href: contact.github, Icon: FaGithub },
];

/**
 * Reference footer CTA: the mint circle is scaled to 0 until the "Let's talk" band is
 * hovered, then grows in and follows the cursor (x across the viewport, y ±100px).
 * On touch screens there is no hover, so it simply stays visible in the centre.
 */
function LetsTalk() {
  const ref = useRef<HTMLAnchorElement>(null);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(Math.max(-100, Math.min(100, e.clientY - (rect.top + rect.height / 2))));
  };

  const visible = !finePointer || hovered;

  return (
    <a
      ref={ref}
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Let's talk on WhatsApp"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      onPointerMove={finePointer ? onMove : undefined}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`relative flex items-center justify-center ${finePointer ? "cursor-none" : ""}`}
    >
      <Marquee duration={18}>
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap pr-12 font-display text-[6rem] font-semibold uppercase leading-[0.8] text-white md:text-[12rem] xl:text-[18.75rem]"
          >
            Let&apos;s Talk –
          </span>
        ))}
      </Marquee>
      <motion.span
        style={{ x: sx, y: sy }}
        animate={{ scale: visible ? 1 : 0 }}
        transition={{ duration: visible ? 0.3 : 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="pointer-events-none absolute z-10 flex h-24 w-24 items-center justify-center rounded-full bg-brand-mint text-black md:h-[7.5rem] md:w-[7.5rem]"
      >
        <ArrowUpRight className="h-7 w-7" />
      </motion.span>
    </a>
  );
}

/**
 * Full-height footer. It is sticky to the bottom of the page and sits under the
 * main content, so it is "revealed" as the content above scrolls away.
 */
export default function Footer() {
  return (
    <footer className="relative z-0 flex flex-col justify-center gap-12 overflow-hidden bg-black pb-8 pt-24 md:sticky md:bottom-0 md:min-h-screen md:gap-16 md:pt-32">
      <LetsTalk />

      <div className="mx-auto flex w-[93%] max-w-7xl flex-col gap-12">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/20 md:flex md:rounded-full">
          {socials.map(({ name, href, Icon }, i) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`flex flex-1 items-center justify-center gap-2 py-6 font-medium uppercase text-white transition-colors duration-200 hover:bg-[#1df7ff1a] ${
                i < socials.length - 1 ? "md:border-r md:border-white/20" : ""
              } ${i % 2 === 0 ? "border-r border-white/20" : ""} ${i < 2 ? "border-b border-white/20 md:border-b-0" : ""}`}
            >
              <Icon className="h-4 w-4" />
              {name}
              <ArrowUpRight className="h-4 w-4 max-sm:hidden" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-[1.375rem]">
            <Logo className="text-[1.75rem]" />
            {/* Reference: the mint line lives under the email and wipes across on hover. */}
            <a href={`mailto:${contact.email}`} className="group flex flex-col gap-1 text-white transition-colors hover:text-[#b3b3b3] max-md:text-xl">
              {contact.email}
              <span className="h-px w-full bg-brand-mint group-hover:animate-wipe" />
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            {/* Year is baked in at build time; the client may be in a later year. */}
            <span suppressHydrationWarning>
              Sachin Prabuditha&nbsp;&nbsp;|&nbsp;&nbsp;© {new Date().getFullYear()} All Rights Reserved
            </span>
            <a href="#home" className="flex items-center gap-2 text-white transition-opacity hover:opacity-60">
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
