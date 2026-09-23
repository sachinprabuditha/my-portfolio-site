"use client";

import React from "react";
import { motion } from "framer-motion";

/** Infinite horizontal loop. Children are rendered twice so the -50% shift is seamless. */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

const RING_RADIUS = 40;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;
const MAX_RING_FONT = 10.5;

/**
 * Glassy circle with text running around its edge, like the reference's "Webflow expert" seal.
 * `items` are joined with bullets and loop once around the ring.
 */
export function RotatingBadge({
  items,
  size = 160,
  children,
  className = "",
}: {
  items: string[];
  size?: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const id = React.useId();
  const measureRef = React.useRef<SVGTextElement>(null);
  const [fontSize, setFontSize] = React.useState(8.5);
  // The trailing separator ends in a non-breaking space: SVG collapses a normal
  // trailing space, which left the last bullet jammed against the first word.
  const ringText = items.join(" • ") + " • ";

  // Size the text so its natural length is just under the circumference; textLength
  // then only has to add a little spacing (never squeeze letters together). Re-measured
  // once web fonts load, since the fallback font has different widths.
  React.useEffect(() => {
    const fit = () => {
      // Hidden copy at font-size 10 with no textLength, so this is the unstretched width.
      const natural = (measureRef.current?.getComputedTextLength() ?? 0) / 10;
      if (natural > 0) setFontSize(Math.min(MAX_RING_FONT, (RING_LENGTH * 0.94) / natural));
    };
    fit();
    document.fonts?.ready.then(fit);
  }, [ringText]);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full border border-white/20 backdrop-blur-[40px] ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute h-[62%] w-[62%] rounded-full bg-brand-cyan opacity-50 blur-[40px]" />
      <svg viewBox="0 0 100 100" className="absolute h-[86%] w-[86%] animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={id} d={`M50,50 m-${RING_RADIUS},0 a${RING_RADIUS},${RING_RADIUS} 0 1,1 ${RING_RADIUS * 2},0 a${RING_RADIUS},${RING_RADIUS} 0 1,1 -${RING_RADIUS * 2},0`} />
        </defs>
        <text ref={measureRef} fontSize={10} visibility="hidden" className="font-display font-medium uppercase">
          {ringText}
        </text>
        <text fontSize={fontSize} className="fill-white/90 font-display font-medium uppercase">
          <textPath href={`#${id}`} textLength={RING_LENGTH} lengthAdjust="spacing">
            {ringText}
          </textPath>
        </text>
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Fade + rise on first scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Section label: DM Sans 14px/500, 2px tracking, cyan→mint gradient (reference `.text-style-label`). */
export function Eyebrow({
  children,
  className = "",
  tone = "gradient",
}: {
  children: React.ReactNode;
  className?: string;
  /** "dark" for light backgrounds, where the cyan gradient has too little contrast. */
  tone?: "gradient" | "dark";
}) {
  return (
    <p
      className={`text-sm font-medium uppercase leading-[1.1] tracking-[0.125rem] ${
        tone === "dark" ? "text-black/60" : "text-gradient"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Reference `.main-button`: translucent teal gradient pill with a mint icon circle. */
export function MainButton({
  href,
  children,
  icon,
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-[1.375rem] rounded-[3.75rem] border border-white/[0.12] bg-[linear-gradient(98deg,#02b09b61,#5a89fd2e)] py-2 pl-6 pr-2 text-lg text-[#c6ffec] transition-all duration-500 hover:-translate-y-px hover:bg-[linear-gradient(98deg,#02b09b61,#02b09b33)] hover:shadow-[0_20px_40px_#2db58633] sm:pl-8 sm:text-xl ${className}`}
      {...rest}
    >
      {children}
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-mint text-black sm:h-14 sm:w-14">
        {icon}
      </span>
    </a>
  );
}

/** Counts from 0 to `to` when scrolled into view (reference uses jQuery counterUp, 1.8s). */
export function CountUp({ to, duration = 1800, className = "" }: { to: number; duration?: number; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [value, setValue] = React.useState(to);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Wordmark. `gradient` matches the reference's cyan→mint logo (top bar, preloader). */
export function Logo({ className = "", gradient = false }: { className?: string; gradient?: boolean }) {
  // Only apply the default size when the caller didn't pass one: two font-size utilities
  // on one element resolve by stylesheet order, not class order, so the override could lose.
  const hasSize = /(^|\s)text-(\[|xs|sm|base|lg|\d?xl)/.test(className);
  return (
    <span
      className={`font-display font-semibold tracking-tight ${hasSize ? "" : "text-xl"} ${gradient ? "text-gradient" : "text-white"} ${className}`}
    >
      sachin{gradient ? "." : <span className="text-gradient">.</span>}
    </span>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
