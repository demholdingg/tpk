"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SECTORS, HEAVY_EQUIPMENT_FLEET, PRODUCTS_DATA } from "@/data";
import { SectionLabel, SectionTitle } from "@/components/ui";
import { FleetListClient } from "@/components/sections/FleetListClient";

export default function SectorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const sector = SECTORS.find((s) => s.id === id);

  if (!sector) {
    notFound();
  }

  // 1. Filter armada (Fleet) dengan jangkauan lebih luas (cek kategori & nama)
  const filteredFleet = HEAVY_EQUIPMENT_FLEET.filter((item) =>
    sector.relatedCategories.some(
      (cat) =>
        item.category.toLowerCase().includes(cat.toLowerCase()) ||
        item.name.toLowerCase().includes(cat.toLowerCase()),
    ),
  );

  // 2. Filter produk teknologi (Products) yang relevan dengan sektor ini
  const filteredProducts = PRODUCTS_DATA.filter(
    (product) =>
      sector.relatedCategories.some(
        (cat) =>
          product.name.toLowerCase().includes(cat.toLowerCase()) ||
          product.description.toLowerCase().includes(cat.toLowerCase()),
      ) ||
      // Cek juga apakah ID sektor ada dalam field application produk
      product.application.toLowerCase().includes(sector.id.toLowerCase()),
  ).map((p) => ({
    // Transformasi data agar sesuai dengan interface FleetItem yang diharapkan FleetListClient
    id: p.id,
    name: p.name,
    category: "Product Solution",
    image: p.image,
    description: p.description,
    specs: [{ label: "Application", value: p.application }],
  }));

  // 3. Gabungkan keduanya untuk hasil yang lebih kaya
  const allSolutions = [...filteredFleet, ...filteredProducts];

  return (
    <div className="pt-[68px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center overflow-hidden bg-gray-900">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <div className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-orange mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange flex items-center justify-center rounded-lg text-2xl shadow-xl">
                {sector.icon}
              </div>
              <SectionLabel>Industry Sector</SectionLabel>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold text-white uppercase leading-none">
              {sector.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle className="text-gray-900 mb-8">
              Industry <span className="text-orange">Overview</span>
            </SectionTitle>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {sector.description} Kami memahami bahwa setiap operasional di
              sektor {sector.title.toLowerCase()} memiliki standar keamanan dan
              efisiensi yang ketat. Oleh karena itu, kami menyediakan unit yang
              telah tersertifikasi dan siap bekerja dalam beban kerja tinggi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Operator Bersertifikat SIO",
                "Maintenance 24/7",
                "Unit Standar OEM",
                "Kepatuhan K3L/HSE",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-gray-700 uppercase tracking-wide"
                >
                  <CheckCircle2 size={18} className="text-orange" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center">
            <h3 className="font-display text-xl font-bold text-gray-900 uppercase mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Konsultasikan kebutuhan spesifik proyek Anda dengan tim ahli kami
              untuk mendapatkan rekomendasi armada yang paling efisien secara
              biaya dan waktu.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center bg-gray-900 text-white font-bold py-4 rounded uppercase text-[12px] tracking-widest hover:bg-orange hover:text-black transition-all"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Equipment Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
          <SectionLabel>Recommended Fleet</SectionLabel>
          <SectionTitle className="text-gray-900">
            Solutions for {sector.title}
          </SectionTitle>
        </div>
        <FleetListClient items={allSolutions} />
      </section>
    </div>
  );
}
