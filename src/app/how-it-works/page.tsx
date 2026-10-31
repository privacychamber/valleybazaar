import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ShieldCheck, Truck, Sparkles, CheckCircle2 } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Marketplace Architecture</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          How Valley Bazaar Works
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          A multi-vendor marketplace designed specifically for high-altitude mountainous terrain, multi-artisan orders, and verified provenance.
        </p>

        <div className="my-10 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C9AD78]" />
              <span>1. Verified Mountain Sourcing</span>
            </h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              Every seller on Valley Bazaar undergoes artisan verification. We review GI licenses, organic certifications, and production capacity to ensure products are truly authentic and crafted in Himachal Pradesh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C9AD78]" />
              <span>2. Multi-Vendor Order Splitting</span>
            </h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              When a customer purchases a Kullu shawl and Kangra tea in a single checkout, our platform generates one parent customer order while orchestrating separate seller sub-orders. Each seller handles packaging and dispatch independently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#C9AD78]" />
              <span>3. Coordinated Mountain Logistics</span>
            </h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              Our courier integrations schedule pickups directly from rural valley hubs. We factor in mountain weather conditions, high passes, and road safety protocols to provide realistic, reliable delivery estimates across India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C9AD78]" />
              <span>4. Direct Seller Settlements</span>
            </h3>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
              Platform commissions are locked in at order creation (6% to 8.5%). Sellers receive net payouts directly to their bank accounts on bi-weekly cycles with transparent ledger statements.
            </p>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

