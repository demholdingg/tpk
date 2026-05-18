"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/data";

// Animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 350]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Background image + overlays */}
      <motion.div
        style={{ scale: 1.05 }}
        className="absolute inset-x-0 -top-[350px] -bottom-[350px] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
          alt="Engineering Hero"
          fill
          priority
          className="object-cover brightness-75"
        />
      </motion.div>

      {/* Professional White Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />

        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Industrial grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Subtle Light Flare for depth */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 pt-16 md:pt-20">
        <div className="w-full max-w-5xl">
          {/* Badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 bg-orange/10 border border-orange/35
                       text-orange text-[11px] font-semibold tracking-[2px] uppercase
                       px-4 py-1.5 rounded-sm mb-7"
          >
            <span className="w-1.5 h-1.5 bg-orange rounded-full" />
            Excellence in Engineering
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-extrabold uppercase leading-none tracking-tight
                       text-gray-900 mb-6"
            style={{ fontSize: "clamp(52px, 7.5vw, 92px)" }}
          >
            Integrated
            <br />
            Engineering
            <br />
            <span className="text-orange">Solutions</span>
            <br />
            for the Future
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-gray-600 font-light leading-relaxed mb-10 max-w-[520px]"
            style={{ fontSize: "clamp(15px, 1.2vw, 17px)" }}
          >
            Deep expertise in Mechanical Electrical systems and
            Telecommunication Infrastructure. We build reliable and sustainable
            foundations for industrial needs and national infrastructure.
          </motion.p>

          {/* Actions */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-orange text-black font-semibold
                         text-[14px] px-7 py-3.5 rounded transition-all
                         hover:bg-orange-dark hover:-translate-y-0.5"
            >
              Our Services <ArrowRight size={15} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-transparent text-gray-900 font-medium
                         text-[14px] px-7 py-3.5 rounded border border-gray-300 transition-all
                         hover:border-orange hover:bg-gray-50"
            >
              Technical Specifications
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-orange to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-white w-full h-1/2"
          />
        </div>
      </motion.div>
    </section>
  );
}
