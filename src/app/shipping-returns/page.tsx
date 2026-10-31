import React from "react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Fulfilment Policy</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Shipping & Returns Policy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          Transparent guidelines governing mountain logistics, multi-seller dispatches, and fair returns.
        </p>

        <div className="my-10 space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-lg font-bold text-[#123D32]">1. Direct-from-Valley Shipping</h3>
            <p className="mt-2 text-neutral-600">
              Unlike centralized urban warehouses, items ordered on Valley Bazaar are packed and dispatched directly from artisan workshops and grower orchards in Kullu, Kangra, Shimla, Kinnaur, and Chamba.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-lg font-bold text-[#123D32]">2. Split Shipments</h3>
            <p className="mt-2 text-neutral-600">
              If your cart contains items from multiple sellers (for example, tea from Palampur and shawls from Naggar), they will arrive in separate parcels with unique courier tracking numbers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-lg font-bold text-[#123D32]">3. 7-Day Returns for Handlooms & Crafts</h3>
            <p className="mt-2 text-neutral-600">
              We want you to love your mountain piece. Handloom textiles, woolens, and art pieces can be returned within 7 days of delivery in unused condition with all artisan tags intact.
            </p>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

