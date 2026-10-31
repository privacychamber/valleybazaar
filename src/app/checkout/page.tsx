"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { useDemo } from "@/context/DemoContext";
import { formatPrice } from "@/lib/utils";
import { 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  Store,
  Truck
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, showNotification } = useDemo();

  const [shippingDetails, setShippingDetails] = useState({
    name: "Rohan Malhotra",
    phone: "+91 98200 45678",
    email: "rohan.malhotra@sample.in",
    street: "Flat 402, Pine Crest Apartments, Mall Road",
    city: "Shimla",
    district: "Shimla",
    state: "Himachal Pradesh",
    postalCode: "171001",
  });

  const [paymentMethod, setPaymentMethod] = useState<"demo_upi" | "demo_card" | "demo_cod">("demo_upi");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Group items by store for multi-vendor checkout review
  const itemsByStore = cart.items.reduce((acc, item) => {
    const storeId = item.product.storeId;
    if (!acc[storeId]) {
      acc[storeId] = {
        storeId,
        storeName: item.product.storeName,
        originVillage: item.product.originVillage,
        regionName: item.product.regionName,
        items: [],
      };
    }
    acc[storeId].items.push(item);
    return acc;
  }, {} as Record<string, { storeId: string; storeName: string; originVillage: string; regionName: string; items: typeof cart.items }>);

  const storeGroups = Object.values(itemsByStore);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // In Demo Mode, simulate successful multi-vendor order generation
      const orderRef = `VB-TRK-${Math.floor(100000 + Math.random() * 900000)}`;
      clearCart();
      showNotification("Demo Order generated successfully with multi-seller orchestration!");
      router.push(`/checkout/confirmation?ref=${orderRef}`);
    }, 1200);
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
        <StorefrontHeader />
        <main className="flex-1 max-w-xl mx-auto px-4 py-20 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#123D32]">Your bag is currently empty</h2>
          <p className="text-xs text-neutral-600 mt-2">Please add mountain items before checking out.</p>
          <Link href="/products" className="mt-4 inline-block bg-[#123D32] text-white text-xs px-6 py-2.5 rounded-full font-bold">
            Browse Products
          </Link>
        </main>
        <StorefrontFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Title & Warning */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9532D]/10 text-[#C9532D] text-xs font-bold uppercase tracking-wider mb-2 border border-[#C9532D]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulated Checkout • Demo Prototype</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32]">
            Complete Your Mountain Order
          </h1>
          <p className="text-xs text-neutral-600 mt-1">
            This checkout simulates parent customer order generation and individual seller dispatch orchestration.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Delivery Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#C9AD78]" />
                <span>1. Shipping & Contact Information</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.name}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.phone}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-[#17241F] mb-1">Email Address (for order updates)</label>
                  <input
                    type="email"
                    required
                    value={shippingDetails.email}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-[#17241F] mb-1">Street Address / House No.</label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.street}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, street: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">City / Town</label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.city}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Postal Code (PIN)</label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.postalCode}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Multi-Vendor Fulfilment Notice */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2 mb-3">
                <Truck className="w-5 h-5 text-[#C9AD78]" />
                <span>2. Multi-Seller Dispatch Details</span>
              </h2>
              <p className="text-xs text-neutral-600 mb-4">
                Your items will be dispatched directly from the following mountain hubs:
              </p>

              <div className="space-y-3">
                {storeGroups.map((grp) => (
                  <div key={grp.storeId} className="p-3.5 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] text-xs">
                    <div className="flex items-center justify-between font-bold text-[#123D32]">
                      <span className="flex items-center gap-1.5">
                        <Store className="w-3.5 h-3.5" />
                        {grp.storeName}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-normal">
                        Hub: {grp.originVillage}, {grp.regionName}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-neutral-600 pl-5 list-disc text-[11px]">
                      {grp.items.map((it) => (
                        <li key={it.productId}>
                          {it.product.title} (Qty: {it.quantity})
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Simulated Payment Method Selection */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#123D32] flex items-center gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-[#C9AD78]" />
                <span>3. Simulated Payment (Demo Mode)</span>
              </h2>
              <p className="text-xs text-neutral-600 mb-4">
                Choose a simulated payment channel. No live gateway is connected and no real money is processed.
              </p>

              <div className="space-y-2 text-xs">
                <label className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "demo_upi" ? "border-[#123D32] bg-[#eff5ec] font-bold text-[#123D32]" : "border-[#E5DED2] hover:bg-neutral-50"
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "demo_upi"}
                      onChange={() => setPaymentMethod("demo_upi")}
                      className="accent-[#123D32]"
                    />
                    <span>Simulated Instant UPI (GPay / PhonePe / Paytm Demo)</span>
                  </div>
                  <span className="text-[10px] bg-[#123D32] text-white px-2 py-0.5 rounded font-mono">Simulated</span>
                </label>

                <label className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "demo_card" ? "border-[#123D32] bg-[#eff5ec] font-bold text-[#123D32]" : "border-[#E5DED2] hover:bg-neutral-50"
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "demo_card"}
                      onChange={() => setPaymentMethod("demo_card")}
                      className="accent-[#123D32]"
                    />
                    <span>Simulated Credit / Debit Card</span>
                  </div>
                  <span className="text-[10px] bg-[#123D32] text-white px-2 py-0.5 rounded font-mono">Simulated</span>
                </label>

                <label className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "demo_cod" ? "border-[#123D32] bg-[#eff5ec] font-bold text-[#123D32]" : "border-[#E5DED2] hover:bg-neutral-50"
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "demo_cod"}
                      onChange={() => setPaymentMethod("demo_cod")}
                      className="accent-[#123D32]"
                    />
                    <span>Simulated Cash on Delivery (COD)</span>
                  </div>
                  <span className="text-[10px] bg-[#123D32] text-white px-2 py-0.5 rounded font-mono">Simulated</span>
                </label>
              </div>
            </div>
          </div>

          {/* Summary Column (Span 5) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#123D32] pb-4 border-b border-neutral-100">
                Order Review
              </h2>

              <div className="divide-y divide-neutral-100 max-h-60 overflow-y-auto pr-1">
                {cart.items.map((it) => (
                  <div key={it.productId} className="py-2.5 flex items-center justify-between text-xs">
                    <div className="truncate max-w-[70%]">
                      <p className="font-semibold text-[#17241F] truncate">{it.product.title}</p>
                      <p className="text-[10px] text-neutral-500">Qty: {it.quantity} • {it.product.storeName}</p>
                    </div>
                    <span className="font-bold text-[#123D32]">
                      {formatPrice(it.product.price * it.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-neutral-100 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Mountain Courier Delivery</span>
                  <span>{formatPrice(cart.estimatedShipping)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#123D32] pt-2 border-t border-neutral-100">
                  <span>Total Amount</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-[#C9532D] hover:bg-[#b4431f] disabled:bg-neutral-400 text-white py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-[#C9AD78]" />
                <span>{isSubmitting ? "Generating Demo Order..." : `Place Simulated Order • ${formatPrice(cart.total)}`}</span>
              </button>

              <div className="mt-4 p-3 rounded-xl bg-[#eff5ec] border border-[#DDE6D8] text-[10px] text-neutral-600 space-y-1">
                <p className="font-bold text-[#123D32]">Demo Mode Governance</p>
                <p>
                  No live payment credentials or real charges occur. This transaction will be recorded in the local demo session for testing order fulfillment workflows.
                </p>
              </div>
            </div>
          </div>
        </form>
      </main>

      <StorefrontFooter />
    </div>
  );
}

