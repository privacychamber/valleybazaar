"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import { RotateCcw, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AdminReturnsRefundsPage() {
  const { showNotification } = useDemo();
  const [requests, setRequests] = useState([
    {
      id: "ret-101",
      orderNumber: "VB-2026-8819",
      customerName: "Rohan Malhotra",
      item: "Kullu Shawl with Traditional Border",
      seller: "Beas Valley Weavers",
      reason: "Dimension variation",
      amount: 3450,
      status: "Review Pending",
    },
  ]);

  const handleApprove = (id: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    showNotification(`Simulated refund approved for case ${id}.`);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Returns & Refund Adjudication
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Support and finance scoping for customer returns and seller damage claims.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Case Ref</th>
              <th className="py-3 px-4">Customer & Order</th>
              <th className="py-3 px-4">Item & Seller</th>
              <th className="py-3 px-4">Reason</th>
              <th className="py-3 px-4">Refund Amount</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {requests.map((r) => (
              <tr key={r.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32]">{r.id}</td>
                <td className="py-3.5 px-4 font-semibold text-[#17241F]">
                  <p>{r.customerName}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{r.orderNumber}</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">
                  <p>{r.item}</p>
                  <p className="text-[10px] text-neutral-400">{r.seller}</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">{r.reason}</td>
                <td className="py-3.5 px-4 font-bold text-[#C9532D]">₹{r.amount}</td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    onClick={() => handleApprove(r.id)}
                    className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3 py-1 rounded-lg font-bold"
                  >
                    Approve Refund
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

