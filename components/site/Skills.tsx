"use client";

import Image from "next/image";
import { skillsData } from "@/lib/data";
import { Eyebrow, Marquee, Reveal } from "./primitives";

// Vercel's mark is pure black and would vanish on the dark tiles.
const INVERT = new Set(["Vercel"]);

const half = Math.ceil(skillsData.length / 2);
const rows = [skillsData.slice(0, half), skillsData.slice(half)];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-16 mx-auto h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,#18ffb0,transparent_70%)] opacity-25 blur-[50px]" />

      <Reveal className="relative mx-auto mb-16 flex w-[93%] max-w-3xl flex-col items-center gap-6 text-center text-white">
        <Eyebrow>Toolkit</Eyebrow>
        <h2 className="font-display text-5xl font-normal leading-none md:text-7xl">Tools I build with</h2>
      </Reveal>

      <div className="relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {rows.map((row, r) => (
          <Marquee key={r} duration={50} reverse={r === 1}>
            {row.map((skill) => (
              <div
                key={skill.name}
                className="mx-3 flex h-36 w-44 flex-none flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-[#5a89fd0d] backdrop-blur-md md:h-44 md:w-56"
              >
                <Image
                  src={skill.icon.src}
                  alt=""
                  width={48}
                  height={48}
                  className={`h-12 w-12 object-contain ${INVERT.has(skill.name) ? "invert" : ""}`}
                />
                <span className="text-sm font-medium text-white/80">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
