"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { SERVICE_DETAILS } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const typingLetter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICE_DETAILS.find((s) => s.slug === params.slug);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-[68px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center px-6 md:px-12 overflow-hidden bg-gray-900">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover opacity-50"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative z-10 w-full max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange text-[10px] font-bold tracking-[4px] uppercase mb-4"
          >
            {service.tag}
          </motion.p>
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="text-white font-display text-4xl md:text-6xl font-bold uppercase leading-tight mb-6"
          >
            {service.name.split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-white/80 text-lg max-w-2xl font-medium">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold uppercase text-gray-900 mb-6 border-b border-gray-100 pb-4">
                Service Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm group hover:border-orange/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl mb-4">{feature.icon}</div>
                  <h3 className="font-display font-bold text-gray-900 uppercase mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Section for Heavy Equipment */}
            {params.slug === "heavy-equipment" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-12 p-8 md:p-12 bg-gray-900 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-3">
                      Explore Our{" "}
                      <span className="text-orange">Full Fleet</span>
                    </h3>
                    <p className="text-white/60 text-sm max-w-sm">
                      View high-resolution images and technical specifications
                      of our heavy machinery catalog.
                    </p>
                  </div>
                  <Link
                    href="/services/heavy-equipment/fleet"
                    className="group bg-orange text-black px-8 py-4 rounded font-bold uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center gap-3 whitespace-nowrap"
                  >
                    Open Fleet Gallery{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar Specs */}
          <aside className="lg:border-l lg:border-gray-100 lg:pl-12">
            <div className="sticky top-28">
              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 uppercase font-display text-4xl font-bold pointer-events-none">
                  Specs
                </div>
                <h3 className="font-display font-bold text-orange uppercase mb-8 text-sm tracking-[2px] border-b border-white/10 pb-4">
                  Technical Parameters
                </h3>
                <div className="space-y-7">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-[2px]">
                        {spec.label}
                      </span>
                      <span className="text-white font-display text-sm font-semibold tracking-wide">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-10 w-full flex items-center justify-center gap-2 bg-orange text-black py-4 rounded font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all"
                >
                  <Phone size={14} /> Request Quote
                </Link>
              </div>

              <div className="mt-6 p-6 border border-gray-100 rounded-xl">
                <div className="flex items-center gap-3 text-orange mb-3">
                  <CheckCircle2 size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Certified Quality
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  All our services comply with international safety and quality
                  standards.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
