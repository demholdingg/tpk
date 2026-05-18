"use client";

import { ContactForm } from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 md:px-12 py-20">
        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
          Get in Touch
        </p>
        <h1
          className="font-display font-bold uppercase text-gray-900 leading-none"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Contact <span className="text-orange">Us</span>
        </h1>
      </div>

      <div className="px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col gap-8"
        >
          {[
            {
              Icon: MapPin,
              title: "Head Office",
              lines: [
                "Gedung 18 Office Park Lt. 25 Unit A2",
                "Jl. Tb. Simatupang No.18 Kebagusan",
                "Pasar Minggu, Jakarta Selatan",
              ],
            },
            {
              Icon: Phone,
              title: "Phone",
              lines: ["081318216400"],
            },
            {
              Icon: Mail,
              title: "Email",
              lines: ["info@pesonakahayan.co.id"],
            },
          ].map(({ Icon, title, lines }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex gap-4"
            >
              <div
                className="w-10 h-10 shrink-0 bg-orange/10 border border-orange/25
                              rounded flex items-center justify-center"
              >
                <Icon size={16} className="text-orange" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-900 mb-1">
                  {title}
                </div>
                {lines.map((l) => (
                  <div
                    key={l}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
