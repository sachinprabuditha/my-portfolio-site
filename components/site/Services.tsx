"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { contact, services } from "@/data/site";
import { Eyebrow, MainButton, Reveal, RotatingBadge } from "./primitives";

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    // scroll-mt keeps the seal (which straddles the top border) clear of the sticky nav on anchor jumps.
    <section id="services" className="relative scroll-mt-16 overflow-hidden bg-black pt-24">
      <div className="relative border-t border-[#1df7ff1a] bg-[#0d101c80] pb-28 pt-40 md:pt-[11.25rem]">
        {/* Reference seal: dark teal disc on the top border, rotating text, ↓ into the cards. */}
        <a
          href="#services-grid"
          aria-label="Jump to services"
          className="group absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        >
          <RotatingBadge
            items={["Let's build something", "Let's build something"]}
            size={160}
            className="bg-[#082f30] bg-[linear-gradient(219deg,#000000d6_9%,transparent)] transition-[border-color,transform] duration-300 group-hover:scale-105 group-hover:border-brand-cyan/60"
          >
            <ArrowDown className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-y-1" />
          </RotatingBadge>
        </a>

        {/* Mint + cyan glows */}
        <div className="pointer-events-none absolute left-0 top-[26%] h-[25rem] w-[40rem] rounded-full bg-brand-mint opacity-70 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-cyan opacity-[0.56] blur-[120px]" />

        <div className="relative z-10 mx-auto flex w-[93%] max-w-7xl flex-col items-center gap-[3.75rem]">
          <Reveal className="flex flex-col items-center gap-6 text-center text-white">
            <Eyebrow>How can I help?</Eyebrow>
            <h2 className="font-display text-6xl font-normal leading-none sm:text-8xl lg:text-[7.25rem]">Services</h2>
          </Reveal>

          <div id="services-grid" className="grid w-full scroll-mt-40 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.1} className="h-full">
                <article className="glass flex h-full flex-col gap-5 rounded-[1.25rem] p-8 md:p-[3.25rem]">
                  <div className="flex items-center gap-3 tracking-[0.125rem]">
                    <span className="h-px w-9 bg-white opacity-30" />
                    <span className="text-brand-cyan">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-3xl font-normal uppercase leading-[1.1] text-white md:text-[2.5rem]">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted">{service.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <MainButton href={contact.whatsapp} target="_blank" rel="noopener noreferrer" icon={<FaWhatsapp className="h-7 w-7" />}>
            Let&apos;s chat on WhatsApp
          </MainButton>
        </div>
      </div>
    </section>
  );
}
