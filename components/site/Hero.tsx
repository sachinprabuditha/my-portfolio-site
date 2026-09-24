"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { contact } from "@/data/site";
import { Eyebrow, LogoMark, MainButton, RotatingBadge } from "./primitives";
import { TopBar } from "./Navbar";

// Hero copy fades in as the preloader finishes (reference: 1s opacity at the end of the load).
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  // `as const` keeps the cubic-bezier a 4-tuple (framer-motion 12 rejects a plain number[]).
  transition: { duration: 1, delay: 2 + delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  // Reference swaps the portrait's expression while the CTA is hovered; with one photo,
  // it goes from slightly muted to full colour instead.
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <section
      id="home"
      // Height leaves ~6.5rem at the bottom of the first screen for the sticky nav (reference layout).
      className="relative flex items-center overflow-hidden bg-black pb-16 pt-32 lg:min-h-[calc(100svh-6.5rem)] lg:pb-12 lg:pt-24"
    >
      <TopBar />

      {/* Reference glows sit above the content (z-5), tinting the photo and heading. */}
      <div className="pointer-events-none absolute -left-[13%] -top-[8%] z-[5] h-80 w-80 rounded-full bg-brand-cyan blur-[200px]" />
      <div className="pointer-events-none absolute right-0 top-40 z-[5] h-80 w-80 rounded-full bg-brand-cyan opacity-60 blur-[180px]" />

      <div className="relative mx-auto grid w-[93%] max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-4">
        {/* Portrait: scales 1.1→1 and fades in whenever the hero enters view (and back out). */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative order-2 mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:order-1 lg:ml-8 lg:max-w-[22rem]"
        >
          <Image
            src="/prabuditha.png"
            alt="Sachin Prabuditha"
            width={1082}
            height={1826}
            priority
            sizes="(min-width: 640px) 22rem, 18rem"
            className={`relative z-[4] -rotate-1 transition-[filter,transform] duration-500 [mask-image:linear-gradient(to_bottom,black_70%,transparent)] ${
              ctaHover ? "scale-[1.02] grayscale-0" : "brightness-90 grayscale-[35%]"
            }`}
          />
          {/* Positioned by a wrapper: the badge itself is `relative`, which would override `absolute`. */}
          <div className="absolute bottom-16 -left-4 z-[6] sm:-left-10 lg:-left-20">
            <RotatingBadge items={["Software engineer", "Flutter", "Next.js"]} size={160}>
              <LogoMark className="h-9 w-auto" />
            </RotatingBadge>
          </div>
        </motion.div>

        <div className="relative z-10 order-1 flex flex-col items-start lg:order-2">
          <motion.div {...fadeIn(0)}>
            <Eyebrow>Flutter • Dart • FinTech • Software Engineering</Eyebrow>
          </motion.div>

          <motion.h1
            {...fadeIn(0.1)}
            className="mt-6 font-display text-[2.75rem] font-medium leading-[1.1] text-white sm:text-6xl lg:text-[4rem]"
          >
            Building ideas into software.
          </motion.h1>

          <motion.div {...fadeIn(0.2)} className="mt-6 flex max-w-[30rem] flex-col gap-4">
            <p className="text-lg text-white/80 md:text-xl">
              I&apos;m Sachin Prabuditha, a Software Engineer specializing in Flutter and mobile application
              development.
            </p>
            <p className="text-base text-white/60 md:text-lg">
              From mobile banking applications in FinTech to personal projects across web, backend, and DevOps, I
              enjoy turning ideas into practical software and learning something new with every project.
            </p>
          </motion.div>

          <motion.div {...fadeIn(0.3)} className="mt-10 flex flex-col items-start gap-5">
            <MainButton
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaWhatsapp className="h-7 w-7" />}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              onFocus={() => setCtaHover(true)}
              onBlur={() => setCtaHover(false)}
            >
              Happy to chat on WhatsApp
            </MainButton>
            <a
              href={contact.cv}
              download="Sachin_Prabuditha-CV.pdf"
              className="ml-2 text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-mint"
            >
              or download my CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
