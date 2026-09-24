"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutPoints } from "@/data/site";
import { Eyebrow, Reveal } from "./primitives";

export default function About() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 40%"],
  });
  // The cyan light travels down the rail as the list scrolls past.
  const lightTop = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section id="about" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto w-[93%] max-w-7xl">
        <Reveal className="mb-16 flex max-w-3xl flex-col gap-6">
          <Eyebrow>About me</Eyebrow>
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-white md:text-[3.25rem]">
            I&apos;m Sachin Prabuditha, a Software Engineer from Sri Lanka focused on mobile application development.
          </h2>
        </Reveal>

        <div ref={listRef} className="flex gap-6 md:gap-16 md:pl-[5.9rem]">
          <div className="relative w-px shrink-0 bg-white/15">
            <motion.div
              style={{ top: lightTop }}
              className="absolute -left-px flex h-[20%] w-[3px] justify-center bg-gradient-to-b from-transparent via-brand-cyan to-transparent"
            >
              <div className="h-[60%] w-1 rounded-full bg-brand-cyan blur-[10px]" />
            </motion.div>
          </div>

          <ol className="flex-1">
            {aboutPoints.map((point, i) => (
              // Reference "About - Items [Show]": rise 10px and fade in (500ms move, 750ms fade).
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ y: { duration: 0.5 }, opacity: { duration: 0.75, ease: "easeOut" } }}
                className="flex items-start gap-6 border-b border-white/15 py-8 text-lg leading-[1.4] text-white md:text-[1.375rem]"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded border border-white/10 bg-[#1c1e2a] text-[1.2rem] leading-none">
                  {i + 1}
                </span>
                <span className="pt-1.5">{point}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
