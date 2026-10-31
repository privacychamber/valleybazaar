"use client";

import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { useDemo } from "@/context/DemoContext";
import { formatPrice } from "@/lib/utils";
import { 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  Store, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  Info
} from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useDemo();

  // Group cart items by seller / store
  const itemsByStore = cart.items.reduce((acc, item) => {
    const storeId = item.product.storeId;
    if (!acc[storeId]) {
      acc[storeId] = {
        storeId,
        storeName: item.product.storeName,
        storeSlug: item.product.storeSlug,
        originVillage: item.product.originVillage,
        regionName: item.product.regionName,
        items: [],
      };
    }
    acc[storeId].items.push(item);
    return acc;
  }, {} as Record<string, { storeId: string; storeName: string; storeSlug: string; originVillage: string; regionName: string; items: typeof cart.items }>);

  const storeGroups = Object.values(itemsByStore);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
            <Link href="/" className="hover:text-[#123D32]">Home</Link>
            <span>/</span>
            <span className="text-[#123D32] font-semibold">Shopping Bag</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32]">
            Your Shopping Bag
          </h1>
          <p className="text-xs text-neutral-600 mt-1">
            Items from {storeGroups.length} independent Himachali {storeGroups.length === 1 ? "producer" : "producers"}.
          </p>
        </div>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E5DED2] max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#eff5ec] text-[#123D32] flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-[#123D32]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#123D32]">
              Your mountain bag is empty
            </h2>
            <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto leading-relaxed">
              Explore authentic handwoven shawls, estate orthodox teas, raw honey, and wild cold-pressed oils.
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#123D32] hover:bg-[#0B2923] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md"
              >
                <span>Discover Mountain Products</span>
                <ArrowRight className="w-4 h-4 text-[#C9AD78]" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Multi-Vendor Items List (Span 8) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Architecture Alert Box */}
              <div className="p-4 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] text-xs text-neutral-700 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#123D32] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#123D32] block font-semibold">
                    Multi-Vendor Order Architecture Active
                  </strong>
                  <span>
                    Your order contains products from separate Himalayan makers. Each seller prepares and packages their items locally for courier pickup.
                  </span>
                </div>
              </div>

              {/* Grouped by Seller */}
              {storeGroups.map((group) => {
                const storeSubtotal = group.items.reduce(
                  (sum, it) => sum + it.product.price * it.quantity,
                  0
                );

                return (
                  <div
                    key={group.storeId}
                    className="bg-white rounded-3xl border border-[#E5DED2] overflow-hidden shadow-xs"
                  >
                    {/* Seller Header */}
                    <div className="bg-[#123D32]/5 p-4 sm:px-6 border-b border-[#E5DED2] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Store className="w-4 h-4 text-[#123D32]" />
                        <Link
                          href={`/stores/${group.storeSlug}`}
                          className="font-serif font-bold text-sm text-[#123D32] hover:underline"
                        >
                          {group.storeName}
                        </Link>
                        <span className="text-[11px] text-neutral-500 hidden sm:inline">
                          ({group.originVillage}, {group.regionName})
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 font-medium">
                        Subtotal: <strong className="text-[#123D32]">{formatPrice(storeSubtotal)}</strong>
                      </span>
                    </div>

                    {/* Items within this seller */}
                    <div className="divide-y divide-neutral-100 p-4 sm:p-6">
                      {group.items.map((item) => (
                        <div key={item.productId} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                          {/* Image */}
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#F7F3EB] shrink-0 border border-[#E5DED2]">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <Link
                                  href={`/products/${item.product.slug}`}
                                  className="font-serif text-sm sm:text-base font-bold text-[#17241F] hover:text-[#123D32] line-clamp-1"
                                >
                                  {item.product.title}
                                </Link>
                                <p className="text-[11px] text-neutral-500 mt-0.5">
                                  {formatPrice(item.product.price)} per {item.product.unit}
                                </p>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.productId)}
                                className="text-neutral-400 hover:text-[#C9532D] p-1 transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Quantity Controls & Line Total */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center border border-[#E5DED2] rounded-xl overflow-hidden bg-[#F7F3EB]">
                                <button
                                  onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                                  className="px-2.5 py-1 text-xs font-bold text-neutral-600 hover:bg-[#DDE6D8]"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 text-xs font-bold text-[#17241F] min-w-6 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                                  className="px-2.5 py-1 text-xs font-bold text-neutral-600 hover:bg-[#DDE6D8]"
                                >
                                  +
                                </button>
                              </div>

                              <span className="font-bold text-sm text-[#123D32]">
                                {formatPrice(item.product.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary Column (Span 4) */}
            <div className="lg:col-span-4 sticky top-28 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
                <h2 className="font-serif text-xl font-bold text-[#123D32] pb-4 border-b border-neutral-100">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs py-4 border-b border-neutral-100">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Subtotal ({cart.items.length} items)</span>
                    <span className="font-medium text-[#17241F]">{formatPrice(cart.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Estimated Mountain Shipping</span>
                    <span className="font-medium text-[#17241F]">
                      {cart.estimatedShipping === 0 ? "Free" : formatPrice(cart.estimatedShipping)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#123D32]">
                    <span>Seller Fulfilment Nodes</span>
                    <span className="font-bold">{storeGroups.length} Valley {storeGroups.length === 1 ? "Hub" : "Hubs"}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-baseline">
                  <div>
                    <span className="font-serif text-lg font-bold text-[#123D32]">Total</span>
                    <p className="text-[10px] text-neutral-500">Includes all applicable taxes</p>
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#123D32]">
                    {formatPrice(cart.total)}
                  </span>
                </div>

                <div className="mt-6">
                  <Link
                    href="/checkout"
                    className="w-full bg-[#123D32] hover:bg-[#0B2923] text-white py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Simulated Checkout</span>
                    <ArrowRight className="w-4 h-4 text-[#C9AD78]" />
                  </Link>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-[#F7F3EB] text-[10px] text-neutral-600 space-y-1">
                  <p className="flex items-center gap-1 font-semibold text-[#123D32]">
                    <Sparkles className="w-3 h-3 text-[#C9AD78]" /> Demo Mode Active
                  </p>
                  <p>No actual funds will be deducted. Order will be recorded as a simulated demonstration.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <StorefrontFooter />
    </div>
  );
}

