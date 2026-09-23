"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Globe } from "lucide-react";
import { SiFigma, SiFirebase, SiFlutter, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import { CountUp } from "./primitives";

/**
 * Reference "Experience" scene: the section is taller than the screen and its content
 * sticks, so scroll progress drives the pills, glow and cursor icon (keyframes and
 * resting positions taken from the reference's Webflow interaction).
 */
type PillDef = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  pos: string;
  from: { x?: number; y?: number; toX?: number };
  until: number;
};

const PILLS: PillDef[] = [
  // resting position, and the offset it starts from → reaches 0 at `until` (scroll progress)
  { name: "Flutter", Icon: SiFlutter, pos: "left-[27%] bottom-[58%] z-[5]", from: { y: 6 }, until: 0.65 },
  { name: "Firebase", Icon: SiFirebase, pos: "-left-[9%] bottom-[26%]", from: { x: 96 }, until: 0.59 },
  { name: "React", Icon: SiReact, pos: "-right-[9%] top-[33%]", from: { x: -80, toX: -32 }, until: 0.61 },
  { name: "Next.js", Icon: SiNextdotjs, pos: "right-[23%] -top-[12%]", from: { y: 7 }, until: 0.57 },
  { name: "Figma", Icon: SiFigma, pos: "right-[18%] -bottom-[10%]", from: { x: -128 }, until: 0.72 },
  { name: "Node.js", Icon: SiNodedotjs, pos: "left-[6%] -bottom-[16%] max-lg:hidden", from: { x: 48 }, until: 0.6 },
];

function Pill({ pill, progress }: { pill: PillDef; progress: MotionValue<number> }) {
  const { from, until } = pill;
  const x = useTransform(progress, [0.2, until], [from.x ?? 0, from.toX ?? 0]);
  const y = useTransform(progress, [0.2, until], [from.y ?? 0, 0]);
  return (
    // z-[2]: frosted pills float over the big text, as on the reference.
    <motion.div style={{ x, y }} className={`absolute z-[2] ${pill.pos}`}>
      <div className="flex cursor-none items-center gap-2 rounded-[3.75rem] border border-white/10 bg-[#5a89fd33] px-4 py-2.5 text-sm font-medium text-white backdrop-blur-[40px] md:px-7 md:py-3.5 md:text-lg">
        <pill.Icon className="h-4 w-4 md:h-5 md:w-5" />
        {pill.name}
      </div>
    </motion.div>
  );
}

function CursorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 3l7.5 18 2.4-7.1L21 11.5z" fill="#18ffb0" />
    </svg>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textScale = useTransform(scrollYProgress, [0.2, 0.6], [1, 0.95]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.73], [0.75, 1.25]);
  const cursorX = useTransform(scrollYProgress, [0.2, 0.6], ["2rem", "0rem"]);
  const cursorY = useTransform(scrollYProgress, [0.2, 0.6], ["2rem", "0rem"]);

  return (
    <section id="stats" ref={ref} className="relative pt-24 lg:h-[180vh] lg:pt-0">
      {/* overflow-x-clip below lg so the glow fades into the next section instead of being cut. */}
      <div className="flex items-center justify-center overflow-x-clip py-24 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:py-0">
        {/* Rings, rotating ball and glow */}
        <div className="pointer-events-none absolute flex items-center justify-center" aria-hidden="true">
          <motion.div style={{ scale: glowScale }} className="absolute h-[7.5rem] w-[25rem] rounded-full bg-brand-cyan blur-[100px]" />
          <div className="absolute h-[20rem] w-[20rem] rounded-full border border-dashed border-white opacity-30" />
          <div className="h-[32rem] w-[32rem] rounded-full border border-dashed border-white opacity-30 max-sm:h-[22rem] max-sm:w-[22rem]" />
          {/* A rotating square whose corner carries the ball around the outer ring. */}
          <div className="absolute h-[22rem] w-[23rem] animate-[spin-slow_16s_linear_infinite] max-sm:h-[15.5rem] max-sm:w-[15.5rem]">
            <span className="absolute -left-[1.8rem] -top-[0.6rem] flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-mint">
              <Globe className="h-5 w-5 animate-[spin-slow_10s_linear_infinite] text-black" />
            </span>
          </div>
        </div>

        <div className="relative z-[2] mx-auto w-[93%] max-w-5xl">
          <div className="relative mx-auto w-fit">
            <motion.p
              style={{ scale: textScale }}
              className="relative z-[1] flex flex-col items-center gap-1.5 text-center font-display text-[2.6rem] font-semibold uppercase leading-none text-white sm:text-6xl lg:text-[5.5rem]"
            >
              <span>
                <CountUp to={10} />+ Projects
              </span>
              <span>Shipped across</span>
              <span className="self-end">Mobile &amp; web</span>
            </motion.p>

            {/* Floating pills from sm up; on phones they'd cover the text, so they sit in a row below. */}
            <div className="max-sm:hidden">
              {PILLS.map((pill) => (
                <Pill key={pill.name} pill={pill} progress={scrollYProgress} />
              ))}
            </div>
            <ul className="relative z-[2] mt-10 flex flex-wrap justify-center gap-2 sm:hidden">
              {PILLS.map(({ name, Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-[3.75rem] border border-white/10 bg-[#5a89fd33] px-4 py-2.5 text-sm font-medium text-white backdrop-blur-[40px]"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </li>
              ))}
            </ul>

            <motion.div style={{ x: cursorX, y: cursorY }} className="absolute -bottom-24 right-[8%] z-[3] max-sm:hidden">
              <CursorIcon className="h-8 w-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
