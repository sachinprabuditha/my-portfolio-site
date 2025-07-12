import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-gray-300 py-8 border-t border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">

          {/* Separator */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Bottom Section */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-400">Built with passion</span> using modern web technologies
              </p>
              <p className="text-xs text-gray-500">
                React & Next.js • Tailwind CSS • TypeScript • React Email & Resend • Framer Motion • Vercel
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-800/50">
              <small className="text-xs text-gray-500">
                &copy; 2025 Sachin Prabuditha. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm"></div>
    </footer>
  );
}