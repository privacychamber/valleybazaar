"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoProducts } from "@/data/demo/products";
import { Search, Compass, Sparkles } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return demoProducts;
    const lower = query.toLowerCase().trim();
    return demoProducts.filter((p) => {
      return (
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.categoryName.toLowerCase().includes(lower) ||
        p.regionName.toLowerCase().includes(lower) ||
        p.storeName.toLowerCase().includes(lower) ||
        p.originVillage.toLowerCase().includes(lower) ||
        p.originDistrict.toLowerCase().includes(lower)
      );
    });
  }, [query]);

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32]">
          Search Results
        </h1>
        {query ? (
          <p className="text-xs text-neutral-600 mt-1">
            Found <strong>{results.length}</strong> mountain listings for &ldquo;<span className="text-[#123D32] font-semibold">{query}</span>&rdquo;
          </p>
        ) : (
          <p className="text-xs text-neutral-600 mt-1">
            Displaying all available authentic Himachal products.
          </p>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#E5DED2] p-8 max-w-lg mx-auto shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#eff5ec] text-[#123D32] flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#123D32]">
            No mountain products found
          </h2>
          <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
            We couldn&apos;t find any items matching &ldquo;{query}&rdquo;. Try searching for &ldquo;shawl&rdquo;, &ldquo;tea&rdquo;, &ldquo;honey&rdquo;, &ldquo;oil&rdquo;, or &ldquo;spiti&rdquo;.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Link
              href="/products"
              className="bg-[#123D32] text-white text-xs px-5 py-2.5 rounded-full font-bold shadow-xs hover:bg-[#0B2923] transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />
      <Suspense fallback={<div className="flex-1 p-12 text-center text-xs">Loading search results...</div>}>
        <SearchContent />
      </Suspense>
      <StorefrontFooter />
    </div>
  );
}

