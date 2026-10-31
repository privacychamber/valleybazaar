import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { demoStores } from "@/data/demo/stores";
import { MapPin, Star, ArrowRight, ShieldCheck, Store as StoreIcon } from "lucide-react";

export default function StoresDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Verified Sellers</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-1">
            Independent Valley Stores
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Every store on Valley Bazaar is a verified local producer, grower collective, or artisan guild rooted in the hills of Himachal.
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoStores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-3xl border border-[#E5DED2] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Banner & Logo */}
                <div className="h-32 w-full bg-neutral-200 relative">
                  <img
                    src={store.banner}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#17241F]">
                      {store.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#C9532D] font-semibold mt-0.5">
                    {store.tagline}
                  </p>

                  <p className="text-[11px] text-neutral-500 flex items-center gap-1 mt-1.5">
                    <MapPin className="w-3 h-3 text-[#123D32]" />
                    {store.location}
                  </p>

                  <p className="text-xs text-neutral-600 mt-3 line-clamp-3 leading-relaxed">
                    {store.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {store.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] bg-[#eff5ec] text-[#123D32] px-2.5 py-0.5 rounded-full font-semibold border border-[#DDE6D8]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">
                  {store.totalProducts} Mountain Products
                </span>
                <Link
                  href={`/stores/${store.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123D32] hover:text-[#C9532D]"
                >
                  <span>Visit Storefront</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

