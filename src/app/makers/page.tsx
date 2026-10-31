import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { demoMakers } from "@/data/demo/makers";
import { MapPin, Sparkles, ArrowRight, Heart } from "lucide-react";

export default function MakersDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Pahadi Heritage Guardians</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-1">
            Meet the Himalayan Makers
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Generations of knowledge, indigenous sustainable harvesting, and master craftsmanship. Connect directly with the people crafting your goods.
          </p>
        </div>

        {/* Makers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoMakers.map((maker) => (
            <div
              key={maker.id}
              className="bg-white rounded-3xl border border-[#E5DED2] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square w-full overflow-hidden bg-neutral-200 relative">
                  <img
                    src={maker.image}
                    alt={maker.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-[#C9AD78] text-[10px] font-mono px-2.5 py-0.5 rounded-full">
                    {maker.yearsOfExperience} Years of Craft
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-[#17241F]">
                    {maker.name}
                  </h3>
                  <p className="text-xs text-[#C9532D] font-semibold mt-0.5">
                    {maker.craft}
                  </p>
                  <p className="text-[11px] text-neutral-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#123D32]" />
                    {maker.village}, {maker.region}
                  </p>
                  <p className="text-xs text-neutral-600 mt-3 line-clamp-3 leading-relaxed">
                    &ldquo;{maker.story}&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-neutral-100 mt-2">
                <Link
                  href={`/makers/${maker.slug}`}
                  className="w-full bg-[#eff5ec] hover:bg-[#123D32] text-[#123D32] hover:text-white py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3 h-3" />
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

