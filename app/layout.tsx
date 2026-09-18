import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MES | Recruitment & Workforce Solutions",
  description:
    "We connect skilled professionals with employers — recruitment, visa assistance, logistics, and HR consultancy under one roof.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <UtilityBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
