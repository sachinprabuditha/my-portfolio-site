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
      <SectionHeading>Contact <span className="text-cyan-500">Me ☎️</span></SectionHeading>

      <p className="text-white/80 -mt-1">
        Please contact me directly at{" "}
        <a className="text-white hover:text-red-600 transition duration-300 hover:scale-110 focus:scale-110 active:scale-105 disabled:scale-100 underline" href="mailto:sachinprabuditha@gmail.com">
          sachinprabuditha@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <p className="text-white/80 mt-1">
        You can also reach me at {"(Whatsapp) "}
        <a className="text-white hover:text-green-600 transition duration-300 hover:scale-110 focus:scale-110 active:scale-105 disabled:scale-100 underline" href={`https://wa.me/${phoneNumber}`}>
        <FaWhatsapp className="inline" size={20} /> {phoneNumber} 
        </a>
        
      </p>

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
          className="h-14 px-4 rounded-lg borderBlack dark:bg-black-300 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-black-300 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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