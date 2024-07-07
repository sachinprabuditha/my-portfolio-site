// Education.js or Education.tsx

"use client";
import React from "react";
import { educationData } from "@/lib/data";
import SectionHeading from "../section-headings";
import { motion } from "framer-motion";

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

const Education = () => {
  return (
    <section id="education" className="my-20 max-w-4xl mx-auto px-4 mb-10">
      <SectionHeading>Education 🎓</SectionHeading>
      <div className="space-y-12 mt-16">
        {educationData.map((edu, index) => (
          <motion.li
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-8 rounded-lg shadow-lg text-white border-b border-gray-700"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <img
              src={edu.logo.src}
              alt={`${edu.institution} logo`}
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <div>
              <h3 className="text-base font-semibold md:text-2xl">{edu.institution}</h3>
              <p className="text-sm font-medium text-purple-400 md:text-lg">{edu.degree}</p>
              <p className="text-gray-300 text-xs md:text-sm mb-4">{edu.duration}</p>
              <ul className="text-gray-300 list-disc list space-y-1 text-sm md:text-base">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default Education;
