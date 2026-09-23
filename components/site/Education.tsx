"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/site";
import { Eyebrow, Reveal } from "./primitives";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-brand-cyan opacity-40 blur-[180px]" />

      <div className="relative mx-auto w-[93%] max-w-7xl">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Education</Eyebrow>
            <h2 className="font-display text-5xl font-normal leading-none text-white md:text-7xl">
              Where I learned
            </h2>
          </div>
          <p className="max-w-xs text-white/60">
            The foundations behind the work — from maths and physics to software engineering.
          </p>
        </Reveal>

        <ul className="border-t border-white/15">
          {education.map((item, i) => (
            <motion.li
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-6 border-b border-white/15 py-10 md:grid-cols-[6rem_1fr_auto] md:gap-10"
            >
              <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white md:h-24 md:w-24">
                <Image src={item.logo} alt={`${item.institution} logo`} fill sizes="6rem" className="object-contain p-3" />
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl font-medium leading-tight text-white transition-colors group-hover:text-brand-cyan md:text-[2rem]">
                  {item.degree}
                </h3>
                <p className="text-lg text-white/80">{item.institution}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex gap-3 text-white/60">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-mint" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="text-sm uppercase tracking-[0.125rem] text-white/60 md:pt-2 md:text-right">
                {item.period}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
