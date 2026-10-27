import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Headphonic — Sound Built Around You",
  description:
    "Discover over 2,000 headphones — from everyday listening to studio-grade precision. Find the pair that fits your world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white w-full text-white overflow-x-hidden antialiased">
       {children}
      </body>
    </html>
  );
}