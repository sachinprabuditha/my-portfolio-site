"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo, useMediaQuery } from "./primitives";

const DURATION_MS = 2000; // reference: fill + counter run for 2s

/**
 * Reference preloader: a dim wordmark that fills with the gradient left-to-right, a
 * 1px bar with a mint→cyan fill, and "… Loading N%". The whole screen then slides up.
 */
export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  // Users who prefer reduced motion skip the intro entirely.
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const done = finished || reducedMotion;

  useEffect(() => {
    if (reducedMotion) return;
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      setProgress(Math.round((1 - Math.pow(1 - t, 2)) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setTimeout(() => setFinished(true), 200);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          aria-hidden="true"
        >
          <div className="absolute h-60 w-60 rounded-full bg-brand-cyan opacity-80 blur-[150px] max-md:h-20 max-md:w-20" />

          <div className="relative z-10 flex flex-col items-center gap-12 text-white/60">
            {/* Wordmark: 30% white base with the gradient copy revealed by width. */}
            <div className="relative">
              <Logo className="text-5xl opacity-30" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${progress}%` }}>
                <Logo gradient className="whitespace-nowrap text-5xl" />
              </div>
            </div>

            <div className="h-px w-[min(24rem,70vw)] overflow-hidden bg-[#515153]">
              <div
                className="h-full bg-[linear-gradient(98deg,#18ffb0,#2cf8ff_82%,#30ba9b00_101%)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-base">
              Software Engineer&nbsp;&nbsp;–&nbsp;&nbsp;Loading <span className="tabular-nums">{progress}</span>%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
