"use client";

import { notFound } from "next/navigation";
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Tag,
  ChevronRight,
} from "lucide-react";
import { ALL_PROJECTS } from "@/data";
import { CtaSection } from "@/components/sections/CtaSection";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.id === slug);
  return {
    title: `${project?.name || "Project"} | Teknika Pesona Kahayan`,
    description: project?.description,
  };
}

// Varian animasi pengetikan yang konsisten dengan halaman produk
const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const typingLetter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project = ALL_PROJECTS.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-orange transition-colors"
          >
            <ArrowLeft size={14} /> Back to Experience
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange">
            {project.name}
          </span>
        </div>
      </div>

      {/* Hero & Project Overview */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-orange"></span>
                <span className="text-orange text-[11px] font-bold tracking-[4px] uppercase">
                  Project Case Study
                </span>
              </div>

              <motion.h1
                variants={typingContainer}
                initial="hidden"
                animate="visible"
                className="font-display text-4xl md:text-6xl font-bold text-gray-900 uppercase leading-tight mb-8"
              >
                {project.name.split("").map((char, i) => (
                  <motion.span key={i} variants={typingLetter}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {project.description}
              </p>

              {/* Technical Information Grid */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-100 pt-10"
              >
                {[
                  { icon: User, label: "Client", value: project.client },
                  { icon: MapPin, label: "Location", value: project.location },
                  {
                    icon: Calendar,
                    label: "Project Year",
                    value: project.year,
                  },
                  { icon: Tag, label: "Category", value: project.category },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-orange shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mb-1">
                        {item.label}
                      </div>
                      <div className="text-gray-900 font-bold text-sm uppercase leading-tight">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Main Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Tags / Expertise */}
      <section className="bg-gray-50 py-12 px-6 md:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mr-4">
            Key Expertise Used:
          </span>
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2"
            >
              <ChevronRight size={12} className="text-orange" />
              {tag}
            </span>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
