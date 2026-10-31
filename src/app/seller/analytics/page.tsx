"use client";

import React from "react";
import { BarChart3, TrendingUp, MapPin, Users } from "lucide-react";

export default function SellerAnalyticsPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Market Analytics & Buyer Geography</h1>
        <p className="text-neutral-500 mt-0.5">Understand where your patrons reside across India.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#eff5ec] p-5 rounded-2xl border border-[#DDE6D8]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Top Buyer Region</span>
          <p className="font-serif text-xl font-bold text-[#123D32] mt-1">Delhi NCR (44%)</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">High demand for pure merino shawls</p>
        </div>

        <div className="bg-[#F7F3EB] p-5 rounded-2xl border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Repeat Customers</span>
          <p className="font-serif text-xl font-bold text-[#123D32] mt-1">32%</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Above national marketplace average</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Average Order Value</span>
          <p className="font-serif text-xl font-bold text-[#C9532D] mt-1">₹3,450</p>
          <p className="text-[11px] text-neutral-600 mt-0.5">Handloom premium segment</p>
        </div>
      </div>
    </div>
  );
}

