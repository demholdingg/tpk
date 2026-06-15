"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { PRODUCTS_DATA } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";

// Varian untuk animasi pengetikan
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

export default function ProductsPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]); // Kurangi parallax untuk efek yang lebih halus

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center px-6 md:px-12 overflow-hidden bg-white border-b border-gray-100">
        <motion.div
          style={{ y, scale: 1.05 }} // Zoom awal untuk efek parallax yang lebih baik
          className="absolute inset-x-0 -top-[350px] -bottom-[350px]" // Beri ruang lebih untuk parallax
        >
          <Image
            src="/images/plummewah/pm-1500.png"
            alt="Industrial Machinery Solutions"
            fill
            sizes="100vw"
            className="object-cover opacity-25 brightness-75" // Opacity lebih rendah, brightness lebih gelap
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        {/* Gradasi lebih transparan */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        {/* Overlay untuk grid pattern, jika masih diinginkan */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(245,166,35,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 w-full max-w-5xl">
          <p className="text-orange text-[11px] font-bold tracking-[4px] uppercase mb-4">
            Industrial Solutions
          </p>
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl md:text-7xl font-bold text-gray-900 uppercase leading-tight mb-6"
          >
            {"Premier ".split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
            <span className="text-orange">
              {"Equipment".split("").map((char, i) => (
                <motion.span key={i} variants={typingLetter}>
                  {char}
                </motion.span>
              ))}
            </span>
            {" & Systems".split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            We provide a comprehensive range of heavy machinery and material
            handling systems, engineered for precision and durability across
            Indonesia's most demanding industrial sectors.
          </p>
        </div>
      </section>

      {/* JSON-LD for Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            PRODUCTS_DATA.map((product) => ({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              image: `https://www.pesonakahayan.co.id${product.image}`, // Ensure absolute URL
              url: `https://www.pesonakahayan.co.id/products/${product.slug}`,
              brand: {
                "@type": "Brand",
                name: "Teknika Pesona Kahayan", // Or the specific brand of the product if available in data
              },
              // Add offers, aggregateRating, review if available
              // "offers": {
              //   "@type": "Offer",
              //   "priceCurrency": "IDR",
              //   "price": "Call for Price", // Or actual price if available
              //   "availability": "https://schema.org/InStock"
              // }
            })),
          ),
        }}
      />
      {/* Products Grid */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-orange/20 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-orange text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Zap size={10} fill="black" /> Product Solution
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold text-gray-900 uppercase mb-3 leading-tight group-hover:text-orange transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-1 line-clamp-3">
                  &quot;{product.description}&quot;
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 gap-y-2.5 mb-8">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide"
                    >
                      <CheckCircle2 size={14} className="text-orange" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Best Application
                    </div>
                    <div className="text-gray-900 font-bold text-[11px] uppercase bg-gray-100 px-2 py-0.5 rounded">
                      {product.application}
                    </div>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white group-hover:bg-orange group-hover:text-black transition-all duration-300"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
