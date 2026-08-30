"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./ui/submit-btn";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa6";

const EMAIL = "sachinprabuditha@gmail.com";
const PHONE_DISPLAY = "+94 77 354 6331";
const PHONE_INTL = "94773546331";
const WHATSAPP_MESSAGE =
  "Hi Sachin! I'd like to discuss a software development project.";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappUrl = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

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
      {/* Header */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-cyan-600/30 dark:border-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">
        Get in touch
      </span>
      <h2 className="text-4xl md:text-5xl font-black leading-[1.15] pb-1 mb-5 tracking-tight">
        <span className="text-transparent bg-gradient-to-r from-slate-900 via-cyan-700 to-purple-800 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text">
          Let&apos;s Build Something Amazing Together
        </span>
      </h2>

      <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
        Ready to discuss your next project? I&apos;m always excited to collaborate on innovative solutions and bring ideas to life through code.
      </p>

      <motion.div
        className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          href={`mailto:${EMAIL}`}
        >
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          {EMAIL}
        </a>

        <a
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-5 h-5 transition-transform group-hover:scale-110" />
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-gray-300 text-xs md:text-sm backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Available for freelance projects
        </span>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-gray-300 text-xs md:text-sm backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Remote collaboration welcome
        </span>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-gray-300 text-xs md:text-sm backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          Quick response guaranteed
        </span>
      </div>

      <form
        ref={formRef}
        className="mt-10 flex flex-col text-slate-900 dark:text-white text-left"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          formRef.current?.reset();
        }}
      >
        <label htmlFor="senderEmail" className="sr-only">
          Your email
        </label>
        <input
          id="senderEmail"
          className="h-12 px-4 rounded-lg border border-slate-900/20 dark:border-white/20 bg-white dark:bg-black/30 backdrop-blur-sm placeholder:text-slate-500 dark:placeholder:text-white/60 text-slate-900 dark:text-white focus:bg-slate-50 dark:focus:bg-black/50 transition-all outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
          name="senderEmail"
          type="email"
          autoComplete="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          className="h-32 p-4 rounded-lg border border-slate-900/20 dark:border-white/20 bg-white dark:bg-black/30 backdrop-blur-sm placeholder:text-slate-500 dark:placeholder:text-white/60 text-slate-900 dark:text-white focus:bg-slate-50 dark:focus:bg-black/50 transition-all outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 resize-none mb-5 mt-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="self-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}