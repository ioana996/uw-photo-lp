"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/5 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt={t.nav.logoAlt}
          width={140}
          height={40}
          priority
          className="h-10 w-auto"
        />
      </div>

      {/* Language toggle */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLang("en")}
          className={`text-white hover:text-white hover:bg-white/10 font-medium text-sm tracking-wide ${
            lang === "en" ? "underline underline-offset-4" : "opacity-60"
          }`}
          aria-pressed={lang === "en"}
        >
          EN
        </Button>
        <span className="text-white/40 text-sm">|</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLang("es")}
          className={`text-white hover:text-white hover:bg-white/10 font-medium text-sm tracking-wide ${
            lang === "es" ? "underline underline-offset-4" : "opacity-60"
          }`}
          aria-pressed={lang === "es"}
        >
          ES
        </Button>
      </div>
    </header>
  );
}
