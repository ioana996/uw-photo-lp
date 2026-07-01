"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import type { Lang } from "@/lib/i18n/dictionaries";

const LANGUAGES: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.gallery, href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 grid grid-cols-3 items-center px-6 md:px-12 py-4 bg-white/5 backdrop-blur-md border-b border-white/10">
      {/* Logo — left */}
      <div>
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
      </div>

      {/* Nav links — center */}
      <nav className="flex items-center justify-center gap-6">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-base font-medium tracking-wide transition-colors hover:text-white ${
              pathname === href
                ? "text-white underline underline-offset-4"
                : "text-white/60"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Language dropdown — right */}
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors outline-none">
            {lang.toUpperCase()}
            <ChevronDownIcon className="w-3.5 h-3.5 opacity-60" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[80px] bg-black/90 border-white/10">
            {LANGUAGES.map(({ value, label }) => (
              <DropdownMenuItem
                key={value}
                onClick={() => setLang(value)}
                className={`text-sm cursor-pointer ${
                  lang === value ? "text-white font-semibold" : "text-white/60"
                }`}
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
