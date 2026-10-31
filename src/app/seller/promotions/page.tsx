"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import { Percent, Tag, Plus, Check } from "lucide-react";

export default function SellerPromotionsPage() {
  const { showNotification } = useDemo();
  const [coupons, setCoupons] = useState([
    {
      code: "KULLUWEAVE10",
      discount: "10% Off",
      category: "Handloom Shawls",
      usageCount: 24,
      status: "Active",
    },
    {
      code: "FESTIVALWINTER",
      discount: "₹300 Off",
      category: "All Products",
      usageCount: 16,
      status: "Active",
    },
  ]);

  return (
    <div className="space-y-6 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">Promotions & Valley Campaigns</h1>
          <p className="text-neutral-500 mt-0.5">Create store coupons and participate in seasonal Himalayan festivals.</p>
        </div>
        <button
          onClick={() => showNotification("Simulated coupon creator triggered.")}
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Coupon</span>
        </button>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Coupon Code</th>
              <th className="py-3 px-4">Discount</th>
              <th className="py-3 px-4">Applies To</th>
              <th className="py-3 px-4">Redemptions</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {coupons.map((c) => (
              <tr key={c.code} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32]">{c.code}</td>
                <td className="py-3.5 px-4 font-semibold text-[#17241F]">{c.discount}</td>
                <td className="py-3.5 px-4 text-neutral-600">{c.category}</td>
                <td className="py-3.5 px-4 font-semibold text-neutral-700">{c.usageCount} times</td>
                <td className="py-3.5 px-4">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

