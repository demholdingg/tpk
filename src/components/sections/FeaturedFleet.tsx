"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Drill } from "lucide-react";
import { HEAVY_EQUIPMENT_FLEET } from "@/data";

export function FeaturedFleet() {
  // Kita hanya menampilkan 3 unit pertama untuk highlight di homepage
  const featuredItems = HEAVY_EQUIPMENT_FLEET.slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Rental Solutions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-gray-900 leading-none">
            Featured <span className="text-orange">Fleet</span>
          </h2>
        </div>
        <Link
          href="/services/heavy-equipment/fleet"
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-orange transition-colors"
        >
          View All Units{" "}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-orange/20 transition-all shadow-sm hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 bg-orange text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Drill size={12} /> {item.category}
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-display text-xl font-bold text-gray-900 uppercase mb-3 group-hover:text-orange transition-colors">
                {item.name}
              </h3>
              <div className="space-y-2 mb-8">
                {item.specs.slice(0, 2).map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between border-b border-gray-50 pb-2"
                  >
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/heavy-equipment/fleet"
                className="flex items-center justify-center w-full py-4 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-widest rounded hover:bg-orange hover:text-black transition-all shadow-lg shadow-gray-900/10"
              >
                Check Availability
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
