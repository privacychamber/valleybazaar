import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { demoCategories } from "@/data/demo/categories";
import { ArrowRight, Layers } from "lucide-react";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Marketplace Taxonomy</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-1">
            Shop by Mountain Category
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Discover Himachal Pradesh&apos;s rich traditions, from GI-certified handloom shawls and orthodox teas to raw forest honey and cold-desert botanicals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group bg-white rounded-2xl border border-[#E5DED2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#123D32]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-4/3 w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-[#123D32] text-[#C9AD78] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#C9AD78]/40">
                    {category.itemCount} Items
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-[#17241F] group-hover:text-[#123D32] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123D32] group-hover:text-[#C9532D] transition-colors">
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

