"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealItem, SCALE_IN } from "../ui/Reveal";
import { PROJECTS } from "@/data";

export function ProjectsSection() {
  return (
    <section className="bg-white px-6 md:px-12 py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Our Work
          </p>
          <h2
            className="font-display font-bold uppercase tracking-tight text-gray-900 leading-none"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Featured Projects
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="shrink-0 inline-flex items-center gap-2 bg-transparent text-gray-900 font-medium
                     text-[14px] px-6 py-3 rounded border border-gray-300 transition-all
                     hover:border-gray-900 hover:bg-gray-50"
        >
          View All Projects →
        </Link>
      </div>

      {/* Grid */}
      <Reveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {PROJECTS.map((project) => (
          <RevealItem key={project.id} variants={SCALE_IN}>
            <Link
              href={project.href}
              className="group relative rounded-md overflow-hidden aspect-[4/5] block"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover brightness-70 saturate-80
                         group-hover:brightness-90 group-hover:saturate-100
                         group-hover:scale-105 transition-all duration-400"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] font-bold tracking-[2px] uppercase text-orange mb-1.5">
                  {project.category}
                </div>
                <div className="font-display text-[18px] font-bold uppercase text-white leading-tight">
                  {project.name}
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}

        {/* See more card */}
        <RevealItem variants={SCALE_IN}>
          <div
            className="rounded-md border border-gray-200 bg-gray-50
                        aspect-[4/5] flex flex-col items-center justify-center gap-4 text-center p-6"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-orange text-black font-semibold
                         text-sm px-5 py-2.5 rounded transition-all hover:bg-orange-dark mt-2"
            >
              All Projects →
            </Link>
          </div>
        </RevealItem>
      </Reveal>
    </section>
  );
}
