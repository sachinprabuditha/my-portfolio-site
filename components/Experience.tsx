import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Star, Zap, Code } from 'lucide-react';

// Mock data - replace with your actual data
const workExperience = [
  {
    id: 1,
    title: "Junior Software Engineer",
    company: "PayMedia Pvt Ltd",
    location: "210, Havelock Road, Colombo 05, Sri Lanka",
    period: "2025 September - Present",
    type: "Full-time",
    description: "Continuing at PayMedia as a Junior Software Engineer, contributing to the development of financial technology solutions for banks and institutions. Working on building and maintaining high-quality mobile and web applications to support the company's mission of transforming digital payments in Sri Lanka and globally.",
    achievements: [
      "Transitioned from intern to full-time Junior Software Engineer role",
      "Continued development on financial applications for banking clients"
    ],
    skills: ["Flutter", "Dart", "API Integration", "Git", "Agile"],
    color: "from-cyan-600 to-purple",
    icon: Zap
  },
  {
    id: 2,
    title: "Software Engineer Intern - Mobile",
    company: "PayMedia Pvt Ltd",
    location: "210, Havelock Road,Colombo 05, Sri Lanka",
    period: "2025 March - 2025 September",
    type: "Internship",
    description: "PayMedia is a rapidly evolving Financial Technology (Fin-Tech) company in Sri Lanka, started with the aim of providing the best caliber of total software solutions for banks and other institutes. While keeping the focus on Fin-Tech, the company wants people to trust and enjoy the convenience of digital technology and disrupt the payment processes in the country and around the world.",
    achievements: [
      "Developed and deployed a mobile application for a major banking client (Fintrex Finance Mobile App) using Flutter",
      "Helped optimize the Comercial Credit app's performance"
    ],
    skills: ["Flutter", "API Integration", "Dart", "Git"],
    color: "from-cyan-600 to-purple-800",
    icon: Code
  },
//   {
//     id: 2,
//     title: "Full Stack Developer",
//     company: "StartupXYZ",
//     location: "Remote",
//     period: "2020 - 2022",
//     type: "Contract",
//     description: "Built scalable web applications from ground up, handling both frontend and backend development. Collaborated with cross-functional teams to deliver high-quality products.",
//     achievements: [
//       "Developed 3 major product features serving 10K+ users",
//       "Reduced API response time by 50% through optimization",
//       "Mentored 2 junior developers"
//     ],
//     skills: ["Vue.js", "Node.js", "MongoDB", "Docker", "GCP"],
//     color: "from-purple-500 to-pink-500",
//     icon: Zap
//   },
//   {
//     id: 3,
//     title: "Frontend Developer",
//     company: "Digital Agency",
//     location: "New York, NY",
//     period: "2018 - 2020",
//     type: "Full-time",
//     description: "Created responsive web applications and interactive user interfaces for various clients. Focused on performance optimization and accessibility standards.",
//     achievements: [
//       "Delivered 15+ client projects on time and within budget",
//       "Improved website loading speed by 35% on average",
//       "Implemented accessibility features meeting WCAG 2.1 standards"
//     ],
//     skills: ["JavaScript", "HTML/CSS", "SASS", "jQuery", "Webpack"],
//     color: "from-green-500 to-emerald-500",
//     icon: Users
//   }
];

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Deterministic so server and client markup match (Math.random() here caused a
  // hydration mismatch and re-scattered the dots on every re-render).
  const particles = useMemo(() => {
    const hash = (n: number) => {
      const x = Math.sin(n * 127.1) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: 20 }, (_, i) => ({
      left: hash(i + 1) * 100,
      top: hash(i + 31.7) * 100,
      duration: 3 + hash(i + 57.3) * 2,
      delay: hash(i + 83.9) * 2,
    }));
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    initial: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const timelineVariants = {
    initial: { height: 0 },
    animate: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const dotVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const achievementVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-cyan-600/30 dark:border-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
            Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-slate-900 via-cyan-700 to-purple-800 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text pb-1 mb-5 tracking-tight">
            My Journey
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover my professional path through innovative projects and meaningful contributions
          </p>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full"
              variants={timelineVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {workExperience.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 md:left-14 top-8 z-20"
                    variants={dotVariants}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-slate-900 dark:text-white" />
                      </div>
                    </div>
                    
                    {/* Pulsing ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 border-cyan-400/30`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Connection Line */}
                  <motion.div
                    className={`absolute left-14 md:left-[5.5rem] top-12 h-0.5 bg-gradient-to-r ${exp.color} opacity-50`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  />

                  {/* Main Card */}
                  <div className="ml-24 md:ml-36">
                    <motion.div
                      className="relative bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
                      whileHover={{
                        borderColor: "rgb(34 211 238 / 0.5)",
                        boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.25)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-5`}
                        animate={{
                          opacity: hoveredCard === exp.id ? 0.1 : 0.05
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Header */}
                      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-slate-600 dark:text-gray-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-4 md:mt-0 md:text-right shrink-0 md:ml-6">
                          <div className="flex items-center md:justify-end text-slate-600 dark:text-gray-400 text-sm mb-2">
                            <Calendar className="w-4 h-4 mr-2 shrink-0 text-cyan-700 dark:text-cyan-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-start md:justify-end text-slate-500 dark:text-gray-500 text-sm mb-3 max-w-xs">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-purple-600 dark:text-purple-400" />
                            <span>{exp.location}</span>
                          </div>
                          <span className={`self-start md:self-end px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              variants={achievementVariants}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <p className="text-slate-600 dark:text-gray-300">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-full text-sm text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-400/40 hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-20">
                        <motion.div
                          className={`w-20 h-20 rounded-full bg-gradient-to-r ${exp.color}`}
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 mb-20"
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center">
              Want to Work Together?
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;