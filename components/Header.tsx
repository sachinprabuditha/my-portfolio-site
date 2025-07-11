"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaDownload, FaLinkedin, FaGithub, FaCode, FaBars, FaTimes, FaTerminal, FaRocket } from "react-icons/fa";
import { FaInstagram, FaMedium } from "react-icons/fa6";
import { SiStackoverflow } from "react-icons/si";

// Enhanced Software Engineer Header Component
export const SoftwareEngineerHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Web Enthusiast',
    'Problem Solver',
    'Code Architect'
  ];

  // Typewriter effect for roles
  useEffect(() => {
    const typewriterEffect = () => {
      const currentRoleText = roles[currentRole];
      let index = 0;
      const timer = setInterval(() => {
        if (index <= currentRoleText.length) {
          setTypewriterText(currentRoleText.substring(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
      return timer;
    };

    const timer = typewriterEffect();
    return () => clearInterval(timer);
  }, [currentRole]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: "FaTerminal" },
    { name: 'About', href: '#about', icon: "FaCode" },
    { name: 'Experience', href: '#experience', icon: "FaRocket" },
    { name: 'Skills', href: '#skills', icon: "FaCode" },
    { name: 'Education', href: '#education', icon: "FaTerminal" },
    { name: 'Projects', href: '#projects', icon: "FaRocket" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sachinprabuditha/', color: 'hover:text-blue-400', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/sachinprabuditha', color: 'hover:text-purple', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://www.instagram.com/sac_hin_pr', color: 'hover:text-pink-400', label: 'Instagram' },
    { icon: FaMedium, href: 'https://medium.com/@ksachinprabuditha', color: 'hover:text-green-400', label: 'Medium' }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.6); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-in {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes code-matrix {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
        }
        
        @keyframes typewriter-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
        
        .animate-code-matrix {
          animation: code-matrix 20s linear infinite;
        }
        
        .typewriter-cursor {
          animation: typewriter-blink 1s infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .magnetic-effect {
          position: relative;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .magnetic-effect::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(45deg, #6366f1, #06b6d4, #8b5cf6);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .magnetic-effect:hover::before {
          opacity: 1;
        }
        
        .magnetic-effect > * {
          position: relative;
          z-index: 1;
        }
        
        .code-bg {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.2;
          color: rgba(99, 102, 241, 0.1);
          white-space: pre;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'glass-effect shadow-2xl shadow-indigo-500/20 border-b border-cyan-500/30' 
            : 'glass-effect bg-gradient-to-r from-slate-900/90 via-slate-900/90 to-slate-900/90'
        }`}
        style={{ backdropFilter: 'blur(24px)' }}
      >
        {/* Animated Code Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full code-bg animate-code-matrix opacity-20">
            {`const developer = {
  name: 'Sachin Prabuditha',
  skills: ['JavaScript', 'React', 'Node.js', 'Python'],
  passion: 'Building amazing software',
  status: 'Always learning'
};

function createAwesomeThings() {
  return code + creativity + coffee;
}

while (learning) {
  keepCoding();
  solveProblem();
  buildCoolStuff();
}`}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-2 left-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-sparkle" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-cyan-600/5 to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700 animate-gradient-shift" />
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            
            {/* Enhanced Logo with Code Icon */}
            <div className="flex items-center space-x-3 group animate-slide-in">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full ring-2 ring-indigo-500/50 group-hover:ring-indigo-400 transition-all duration-300 overflow-hidden bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                   <img 
                  src="./Untitled design (1).png" 
                  alt="Sachin Prabuditha" 
                  className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all duration-300"
                />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent animate-gradient-shift">
                  Sachin Prabuditha
                </h1>
                <p className="text-xs text-gray-400 font-medium">
                  <span className="inline-block min-w-[140px]">
                    {typewriterText}
                    <span className="typewriter-cursor">|</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute inset-0 hover:bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center group-hover:border group-hover:border-indigo-500/50" />
                </a>
              ))}
            </nav>

            {/* Enhanced Actions */}
            <div className="flex items-center space-x-3 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg hover-lift`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Quick Action Button */}
              <a
                href="#contact"
                className="hidden md:flex items-center space-x-2 px-4 py-2 border border-indigo-500/50 text-cyan-400 hover:bg-indigo-500/10 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaRocket className="w-3 h-3" />
                <span>Let&apos;s Connect</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`absolute top-20 left-4 right-4 glass-effect rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden transition-all duration-700 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-cyan-600/10 to-purple-600/10 animate-gradient-shift" />
          
          <nav className="relative p-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-indigo-500/20 rounded-lg transition-all duration-300 font-medium hover-lift"
              >
                <span className="text-sm">{<item.icon />}</span>
                <span>{item.name}</span>
              </a>
            ))}
            
            <div className="pt-4 border-t border-gray-700/50 space-y-3">
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg hover-lift`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <div className="space-y-2">
                <a
                  href="./Sachin_Prabuditha-CV.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-300"
                >
                  <FaRocket className="w-4 h-4" />
                  <span>Let&apos;s Connect</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SoftwareEngineerHeader;