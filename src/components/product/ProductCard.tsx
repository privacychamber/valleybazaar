"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Star, MapPin, Sparkles, Check } from "lucide-react";
import { Product } from "@/types";
import { useDemo } from "@/context/DemoContext";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useDemo();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group relative bg-[#FFFEFB] rounded-2xl border border-[#E5DED2] overflow-hidden hover:shadow-xl hover:border-[#123D32]/30 transition-all duration-300 flex flex-col">
      {/* Image Container with Badges & Wishlist */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F7F3EB]">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
          {product.giTagged && (
            <span className="bg-[#123D32] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1 border border-[#C9AD78]/40">
              <Sparkles className="w-2.5 h-2.5 text-[#C9AD78]" /> GI Tagged
            </span>
          )}
          {product.naturalOrganic && (
            <span className="bg-[#eff5ec] text-[#123D32] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#DDE6D8] shadow-xs">
              Natural Mountain
            </span>
          )}
          {product.handcrafted && !product.giTagged && (
            <span className="bg-[#FFFEFB]/90 backdrop-blur-xs text-[#17241F] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#E5DED2] shadow-xs">
              Handcrafted
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 ${
            wishlisted
              ? "bg-[#C9532D] text-white shadow-md scale-110"
              : "bg-white/85 backdrop-blur-xs text-neutral-600 hover:text-[#C9532D] hover:bg-white shadow-xs"
          }`}
          title={wishlisted ? "Remove from Wishlist" : "Save to Mountain Wishlist"}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Quick Origin Pill */}
        <div className="absolute bottom-2 left-2.5 z-10">
          <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[#FFFEFB]">
            <MapPin className="w-2.5 h-2.5 text-[#C9AD78]" />
            {product.originVillage}, {product.regionName}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Store Name & Rating */}
          <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1.5">
            <Link
              href={`/stores/${product.storeSlug}`}
              className="hover:text-[#123D32] hover:underline font-medium truncate max-w-[70%]"
            >
              {product.storeName}
            </Link>
            <div className="flex items-center gap-1 text-[#17241F] font-semibold">
              <Star className="w-3 h-3 fill-[#C9AD78] text-[#C9AD78]" />
              <span>{product.rating}</span>
              <span className="text-neutral-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.slug}`} className="block group-hover:text-[#123D32] transition-colors">
            <h3 className="font-serif text-sm font-bold text-[#17241F] line-clamp-2 leading-snug">
              {product.title}
            </h3>
          </Link>

          <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-[#E5DED2]/60 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-base text-[#123D32]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-neutral-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="text-[10px] text-neutral-500">per {product.unit}</p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            className="flex items-center gap-1.5 bg-[#eff5ec] hover:bg-[#123D32] text-[#123D32] hover:text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all border border-[#DDE6D8] hover:border-[#123D32] active:scale-95 shadow-xs"
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

