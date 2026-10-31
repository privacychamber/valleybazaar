"use client";

import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { demoProducts } from "@/data/demo/products";
import { demoOrders } from "@/data/demo/orders";
import { demoStores } from "@/data/demo/stores";
import { demoApplications } from "@/data/demo/applications";
import { demoPayouts } from "@/data/demo/payouts";
import { 
  Users, 
  Store, 
  ShoppingBag, 
  IndianRupee, 
  UserCheck, 
  CheckSquare, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";

export default function AdminDashboardPage() {
  const pendingApps = demoApplications.filter((a) => a.status === "under_review" || a.status === "submitted");

  return (
    <div className="space-y-8 text-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9532D]">
            Marketplace Command Centre
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32] mt-0.5">
            Operational Overview
          </h1>
          <p className="text-neutral-500 mt-1">
            Himachal Pradesh multi-vendor metrics, pending moderation queues, and financial settlements.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3 py-1.5 rounded-full font-bold">
            Demo Environment (Simulated)
          </span>
        </div>
      </div>

      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#eff5ec] p-5 rounded-2xl border border-[#DDE6D8]">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Gross Marketplace Volume</span>
            <IndianRupee className="w-4 h-4 text-[#123D32]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-2">₹1,42,400</p>
          <p className="text-[11px] text-emerald-700 font-medium mt-1">↑ 24% month-over-month</p>
        </div>

        <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#E5DED2]">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Pending Seller Apps</span>
            <UserCheck className="w-4 h-4 text-[#C9532D]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#C9532D] mt-2">{pendingApps.length}</p>
          <p className="text-[11px] text-neutral-600 mt-1">Awaiting artisan verification</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5DED2]">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Verified Stores</span>
            <Store className="w-4 h-4 text-[#123D32]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-2">{demoStores.length}</p>
          <p className="text-[11px] text-neutral-600 mt-1">Across 6 valley regions</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5DED2]">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Commission Revenue</span>
            <IndianRupee className="w-4 h-4 text-emerald-700" />
          </div>
          <p className="font-serif text-2xl font-bold text-emerald-700 mt-2">₹10,236</p>
          <p className="text-[11px] text-neutral-600 mt-1">Locked at order snapshots</p>
        </div>
      </div>

      {/* Moderation Alert Banner */}
      <div className="border border-[#E5DED2] rounded-2xl p-5 bg-[#eff5ec] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-bold text-[#123D32] text-sm flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#C9AD78]" />
            <span>{pendingApps.length} Seller Applications Awaiting Review</span>
          </p>
          <p className="text-neutral-600 mt-0.5">
            Artisan guilds from Chamba and Kangra submitted registration documents.
          </p>
        </div>
        <Link
          href="/admin/sellers/applications"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl font-bold transition-colors shrink-0"
        >
          Review Applications
        </Link>
      </div>

      {/* Recent Orders Overview */}
      <div className="bg-white border border-[#E5DED2] rounded-2xl p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-base font-bold text-[#123D32]">
            Recent Multi-Vendor Orders
          </h2>
          <Link href="/admin/orders" className="text-xs font-bold text-[#C9532D] hover:underline">
            View All Platform Orders
          </Link>
        </div>

        <div className="divide-y divide-neutral-100">
          {demoOrders.map((order) => (
            <div key={order.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-bold text-[#17241F]">
                  Order {order.orderNumber} • {order.customerName}
                </p>
                <p className="text-[11px] text-neutral-500">
                  {order.sellerOrders.length} seller sub-order(s) • Total {formatPrice(order.total)} • Status: {order.status}
                </p>
              </div>
              <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-2.5 py-0.5 rounded text-[10px] font-bold self-start sm:self-auto capitalize">
                {order.paymentStatus}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

