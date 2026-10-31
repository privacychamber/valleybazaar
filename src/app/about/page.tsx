import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { Mountain, Heart, ShieldCheck, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">About Valley Bazaar</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Discover Himachal. Support Local.
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          Valley Bazaar was conceived not as an algorithmic quick-commerce clone, but as a digital bridge honoring the living culture, diverse topography, and artisan communities of Himachal Pradesh.
        </p>

        <div className="my-10 rounded-3xl overflow-hidden shadow-lg border border-[#E5DED2]">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
            alt="Himachal Valley"
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
          <h2 className="font-serif text-2xl font-bold text-[#123D32]">Our Core Philosophy</h2>
          <p>
            We do not replace local businesses. We do not operate dark stores or force 10-minute delivery assumptions that commoditize craftspeople. Instead, we enable mountain businesses to grow on their own terms.
          </p>
          <p>
            When an artisan in Naggar finishes a handwoven shawl, or a family in Kalpa harvests high-altitude Royal Delicious apples, Valley Bazaar brings their craft to patrons across India with verified origin, genuine pricing, and sustainable marketplace economics.
          </p>

          <div className="p-6 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] my-8">
            <h3 className="font-serif text-lg font-bold text-[#123D32]">Our Three Ecosystem Pillars</h3>
            <ul className="mt-3 space-y-2 text-xs text-neutral-700">
              <li>• <strong>Valley Bazaar Local:</strong> Connecting nearby neighbourhood stores and valley merchants for local commerce.</li>
              <li>• <strong>Valley Bazaar Marketplace:</strong> Himachali products sold pan-India with GI authentication and courier pickup.</li>
              <li>• <strong>Valley Bazaar Seller Platform:</strong> Digital tools, inventory tracking, transparent commissions, and business education for rural makers.</li>
            </ul>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

