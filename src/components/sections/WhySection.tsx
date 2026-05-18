import Image from "next/image";
import { WHY_FEATURES } from "@/data";
import { motion } from "framer-motion";

export function WhySection() {
  return (
    <section className="bg-gray-50 px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: text + features */}
        <div>
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-orange mb-3">
            Why Choose Us
          </p>
          <h2
            className="font-display font-bold uppercase tracking-tight text-gray-900 leading-none mb-12"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Built on
            <br />
            <span className="text-orange">Precision</span> &amp;
            <br />
            Expertise
          </h2>

          <div className="flex flex-col">
            {WHY_FEATURES.map((item, i) => (
              <div
                key={item.title}
                className={`group flex gap-6 py-8 border-gray-200 transition-all duration-200
                            hover:pl-4 hover:bg-orange/5 rounded-r-lg
                            ${i === 0 ? "border-t border-b" : "border-b"}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 shrink-0 flex items-center justify-center
                                bg-orange/10 border border-orange/25 rounded-md text-xl"
                >
                  {item.icon}
                </div>
                {/* Text */}
                <div>
                  <h3
                    className="font-display text-[18px] font-bold uppercase tracking-wide
                                 text-gray-900 mb-1.5"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image + badge */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[500px] rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=700&q=75"
              alt="Engineer at work"
              fill
              sizes="50vw"
              className="object-cover brightness-75 saturate-80"
            />
          </div>
          {/* Badge */}
          {/* <div className="absolute -bottom-6 -left-6 bg-orange text-black px-7 py-6 rounded">
            <div className="font-display text-[42px] font-extrabold leading-none">
              15+
            </div>
            <div className="text-[12px] font-semibold tracking-wide mt-1">
              Years of Excellence
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
