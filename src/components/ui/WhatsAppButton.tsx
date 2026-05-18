"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor resmi perusahaan
  const message =
    "Hello Teknika Pesona Kahayan, I am interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Hover Label */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
        Chat with us
      </span>
      <MessageCircle
        size={28}
        className="group-hover:rotate-12 transition-transform duration-300"
      />
      {/* Indicator Dot */}
      <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20 backdrop-blur-sm border border-white/50"></span>
      </span>
    </motion.a>
  );
}
