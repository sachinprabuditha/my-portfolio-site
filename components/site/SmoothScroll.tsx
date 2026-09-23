"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Pause/resume page scrolling (e.g. while a lightbox is open). Safe without Lenis. */
export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/** Scroll to an in-page target, honouring its CSS scroll-margin-top. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  // force: a menu link click runs while the open menu still has scrolling paused.
  if (lenis) lenis.scrollTo(el, { offset: -margin, force: true });
  else el.scrollIntoView({ behavior: "smooth" });
}

/**
 * Lenis smooth scrolling with the reference site's settings (1.2s, exponential ease-out).
 * Skipped for users who prefer reduced motion. Touch keeps native momentum scrolling
 * (Lenis only smooths wheel input by default).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    });

    // Route in-page anchor clicks through Lenis so they ease like wheel scrolling.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToId(id);
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
