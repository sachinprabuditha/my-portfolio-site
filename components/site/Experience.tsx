"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { Eyebrow, Reveal } from "./primitives";

export default function Experience() {
  return (
    // overflow-x-clip (not hidden): contains the glow without breaking the sticky heading.
    <section id="experience" className="relative overflow-x-clip bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-brand-cyan opacity-30 blur-[180px]" />

      <div className="relative mx-auto grid w-[93%] max-w-7xl gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-40 lg:self-start">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-display text-5xl font-normal leading-none text-white md:text-7xl">
            Where I&apos;ve been building
          </h2>
          <p className="max-w-sm text-brand-muted">
            Shipping fintech mobile apps for banks and financial institutions in Sri Lanka.
          </p>
        </Reveal>

        <ul className="border-t border-white/15">
          {experience.map((role, i) => (
            <motion.li
              key={role.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ y: { duration: 0.5, delay: i * 0.1 }, opacity: { duration: 0.75, delay: i * 0.1 } }}
              className="group border-b border-white/15 py-10"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm uppercase tracking-[0.125rem] text-white/60">{role.period}</span>
                <span className="rounded-full border border-brand-mint/30 px-3 py-1 text-xs text-brand-mint">{role.type}</span>
              </div>
              <h3 className="font-display text-3xl font-normal uppercase leading-[1.1] text-white transition-colors group-hover:text-brand-cyan md:text-[2.5rem]">
                {role.title}
              </h3>
              <p className="mt-2 text-lg text-white/80">{role.company}</p>
              <p className="mt-4 max-w-2xl text-brand-muted">{role.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-[#5a89fd1a] px-3.5 py-1.5 text-sm text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
