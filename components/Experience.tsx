import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, ExternalLink, Star, Zap, Code, Users } from 'lucide-react';

// Mock data - replace with your actual data
const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - Frontend",
    company: "PayMedia Pvt Ltd",
    location: "210, Havelock Road,Colombo 05, Sri Lanka",
    period: "2025 March - Present",
    type: "Full-time",
    description: "PayMedia is a rapidly evolving Financial Technology (Fin-Tech) company in Sri Lanka, started with the aim of providing the best caliber of total software solutions for banks and other institutes. While keeping the focus on Fin-Tech, the company wants people to trust and enjoy the convenience of digital technology and disrupt the payment processes in the country and around the world.",
    achievements: [
      "Developed and deployed a mobile application for a major banking client (Fintrex Finance Mobile App) using Flutter",
      "Helped optimize the Comercial Credit app's performance"
    ],
    skills: ["Flutter", "API Integration", "Dart", "Git"],
    color: "from-blue-800 to-purple-800",
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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section className="min-h-screen ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400 bg-clip-text pb-1 mb-5">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover my professional path through innovative projects and meaningful contributions
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-16 top-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple to-cyan-500 rounded-full"
              variants={timelineVariants}
              initial="initial"
              animate="animate"
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
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 md:left-14 top-8 z-20"
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Pulsing ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 border-blue-400/30`}
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
                    className={`absolute left-10 md:left-18 top-12 w-12 h-0.5 bg-gradient-to-r ${exp.color} opacity-50`}
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  />

                  {/* Main Card */}
                  <div className="ml-24 md:ml-36">
                    <motion.div
                      className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl overflow-hidden"
                      whileHover={{ 
                        borderColor: "rgb(59 130 246 / 0.5)",
                        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
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
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-gray-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-4 md:mt-0">
                          <div className="flex items-center text-gray-400 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-400 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              variants={achievementVariants}
                              initial="initial"
                              animate="animate"
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <p className="text-gray-300">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-20 mb-20"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center">
              <a href="#contact" className="flex items-center">
                Want to Work Together?
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;