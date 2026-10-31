"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoStores } from "@/data/demo/stores";
import { demoProducts } from "@/data/demo/products";
import { MapPin, Navigation, Clock, ShieldCheck, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ city: string }>;
}

function LocalCityContent({ params }: PageProps) {
  const { city } = use(params);
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  const stores = demoStores;
  const products = demoProducts;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span>Local Commerce</span>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold">{formattedCity}</span>
        </div>

        {/* Local Hero Banner */}
        <div className="bg-[#123D32] text-white rounded-3xl p-8 sm:p-12 mb-10 border border-[#C9AD78]/30">
          <div className="inline-flex items-center gap-1.5 bg-[#C9532D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Navigation className="w-3 h-3" />
            <span>Valley Bazaar Local</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Neighbourhood Stores & Merchants in {formattedCity}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#DDE6D8] max-w-2xl leading-relaxed font-light">
            Discover local Himachali bakeries, fresh dry-fruit shops, organic honey apiaries, and handloom retailers delivering directly in and around {formattedCity}.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#DDE6D8]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C9AD78]" />
              <span>Same-day or next-day mountain dispatch</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C9AD78]" />
              <span>Direct seller pickup available</span>
            </div>
          </div>
        </div>

        {/* Local Products Grid */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#123D32] mb-6">
            Local Produce & Pantry in {formattedCity}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

export default function LocalCityPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Loading local city directory...</div>}>
      <LocalCityContent params={params} />
    </Suspense>
  );
}
