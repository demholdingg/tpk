import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 px-6 md:px-12 py-20">
      <div
        className="flex flex-col md:flex-row items-start md:items-center
                      justify-between gap-12"
      >
        {/* Left: headline */}
        <h2
          className="font-display font-extrabold uppercase text-gray-900 tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          Ready to Start
          <br />
          Your <span className="text-orange">Project?</span>
        </h2>

        {/* Right: description + CTA */}
        <div className="shrink-0 text-left md:text-right">
          <p className="text-[14px] text-gray-600 leading-relaxed max-w-[340px] mb-6">
            Consult your technical requirements with our engineering team who
            are ready to provide efficient integrated solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-orange text-black font-semibold
                       text-[15px] px-9 py-4 rounded transition-all
                       hover:bg-orange-dark hover:-translate-y-0.5"
          >
            Contact Us Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
