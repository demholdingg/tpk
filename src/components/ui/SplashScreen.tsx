"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-gray-900 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.02, 1],
                textShadow: [
                  "0 0 0px rgba(245,166,35,0)",
                  "0 0 20px rgba(245,166,35,0.3)",
                  "0 0 0px rgba(245,166,35,0)",
                ],
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.5 },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                textShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tighter uppercase text-center"
            >
              TEKNIKA <span className="text-orange">PESONA</span> KAHAYAN
            </motion.div>

            {/* Progress line */}
            <div className="mt-6 h-[2px] w-full bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-orange"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-4 text-[9px] font-bold tracking-[4px] uppercase text-orange text-center"
            >
              Initializing Systems...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
