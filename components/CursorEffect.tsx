"use client";

import React, { useEffect, useState } from "react";
import SplashCursor from "./ui/SplashCursor";

/**
 * Mount point for the React Bits fluid cursor.
 *
 * Two site-specific concerns handled here rather than in the vendored file:
 *  - prefers-reduced-motion: the sim is continuous full-screen motion, so it is
 *    skipped entirely for users who ask for reduced motion.
 *  - z-index: the header, back-to-top button and certificate lightbox all sit at
 *    z-50. The canvas renders after them in the DOM, so at its default z-50 it
 *    would paint over all three. z-30 keeps it above page content, below chrome.
 */
export default function CursorEffect() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (!enabled) return null;

  return <SplashCursor ZINDEX={30} />;
}
