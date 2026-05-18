"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import type { ProjectFull } from "@/data";

const ALL_CATEGORIES = ["All", "Telecom", "Mechanical", "Network", "Equipment"];

export function PortfolioClient({ projects }: { projects: ProjectFull[] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active, projects],
  );

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded text-[13px] font-semibold tracking-wide border transition-all
              ${
                active === cat
                  ? "bg-orange text-black border-orange"
                  : "bg-white text-gray-500 border-gray-200 hover:border-orange hover:text-orange"
              }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto self-center text-[12px] text-gray-400">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-gray-500">
          No projects in this category yet.
        </div>
      )}
    </section>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: ProjectFull }) {
  return (
    <Link
      href={project.href}
      className="group bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden
                 hover:border-orange transition-all duration-200 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover brightness-90 saturate-80
                     group-hover:brightness-90 group-hover:scale-105 transition-all duration-400"
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
        />
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 bg-orange/90 text-black text-[10px]
                        font-bold tracking-[2px] uppercase px-3 py-1 rounded"
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold uppercase text-gray-900 mb-2 leading-tight">
          {project.name}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
          <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
            <MapPin size={12} className="text-orange" />
            {project.location}
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
            <Calendar size={12} className="text-orange" />
            {project.year}
          </div>
        </div>

        <p className="text-[13px] text-gray-600 leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-[1.5px] uppercase
                         bg-gray-50 border border-gray-200 text-gray-500 px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-1.5 text-[13px] font-semibold uppercase text-orange
                        group-hover:gap-3 transition-all"
        >
          View Project <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}
