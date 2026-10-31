"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoStores } from "@/data/demo/stores";
import { demoProducts } from "@/data/demo/products";
import { MapPin, Star, ShieldCheck, Mail, Phone, ChevronRight, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function StoreFrontContent({ params }: PageProps) {
  const { slug } = use(params);
  const store = demoStores.find((s) => s.slug === slug);

  if (!store) {
    notFound();
  }

  const products = demoProducts.filter((p) => p.storeId === store.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/stores" className="hover:text-[#123D32]">Stores</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold">{store.name}</span>
        </div>

        {/* Store Banner & Profile Header */}
        <div className="bg-white rounded-3xl border border-[#E5DED2] overflow-hidden shadow-xs mb-10">
          <div className="h-48 sm:h-64 w-full bg-neutral-200 relative">
            <img
              src={store.banner}
              alt={store.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="p-6 sm:p-10 -mt-16 sm:-mt-20 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-6 border-b border-[#E5DED2]">
              <div className="flex items-end gap-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white shrink-0">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#17241F]">
                      {store.name}
                    </h1>
                    {store.verified && (
                      <span className="bg-[#123D32] text-white p-1 rounded-full text-[10px]" title="Verified Himachal Seller">
                        <ShieldCheck className="w-4 h-4 text-[#C9AD78]" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#C9532D] font-semibold mt-0.5">
                    {store.tagline}
                  </p>
                  <p className="text-xs text-neutral-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#123D32]" />
                    {store.location} • Est. {store.establishedYear}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="bg-[#eff5ec] px-3.5 py-1.5 rounded-xl border border-[#DDE6D8] font-semibold text-[#123D32]">
                  ⭐ {store.rating} ({store.reviewCount} reviews)
                </div>
                <div className="bg-[#F7F3EB] px-3.5 py-1.5 rounded-xl border border-[#E5DED2] font-semibold text-neutral-700">
                  {products.length} Active Listings
                </div>
              </div>
            </div>

            {/* Store Description & Badges */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  About the Store
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                  {store.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {store.badges.map((b) => (
                    <span
                      key={b}
                      className="text-xs bg-[#eff5ec] text-[#123D32] px-3 py-1 rounded-full font-semibold border border-[#DDE6D8]"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 bg-[#F7F3EB] rounded-2xl p-4 border border-[#E5DED2] text-xs space-y-2">
                <p className="font-bold text-[#123D32]">Seller Details</p>
                <p className="text-neutral-600">Owner: <strong>{store.ownerName}</strong></p>
                <p className="text-neutral-600 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{store.contactEmail}</span>
                </p>
                <p className="text-neutral-600 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{store.contactPhone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Store Catalog */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#123D32] mb-6">
            Store Products & Harvests ({products.length})
          </h2>

          {products.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#E5DED2]">
              <p className="font-serif text-lg font-bold text-[#123D32]">No active listings right now</p>
              <p className="text-xs text-neutral-500 mt-1">This seller is currently restocking their seasonal inventory.</p>
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

export default function StoreFrontPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Loading store...</div>}>
      <StoreFrontContent params={params} />
    </Suspense>
  );
}

