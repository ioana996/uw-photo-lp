"use client";

import Image from "next/image";

export function WhatWeOffer({ images }: { images: string[] }) {
  return (
    <section id="what-we-offer" className="bg-black py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Offering ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
