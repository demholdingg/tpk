"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, User, Tag } from "lucide-react";
import { ProjectFull } from "@/data";

export function ProjectClient({ project }: { project: ProjectFull }) {
  return (
    <div className="pt-[68px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 pb-12 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-orange text-black text-[10px] font-bold uppercase tracking-widest mb-4">
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white uppercase leading-none">
              {project.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold uppercase text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Meta */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900 mb-6">
                Project Details
              </h3>
              <div className="space-y-6">
                <DetailItem
                  icon={<User size={18} />}
                  label="Client"
                  value={project.client}
                />
                <DetailItem
                  icon={<Calendar size={18} />}
                  label="Year"
                  value={project.year}
                />
                <DetailItem
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={project.location}
                />
                <DetailItem
                  icon={<Tag size={18} />}
                  label="Category"
                  value={project.category}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-orange shrink-0 mt-1">{icon}</div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
