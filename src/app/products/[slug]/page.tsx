"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Zap, Target, Award } from "lucide-react";
import { PRODUCTS_DATA } from "@/data";
import { CtaSection } from "@/components/sections/CtaSection";

// Varian untuk animasi pengetikan yang konsisten dengan halaman list produk
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

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link
            href="/products"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-orange transition-colors"
          >
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange">
            {product.name}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-orange"></span>
              <span className="text-orange text-[11px] font-bold tracking-[4px] uppercase">
                Technical Specification
              </span>
            </div>
            <motion.h1
              variants={typingContainer}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl md:text-6xl font-bold text-gray-900 uppercase leading-tight mb-8"
            >
              {product.name.split("").map((char, i) => (
                <motion.span key={i} variants={typingLetter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-[11px] uppercase tracking-wider">
                  <Target size={16} className="text-orange" />
                  Application
                </div>
                <p className="text-gray-500 text-sm">{product.application}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-[11px] uppercase tracking-wider">
                  <Award size={16} className="text-orange" />
                  Quality Standard
                </div>
                <p className="text-gray-500 text-sm">
                  Industrial Grade / ISO Certified
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-gray-900 uppercase mb-12 flex items-center gap-4">
                Key Performance & Features
                <span className="flex-1 h-[1px] bg-gray-200"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:border-orange/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange/5 flex items-center justify-center shrink-0 text-orange">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">
                        {feature}
                      </h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed">
                        Advanced industrial solution designed for maximum
                        efficiency and long-term durability.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-gray-900 text-white p-8 rounded-2xl sticky top-24">
                <h3 className="font-display text-xl font-bold uppercase mb-6">
                  Inquiry & Support
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Need detailed technical data or a custom quotation for{" "}
                  {product.name}? Our engineers are ready to assist.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <CheckCircle2 size={16} className="text-orange" />
                    Free Site Assessment
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <CheckCircle2 size={16} className="text-orange" />
                    Custom Engineering
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300">
                    <CheckCircle2 size={16} className="text-orange" />
                    24/7 Technical Support
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center bg-orange text-black font-bold py-4 rounded uppercase text-[13px] hover:bg-orange/90 transition-all hover:scale-[1.02]"
                >
                  Request Quotation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
