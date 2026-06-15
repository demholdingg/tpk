"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SECTORS } from "@/data";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionTitle } from "@/components/ui";

export function SectorsWeServe() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <SectionLabel>Industry Focus</SectionLabel>
          <SectionTitle className="text-gray-900">
            Sectors{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #ff7a00" }}
            >
              We Serve
            </span>
          </SectionTitle>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl">
            We provide heavy equipment solutions specialized for specific
            challenges in every industry line, ensuring maximum productivity
            without compromising safety.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer 
                         bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={sector.href} className="absolute inset-0 z-20" />
              {/* Subtle Background Overlay (Optional, for visual depth) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                <div className="mb-4 w-11 h-11 bg-orange flex items-center justify-center rounded-lg text-xl shadow-lg">
                  {sector.icon}
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-900 uppercase mb-3">
                  {sector.title}
                </h3>

                <div className="overflow-hidden mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {sector.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-orange uppercase tracking-widest">
                    Explore Solutions
                  </span>
                  <div
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center 
                                  text-gray-600 group-hover:bg-orange group-hover:border-orange group-hover:text-black transition-all"
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-8 right-8 text-gray-300/50 font-display text-6xl font-black italic z-0">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
