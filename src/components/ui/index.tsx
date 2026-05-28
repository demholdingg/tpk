import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

// ── SectionLabel ───────────────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
      {children}
    </div>
  );
}

// ── SectionTitle ──────────────────────────────────────────────────────────────
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "font-display font-bold uppercase tracking-tight text-white leading-none mb-4",
        className,
      )}
      style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
    >
      {children}
    </h2>
  );
}

// ── ButtonPrimary ─────────────────────────────────────────────────────────────
export function ButtonPrimary({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-2 bg-orange text-black font-semibold text-[14px]",
        "px-7 py-3.5 rounded transition-all hover:bg-orange-dark hover:-translate-y-0.5",
        className,
      )}
    >
      {children} <ArrowRight size={15} />
    </Link>
  );
}

// ── ButtonOutline ─────────────────────────────────────────────────────────────
export function ButtonOutline({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-2 bg-transparent text-white font-medium text-[14px]",
        "px-7 py-3.5 rounded border border-white/20 transition-all",
        "hover:border-white hover:bg-white/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
