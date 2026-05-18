import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-white">
      {/* Page hero */}
      <div className="relative bg-gray-50 border-b border-gray-100 px-6 md:px-12 py-24 overflow-hidden">
        {/* grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
          What We Do
        </p>
        <h1
          className="font-display font-bold uppercase text-gray-900 leading-none mb-5"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Our <span className="text-orange">Services</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed max-w-[580px]">
          Three integrated divisions working together to deliver complete
          engineering solutions for Indonesia's industrial and infrastructure
          needs.
        </p>
      </div>

      {/* Service cards — vertical on this listing page */}
      <div className="px-6 md:px-12 py-16 flex flex-col gap-1 bg-white">
        {SERVICES.map((svc, i) => (
          <Link
            key={svc.id}
            href={svc.href}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-white shadow-sm
                       border border-gray-100 rounded-lg overflow-hidden
                       hover:border-orange transition-colors duration-200 mb-4"
          >
            {/* Image — alternate side */}
            <div
              className={`relative h-64 md:h-auto ${i % 2 !== 0 ? "md:order-last" : ""}`}
            >
              <Image
                src={svc.image}
                alt={svc.name}
                fill
                className="object-cover brightness-90 saturate-80 group-hover:brightness-100 transition-all duration-300"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] uppercase text-orange mb-4">
                <span className="w-5 h-px bg-orange" />
                {svc.tag}
              </div>
              <h2 className="font-display text-3xl font-bold uppercase text-gray-900 mb-4">
                {svc.name}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {svc.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide uppercase text-orange group-hover:gap-4 transition-all">
                View Details <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <CtaSection />
    </div>
  );
}
