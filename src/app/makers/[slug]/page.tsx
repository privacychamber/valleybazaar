"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoMakers } from "@/data/demo/makers";
import { demoProducts } from "@/data/demo/products";
import { demoStores } from "@/data/demo/stores";
import { MapPin, Sparkles, ChevronRight, Store, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function MakerDetailContent({ params }: PageProps) {
  const { slug } = use(params);
  const maker = demoMakers.find((m) => m.slug === slug);

  if (!maker) {
    notFound();
  }

  const store = demoStores.find((s) => s.id === maker.storeId);
  const products = demoProducts.filter((p) => p.makerId === maker.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/makers" className="hover:text-[#123D32]">Makers</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold">{maker.name}</span>
        </div>

        {/* Maker Profile Hero */}
        <div className="bg-white rounded-3xl border border-[#E5DED2] p-8 sm:p-12 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden bg-neutral-100 shadow-lg border-2 border-[#E5DED2]">
              <img
                src={maker.image}
                alt={maker.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9532D]">
                Master Artisan Profile
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
                {maker.name}
              </h1>
              <p className="text-sm font-semibold text-[#8B7E66] mt-1">
                {maker.craft} • {maker.yearsOfExperience} Years of Generation Knowledge
              </p>
              <p className="text-xs text-neutral-500 flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5 text-[#123D32]" />
                Village of {maker.village}, {maker.region}, Himachal Pradesh
              </p>

              <div className="mt-6 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                <p>&ldquo;{maker.story}&rdquo;</p>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] text-xs">
                <strong className="text-[#123D32] uppercase tracking-wider text-[10px] block mb-1">
                  Ethical & Sustainable Practice
                </strong>
                <p className="text-neutral-700 leading-relaxed">{maker.sustainablePractice}</p>
              </div>

              {store && (
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Associated Store:</span>
                  <Link
                    href={`/stores/${store.slug}`}
                    className="font-bold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1"
                  >
                    <Store className="w-3.5 h-3.5 text-[#C9AD78]" />
                    <span>{store.name}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Crafted by Maker */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#123D32] mb-6">
            Handcrafted by {maker.name} ({products.length})
          </h2>

          {products.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 text-center border border-[#E5DED2]">
              <p className="text-xs text-neutral-500">Current limited batches sold out.</p>
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

export default function MakerDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Loading artisan profile...</div>}>
      <MakerDetailContent params={params} />
    </Suspense>
  );
}

