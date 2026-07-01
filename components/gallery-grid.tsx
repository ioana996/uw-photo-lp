"use client";

import Image from "next/image";

export function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 md:px-16 py-24">
      {images.map((src, i) => (
        <div key={src} className="break-inside-avoid mb-4 overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={`Gallery photo ${i + 1}`}
            width={800}
            height={1200}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
