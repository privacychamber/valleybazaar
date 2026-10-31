"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { demoProducts } from "@/data/demo/products";
import { demoOrders } from "@/data/demo/orders";
import { 
  Package, 
  ShoppingBag, 
  IndianRupee, 
  Clock, 
  ArrowRight, 
  Truck, 
  Plus, 
  AlertTriangle,
  Store,
  Sparkles
} from "lucide-react";

export default function SellerDashboardPage() {
  const sellerProducts = demoProducts.filter((p) => p.storeId === "store-beas-weavers");

  return (
    <div className="space-y-8">
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9532D]">
            Beas Valley Weavers Cooperative
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32] mt-0.5">
            Seller Dashboard Overview
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Performance metrics, live orders, and dispatch schedules for Naggar Hub.
          </p>
        </div>

        <Link
          href="/seller/products/new"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4 text-[#C9AD78]" />
          <span>Add New Mountain Product</span>
        </Link>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#eff5ec] p-5 rounded-2xl border border-[#DDE6D8]">
          <div className="flex items-center justify-between text-neutral-500 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Gross Sales (30d)</span>
            <IndianRupee className="w-4 h-4 text-[#123D32]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-2">₹68,900</p>
          <p className="text-[11px] text-emerald-700 font-medium mt-1">↑ 18% from last month</p>
        </div>

        <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#E5DED2]">
          <div className="flex items-center justify-between text-neutral-500 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Orders to Pack</span>
            <Clock className="w-4 h-4 text-[#C9532D]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#C9532D] mt-2">1</p>
          <p className="text-[11px] text-neutral-600 mt-1">Delhivery pickup: Today 4 PM</p>
        </div>

        <div className="bg-[#FFFEFB] p-5 rounded-2xl border border-[#E5DED2]">
          <div className="flex items-center justify-between text-neutral-500 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Active Products</span>
            <Package className="w-4 h-4 text-[#123D32]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-2">{sellerProducts.length}</p>
          <p className="text-[11px] text-neutral-600 mt-1">100% verified GI compliant</p>
        </div>

        <div className="bg-[#FFFEFB] p-5 rounded-2xl border border-[#E5DED2]">
          <div className="flex items-center justify-between text-neutral-500 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Next Settlement</span>
            <IndianRupee className="w-4 h-4 text-emerald-700" />
          </div>
          <p className="font-serif text-2xl font-bold text-emerald-700 mt-2">₹61,938</p>
          <p className="text-[11px] text-neutral-500 mt-1">Scheduled for Nov 05, 2026</p>
        </div>
      </div>

      {/* Pending Dispatch Section */}
      <div className="border border-[#E5DED2] rounded-3xl p-6 bg-[#FFFEFB] shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
          <div>
            <h2 className="font-serif text-lg font-bold text-[#123D32]">
              Urgent Fulfilment: Naggar Weavers Hub
            </h2>
            <p className="text-xs text-neutral-500">Orders assigned to your workshop awaiting handover.</p>
          </div>
          <Link href="/seller/orders" className="text-xs font-bold text-[#C9532D] hover:underline">
            View All Seller Orders
          </Link>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-[#123D32]">Sub-Order so-1001-A</span>
              <span className="bg-[#123D32] text-white text-[10px] px-2 py-0.5 rounded font-bold">
                Delhivery Pickup Scheduled
              </span>
            </div>
            <p className="text-neutral-700 mt-1">
              <strong>Item:</strong> Handwoven Pure Merino Kullu Shawl with Traditional Border (Qty: 1)
            </p>
            <p className="text-neutral-500 text-[11px]">Destination: Shimla, Himachal Pradesh</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/seller/orders/ord-1001"
              className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
            >
              Print Shipping Label
            </Link>
          </div>
        </div>
      </div>

      {/* Catalog Quick Preview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-lg font-bold text-[#123D32]">
            Store Catalog Highlights
          </h2>
          <Link href="/seller/products" className="text-xs font-bold text-[#123D32] hover:underline">
            Manage All Products
          </Link>
        </div>

        <div className="divide-y divide-neutral-100 border border-[#E5DED2] rounded-2xl overflow-hidden bg-white text-xs">
          {sellerProducts.map((p) => (
            <div key={p.id} className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={p.images[0]}
                  alt=""
                  className="w-12 h-12 rounded-xl object-cover border border-[#E5DED2]"
                />
                <div>
                  <h3 className="font-bold text-[#17241F] line-clamp-1">{p.title}</h3>
                  <p className="text-[11px] text-neutral-500">
                    Price: <strong>{formatPrice(p.price)}</strong> • Stock: <strong>{p.inventory}</strong> in store
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full capitalize">
                  {p.status}
                </span>
                <Link
                  href={`/seller/products/${p.id}/edit`}
                  className="text-xs text-[#123D32] font-bold hover:underline"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

