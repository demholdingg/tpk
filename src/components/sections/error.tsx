"use client";

import { useEffect } from "react";
import { RefreshCcw, AlertTriangle } from "lucide-react";

/**
 * error.tsx menangani runtime error dan masalah koneksi di App Router.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error ke console atau layanan monitoring
    console.error("Connection Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6 text-orange">
        <AlertTriangle size={32} />
      </div>

      <h2 className="font-display text-3xl font-bold uppercase text-gray-900 mb-4">
        Connection Issue
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed max-w-[420px] mb-10">
        Mohon maaf, kami mengalami kendala saat memuat halaman ini. Silakan
        periksa koneksi internet Anda atau coba muat ulang halaman.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-orange text-black font-semibold
                     text-[14px] px-8 py-3.5 rounded transition-all hover:bg-orange-dark shadow-lg shadow-orange/10"
        >
          <RefreshCcw size={16} /> Coba Lagi
        </button>

        <a
          href="/"
          className="inline-flex items-center justify-center text-gray-500 font-medium
                     text-[14px] px-8 py-3.5 rounded border border-gray-200 hover:bg-gray-50 transition-all"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
