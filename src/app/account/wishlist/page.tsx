"use client";

import React from "react";
import Link from "next/link";
import { useDemo } from "@/context/DemoContext";
import { demoProducts } from "@/data/demo/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Heart, ArrowRight } from "lucide-react";

export default function WishlistPage() {
  const { wishlist } = useDemo();
  const wishlistedProducts = demoProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">
          Mountain Wishlist ({wishlistedProducts.length})
        </h2>
        <p className="text-xs text-neutral-500 mt-1">
          Handcrafted mountain pieces and seasonal products saved for later.
        </p>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="text-center py-12 border border-[#E5DED2] rounded-2xl bg-[#F7F3EB]/40 p-6">
          <Heart className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
          <p className="font-serif text-lg font-bold text-[#123D32]">Your wishlist is currently empty</p>
          <p className="text-xs text-neutral-500 mt-1">Tap the heart on any product to save it here.</p>
          <Link
            href="/products"
            className="mt-4 inline-block bg-[#123D32] text-white text-xs px-5 py-2 rounded-full font-bold"
          >
            Explore Mountain Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

