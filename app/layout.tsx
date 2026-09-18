import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const displayFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MES | Recruitment & Workforce Solutions",
  description:
    "Maldives-based recruiting agent and manpower supplier: recruitment, visas, documents, logistics, and HR consultancy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <UtilityBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
