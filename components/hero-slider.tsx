"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useLanguage } from "@/components/language-provider";

const SLIDE_IMAGES = ["/hero-1.png", "/hero-2.png", "/hero-3.png"];

export function HeroSlider() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="h-full -ml-0">
          {SLIDE_IMAGES.map((src, i) => {
            const slide = t.hero.slides[i];
            return (
              <CarouselItem key={src} className="h-full pl-0 relative">
                {/* Background image */}
                <Image
                  src={src}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Slide text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-3xl leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow max-w-xl">
                    {slide.description}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {SLIDE_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              current === i
                ? "bg-white scale-110"
                : "bg-transparent hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
