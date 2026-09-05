import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'
import { SiFlutter, SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiPython, SiLinux } from 'react-icons/si'
import ModernHeader from './Header'
import Image from 'next/image'
import '../app/globals.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headlineLine1 = ["Transforming", "Concepts", "into"];
  const headlineLine2 = ["Seamless", "User", "Experiences"];

  // Cursor-driven 3D tilt for the profile card
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springCfg = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], ['9deg', '-9deg']), springCfg);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], ['-9deg', '9deg']), springCfg);
  const glareX = useTransform(pointerX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(pointerY, [-0.5, 0.5], ['0%', '100%']);
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]: string[]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 55%)`
  );

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const skillChips = [
    { name: 'Flutter', Icon: SiFlutter, text: 'text-cyan-700 dark:text-cyan-400', border: 'border-cyan-500/40', shadow: 'shadow-cyan-500/10', pos: 'top-6 -right-4 sm:-right-8 lg:-right-14', float: '3s', floatDelay: '0s', delay: 1.0 },
    { name: 'React', Icon: SiReact, text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/40', shadow: 'shadow-purple-500/10', pos: 'top-1/3 -left-4 sm:-left-8 lg:-left-14', float: '3.5s', floatDelay: '0.5s', delay: 1.15 },
    { name: 'Next.js', Icon: SiNextdotjs, text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-500/40', shadow: 'shadow-pink-500/10', pos: 'bottom-24 -right-2 sm:-right-6 lg:-right-12', float: '2.8s', floatDelay: '1s', delay: 1.3 },
    { name: 'Node.js', Icon: SiNodedotjs, text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500/40', shadow: 'shadow-blue-500/10', pos: 'bottom-1/3 -left-2 sm:-left-6 lg:-left-12', float: '4s', floatDelay: '1.5s', delay: 1.45 },
  ];

  // `lightColor` is only needed where the brand colour is too pale to read on a
  // light background (Next.js is pure white; the yellows wash out).
  const techStack = [
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", lightColor: "#a68b00" },
    { name: "React", icon: SiReact, color: "#61dafb", lightColor: "#0b7c99" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", lightColor: "#0f172a" },
    { name: "Node.js", icon: SiNodedotjs, color: "#3c873a", lightColor: "#3c873a" },
    { name: "Python", icon: SiPython, color: "#3776ab", lightColor: "#3776ab" },
    { name: "Flutter", icon: SiFlutter, color: "#02569b", lightColor: "#02569b" },
    { name: "Linux", icon: SiLinux, color: "#fcc624", lightColor: "#8a6d00" },
  ];

  return (
    <div id="home" className='relative min-h-screen overflow-hidden'>
      <ModernHeader />
     {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
                        0 0 40px rgba(59, 130, 246, 0.2),
                        0 0 60px rgba(59, 130, 246, 0.1);
          }
          50% {
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.6),
                        0 0 60px rgba(59, 130, 246, 0.4),
                        0 0 80px rgba(59, 130, 246, 0.2);
          }
        }

        /* Light theme: dark stops, since white would vanish on a pale page. */
        .gradient-text {
          background: linear-gradient(
            120deg,
            #0f172a 0%,
            #0e7490 25%,
            #1d4ed8 50%,
            #0f172a 75%,
            #0e7490 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }

        :global(html.dark) .gradient-text {
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #06b6d4 25%,
            #3b82f6 50%,
            #ffffff 75%,
            #06b6d4 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* The glow is a white-ish halo — only meaningful on the dark page. */
        :global(html.dark) .glow-text {
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        .tech-icon {
          color: var(--tech-light);
        }

        :global(html.dark) .tech-icon {
          color: var(--tech-dark);
        }
      `}</style>
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-200/40 to-slate-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 transition-colors duration-300">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 50}px`,
            top: `${mousePosition.y / 50}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x / 80}px`,
            bottom: `${mousePosition.y / 80}px`,
            animationDelay: '1s'
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Enhanced Hero Content */}
      <div className='relative z-10 flex items-center justify-center min-h-screen pt-20'>
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

              {/* Animated Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-slate-900/5 dark:bg-white/5 backdrop-blur-lg rounded-full border border-purple-500/20 mb-6 mt-4 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-slate-600 dark:text-gray-300">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <div className={`mb-8 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="relative">
                  <div className="absolute -inset-x-6 -inset-y-8 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-3xl" />

                  <p className="relative text-xs md:text-sm font-semibold tracking-[0.3em] text-cyan-400/80 uppercase mb-4">
                    Software Engineer
                  </p>

                  <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.15] tracking-tight">
                    <span className="block text-slate-900 dark:text-white">
                      {headlineLine1.map((word, index) => (
                        <React.Fragment key={word}>
                          <motion.span
                            className="inline-block"
                            initial={{ opacity: 0, y: 24 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
                          >
                            {word}
                          </motion.span>{' '}
                        </React.Fragment>
                      ))}
                    </span>
                    <span className="block gradient-text glow-text mt-1 md:mt-2">
                      {headlineLine2.map((word, index) => (
                        <React.Fragment key={word}>
                          <motion.span
                            className="inline-block"
                            initial={{ opacity: 0, y: 24 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + (headlineLine1.length + index) * 0.08, ease: 'easeOut' }}
                          >
                            {word}
                          </motion.span>{' '}
                        </React.Fragment>
                      ))}
                    </span>
                  </h1>

                  <motion.div
                    className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full mt-7 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={isLoaded ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className={`mb-12 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="relative pl-5 mb-7">
                  {/* Gradient accent rail */}
                  <span className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />
                  <p className="text-slate-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                    Hi! I&apos;m <span className="text-slate-900 dark:text-white font-semibold">Sachin Prabuditha</span>, an innovative Full Stack Developer specializing in creating extraordinary digital experiences that transform complex ideas into <span className="text-cyan-700 dark:text-cyan-300 font-medium">intuitive, scalable solutions</span>.
                  </p>
                </div>

                {/* Meta chips */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-7">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-500/25 text-cyan-800 dark:text-cyan-200 text-xs md:text-sm font-medium backdrop-blur-sm">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
                    Sri Lanka
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-800 dark:text-purple-200 text-xs md:text-sm font-medium backdrop-blur-sm">
                    <FaGraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    Software Engineering @ SLIIT
                  </span>
                </div>

                {/* Tech stack */}
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-gray-500 font-semibold mb-3 text-center lg:text-left">
                  Tech I work with
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-full text-xs md:text-sm text-slate-600 dark:text-gray-300 backdrop-blur-sm cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/10 dark:hover:bg-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.06, ease: 'easeOut' }}
                      whileHover={{
                        borderColor: tech.color,
                        boxShadow: `0 6px 20px -6px ${tech.color}80`,
                      }}
                    >
                      <tech.icon
                        className="tech-icon w-3.5 h-3.5"
                        style={{
                          ['--tech-dark' as string]: tech.color,
                          ['--tech-light' as string]: tech.lightColor,
                        }}
                      />
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start mb-16 transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {/* Primary: Download Resume */}
                <a
                  href="/Sachin_Prabuditha_CV (2).pdf"
                  download="Sachin_Prabuditha-CV.pdf"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-900 dark:text-white overflow-hidden shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40"
                >
                  {/* Gradient fill */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
                  {/* Shine sweep on hover */}
                  <span className="absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[150%]" />
                  <FaDownload className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span className="relative">Download Resume</span>
                  {/* Outer glow */}
                  <span className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                </a>

                {/* Secondary: View Work */}
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-700 dark:text-gray-200 bg-slate-900/5 dark:bg-white/5 backdrop-blur-lg border border-slate-900/10 dark:border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900 dark:hover:text-white hover:border-cyan-400/50 hover:bg-slate-900/10 dark:hover:bg-white/10"
                >
                  <span>View My Work</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className={`flex-shrink-0 order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div
                className="relative mx-12 sm:mx-16 lg:mx-4"
                style={{ perspective: '1200px' }}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >
                {/* Ambient glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/25 via-purple-600/25 to-pink-500/25 rounded-[2.5rem] blur-3xl animate-pulse" />

                {/* Decorative dot grid */}
                <div
                  className="absolute -bottom-8 -right-8 w-28 h-28 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.7) 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Tilting stage — card + chips share the same 3D space */}
                <motion.div
                  className="relative"
                  style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                >
                  {/* Card with rotating gradient ring border */}
                  <motion.div
                    className="relative w-56 md:w-64 lg:w-72"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  >
                    <div className="absolute -inset-[3px] rounded-3xl overflow-hidden">
                      <div
                        className="absolute -inset-1/2 spin-slow"
                        style={{ background: 'conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #22d3ee)' }}
                      />
                    </div>
                    <div className="relative rounded-[calc(1.5rem-1px)] overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src="/prabuditha.png"
                        alt="Sachin Prabuditha"
                        width={288}
                        height={380}
                        className="w-full object-cover object-top"
                        priority
                      />
                      {/* Cursor-following glare */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none mix-blend-overlay"
                        style={{ background: glare }}
                      />
                      {/* Name overlay */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent px-4 pb-4 pt-12">
                        <p className="text-white font-bold text-sm text-center">Sachin Prabuditha</p>
                        <p className="text-cyan-300 text-xs text-center font-medium tracking-widest uppercase mt-0.5">Software Engineer</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating skill chips — lifted forward so they parallax against the card */}
                  {skillChips.map((chip) => (
                    <motion.div
                      key={chip.name}
                      className={`absolute ${chip.pos}`}
                      initial={{ opacity: 0, scale: 0.4, z: 60 }}
                      animate={isLoaded ? { opacity: 1, scale: 1, z: 60 } : {}}
                      transition={{ duration: 0.5, delay: chip.delay, ease: 'backOut' }}
                    >
                      <div
                        className={`flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 border ${chip.border} rounded-xl px-3 py-1.5 backdrop-blur-sm shadow-lg ${chip.shadow}`}
                        style={{ animation: `float ${chip.float} ease-in-out infinite`, animationDelay: chip.floatDelay }}
                      >
                        <chip.Icon className={`w-3.5 h-3.5 ${chip.text}`} />
                        <span className={`text-xs font-semibold ${chip.text}`}>{chip.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            opacity: typeof window !== 'undefined' ? Math.max(0, 1 - window.scrollY / 300) : 1
          }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero