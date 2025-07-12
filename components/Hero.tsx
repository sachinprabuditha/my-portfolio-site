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
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
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
        
        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .word-hover:hover {
          animation: wave 0.6s ease-in-out;
        }
        
        .sparkle {
          animation: sparkle 2s infinite;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s infinite;
        }
        
        .gradient-text {
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
          animation: shimmer 3s infinite;
        }
        
        .glow-text {
          animation: glow 3s ease-in-out infinite alternate;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
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

          {/* SUPER ENHANCED Main Heading */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse" />
              
              {/* Floating Sparkles */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full sparkle" style={{ animationDelay: '0s' }} />
              <div className="absolute -top-2 right-10 w-2 h-2 bg-purple-400 rounded-full sparkle" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 left-1/3 w-2 h-2 bg-blue-400 rounded-full sparkle" style={{ animationDelay: '2s' }} />
              <div className="absolute -bottom-2 -right-6 w-3 h-3 bg-cyan-400 rounded-full sparkle" style={{ animationDelay: '0.5s' }} />
              
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight float-animation">
                <div className="pb-4 relative">
                  {/* Shimmer Overlay */}
                  <div className="absolute inset-0 shimmer-effect opacity-30 rounded-2xl" />
                  
                  {words.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className="inline-block ml-3 mr-3 md:mr-4 md:ml-4 mb-2 relative word-hover cursor-pointer group"
                      style={{
                        animation: `fadeInUp 1s ease-out ${index * 0.15}s both`,
                        transformOrigin: 'bottom center'
                      }}
                    >
                      {/* Individual Word Glow */}
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Pulse Ring Effect */}
                      <span className="absolute inset-0 border-2 border-blue-400/50 rounded-lg opacity-0 group-hover:opacity-100 pulse-ring" />
                      
                      {/* Main Text with Multiple Gradients */}
                      <span className="relative gradient-text glow-text font-extrabold tracking-tight">
                        {word}
                      </span>
                      
                      {/* Micro Sparkles on Hover */}
                      <span className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle" />
                    </span>
                  ))} 
                </div>
              </h1>
              
              {/* Animated Underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mx-auto rounded-full animate-pulse" 
                   style={{ animation: 'shimmer 2s infinite' }} />
            </div>
          </div>

          {/* Enhanced Description */}
          <div className={`mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              Hi! I&apos;m <span className="text-purple-400 font-semibold">Sachin Prabuditha</span>, an innovative Full Stack Developer specializing in creating extraordinary digital experiences. Based in Sri Lanka, I&apos;m currently pursuing Software Engineering at SLIIT.
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
              <FaDownload className="w-4 h-4 text-cyan-300 group-hover:text-white group-hover:animate-bounce" />
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero