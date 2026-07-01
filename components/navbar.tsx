"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.gallery, href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/5 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt={t.nav.logoAlt}
          width={140}
          height={40}
          priority
          className="h-10 w-auto"
        />
      </Link>

      {/* Nav links + language toggle */}
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide px-3 py-1 rounded transition-colors hover:text-white ${
                pathname === href
                  ? "text-white underline underline-offset-4"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

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
      </div>
    </header>
  );
}
