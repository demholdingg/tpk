"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ShieldCheck, Info } from "lucide-react";
import { PARTNER_BRANDS, HEAVY_EQUIPMENT_FLEET, type FleetItem } from "@/data";

export function FleetListClient() {
  // State untuk melacak brand yang dipilih
  const [activeBrand, setActiveBrand] = useState<string>("all");

  // Logika Filter: Menyaring armada berdasarkan brandId
  const filteredFleet = useMemo(() => {
    if (activeBrand === "all") return HEAVY_EQUIPMENT_FLEET;
    return HEAVY_EQUIPMENT_FLEET.filter((item) => item.brandId === activeBrand);
  }, [activeBrand]);

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-orange text-[11px] font-bold tracking-[4px] uppercase mb-4">
            Our Professional Fleet
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 uppercase">
            Authorized <span className="text-orange">Equipment</span> Partner
          </h2>
        </div>

        {/* Brand Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-gray-100">
          <button
            onClick={() => setActiveBrand("all")}
            className={`px-6 py-2.5 rounded text-[11px] font-bold uppercase tracking-widest transition-all border
              ${
                activeBrand === "all"
                  ? "bg-orange border-orange text-black shadow-lg shadow-orange/20"
                  : "bg-white border-gray-200 text-gray-400 hover:border-orange hover:text-orange"
              }`}
          >
            All Brands
          </button>

          {PARTNER_BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand.id)}
              className={`px-6 py-2.5 rounded text-[11px] font-bold uppercase tracking-widest transition-all border
                ${
                  activeBrand === brand.id
                    ? "bg-orange border-orange text-black shadow-lg shadow-orange/20"
                    : "bg-white border-gray-200 text-gray-400 hover:border-orange hover:text-orange"
                }`}
            >
              {brand.name}
            </button>
          ))}

          <div className="ml-auto hidden md:block">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
              Showing {filteredFleet.length} Units
            </span>
          </div>
        </div>

        {/* Equipment Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FleetCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredFleet.length === 0 && (
          <div className="text-center py-32 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <Info className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
              No specialized units found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function FleetCard({ item }: { item: FleetItem }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      {/* Visual Area */}
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded">
            {item.category}
          </span>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-gray-900 uppercase mb-3 leading-tight group-hover:text-orange transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-2">
          {item.description}
        </p>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 pt-6 border-t border-gray-50">
          {item.specs.slice(0, 4).map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                {spec.label}
              </span>
              <span className="text-gray-900 font-bold text-[12px] uppercase truncate">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center gap-2 text-orange text-[11px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all cursor-pointer">
            View Details <ChevronRight size={14} />
          </div>
          <ShieldCheck
            size={18}
            className="text-gray-200 group-hover:text-green-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
