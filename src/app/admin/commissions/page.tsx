"use client";

import React, { useState } from "react";
import { demoCommissionRules } from "@/data/demo/payouts";
import { useDemo } from "@/context/DemoContext";
import { Percent, ShieldAlert, Plus } from "lucide-react";

export default function AdminCommissionsPage() {
  const { showNotification } = useDemo();
  const [rules, setRules] = useState(demoCommissionRules);

  const handleUpdate = (id: string, newRate: number) => {
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, percentage: newRate } : r)));
    showNotification(`Commission rate updated to ${newRate}%. Future orders will snapshot this rate.`);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Marketplace Commission Configuration
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Commission rules are applied as frozen snapshots at order creation time. Modifying rates here never retroactively changes past orders.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Commission %</th>
              <th className="py-3 px-4">Fee Structure</th>
              <th className="py-3 px-4">Rationale</th>
              <th className="py-3 px-4 text-right">Configure</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {rules.map((rule) => (
              <tr key={rule.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">{rule.categoryName}</td>
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32] text-sm">
                  {rule.percentage}%
                </td>
                <td className="py-3.5 px-4 text-neutral-600">
                  {rule.percentage}% of item subtotal
                </td>
                <td className="py-3.5 px-4 text-neutral-500 max-w-xs">{rule.description}</td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    onClick={() => handleUpdate(rule.id, rule.percentage === 8.0 ? 7.5 : 8.0)}
                    className="bg-[#eff5ec] hover:bg-[#DDE6D8] text-[#123D32] px-3 py-1 rounded-lg font-bold border border-[#DDE6D8]"
                  >
                    Adjust Rate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

