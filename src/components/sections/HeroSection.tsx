"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { HOME_HERO_SLIDES } from "@/data";
import { ButtonPrimary, ButtonOutline, SectionLabel } from "@/components/ui";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = HOME_HERO_SLIDES[currentIndex];

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + HOME_HERO_SLIDES.length) % HOME_HERO_SLIDES.length,
    );

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {currentSlide.video ? (
            <video
              src={currentSlide.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              priority
              className="object-cover opacity-60"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionLabel>{currentSlide.tag}</SectionLabel>
          </motion.div>

          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-5xl md:text-8xl font-extrabold text-white uppercase leading-none mb-6"
          >
            {currentSlide.title}{" "}
            <span className="text-orange block md:inline">
              {currentSlide.subtitle}
            </span>
          </motion.h1>

          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            {currentSlide.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <ButtonPrimary href="/services">Explore Services</ButtonPrimary>
            <ButtonOutline href="/portfolio">Project Experience</ButtonOutline>
          </motion.div>
        </div>

        {/* Bottom Progress Bars */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
          <div className="flex gap-2">
            {HOME_HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-1 w-12 bg-white/20 overflow-hidden"
              >
                {currentIndex === i && (
                  <motion.div
                    layoutId="progress"
                    className="absolute inset-0 bg-orange origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Side Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 md:left-8 z-30 flex items-center">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full 
                     bg-black/20 backdrop-blur-sm hover:bg-orange hover:border-orange hover:text-black transition-all text-white group"
        >
          <ChevronLeft
            size={24}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 md:right-8 z-30 flex items-center">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full 
                     bg-black/20 backdrop-blur-sm hover:bg-orange hover:border-orange hover:text-black transition-all text-white group"
        >
          <ChevronRight
            size={24}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-white/40 uppercase tracking-[3px]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange to-transparent" />
      </motion.div>
    </section>
  );
}
