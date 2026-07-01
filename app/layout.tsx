import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Alicia Underwater — Photography & Freediving, Costa Brava",
  description:
    "Underwater photography and freediving experiences in Costa Brava, Spain. Sessions for photographers, divers, and tourists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        {/* Adobe Fonts — Aktiv Grotesk Extended Bold */}
        {/* Replace YOUR_KIT_ID with the kit ID from fonts.adobe.com */}
        <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
      </head>
      <body className="min-h-full flex flex-col bg-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
