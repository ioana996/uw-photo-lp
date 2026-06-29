import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
