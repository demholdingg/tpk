"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Globe, Zap } from "lucide-react";
import { MILESTONES } from "@/data";
import { CtaSection } from "@/components/sections/CtaSection";
import { MapSection } from "@/components/sections/MapSection";

export default function AboutPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-white">
      {/* ── Hero ── */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1600&q=80"
          alt="Engineering team"
          fill
          priority
          className="object-cover brightness-90 saturate-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 px-6 md:px-12 pb-16 w-full">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Who We Are
          </p>
          <h1
            className="font-display font-bold uppercase text-gray-900 leading-none mb-6"
            style={{ fontSize: "clamp(44px, 7vw, 82px)" }}
          >
            About <span className="text-orange">Teknika</span>
            <br />
            Pesona Kahayan
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-[600px]">
            Since 2009, we have been building Indonesia's infrastructure — one
            project, one tower, one power plant at a time. From Jakarta to
            Papua, our engineers show up and deliver.
          </p>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <section className="px-6 md:px-12 py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Our Purpose
          </p>
          <h2 className="font-display text-4xl font-bold uppercase text-gray-900 leading-none mb-10">
            Mission &<br />
            <span className="text-orange">Vision</span>
          </h2>
          <div className="flex flex-col gap-8">
            {[
              {
                Icon: Zap,
                title: "Mission",
                text: "To deliver precision-engineered infrastructure solutions that power Indonesia's industrial growth — on time, on budget, and to the highest safety standards.",
              },
              {
                Icon: Globe,
                title: "Vision",
                text: "To be Indonesia's most trusted integrated engineering partner, known for technical excellence, reliability, and the long-term relationships we build with every client.",
              },
              {
                Icon: Award,
                title: "Our Values",
                text: "Precision, Integrity, Safety, and Continuous Improvement. These four principles guide every decision — from how we design a system to how we respond to a client call at midnight.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-5">
                <div className="w-11 h-11 shrink-0 bg-orange/10 border border-orange/25 rounded flex items-center justify-center">
                  <Icon size={18} className="text-orange" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-gray-900 mb-1.5">
                    {title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <div className="hidden lg:grid grid-cols-2 gap-4 h-[500px]">
          <div className="relative rounded-lg overflow-hidden row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=75"
              alt="Engineering"
              fill
              className="object-cover brightness-90 saturate-80"
              sizes="25vw"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=75"
              alt="Equipment"
              fill
              className="object-cover brightness-90 saturate-80"
              sizes="25vw"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=75"
              alt="Network"
              fill
              className="object-cover brightness-90 saturate-80"
              sizes="25vw"
            />
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-6 md:px-12 py-24 bg-gray-50">
        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
          Our Journey
        </p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold uppercase text-gray-900 leading-none mb-16"
        >
          Company <span className="text-orange">Milestones</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-col gap-10"
          >
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-8 items-start group"
              >
                {/* Year bubble */}
                <div
                  className="relative shrink-0 w-20 h-20 rounded-full
                                bg-white border-2 border-gray-100
                                group-hover:border-orange transition-colors duration-300
                                flex flex-col items-center justify-center text-center
                                hidden md:flex"
                >
                  <span className="font-display text-[13px] font-bold text-orange">
                    {m.year}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 bg-white border border-gray-100 rounded-lg p-7 shadow-sm
                                group-hover:border-orange/25 transition-colors"
                >
                  {/* Year mobile */}
                  <div className="md:hidden text-[11px] font-bold tracking-[2px] uppercase text-orange mb-2">
                    {m.year}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-gray-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
          Standards
        </p>
        <h2 className="font-display text-4xl font-bold uppercase text-gray-900 leading-none mb-12">
          Certifications &<br />
          <span className="text-orange">Accreditations</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { code: "ISO 9001:2015", label: "Quality Management System" },
            { code: "KOMINFO", label: "Telecommunication Licensed" },
            { code: "SIO / K3", label: "Equipment Operator Certified" },
            { code: "IUJK", label: "Construction Services License" },
          ].map((cert) => (
            <div
              key={cert.code}
              className="bg-gray-50 border border-gray-100 rounded-lg p-7 text-center
                         hover:border-orange/25 transition-colors"
            >
              <div className="font-display text-2xl font-bold text-orange mb-2">
                {cert.code}
              </div>
              <div className="text-[12px] text-gray-500 leading-snug">
                {cert.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}

      {/* ── Partners ── */}
      <section className="px-6 md:px-12 py-16 bg-white border-t border-gray-100">
        <p className="text-center text-[11px] font-semibold tracking-[3px] uppercase text-gray-400 mb-10">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {[
            "PT PLN (Persero)",
            "PT Telkomsel",
            "PT Indosat Ooredoo",
            "PT XL Axiata",
            "PT Pelindo",
            "PT Berau Coal",
          ].map((name) => (
            <div
              key={name}
              className="font-display text-lg font-bold text-gray-400 hover:text-gray-900 transition-colors tracking-wide uppercase"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <MapSection />

      <CtaSection />
    </div>
  );
}
