"use client";

import React from "react";
import { demoPayouts } from "@/data/demo/payouts";
import { formatPrice, formatDate } from "@/lib/utils";
import { CreditCard, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function SellerPayoutsPage() {
  const sellerPayouts = demoPayouts.filter((p) => p.sellerId === "seller-1");

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Payouts & Settlements</h1>
        <p className="text-neutral-500 mt-0.5">Bi-weekly automated bank disbursements for Beas Valley Weavers.</p>
      </div>

      {/* Verified Bank Account */}
      <div className="bg-[#eff5ec] p-5 rounded-2xl border border-[#DDE6D8] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#123D32] text-[#C9AD78] flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-[#123D32] text-sm">HDFC Bank (Naggar Branch)</p>
            <p className="text-neutral-600">Account: ****4419 • IFSC: HDFC0002819</p>
          </div>
        </div>
        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Verified for Settlements</span>
        </span>
      </div>

      {/* Payout Records */}
      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Payout Ref</th>
              <th className="py-3 px-4">Period</th>
              <th className="py-3 px-4">Gross Sales</th>
              <th className="py-3 px-4">Deductions</th>
              <th className="py-3 px-4">Net Payout</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {sellerPayouts.map((p) => (
              <tr key={p.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32]">{p.payoutReference}</td>
                <td className="py-3.5 px-4 text-neutral-600">{p.periodStart} to {p.periodEnd}</td>
                <td className="py-3.5 px-4 font-semibold text-[#17241F]">{formatPrice(p.grossSales)}</td>
                <td className="py-3.5 px-4 text-[#C9532D]">-{formatPrice(p.platformCommission + p.shippingDeduction)}</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">{formatPrice(p.netPayout)}</td>
                <td className="py-3.5 px-4">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold text-[10px] capitalize">
                    {p.status.replace("_", " ")}
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

