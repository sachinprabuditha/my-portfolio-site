"use client";

import React from "react";
import SectionHeading from "./section-headings";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { MotionValue, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-20 mt-10 max-w-[53rem] scroll-mt-20 text-center sm:mb-40 mx-auto"
    >
      <SectionHeading>My <span className="text-purple">Skills 🤹🏻</span></SectionHeading>
      <ul className="flex flex-wrap justify-center gap-5 lg:text-lg md:text-base sm:text-sm text-gray-800 mt-20">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center space-x-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon && <img src={skill.icon.src} alt={`${skill.name} icon`} className="w-6 h-6" />}
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
