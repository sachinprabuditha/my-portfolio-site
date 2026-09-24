"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { contact, projects } from "@/data/site";
import { ArrowRight, Eyebrow, Reveal } from "./primitives";
import { scrollToId } from "./SmoothScroll";

const INITIAL_COUNT = 6;

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="work" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto w-[93%] max-w-7xl">
        <Reveal className="mb-16 flex flex-col items-center gap-8 text-center text-white md:mb-24">
          <Eyebrow>Things I&apos;ve built &lt;3</Eyebrow>
          <h2 className="font-display text-6xl font-normal leading-none sm:text-8xl lg:text-[7.25rem]">Recent Work</h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08} className="h-full">
              {/* Reference card hover: block turns black with a white border, arrow turns
                  from → to ↗, and the title rolls up to reveal an identical copy below. */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-xl border border-transparent bg-[#ccdcff1f] p-4 transition-colors duration-300 hover:border-white hover:bg-black"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg bg-brand-deep">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col rounded-lg bg-white/5 px-5 py-[1.125rem] text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="relative block overflow-hidden text-[1.5rem] font-bold leading-[1.1] md:text-[1.65rem]">
                      <span className="block transition-transform duration-700 ease-out-cubic group-hover:-translate-y-[102%]">
                        {project.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[102%] block transition-transform duration-700 ease-out-cubic group-hover:-translate-y-[102%]"
                      >
                        {project.title}
                      </span>
                    </span>
                    <ArrowRight className="h-5 w-5 flex-none transition-transform duration-500 ease-out-cubic group-hover:-rotate-45" />
                  </div>

                  <p className="mt-3 flex items-center gap-2 leading-[1.1] text-white/80">
                    <span className="h-2 w-2 rounded-full bg-brand-mint" />
                    {project.category} · {project.year}
                  </p>

                  <p className="mt-4 line-clamp-3 text-sm text-white/60">{project.des}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-6 text-xs text-brand-muted">
                    {project.tech.map((t, j) => (
                      <Fragment key={t}>
                        {j > 0 && <span className="h-1 w-1 rounded-full bg-brand-muted" />}
                        <span>{t}</span>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {projects.length > INITIAL_COUNT && (
            <button
              type="button"
              onClick={() => {
                // Collapsing removes a row of cards, which would strand the reader
                // further down the page — bring them back to the section top instead.
                if (showAll) scrollToId("work");
                setShowAll((s) => !s);
              }}
              aria-expanded={showAll}
              className="rounded-full bg-white px-8 py-5 font-medium text-black transition-transform hover:scale-[1.03]"
            >
              {showAll ? "Show fewer" : `View all ${projects.length} projects`}
            </button>
          )}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-5 font-medium text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan"
          >
            <FaGithub className="h-5 w-5" />
            GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}
