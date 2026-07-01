import { existsSync } from "fs";
import { join } from "path";
import { Navbar } from "@/components/navbar";
import { GalleryGrid } from "@/components/gallery-grid";
import { Footer } from "@/components/footer";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

function resolveGalleryImage(name: string): string | null {
  for (const ext of EXTENSIONS) {
    if (existsSync(join(process.cwd(), "public", "gallery", `${name}.${ext}`))) {
      return `/gallery/${name}.${ext}`;
    }
  }
  return null;
}

function getGalleryImages(): string[] {
  const images: string[] = [];
  let i = 1;
  while (true) {
    const resolved = resolveGalleryImage(`photo-${i}`);
    if (!resolved) break;
    images.push(resolved);
    i++;
  }
  return images;
}

const galleryImages = getGalleryImages();

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black min-h-screen">
        <GalleryGrid images={galleryImages} />
      </main>
      <Footer />
    </>
  );
}
