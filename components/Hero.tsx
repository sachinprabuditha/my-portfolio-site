import React, { useEffect, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload } from 'react-icons/fa'
import ModernHeader from './Header'
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

  const words = "Transforming Concepts into Seamless User Experiences";
  
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <ModernHeader />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Enhanced Hero Content */}
      <div className='relative z-10 flex items-center justify-center min-h-screen pt-20'>
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* Animated Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-purple-500/20 mb-6 mt-4 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </div>

          {/* Enhanced Main Heading */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <div className="pb-2"> {/* Added padding at bottom to create space */}
              {words.split(' ').map((word, index) => (
                <span 
                key={index}
                className="inline-block mr-3 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-normal" // Improved line height
                style={{ 
                        animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                        lineHeight: '1.2'
                      }}
                >
                {word}
                </span>
              ))}
              </div>
            </h1>
            </div>

          {/* Enhanced Description */}
          <div className={`mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              Hi! I'm <span className="text-purple-400 font-semibold">Sachin Prabuditha</span>, an innovative Full Stack Developer specializing in creating extraordinary digital experiences. Based in Sri Lanka, I'm currently pursuing Software Engineering at SLIIT.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              With expertise in <span className="text-blue-400 font-medium">JavaScript, React, Next.js, Node.js, Python, Flutter, Linux</span> and more, I transform complex ideas into intuitive, scalable solutions that make a difference.
            </p>
          </div>

            {/* Enhanced CTA Section with Color Highlights */}
            <div className={`flex flex-col sm:flex-row gap-5 items-center justify-center mb-16 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <a 
              href="./Sachin_Prabuditha-CV.pdf" 
              download
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
              <FaDownload className="w-4 h-4 text-pink-300 group-hover:text-white group-hover:animate-bounce" />
              <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Added highlight effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </a>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
            opacity: typeof window !== 'undefined' ? 
              Math.max(0, 1 - window.scrollY / 300) : 1 // Fade out as user scrolls
            }}>
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-xs text-gray-400">Scroll to explore</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero