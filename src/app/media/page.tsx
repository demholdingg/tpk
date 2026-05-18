"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, PlayCircle, ArrowRight, FileText } from "lucide-react";
import { NEWS_ARTICLES, DOWNLOAD_RESOURCES } from "@/data";
import { CtaSection } from "@/components/sections/CtaSection";

// Varian untuk efek muncul satu per satu
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar kartu
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MediaPage() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* ── Hero ── */}
      <div className="relative bg-gray-50 border-b border-gray-100 px-6 md:px-12 py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
          Information Hub
        </p>
        <h1
          className="font-display font-bold uppercase text-gray-900 leading-none mb-5"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Media <span className="text-orange">Center</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed max-w-[580px]">
          Stay updated with our latest corporate news, project milestones, and
          resources for media partners.
        </p>
      </div>

      {/* ── Latest News ── */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
              Stay Informed
            </p>
            <h2 className="font-display text-3xl font-bold uppercase text-gray-900">
              Latest News
            </h2>
          </div>
          <Link
            href="/media/news"
            className="text-sm font-semibold text-orange hover:gap-3 transition-all flex items-center gap-2"
          >
            View All News <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {NEWS_ARTICLES.map((article) => (
            <motion.article
              variants={fadeInUp}
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative h-60 rounded-lg overflow-hidden mb-5 shadow-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-orange">
                  {article.category}
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-2 font-medium">
                {article.date}
              </p>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-orange transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── SEI on Frame (Video/Gallery) ── */}
      <section className="px-6 md:px-12 py-20 bg-gray-50">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Visual Showcase
          </p>
          <h2 className="font-display text-3xl font-bold uppercase text-gray-900 mb-10">
            SEI on Frame
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-xl overflow-hidden group shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581094651181-35942459ef62?w=1200&q=80"
              alt="Video cover"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="text-white hover:scale-110 transition-transform">
                <PlayCircle size={80} strokeWidth={1} />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-display text-xl font-bold">
                Corporate Video 2024
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden shadow-sm group"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=75&sig=${i}`}
                  alt="Gallery"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-orange/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download Center & E-Magazine ── */}
      <section className="px-6 md:px-12 py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Resources
          </p>
          <h2 className="font-display text-3xl font-bold uppercase text-gray-900 mb-8">
            Download Center
          </h2>
          <div className="flex flex-col gap-4">
            {DOWNLOAD_RESOURCES.map((res) => (
              <div
                key={res.title}
                className="flex items-center justify-between p-5 border border-gray-100 rounded-lg hover:border-orange/30 hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-orange group-hover:bg-orange/10 transition-colors">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      {res.title}
                    </div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">
                      {res.type} • {res.size}
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-orange transition-colors">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-gray-100">
          <div className="relative w-48 h-64 shrink-0 shadow-2xl rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80"
              alt="Magazine cover"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                Issue 04 / 2024
              </span>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-2">
              Reading Material
            </p>
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 uppercase">
              E-Magazine
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Our quarterly publication featuring in-depth project stories,
              engineering insights, and sustainability progress.
            </p>
            <button className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-orange hover:text-black transition-all">
              Read Online
            </button>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
