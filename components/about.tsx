"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function About({ portrait }: { portrait: string }) {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src={portrait}
            alt={t.about.label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 text-white">
          <span className="text-xs uppercase tracking-widest text-white/40">
            {t.about.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            {t.about.heading}
          </h2>
          <div className="flex flex-col gap-4">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-white/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <span className="text-sm text-white/40 tracking-wide mt-2">
            {t.about.location}
          </span>
        </div>
      </div>
    </section>
  );
}
