"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shared building blocks for the editorial / cinematic layout.
 * The reference design repeats three things everywhere:
 *   1. a tiny wide-tracked uppercase eyebrow label
 *   2. a heading that mixes an upright sans with an italic-serif accent
 *   3. a small outlined pill button with a trailing arrow
 */

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em] text-white/40 ${className}`}
    >
      {children}
    </span>
  );
}

/** Accent word(s) inside a heading — italic serif, optical size bump. */
export function Accent({ children }: { children: React.ReactNode }) {
  return (
    // Instrument Serif is loaded as the italic face, so no CSS `italic` here —
    // that would synthetically slant an already-italic font.
    <em className="font-serif not-italic font-normal tracking-normal">
      {children}
    </em>
  );
}

export function PillButton({
  children,
  href,
  onClick,
  variant = "outline",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "solid";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 whitespace-nowrap";
  const styles =
    variant === "solid"
      ? "bg-white text-ink-950 hover:bg-white/90"
      : "border border-white/20 text-white/80 hover:text-white hover:border-white/50 hover:bg-white/5";

  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
      {inner}
    </button>
  );
}

/** Section shell: consistent vertical rhythm + max width. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

/** Fades content up as it scrolls into view — used across every section. */
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
