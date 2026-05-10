"use client";

import React, { useState } from "react";
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

  return (
    <section id="certificates" className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400 bg-clip-text pb-1 mb-5">
            Certificates
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Credentials and certifications earned through dedicated learning
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
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
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => setSelected(cert)}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
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
                    <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
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
                className="w-full h-auto object-contain"
              />
              <button
                className="absolute top-3 right-3 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full p-2 transition-colors duration-200"
                onClick={() => setSelected(null)}
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
