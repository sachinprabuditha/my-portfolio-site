"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { educationData } from "@/lib/data";

// Type definitions
interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  details: readonly string[];
  logo: {
    src: string;
    alt?: string;
  };
}

interface EducationProps {
  className?: string;
}

// Enhanced animation variants
const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const logoVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    // `type: spring` ignores `ease`/`duration`, so they aren't set here.
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Inner content inherits the card's variant state, so it animates on scroll
// rather than firing on page load like a bare `animate` prop would.
const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.35, duration: 0.5 } },
};

const badgeVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.45, duration: 0.5 } },
};

const detailsContainerVariants: Variants = {
  initial: {},
  animate: { transition: { delayChildren: 0.55, staggerChildren: 0.1 } },
};

const detailItemVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

// Memoized education item component
const EducationItem = React.memo<{
  edu: EducationItem;
  index: number;
}>(({ edu, index }) => (
  <motion.div
    className="group relative"
    variants={cardVariants}
    whileHover={{
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Main card */}
    <div className="relative overflow-hidden bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl" />
      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 relative z-10">
        
        {/* Logo section */}
        <motion.div 
          className="flex-shrink-0 relative"
          variants={logoVariants}
        >
          <div className="relative p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-slate-900/20 dark:border-white/20 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500">
            <Image
              src={edu.logo.src}
              alt={edu.logo.alt || `${edu.institution} logo`}
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-lg"
              priority={index < 2}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          </div>
        </motion.div>
        
        {/* Content section */}
        <div className="flex-grow text-center md:text-left space-y-4">
          
          {/* Institution name */}
          <motion.h3 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent leading-tight"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {edu.institution}
          </motion.h3>
          
          {/* Degree */}
          <motion.p
            className="text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-700 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent"
            variants={fadeInVariants}
          >
            {edu.degree}
          </motion.p>

          {/* Duration */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30"
            variants={badgeVariants}
          >
            <Calendar className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
            <span className="text-sm md:text-base font-medium text-slate-900 dark:text-white">
              {edu.duration}
            </span>
          </motion.div>

          {/* Details */}
          {edu.details.length > 0 && (
            <motion.div
              className="space-y-3 pt-4"
              variants={detailsContainerVariants}
            >
              {edu.details.map((detail, idx) => (
                <motion.div
                  key={`${index}-${idx}`}
                  className="flex items-start space-x-3 group/item"
                  variants={detailItemVariants}
                >
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover/item:scale-125 transition-transform duration-300" />
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </motion.div>
));

EducationItem.displayName = "EducationItem";

// Main Education component
const Education: React.FC<EducationProps> = ({ className = "" }) => {
  return (
    <section 
      id="education" 
      className={`relative py-16 px-4 ${className}`}
      aria-labelledby="education-heading"
    >
      {/* Background effects */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-cyan-600/30 dark:border-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
            Academics
          </span>
          <h2
            id="education-heading"
            className="text-4xl md:text-6xl font-black pb-1 mb-5 tracking-tight"
          >
            <span className="text-transparent bg-gradient-to-r from-slate-900 via-cyan-700 to-purple-800 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text">
              Education
            </span>{" "}
            {/* Kept outside the gradient so the emoji keeps its own colours
                instead of being masked into a flat silhouette. */}
            <span>🎓</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My academic journey and the foundations that shaped my expertise
          </p>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>
        
        {/* Education cards */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((edu, index) => (
            <EducationItem
              key={`${edu.institution}-${index}`}
              edu={edu}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;