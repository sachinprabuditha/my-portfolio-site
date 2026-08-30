"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "100 Days of DevOps",
    issuer: "KodeKloud",
    date: "March 08, 2026",
    image: "/5f490d5c-4e03-4423-92d0-f6c67b04d0e0.jpg",
    color: "from-cyan-600 to-blue-700",
  },
  {
    id: 2,
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    date: "July 17, 2024",
    image: "/1721240316004.jpeg",
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: 3,
    title: "AI/ML Engineer - Stage 2",
    issuer: "SLIIT",
    date: "December 02, 2024",
    image: "/1733158116047.jpeg",
    color: "from-yellow-600 to-orange-600",
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const Certificates = () => {
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);

  // Close the lightbox on Escape and stop the page scrolling behind it.
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="certificates" className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-cyan-600/30 dark:border-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
            Credentials
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.15] text-transparent bg-gradient-to-r from-slate-900 via-cyan-700 to-purple-800 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text pb-1 mb-5 tracking-tight">
            Certificates
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Credentials and certifications earned through dedicated learning
          </p>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
              className="group relative cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              onClick={() => setSelected(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(cert);
                }
              }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
                {/* Certificate thumbnail */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${cert.color}`}>
                    {cert.issuer}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-cyan-700 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{cert.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to view certificate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate`}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 border border-slate-900/10 dark:border-white/10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={850}
                className="w-full h-auto max-h-[75vh] object-contain bg-slate-100 dark:bg-gray-950"
              />

              {/* Caption */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-slate-900/10 dark:border-white/10">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-base md:text-lg leading-tight">{selected.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm mt-0.5">{selected.issuer}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                  {selected.date}
                </span>
              </div>

              <button
                className="absolute top-3 right-3 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                onClick={() => setSelected(null)}
                aria-label="Close certificate viewer"
                autoFocus
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
