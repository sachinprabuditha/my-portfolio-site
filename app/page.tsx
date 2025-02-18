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

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Skills />
        <Education />
        <RecentProjects />
        <Contact />
        <Footer />
      </div>

      {/* Stylish Transparent Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/20 backdrop-blur-lg text-white 
                     p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-white/30 
                     hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
          style={{
            width: "50px",
            height: "50px",
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)", // Extra blur effect
            transition: "opacity 0.3s ease-in-out, transform 0.2s ease-in-out",
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}
