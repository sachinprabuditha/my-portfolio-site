"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { certificates } from "@/data/site";
import { ArrowRight, ArrowUpRight, Eyebrow, Reveal } from "./primitives";
import { lockScroll } from "./SmoothScroll";

type Certificate = (typeof certificates)[number];

const AUTOPLAY_MS = 3500;

/**
 * Reference "Partners" carousel (Swiper): prev/next controls, autoplay, and a thin
 * draggable progress bar under the slides. Cards are grayscale until hovered.
 */
export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });
  const [scrollable, setScrollable] = useState(false);
  const paused = useRef(false);

  const measure = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    const width = (t.clientWidth / t.scrollWidth) * 100;
    setScrollable(max > 2);
    setThumb({ width, left: max > 0 ? (t.scrollLeft / max) * (100 - width) : 0 });
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 32 : 320;
    const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    // Autoplay/next wraps back to the first slide at the end.
    if (dir === 1 && atEnd) t.scrollTo({ left: 0, behavior: "smooth" });
    else t.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Autoplay while there is something to scroll; paused on hover, focus, drag or lightbox.
  useEffect(() => {
    if (!scrollable || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current && !selected && !document.hidden) step(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [scrollable, selected, step]);

  // Dragging the bar's thumb scrubs the track.
  const onThumbDown = (e: React.PointerEvent) => {
    const t = trackRef.current;
    const bar = barRef.current;
    if (!t || !bar) return;
    e.preventDefault();
    paused.current = true;
    const startX = e.clientX;
    const startScroll = t.scrollLeft;
    const ratio = t.scrollWidth / bar.clientWidth;
    const move = (ev: PointerEvent) => {
      t.scrollLeft = startScroll + (ev.clientX - startX) * ratio;
    };
    const up = () => {
      paused.current = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // Escape closes the lightbox; page scroll is paused while it is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    lockScroll(true);
    document.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      document.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  const controlClass =
    "flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#0d2f37] text-white transition-colors hover:bg-black disabled:opacity-60";

  return (
    <section
      id="certificates"
      className="relative z-[2] overflow-hidden bg-brand-offwhite py-24 shadow-[0_20px_200px_#2cf8ff80] md:py-32"
    >
      <div className="mx-auto w-[93%] max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between gap-8 border-b border-[#06060926] pb-8 text-black">
            <div className="flex flex-col gap-6">
              <Eyebrow tone="dark">Credentials</Eyebrow>
              <h2 className="font-display text-6xl font-normal leading-none sm:text-8xl lg:text-[7.25rem]">Certificates</h2>
            </div>
            {scrollable && (
              <div className="hidden gap-2 sm:flex">
                <button type="button" onClick={() => step(-1)} aria-label="Previous certificate" className={controlClass}>
                  <ArrowRight className="h-5 w-5 rotate-180" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next certificate" className={controlClass}>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
          <p className="mt-8 max-w-4xl text-xl leading-normal text-black md:text-[1.75rem]">
            Continuous learning alongside day-to-day engineering — from DevOps pipelines to applied machine learning.
          </p>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        onScroll={measure}
        onPointerEnter={() => (paused.current = true)}
        onPointerLeave={() => (paused.current = false)}
        onFocusCapture={() => (paused.current = true)}
        onBlurCapture={() => (paused.current = false)}
        // Same inset as the page's centred content column (w-[93%] max-w-7xl), so the first
        // card lines up with the heading at every width.
        className="no-scrollbar mt-12 snap-x snap-mandatory overflow-x-auto scroll-pl-[max(3.5%,calc((100%-80rem)/2))] md:mt-16"
      >
        {/* % padding resolves against the track (= content width), matching the column inset. */}
        <ul className="flex w-max gap-8 px-[max(3.5%,calc((100%-80rem)/2))]">
          {certificates.map((cert) => (
            <li key={cert.title} className="flex w-[80vw] flex-none snap-start flex-col gap-4 sm:w-[26rem]">
              <button
                type="button"
                onClick={() => setSelected(cert)}
                aria-label={`View ${cert.title} certificate`}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-white"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(min-width: 640px) 26rem, 80vw"
                  className="object-contain p-4 grayscale transition-[filter] duration-200 group-hover:grayscale-[10%]"
                />
                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
              <div className="flex flex-col gap-2 text-[#060609b3]">
                <h3 className="text-xl font-semibold leading-tight text-black md:text-2xl">{cert.title}</h3>
                <p className="text-sm">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Reference `.swiper-drag-wrapper`: 1px track with a draggable 12px pill. */}
      <div className="mx-auto mt-12 w-[93%] max-w-7xl">
        <div ref={barRef} className="relative h-px w-full bg-[#06060966]">
          <div
            role="presentation"
            onPointerDown={onThumbDown}
            className="absolute -top-[5.5px] h-3 cursor-grab touch-none rounded-[1.25rem] bg-brand-deep transition-[left] duration-100 active:cursor-grabbing"
            style={{ left: `${thumb.left}%`, width: `${thumb.width}%` }}
          />
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            data-lenis-prevent
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate`}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-brand-deep"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={850}
                className="max-h-[75vh] w-full bg-black object-contain"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 text-white">
                <div>
                  <h3 className="font-display text-lg font-medium">{selected.title}</h3>
                  <p className="text-sm text-white/60">{selected.issuer}</p>
                </div>
                <span className="text-sm text-white/60">{selected.date}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                autoFocus
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white hover:bg-black"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
