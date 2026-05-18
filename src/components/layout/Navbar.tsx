"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_LINKS } from "@/data";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Sembunyikan jika scroll ke bawah dan sudah melewati area hero
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setIsScrolled(latest > 20);
  });

  // Sembunyikan Navbar untuk halaman detail Heavy Equipment / Fleet Gallery
  // Navbar akan ditampilkan di /services/heavy-equipment, tapi disembunyikan di /services/heavy-equipment/fleet
  if (pathname.startsWith("/services/heavy-equipment/fleet")) {
    return null;
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={clsx(
        "fixed top-0 inset-x-0 z-50 flex items-center px-6 md:px-12 transition-all duration-300 border-b",
        isScrolled
          ? "h-14 md:h-16 bg-white/95 backdrop-blur-lg border-gray-200 shadow-sm"
          : "h-14 md:h-16 bg-white/90 backdrop-blur-md border-gray-100",
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-display text-lg md:text-xl font-bold text-gray-900 tracking-wide mr-auto transition-all"
      >
        Teknika <span className="text-orange">Pesona</span> Kahayan
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-9 mr-8">
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={link.href}
              className={clsx(
                "text-sm font-medium tracking-wide transition-colors relative pb-1",
                pathname === link.href
                  ? "text-gray-900 after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:bg-orange after:rounded-sm"
                  : "text-gray-500 hover:text-gray-900",
              )}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* CTA button */}
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center bg-orange text-black text-[13px]
                   font-semibold tracking-wide px-5 py-2.5 rounded transition-all
                   hover:bg-orange-dark hover:-translate-y-px"
      >
        Request Quote
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-gray-900 ml-4"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className={clsx(
            "absolute inset-x-0 bg-white border-t border-gray-100 flex flex-col px-6 py-6 gap-5 md:hidden shadow-xl transition-all",
            isScrolled ? "top-14 md:top-16" : "top-16 md:top-20",
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "text-base font-medium",
                pathname === link.href ? "text-orange" : "text-gray-600",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-orange text-black font-semibold
                       py-3 rounded mt-2"
          >
            Request Quote
          </Link>
        </div>
      )}
    </motion.header>
  );
}
