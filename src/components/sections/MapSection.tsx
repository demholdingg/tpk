"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";

export function MapSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.855325603772!2d106.83002627586827!3d-6.282747193706076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2104533924f%3A0x7d06e9871578e906!2s18%20Office%20Park!5e0!3m2!1sen!2sid!4v1715000000000!5m2!1sen!2sid";

  return (
    <section className="py-24 bg-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-orange"></span>
              <span className="text-orange text-[11px] font-bold tracking-[4px] uppercase">
                Visit Our Headquarters
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold text-gray-900 uppercase leading-tight mb-8">
              Global Excellence <br />{" "}
              <span className="text-gray-400">Local Presence</span>
            </h2>

            <div className="space-y-8 mt-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-gray-900 flex items-center justify-center text-orange shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-2">
                    Head Office
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    18 Office Park Lt. 25 Unit A2, <br />
                    Jl. Tb. Simatupang No.18 Kebagusan, <br />
                    Jakarta Selatan, DKI Jakarta
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-2">
                    Operation Hours
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Mon — Fri: 08:00 AM - 05:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-orange text-black font-bold py-4 px-8 rounded text-[12px] uppercase hover:bg-orange/90 transition-all hover:translate-x-1"
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-2/3 h-[500px] relative rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-gray-100"
          >
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Teknika Pesona Kahayan Office"
              className="relative z-10"
            ></iframe>
            {/* Overlay for industrial aesthetic */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
