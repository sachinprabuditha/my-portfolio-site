"use client";

import React from "react";
import Image from "next/image";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.03 * index,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// Monochrome brand marks: each is invisible in one theme, so they get inverted.
// next.svg is pure white (vanishes on light), Vercel.svg is pure black (vanishes on dark).
const WHITE_ONLY_LOGOS = new Set(["Next.js"]);
const BLACK_ONLY_LOGOS = new Set(["Vercel"]);

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-20 mt-20 max-w-[53rem] scroll-mt-20 text-center mx-auto"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-cyan-600/30 dark:border-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
          Toolkit
        </span>
        <h2 className="text-4xl md:text-6xl font-black leading-[1.15] pb-1 mb-5 tracking-tight">
          <span className="text-transparent bg-gradient-to-r from-slate-900 via-cyan-700 to-purple-800 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text">
            My Skills
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The languages, frameworks, and tools I build with
        </p>
        <motion.div
          className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>

      <ul className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base px-4">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group flex items-center gap-2.5 rounded-xl px-4 py-2.5 bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-gray-300 backdrop-blur-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/10 dark:hover:bg-white/10 hover:border-cyan-400/50 hover:text-slate-900 dark:hover:text-white hover:shadow-lg hover:shadow-cyan-500/10"
            key={`${skill.name}-${index}`}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon && (
              <Image
                src={skill.icon.src}
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className={`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${
                  WHITE_ONLY_LOGOS.has(skill.name)
                    ? "invert dark:invert-0"
                    : BLACK_ONLY_LOGOS.has(skill.name)
                    ? "dark:invert"
                    : ""
                }`}
              />
            )}
            <span className="font-medium">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
