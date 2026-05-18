"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  view?: string;
  once?: boolean;
  margin?: string;
  stagger?: number;
  delay?: number;
}

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const SCALE_IN: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Reveal({
  children,
  className,
  variants = FADE_UP,
  initial = "hidden",
  view = "visible",
  once = true,
  margin = "-100px",
  stagger,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={view}
      viewport={{ once, margin }}
      variants={
        stagger
          ? {
              visible: {
                transition: { staggerChildren: stagger, delayChildren: delay },
              },
            }
          : variants
      }
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  variants = FADE_UP,
}: {
  children: React.ReactNode;
  variants?: Variants;
}) {
  return <motion.div variants={variants}>{children}</motion.div>;
}
