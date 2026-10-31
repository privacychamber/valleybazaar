"use client";

import React from "react";
import { formatPrice } from "@/lib/utils";
import { IndianRupee, TrendingUp, Percent, FileText } from "lucide-react";

export default function SellerEarningsPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Earnings & Commission Breakdown</h1>
        <p className="text-neutral-500 mt-0.5">Transparent financial ledger with locked-in commission snapshots.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#eff5ec] p-5 rounded-2xl border border-[#DDE6D8]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Gross Sales</span>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-1">₹68,900</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Total customer payments</p>
        </div>

        <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Platform Commission (8%)</span>
          <p className="font-serif text-2xl font-bold text-[#C9532D] mt-1">-₹5,512</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Includes GI authentication & curation</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Net Seller Payout</span>
          <p className="font-serif text-2xl font-bold text-emerald-700 mt-1">₹61,938</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Direct to bank account</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5DED2] rounded-2xl p-6 shadow-xs">
        <h2 className="font-serif text-base font-bold text-[#123D32] mb-3">Order Commission Snapshots</h2>
        <div className="divide-y divide-neutral-100">
          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-[#17241F]">Sub-Order so-1001-A (Kullu Shawl)</p>
              <p className="text-[11px] text-neutral-500">Gross: ₹3,450 • Commission: 8% (₹276) • Shipping: ₹80</p>
            </div>
            <span className="font-bold text-emerald-700">+₹3,254 Net</span>
          </div>
        </div>
      </div>
    </div>
  );
}

