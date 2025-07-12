"use client";

import React from "react";
import SectionHeading from "./section-headings";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./ui/submit-btn";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const phoneNumber = '+94773546331'; 

  return (
    
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-[38rem] mx-auto text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Let&apos;s Build <span className="text-cyan-500">Something Amazing Together 🚀</span></SectionHeading>

      <p className="text-white/90 -mt-1 text-lg leading-relaxed">
        Ready to discuss your next project? I&apos;m always excited to collaborate on innovative solutions and bring ideas to life through code.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer" 
          href="mailto:sachinprabuditha@gmail.com"
          onClick={() => window.location.href = 'mailto:sachinprabuditha@gmail.com'}
        >
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          sachinprabuditha@gmail.com
        </a>
        
        <a 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer" 
          href={`https://wa.me/94773546331?text=Hi%20Sachin!%20I'd%20like%20to%20discuss%20a%20software%20development%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.open(`https://wa.me/94773546331?text=Hi%20Sachin!%20I'd%20like%20to%20discuss%20a%20software%20development%20project.`, '_blank')}
        >
          <FaWhatsapp className="w-5 h-5 group-hover:bounce transition-transform" />
          +94 77 354 6331
        </a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/70 text-sm">
          💼 <span className="text-cyan-400 font-semibold">Available for freelance projects</span> • 
          🌍 <span className="text-green-400 font-semibold">Remote collaboration welcome</span> • 
          ⚡ <span className="text-yellow-400 font-semibold">Quick response guaranteed</span>
        </p>
      </div>

      <form
        className="mt-10 flex flex-col text-white"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-12 px-4 rounded-lg border border-white/20 bg-black/30 backdrop-blur-sm placeholder:text-white/60 text-white focus:bg-black/50 transition-all outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-32 p-4 rounded-lg border border-white/20 bg-black/30 backdrop-blur-sm placeholder:text-white/60 text-white focus:bg-black/50 transition-all outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 resize-none mb-5 mt-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}