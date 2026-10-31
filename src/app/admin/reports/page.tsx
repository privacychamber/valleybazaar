"use client";

import React from "react";
import { formatPrice } from "@/lib/utils";
import { BarChart3, TrendingUp, IndianRupee, Download } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function AdminReportsPage() {
  const { showNotification } = useDemo();

  return (
    <div className="space-y-6 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">Marketplace Economic Reports</h1>
          <p className="text-neutral-500 mt-0.5">Aggregate volume, artisan revenue distribution, and regional analytics.</p>
        </div>
        <button
          onClick={() => showNotification("Simulated quarterly financial report downloaded.")}
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Summary</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#eff5ec] p-5 rounded-2xl border border-[#DDE6D8]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Gross Marketplace Volume</span>
          <p className="font-serif text-2xl font-bold text-[#123D32] mt-1">₹1,42,400</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">YTD 2026 across all valley stores</p>
        </div>

        <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Disbursed to Artisans</span>
          <p className="font-serif text-2xl font-bold text-emerald-700 mt-1">₹1,28,956</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">90.5% direct retention by producers</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Platform Commission Yield</span>
          <p className="font-serif text-2xl font-bold text-[#C9532D] mt-1">₹10,236</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Average 7.2% marketplace rate</p>
        </div>
      </div>
    </div>
  );
}

