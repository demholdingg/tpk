import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HEAVY_EQUIPMENT_FLEET } from "@/data";
import { FleetListClient } from "@/components/sections/FleetListClient";

export const metadata: Metadata = {
  title: "Fleet Gallery | Heavy Equipment & Material Handling",
  description:
    "Browse our comprehensive fleet of heavy equipment, from forklifts to heavy-duty cranes, available for rental across Indonesia.",
};

export default function FleetPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Custom Minimal Header (karena Navbar disembunyikan) */}
      <header className="bg-gray-900 py-10 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services/heavy-equipment"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-orange hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-orange"></span>
                <span className="text-orange text-[11px] font-bold tracking-[4px] uppercase">
                  Equipment Excellence
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
                Fleet <span className="text-orange">Specifications</span>
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
              Telusuri spesifikasi teknis lengkap armada kami. Setiap unit
              dirawat sesuai standar OEM dan siap untuk mendukung operasional
              industri Anda 24/7.
            </p>
          </div>
        </div>
      </header>

      <FleetListClient items={HEAVY_EQUIPMENT_FLEET} />
    </div>
  );
}
