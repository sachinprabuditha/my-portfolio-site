"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Education from "@/components/ui/Education";
import Experience from "@/components/Experience";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <main className="relative bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <Hero />
        
        {/* Enhanced Section Dividers */}      
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <Grid/>
        </div>

        <hr className="w-full max-w-6xl mx-auto border-t border-purple-800/30 my-12" />
        
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <Experience/>
        </div>

        <hr className="w-full max-w-6xl mx-auto border-t border-purple-800/30 my-12" />
        
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <Education></Education>
        </div>

        <hr className="w-full max-w-6xl mx-auto border-t border-purple-800/30 my-12" />
        
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <Skills></Skills>
        </div>

        <hr className="w-full max-w-6xl mx-auto border-t border-purple-800/30 my-12" />
        
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <RecentProjects></RecentProjects>
        </div>

        <hr className="w-full max-w-6xl mx-auto border-t border-purple-800/30 my-12" />
        
        <div className="px-4 sm:px-6">
          <Contact></Contact>
        </div>

        <Footer></Footer>

      </div>

      {/* Enhanced Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 z-50"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </button>
      )}
    </main>
  );
}