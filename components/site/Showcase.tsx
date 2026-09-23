"use client";

import Image from "next/image";
import { projects } from "@/data/site";
import { Marquee, Reveal, RotatingBadge } from "./primitives";

const rows = [projects.slice(0, 4), projects.slice(4, 7), projects.slice(7)];

/**
 * Reference "about video" block: a wide rounded media panel (dimmed to 60%) with a huge
 * name marquee overlapping its bottom edge, spinning seals between each repeat.
 * With no showreel video, the panel shows the project screenshots drifting in rows.
 */
export default function Showcase() {
  return (
    // Transparent (main is already black) so the Stats glow above can fade through.
    <section id="showcase" className="relative overflow-x-clip pt-12" aria-label="Project showcase">
      <Reveal className="mx-auto w-[93%] max-w-7xl">
        <div className="relative h-[56vw] max-h-[42rem] overflow-hidden rounded-[1.25rem] bg-brand-deep lg:h-[36vw]">
          <div className="absolute inset-0 flex -rotate-3 scale-110 flex-col justify-center gap-4 opacity-60" aria-hidden="true">
            {rows.map((row, r) => (
              <Marquee key={r} duration={60 + r * 15} reverse={r === 1}>
                {row.map((p) => (
                  <div key={p.title} className="relative mr-4 aspect-video w-[16rem] flex-none overflow-hidden rounded-lg sm:w-[24rem]">
                    <Image src={p.img} alt="" fill sizes="24rem" className="object-cover" />
                  </div>
                ))}
              </Marquee>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />
        </div>
      </Reveal>

      {/* Name loop (reference: 8.125rem Space Grotesk, 20s), pulled up over the panel. */}
      <div className="relative z-[3] -mt-12 sm:-mt-20">
        <Marquee duration={20}>
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center gap-[3.75rem] pr-[3.75rem]">
              <span className="whitespace-nowrap font-display text-6xl leading-none text-white sm:text-8xl lg:text-[8.125rem]">
                Sachin Prabuditha
              </span>
              <RotatingBadge items={["Software engineer", "Flutter", "Next.js"]} size={140}>
                <span className="font-display text-xl font-semibold text-white">SP</span>
              </RotatingBadge>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
