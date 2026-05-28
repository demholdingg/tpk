"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { FOOTER_SERVICES, FOOTER_COMPANY } from "@/data";

export function Footer() {
  const pathname = usePathname();

  // Sembunyikan Footer untuk halaman detail Heavy Equipment / Fleet Gallery
  // Hanya sembunyikan di halaman gallery full-screen
  if (pathname.startsWith("/services/heavy-equipment/fleet")) {
    return null;
  }

  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-6 md:px-12 border-t border-gray-100">
      {/* Top grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12
                      border-b border-gray-200 mb-8"
      >
        {/* Brand */}
        <div>
          <div className="font-display text-xl font-bold text-gray-900 mb-3">
            Teknika <span className="text-orange">Pesona</span> Kahayan
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-[280px]">
            Penyedia solusi alat berat dan material handling terintegrasi,
            melayani persewaan dan pemeliharaan armada untuk berbagai sektor
            industri di Indonesia.
          </p>
          <div className="flex gap-3">
            {[
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://linkedin.com",
              },
              {
                icon: Instagram,
                label: "Instagram",
                href: "https://instagram.com",
              },
              { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border border-gray-200
                           rounded text-gray-500 transition-all
                           hover:border-orange hover:text-orange hover:bg-orange/10"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gray-900 mb-5">
            Services
          </div>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-orange transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gray-900 mb-5">
            Company
          </div>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_COMPANY.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-orange transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* HQ */}
        <div>
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gray-900 mb-5">
            Headquarters
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <span className="block text-gray-900 text-[11px] font-semibold tracking-wide uppercase mb-2">
              Head Office
            </span>
            Gedung 18 Office Park Lt. 25 Unit A2, Jl. Tb. Simatupang No.18
            Kebagusan, Pasar Minggu, Jakarta Selatan, DKI Jakarta
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange font-medium hover:opacity-75 transition-opacity"
          >
            View on Maps →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-4
                      text-xs text-[#8A909C]"
      >
        <span>
          © {new Date().getFullYear()} Teknika Pesona Kahayan. Heavy Equipment
          Specialist.
        </span>
        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
