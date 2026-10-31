"use client";

import React from "react";
import Link from "next/link";
import { useDemo } from "@/context/DemoContext";
import { demoOrders } from "@/data/demo/orders";
import { demoProducts } from "@/data/demo/products";
import { formatPrice, formatDate } from "@/lib/utils";
import { Package, Heart, MapPin, Truck, ArrowRight, Store, ShieldCheck } from "lucide-react";

export default function AccountOverviewPage() {
  const { wishlist, roleProfile } = useDemo();
  const recentOrder = demoOrders[0];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">
          Account Overview
        </h2>
        <p className="text-xs text-neutral-500 mt-1">
          Review your mountain orders, saved addresses, and artisan wishlist.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#eff5ec] rounded-2xl p-4 border border-[#DDE6D8]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Active Orders</span>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-1">{demoOrders.length}</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">1 order currently in mountain transit</p>
        </div>

        <div className="bg-[#F7F3EB] rounded-2xl p-4 border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Wishlist</span>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-1">{wishlist.length}</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Saved artisan pieces</p>
        </div>

        <div className="bg-[#FFFEFB] rounded-2xl p-4 border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Impact Generated</span>
          <p className="font-serif text-2xl font-bold text-[#C9532D] mt-1">₹6,180</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Directly to Himachali makers</p>
        </div>
      </div>

      {/* Active Order Card */}
      {recentOrder && (
        <div className="border border-[#E5DED2] rounded-2xl p-6 bg-[#F7F3EB]/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9532D]">
                Recent Multi-Vendor Order
              </span>
              <h3 className="font-serif text-lg font-bold text-[#123D32]">
                Order {recentOrder.orderNumber}
              </h3>
              <p className="text-[11px] text-neutral-500">
                Placed on {formatDate(recentOrder.createdAt)} • Total: {formatPrice(recentOrder.total)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3 py-1 rounded-full">
                Processing Multi-Seller Dispatch
              </span>
            </div>
          </div>

          {/* Sub-Orders Breakdown */}
          <div className="py-4 space-y-3">
            <p className="text-xs font-bold text-[#17241F]">Seller Sub-Orders ({recentOrder.sellerOrders.length}):</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {recentOrder.sellerOrders.map((so) => (
                <div key={so.id} className="bg-white p-3.5 rounded-xl border border-[#E5DED2]">
                  <div className="flex items-center justify-between font-bold text-[#123D32]">
                    <span className="truncate max-w-[70%]">{so.storeName}</span>
                    <span className="text-[10px] bg-[#eff5ec] px-2 py-0.5 rounded font-mono capitalize">
                      {so.fulfilmentStatus}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    {so.items.length} item(s) • Subtotal {formatPrice(so.subtotal)}
                  </p>
                  {so.courierPartner && (
                    <p className="text-[10px] text-neutral-400 mt-1 flex items-center gap-1">
                      <Truck className="w-3 h-3 text-[#123D32]" />
                      <span>{so.courierPartner}: {so.trackingNumber}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
            <Link
              href={`/account/orders/${recentOrder.id}`}
              className="text-xs font-bold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1"
            >
              <span>View Full Multi-Seller Invoice & Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href={`/track-order/${recentOrder.trackingReference}`}
              className="text-xs text-[#C9532D] font-bold hover:underline"
            >
              Track Mountain Dispatch
            </Link>
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <Link
          href="/account/orders"
          className="p-4 rounded-2xl border border-[#E5DED2] hover:border-[#123D32] transition-colors flex items-center justify-between text-xs"
        >
          <div>
            <p className="font-bold text-[#123D32]">All Mountain Orders</p>
            <p className="text-neutral-500 text-[11px]">View previous purchases and invoices</p>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
        </Link>

        <Link
          href="/account/addresses"
          className="p-4 rounded-2xl border border-[#E5DED2] hover:border-[#123D32] transition-colors flex items-center justify-between text-xs"
        >
          <div>
            <p className="font-bold text-[#123D32]">Delivery Addresses</p>
            <p className="text-neutral-500 text-[11px]">Manage your saved shipping locations</p>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
        </Link>
      </div>
    </div>
  );
}

