"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { SiDocker, SiFlutter, SiNextdotjs } from "react-icons/si";
import { BrainCircuit } from "lucide-react";
import { stripBadges } from "@/data/site";

const ICONS = {
  flutter: SiFlutter,
  next: SiNextdotjs,
  docker: SiDocker,
  ai: BrainCircuit,
} as const;

const DRIFT_PX_PER_S = 25; // idle movement
const SCROLL_FACTOR = 0.6; // extra movement per pixel scrolled

function BadgeSet() {
  return (
    <div className="flex flex-none flex-col items-center gap-8 pb-8">
      {stripBadges.map(({ label, icon }) => {
        const Icon = ICONS[icon];
        return (
          <div key={label} className="flex flex-col items-center gap-8">
            <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-black text-black xl:h-20 xl:w-20">
              <Icon className="h-7 w-7 xl:h-8 xl:w-8" />
            </span>
            <span className="font-display text-[3.25rem] font-medium uppercase leading-none text-black [writing-mode:vertical-rl] xl:text-[4.25rem]">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Fixed white column on the right edge (desktop only). The badge column loops
 * endlessly: it drifts slowly on its own and is pushed along by page scroll,
 * running backwards when the user scrolls up.
 */
export default function SideStrip() {
  const setRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const offset = useRef(0);
  const lastScroll = useRef(0);
  const drift = useRef(DRIFT_PX_PER_S);

  useEffect(() => {
    lastScroll.current = window.scrollY;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) drift.current = 0;
  }, []);

  useAnimationFrame((_, delta) => {
    const setHeight = setRef.current?.offsetHeight ?? 0;
    if (!setHeight) return;
    const scroll = window.scrollY;
    offset.current += (delta / 1000) * drift.current + (scroll - lastScroll.current) * SCROLL_FACTOR;
    lastScroll.current = scroll;
    // Wrap into [0, setHeight) so the duplicated set makes the loop seamless.
    const wrapped = ((offset.current % setHeight) + setHeight) % setHeight;
    y.set(-wrapped);
  });

  return (
    <aside
      aria-label="Specialities"
      className="fixed inset-y-0 right-0 z-40 hidden w-[var(--strip-w)] overflow-hidden bg-white lg:block"
    >
      <motion.div style={{ y }} className="flex flex-col pt-6">
        <div ref={setRef}>
          <BadgeSet />
        </div>
        <div aria-hidden="true">
          <BadgeSet />
        </div>
        <div aria-hidden="true">
          <BadgeSet />
        </div>
      </motion.div>
    </aside>
  );
}
