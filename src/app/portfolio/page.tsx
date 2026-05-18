"use client";

import { PortfolioClient } from "@/components/sections/PortfolioClient";
import { ALL_PROJECTS } from "@/data";
import { CtaSection } from "@/components/sections/CtaSection";
import Image from "next/image";
import { motion } from "framer-motion";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const typingLetter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function PortfolioPage() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center px-6 md:px-12 overflow-hidden bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1400&q=80" // Gambar umum untuk proyek engineering
          alt="Engineering Project Portfolio"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative z-10 w-full max-w-5xl">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Our Work
          </p>
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="font-display font-bold uppercase text-white leading-none mb-12"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            {"Project ".split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
            <span className="text-orange">
              {"Portfolio".split("").map((char, i) => (
                <motion.span key={i} variants={typingLetter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "12", label: "Provinces" },
              { value: "8", label: "Industries Served" },
              { value: "15+", label: "Years Track Record" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                  className="font-display text-4xl md:text-5xl font-extrabold text-orange leading-none mb-3 drop-shadow-sm"
                >
                  {s.value}
                </motion.div>
                <div className="text-[9px] font-bold tracking-[2px] uppercase text-white/40 leading-tight">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Client component handles filter + grid */}
      <PortfolioClient projects={ALL_PROJECTS} />

      <CtaSection />
    </div>
  );
}
