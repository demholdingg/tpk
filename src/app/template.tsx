"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top Loading Progress Bar */}
      <motion.div
        key="page-progress-bar"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{
          scaleX: 1,
          opacity: [1, 1, 0],
        }}
        transition={{
          // Durasi 1s memberikan kesan 'loading' yang cukup untuk user menyadari transisi
          scaleX: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          opacity: { times: [0, 0.8, 1], duration: 1.3 },
        }}
        style={{ originX: 0 }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-orange z-[100] pointer-events-none 
                   shadow-[0_1px_10px_rgba(245,166,35,0.4)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          // Meningkatkan jarak sliding dan durasi untuk efek transisi yang lebih berani dan sinematik
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
