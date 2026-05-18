"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { HEAVY_EQUIPMENT_FLEET } from "@/data";
import { motion } from "framer-motion";

export default function FleetGalleryPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link
          href="/services/heavy-equipment"
          className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">
            Back to Service
          </span>
        </Link>
        <div className="text-white font-display font-bold uppercase tracking-tighter text-xl">
          TPK <span className="text-orange">Fleet</span>
        </div>
      </div>

      {/* Snap Scroll Container */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {HEAVY_EQUIPMENT_FLEET.map((item) => (
          <section
            key={item.id}
            className="relative h-screen w-full snap-start overflow-hidden flex items-end"
          >
            {/* Full Screen Background Image */}
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover brightness-50"
              priority
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gradient-to-t from-black via-black/40 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-orange text-[11px] font-bold tracking-[4px] uppercase mb-4">
                  {item.category}
                </div>
                <h2 className="text-white font-display text-5xl md:text-7xl font-extrabold uppercase leading-none mb-6">
                  {item.name}
                </h2>
                <p className="text-white/70 text-base max-w-md leading-relaxed mb-8">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-orange text-black px-8 py-4 rounded font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors"
                >
                  <Phone size={16} /> Rent This Unit
                </Link>
              </motion.div>

              {/* Specs Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded overflow-hidden h-fit"
              >
                {item.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-6 bg-black/40 backdrop-blur-sm"
                  >
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {spec.label}
                    </div>
                    <div className="text-orange font-display text-xl font-bold uppercase">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
