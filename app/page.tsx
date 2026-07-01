import { existsSync } from "fs";
import { join } from "path";
import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { Footer } from "@/components/footer";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

function resolveHeroImage(name: string): string {
  for (const ext of EXTENSIONS) {
    if (existsSync(join(process.cwd(), "public", `${name}.${ext}`))) {
      return `/${name}.${ext}`;
    }
  }
  return `/${name}.jpg`;
}

const heroImages = ["hero-1", "hero-2", "hero-3"].map(resolveHeroImage);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSlider images={heroImages} />
      </main>
      <Footer />
    </>
  );
}
