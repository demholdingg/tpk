"use client";

import { motion } from "framer-motion";

/**
 * loading.tsx menyediakan state visual instan saat rute sedang dimuat.
 * Sangat berguna untuk memberikan feedback pada koneksi yang lambat.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        {/* Brand Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl font-bold text-gray-900 tracking-wide mb-10 text-center"
        >
          Teknika <span className="text-orange">Pesona</span> Kahayan
        </motion.div>

        {/* Animated Progress Bar (Industrial Style) */}
        <div className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-orange"
            initial={{ left: "-100%", width: "100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Status Message */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-6 text-[10px] font-bold tracking-[4px] uppercase text-gray-400 text-center"
        >
          Optimizing Resources...
        </motion.p>
      </div>
    </div>
  );
}
