import type { Metadata } from "next";
import "./globals.css";
import { DemoProvider } from "@/context/DemoContext";
import { DemoModeBanner } from "@/components/shared/DemoModeBanner";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";

export const metadata: Metadata = {
  title: "Valley Bazaar — Discover Himachal. Support Local.",
  description:
    "Himachal Pradesh's digital marketplace connecting local artisans, farmers, weavers, and small businesses with conscious patrons across India.",
  keywords: [
    "Valley Bazaar",
    "Himachal Pradesh",
    "Kullu Shawls",
    "Kangra Tea",
    "Himachali Handicrafts",
    "Mountain Honey",
    "Chamba Rumal",
    "Spiti Wool",
    "Support Local",
    "Multi-vendor Marketplace",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F3EB] text-[#17241F] selection:bg-[#C9AD78]/30 selection:text-[#123D32]">
        <DemoProvider>
          <DemoModeBanner />
          <div className="flex-1 flex flex-col">{children}</div>
          <RoleSwitcher />
        </DemoProvider>
      </body>
    </html>
  );
}
