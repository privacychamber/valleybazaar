"use client";

import React, { useState, useMemo } from "react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoProducts } from "@/data/demo/products";
import { demoCategories } from "@/data/demo/categories";
import { demoRegions } from "@/data/demo/regions";
import { Filter, SlidersHorizontal, Sparkles, X } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [onlyGiTagged, setOnlyGiTagged] = useState<boolean>(false);
  const [onlyHandcrafted, setOnlyHandcrafted] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = useMemo(() => {
    return demoProducts
      .filter((p) => {
        if (selectedCategory !== "all" && p.categorySlug !== selectedCategory) return false;
        if (selectedRegion !== "all" && p.regionSlug !== selectedRegion) return false;
        if (onlyGiTagged && !p.giTagged) return false;
        if (onlyHandcrafted && !p.handcrafted) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price_asc") return a.price - b.price;
        if (sortBy === "price_desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, selectedRegion, onlyGiTagged, onlyHandcrafted, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedRegion("all");
    setOnlyGiTagged(false);
    setOnlyHandcrafted(false);
  };

  const hasActiveFilters =
    selectedCategory !== "all" || selectedRegion !== "all" || onlyGiTagged || onlyHandcrafted;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#123D32] font-semibold">All Mountain Products</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32]">
                Himachal Marketplace Catalog
              </h1>
              <p className="text-xs text-neutral-600 mt-1">
                Authentic handcrafted, wild-foraged, and farm-direct products from all 12 districts of Himachal Pradesh.
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs self-start md:self-auto">
              <span className="text-neutral-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#E5DED2] rounded-xl px-3 py-1.5 text-xs text-[#17241F] focus:outline-none focus:border-[#123D32]"
              >
                <option value="featured">Featured & Curated</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-[#E5DED2] p-4 mb-8 shadow-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-[#123D32] flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter by:</span>
            </span>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#F7F3EB] border border-[#E5DED2] rounded-xl px-3 py-1.5 text-xs font-medium text-[#17241F]"
            >
              <option value="all">All Categories</option>
              {demoCategories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-[#F7F3EB] border border-[#E5DED2] rounded-xl px-3 py-1.5 text-xs font-medium text-[#17241F]"
            >
              <option value="all">All Valleys & Regions</option>
              {demoRegions.map((r) => (
                <option key={r.id} value={r.slug}>
                  {r.name} ({r.district})
                </option>
              ))}
            </select>

            {/* Toggle: GI Tagged */}
            <button
              onClick={() => setOnlyGiTagged(!onlyGiTagged)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                onlyGiTagged
                  ? "bg-[#123D32] text-white"
                  : "bg-[#F7F3EB] text-[#17241F] hover:bg-[#eff5ec] border border-[#E5DED2]"
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#C9AD78]" />
              <span>GI Tagged Only</span>
            </button>

            {/* Toggle: Handcrafted */}
            <button
              onClick={() => setOnlyHandcrafted(!onlyHandcrafted)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                onlyHandcrafted
                  ? "bg-[#123D32] text-white"
                  : "bg-[#F7F3EB] text-[#17241F] hover:bg-[#eff5ec] border border-[#E5DED2]"
              }`}
            >
              <span>Handcrafted Only</span>
            </button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-[#C9532D] hover:underline flex items-center gap-1 ml-auto font-medium"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E5DED2] p-8">
            <h3 className="font-serif text-xl font-bold text-[#123D32]">No products found</h3>
            <p className="text-xs text-neutral-500 mt-2">
              Try adjusting your category or regional filter criteria.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 bg-[#123D32] text-white text-xs px-4 py-2 rounded-xl font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xs text-neutral-500 mb-4">
              Showing <strong>{filteredProducts.length}</strong> authentic mountain listings
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
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

