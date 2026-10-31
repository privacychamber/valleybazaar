"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { CheckCircle2, Sparkles, ArrowRight, Truck, Store, MapPin, PackageCheck } from "lucide-react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get("ref") || "VB-TRK-784920";

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full text-center">
      <div className="w-16 h-16 rounded-full bg-[#eff5ec] text-[#123D32] flex items-center justify-center mx-auto mb-4 border border-[#DDE6D8]">
        <CheckCircle2 className="w-10 h-10 text-[#123D32]" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123D32] text-[#C9AD78] text-[10px] font-bold uppercase tracking-wider mb-2">
        <Sparkles className="w-3 h-3" />
        <span>Simulated Order Successful</span>
      </div>

      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32]">
        Thank You for Supporting Himachal
      </h1>
      <p className="mt-3 text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
        Your simulated order has been registered. Our multi-vendor orchestration engine has notified the respective artisan workshops and orchards.
      </p>

      {/* Order Reference Card */}
      <div className="my-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] text-left shadow-xs max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-neutral-100 gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase text-neutral-500">Tracking Reference</p>
            <p className="font-mono text-lg font-bold text-[#123D32]">{orderRef}</p>
          </div>
          <span className="text-xs bg-[#eff5ec] text-[#123D32] px-3 py-1 rounded-full font-bold">
            Status: Order Received & Splitted
          </span>
        </div>

        <div className="py-4 space-y-3 text-xs">
          <p className="font-bold text-[#17241F]">Multi-Seller Fulfilment Plan:</p>
          <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E5DED2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-[#123D32]" />
              <span><strong>Sub-Order A:</strong> Beas Valley Weavers (Naggar Hub)</span>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">Courier: Delhivery Surface</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E5DED2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-[#123D32]" />
              <span><strong>Sub-Order B:</strong> Dhauladhar Heritage Tea (Palampur Hub)</span>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">Courier: Blue Dart Air</span>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-3 justify-between items-center">
          <Link
            href={`/track-order/${orderRef}`}
            className="text-xs font-bold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1.5"
          >
            <Truck className="w-4 h-4 text-[#C9AD78]" />
            <span>Track Simulated Mountain Dispatch</span>
          </Link>
          <Link
            href="/account/orders"
            className="text-xs text-neutral-600 hover:underline"
          >
            View in Customer Account
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          href="/products"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-7 py-3 rounded-full text-xs font-bold shadow-md transition-colors"
        >
          Continue Exploring Bazaar
        </Link>
      </div>
    </main>
  );
}

export default function CheckoutConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />
      <Suspense fallback={<div className="flex-1 p-12 text-center text-xs">Loading order confirmation...</div>}>
        <ConfirmationContent />
      </Suspense>
      <StorefrontFooter />
    </div>
  );
}

