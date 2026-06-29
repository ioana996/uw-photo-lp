import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
      </main>
      <Footer />
    </>
  );
}
