"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "../ui/Reveal";
import { SERVICES } from "@/data";

export function ServicesSection() {
  return (
    <section className="bg-white px-6 md:px-12 py-24">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
          What We Do
        </p>
        <h2
          className="font-display font-bold uppercase tracking-tight text-gray-900 leading-none mb-4"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          Our Core Services
        </h2>
        <p className="text-[15px] text-gray-600 leading-relaxed max-w-[560px]">
          We deliver precision in every project, combining modern technology
          with international standard engineering practices.
        </p>
      </div>

      {/* Cards grid */}
      <Reveal
        stagger={0.1}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200
                      border border-gray-200 rounded-lg overflow-hidden"
      >
        {SERVICES.map((service) => (
          <RevealItem key={service.id}>
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}

// ── ServiceCard ────────────────────────────────────────────────────────────────
function ServiceCard({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <article
      className="group bg-white hover:bg-gray-50 transition-colors duration-200
                        relative overflow-hidden p-10"
    >
      {/* Orange top bar on hover */}
      <span
        className="absolute top-0 inset-x-0 h-[3px] bg-orange
                       scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
      />

      {/* Tag */}
      <div
        className="flex items-center gap-2 text-[10px] font-bold tracking-[2.5px]
                      uppercase text-orange mb-5"
      >
        <span className="w-5 h-px bg-orange" />
        {service.tag}
      </div>

      {/* Image */}
      <div className="relative w-full h-[180px] mb-6 rounded overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover brightness-75 saturate-90
                     group-hover:brightness-90 group-hover:saturate-100 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <h3
        className="font-display text-[22px] font-bold uppercase tracking-wide
                     text-gray-900 mb-3"
      >
        {service.name}
      </h3>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-7">
        {service.description}
      </p>

      {/* Link */}
      <Link
        href={service.href}
        className="inline-flex items-center gap-2 text-[13px] font-semibold
                   tracking-wide uppercase text-orange transition-all
                   hover:gap-3.5 group/link"
      >
        View Details
        <ArrowRight
          size={14}
          className="transition-transform group-hover/link:translate-x-1"
        />
      </Link>
    </article>
  );
}
