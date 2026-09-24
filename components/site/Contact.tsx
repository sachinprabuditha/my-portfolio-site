"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa6";
import { sendEmail } from "@/actions/sendEmail";
import { contact } from "@/data/site";
import { ArrowUpRight, Eyebrow, Reveal } from "./primitives";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="self-start rounded-full bg-brand-cyan px-8 py-5 font-medium text-black transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-cyan/60";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-brand-cyan opacity-40 blur-[180px]" />

      <div className="relative mx-auto grid w-[93%] max-w-7xl gap-16 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-white md:text-[3.25rem]">
            Have a project in mind? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="max-w-md text-lg text-white/70">
            Open to freelance projects, full-time roles and collaborations. I usually reply within a day.
          </p>

          <div className="mt-4 flex flex-col border-t border-white/15">
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between border-b border-white/15 py-6 text-lg text-white transition-colors hover:text-brand-cyan md:text-[1.375rem]"
            >
              {contact.email}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/15 py-6 text-lg text-white transition-colors hover:text-brand-mint md:text-[1.375rem]"
            >
              <span className="flex items-center gap-3">
                <FaWhatsapp className="h-5 w-5" />
                {contact.phoneDisplay}
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            ref={formRef}
            className="glass flex flex-col gap-4 rounded-[1.25rem] p-6 md:p-10"
            action={async (formData) => {
              const { error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Message sent, thanks!");
              formRef.current?.reset();
            }}
          >
            <label htmlFor="senderEmail" className="text-sm uppercase tracking-[0.125rem] text-white/60">
              Your email
            </label>
            <input
              id="senderEmail"
              name="senderEmail"
              type="email"
              autoComplete="email"
              required
              maxLength={500}
              placeholder="you@company.com"
              className={inputClass}
            />
            <label htmlFor="message" className="mt-2 text-sm uppercase tracking-[0.125rem] text-white/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={6}
              placeholder="Tell me about your project…"
              className={`${inputClass} resize-none`}
            />
            <div className="mt-4">
              <SubmitButton />
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
