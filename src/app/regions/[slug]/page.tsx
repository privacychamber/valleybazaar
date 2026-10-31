"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoRegions } from "@/data/demo/regions";
import { demoProducts } from "@/data/demo/products";
import { demoStores } from "@/data/demo/stores";
import { MapPin, ChevronRight, Compass } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function RegionDetailContent({ params }: PageProps) {
  const { slug } = use(params);
  const region = demoRegions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const products = demoProducts.filter((p) => p.regionSlug === slug);
  const stores = demoStores.filter((s) => s.regionSlug === slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold">{region.name}</span>
        </div>

        {/* Region Cinematic Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0B2923] text-white p-8 sm:p-14 mb-12 shadow-md border border-[#C9AD78]/30">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img src={region.image} alt={region.name} className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C9AD78] bg-[#123D32] px-3 py-1 rounded-full mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>District {region.district} • Himachal Pradesh</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {region.name}
            </h1>
            <p className="text-sm font-semibold text-[#C9AD78] mt-1 font-serif italic">
              {region.tagline}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-[#DDE6D8] leading-relaxed font-light">
              {region.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {region.specialties.map((spec) => (
                <span
                  key={spec}
                  className="text-xs bg-white/10 backdrop-blur-md text-[#FFFEFB] px-3 py-1 rounded-full font-medium border border-white/20"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Region Products */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#123D32] mb-6">
            Products Originating in {region.name} ({products.length})
          </h2>

          {products.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-[#E5DED2]">
              <p className="font-serif text-lg font-bold text-[#123D32]">
                New regional listings being catalogued
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                More orchards and cooperatives from {region.name} are onboarding this month.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

export default function RegionDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Loading region...</div>}>
      <RegionDetailContent params={params} />
    </Suspense>
  );
}

