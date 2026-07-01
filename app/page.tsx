import { existsSync } from "fs";
import { join } from "path";
import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { WhatWeOffer } from "@/components/what-we-offer";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

function resolveImage(name: string): string {
  for (const ext of EXTENSIONS) {
    if (existsSync(join(process.cwd(), "public", `${name}.${ext}`))) {
      return `/${name}.${ext}`;
    }
  }
  return `/${name}.jpg`;
}

const heroImages = ["hero-1", "hero-2", "hero-3"].map(resolveImage);
const offerImages = ["offer-1", "offer-2", "offer-3", "offer-4"].map(resolveImage);
const portrait = resolveImage("portrait");

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSlider images={heroImages} />
        <About portrait={portrait} />
        <WhatWeOffer images={offerImages} />
      </main>
      <Footer />
    </>
  );
}
