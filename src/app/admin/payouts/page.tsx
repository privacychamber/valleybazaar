"use client";

import React, { useState } from "react";
import { demoPayouts } from "@/data/demo/payouts";
import { formatPrice } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import { DollarSign, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function AdminPayoutsPage() {
  const { showNotification } = useDemo();
  const [payouts, setPayouts] = useState(demoPayouts);

  const handleApprove = (id: string) => {
    setPayouts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "approved" as const } : p))
    );
    showNotification(`Payout settlement ${id} approved for bank disbursement.`);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Seller Settlement & Payout Approvals
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Audited ledger settlements. Payout approval is restricted to Finance Managers and Administrators.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Payout Ref</th>
              <th className="py-3 px-4">Seller Store</th>
              <th className="py-3 px-4">Period</th>
              <th className="py-3 px-4">Gross Sales</th>
              <th className="py-3 px-4">Commission</th>
              <th className="py-3 px-4">Net Disbursement</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Finance Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {payouts.map((p) => (
              <tr key={p.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32]">{p.payoutReference}</td>
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{p.storeName}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{p.bankAccountMasked}</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">{p.periodStart} to {p.periodEnd}</td>
                <td className="py-3.5 px-4 font-semibold text-neutral-700">{formatPrice(p.grossSales)}</td>
                <td className="py-3.5 px-4 text-[#C9532D]">-{formatPrice(p.platformCommission)}</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">{formatPrice(p.netPayout)}</td>
                <td className="py-3.5 px-4">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                      p.status === "completed" || p.status === "approved"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-amber-50 text-amber-800 border border-amber-200"
                    }`}
                  >
                    {p.status.replace("_", " ")}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  {p.status === "pending_review" ? (
                    <button
                      onClick={() => handleApprove(p.id)}
                      className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3 py-1 rounded-lg font-bold"
                    >
                      Authorize Payout
                    </button>
                  ) : (
                    <span className="text-neutral-400 text-[11px] font-mono">Authorized</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

