import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SECTORS } from "@/data";
import { Metadata } from "next";
import { ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const sector = SECTORS.find((s) => s.id === id);
  return {
    title: sector ? sector.title : "Sector Not Found",
  };
}

export default async function SectorDetailPage({ params }: Props) {
  const { id } = await params;
  const sector = SECTORS.find((s) => s.id === id);

  if (!sector) {
    notFound();
  }

  return (
    <div className="pt-[100px] pb-24 min-h-screen bg-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/#sectors"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange transition-colors mb-12"
        >
          <ChevronLeft size={16} />
          Back to Sectors
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-[120px]">
            <div className="text-5xl mb-6">{sector.icon}</div>
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
              Industry Sector
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-none mb-8">
              {sector.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              {sector.description}
            </p>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
