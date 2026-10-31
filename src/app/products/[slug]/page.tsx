"use client";

import React, { useState, use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Heart, 
  ShoppingBag, 
  Star, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  CheckCircle2, 
  ArrowLeft,
  Store as StoreIcon,
  User as UserIcon,
  ChevronRight
} from "lucide-react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoProducts } from "@/data/demo/products";
import { demoStores } from "@/data/demo/stores";
import { demoMakers } from "@/data/demo/makers";
import { useDemo } from "@/context/DemoContext";
import { formatPrice } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function ProductDetailContent({ params }: PageProps) {
  const { slug } = use(params);
  const { addToCart, toggleWishlist, isInWishlist } = useDemo();

  const product = demoProducts.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const wishlisted = isInWishlist(product.id);

  const store = demoStores.find((s) => s.id === product.storeId);
  const maker = product.makerId ? demoMakers.find((m) => m.id === product.makerId) : null;
  const relatedProducts = demoProducts
    .filter((p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.regionSlug === product.regionSlug))
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/products" className="hover:text-[#123D32]">Products</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href={`/categories/${product.categorySlug}`} className="hover:text-[#123D32]">{product.categoryName}</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold truncate max-w-xs">{product.title}</span>
        </div>

        {/* Product Hero: Gallery + Buying Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DED2] shadow-sm">
          {/* Gallery Column (Span 6) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Image */}
            <div className="aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden bg-[#F7F3EB] relative border border-[#E5DED2]">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.giTagged && (
                <div className="absolute top-4 left-4 bg-[#123D32] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-[#C9AD78]/50">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9AD78]" />
                  <span>GI Tag Verified Authentic</span>
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === img ? "border-[#123D32] scale-105 shadow-sm" : "border-neutral-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Mountain Origin Card */}
            <div className="bg-[#eff5ec] rounded-2xl p-4 border border-[#DDE6D8] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#123D32] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#C9AD78]" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#123D32]">Direct Mountain Origin</p>
                <p className="text-neutral-600">
                  Harvested & crafted in <strong>{product.originVillage}</strong>, District {product.originDistrict}, Himachal Pradesh.
                </p>
              </div>
            </div>
          </div>

          {/* Details Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-2">
                <Link
                  href={`/categories/${product.categorySlug}`}
                  className="text-[#C9532D] font-bold uppercase tracking-wider hover:underline"
                >
                  {product.categoryName}
                </Link>
                <div className="flex items-center gap-1.5 text-xs font-semibold bg-[#F7F3EB] px-2.5 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-[#C9AD78] text-[#C9AD78]" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-400">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#17241F] leading-tight">
                {product.title}
              </h1>

              {/* Seller / Store affiliation */}
              <div className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
                <span>Sold by:</span>
                <Link
                  href={`/stores/${product.storeSlug}`}
                  className="font-bold text-[#123D32] hover:underline flex items-center gap-1"
                >
                  <StoreIcon className="w-3.5 h-3.5 text-[#C9AD78]" />
                  <span>{product.storeName}</span>
                </Link>
              </div>

              {/* Pricing Section */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F7F3EB] border border-[#E5DED2]/80 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-[#123D32]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">Inclusive of all taxes • per {product.unit}</p>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In Stock ({product.inventory} available)</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                <p>{product.description}</p>
              </div>

              {/* Quantity & CTA */}
              <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#E5DED2] rounded-xl overflow-hidden bg-[#F7F3EB]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 text-sm font-bold text-neutral-600 hover:bg-[#DDE6D8]"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-xs font-bold text-[#17241F] min-w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2 text-sm font-bold text-neutral-600 hover:bg-[#DDE6D8]"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag */}
                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 bg-[#123D32] hover:bg-[#0B2923] text-white py-3 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C9AD78]" />
                    <span>Add {quantity} to Bag • {formatPrice(product.price * quantity)}</span>
                  </button>

                  {/* Wishlist button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3 rounded-xl border transition-all ${
                      wishlisted
                        ? "bg-[#C9532D] text-white border-[#C9532D]"
                        : "border-[#E5DED2] hover:border-[#123D32] text-neutral-600 hover:bg-[#F7F3EB]"
                    }`}
                    title="Toggle Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
                  </button>
                </div>
              </div>

              {/* Fulfilment & Assurance Badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-600">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F7F3EB]/60 border border-[#E5DED2]/60">
                  <Truck className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>Direct mountain dispatch in 24-48 hrs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F7F3EB]/60 border border-[#E5DED2]/60">
                  <ShieldCheck className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>Fair compensation to artisans</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Artisan Provenance Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specs Table (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
            <h2 className="font-serif text-xl font-bold text-[#123D32] mb-4">
              Specifications & Provenance
            </h2>
            <div className="divide-y divide-[#E5DED2]/60 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500">Origin Village</span>
                <span className="font-medium text-[#17241F]">{product.originVillage}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500">District & Valley</span>
                <span className="font-medium text-[#17241F]">{product.originDistrict}, {product.regionName}</span>
              </div>
              {product.weightGrams && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-neutral-500">Weight</span>
                  <span className="font-medium text-[#17241F]">{product.weightGrams} grams</span>
                </div>
              )}
              {product.shelfLife && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-neutral-500">Shelf Life</span>
                  <span className="font-medium text-[#17241F]">{product.shelfLife}</span>
                </div>
              )}
              {Object.entries(product.attributes).map(([key, val]) => (
                <div key={key} className="py-2.5 flex justify-between">
                  <span className="text-neutral-500">{key}</span>
                  <span className="font-medium text-[#17241F]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Maker / Artisan Story Card (Span 5) */}
          <div className="lg:col-span-5 bg-[#123D32] text-white rounded-3xl p-6 sm:p-8 border border-[#C9AD78]/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9AD78]">Craftsperson Behind This</span>
              {maker ? (
                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={maker.image}
                      alt={maker.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#C9AD78]"
                    />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white">{maker.name}</h3>
                      <p className="text-xs text-[#C9AD78]">{maker.craft}</p>
                      <p className="text-[11px] text-[#DDE6D8]/80">{maker.village}, {maker.region}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-[#DDE6D8] leading-relaxed font-light">
                    &ldquo;{maker.story}&rdquo;
                  </p>
                  <div className="mt-4 p-3 rounded-xl bg-[#0B2923] border border-[#C9AD78]/20 text-[11px] text-[#DDE6D8]">
                    <strong className="text-[#C9AD78]">Sustainable Practice:</strong> {maker.sustainablePractice}
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-xs text-[#DDE6D8]">
                  <p className="font-bold text-white text-sm">{product.storeName}</p>
                  <p className="mt-1">
                    An independent Himachali mountain producer registered on Valley Bazaar.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#0B2923]">
              <Link
                href={`/stores/${product.storeSlug}`}
                className="text-xs font-semibold text-[#C9AD78] hover:text-white flex items-center justify-between"
              >
                <span>Visit Seller Storefront</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-[#123D32] mb-6">
              More from the Same Valley & Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
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

export default function ProductDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Loading mountain product...</div>}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}

