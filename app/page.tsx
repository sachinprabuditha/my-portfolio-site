"use client";

import SmoothScroll from "@/components/site/SmoothScroll";
import Loader from "@/components/site/Loader";
import { MobileNav, StickyNav } from "@/components/site/Navbar";
import SideStrip from "@/components/site/SideStrip";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Showcase from "@/components/site/Showcase";
import About from "@/components/site/About";
import Work from "@/components/site/Work";
import Experience from "@/components/site/Experience";
import Education from "@/components/site/Education";
import Services from "@/components/site/Services";
import Skills from "@/components/site/Skills";
import Certificates from "@/components/site/Certificates";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Loader />
      <MobileNav />
      <SideStrip />
      {/* On desktop the fixed side strip takes the right edge, so the page reserves its width. */}
      <div className="lg:pr-[var(--strip-w)]">
        {/* Content sits above the sticky footer and scrolls away to reveal it. */}
        <main id="main" className="relative z-10 overflow-x-clip rounded-b-[2.5rem] bg-black shadow-[0_40px_120px_rgba(70,154,253,0.18)]">
          <Hero />
          {/* Desktop nav sits right after the hero and sticks once scrolled to (reference layout). */}
          <StickyNav />
          <Stats />
          <Showcase />
          <About />
          <Work />
          <Experience />
          <Education />
          <Services />
          <Skills />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
