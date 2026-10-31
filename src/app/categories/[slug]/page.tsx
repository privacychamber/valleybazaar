"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoCategories } from "@/data/demo/categories";
import { demoProducts } from "@/data/demo/products";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function CategoryDetailContent({ params }: PageProps) {
  const { slug } = use(params);
  const category = demoCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = demoProducts.filter((p) => p.categorySlug === slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/categories" className="hover:text-[#123D32]">Categories</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="bg-[#123D32] text-white rounded-3xl p-8 sm:p-12 mb-10 border border-[#C9AD78]/30">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs text-[#DDE6D8] hover:text-white mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            {category.name}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#DDE6D8] max-w-2xl leading-relaxed font-light">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFEFB] rounded-2xl border border-[#E5DED2] p-8">
            <p className="text-neutral-500 text-sm">No products found in this category yet.</p>
            <Link
              href="/products"
              className="mt-4 inline-block bg-[#123D32] text-white text-xs px-5 py-2.5 rounded-full font-bold"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-neutral-600">
                Found <strong>{products.length}</strong> listings in {category.name}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>

      <StorefrontFooter />
    </div>
  );
}

export default function CategoryDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Loading category...</div>}>
      <CategoryDetailContent params={params} />
    </Suspense>
  );
}
