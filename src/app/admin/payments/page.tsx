"use client";

import React from "react";
import { formatPrice } from "@/lib/utils";
import { CreditCard, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AdminPaymentsPage() {
  const transactions = [
    {
      txId: "TXN-DEMO-99120",
      orderNumber: "VB-2026-8819",
      customer: "Rohan Malhotra",
      amount: 4800,
      channel: "UPI Intent (Demo)",
      timestamp: "2026-10-28 14:30:12",
      status: "Settled",
    },
    {
      txId: "TXN-DEMO-99124",
      orderNumber: "VB-2026-8824",
      customer: "Pooja Varma",
      amount: 1380,
      channel: "Card Online (Demo)",
      timestamp: "2026-10-25 11:15:45",
      status: "Settled",
    },
  ];

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Payment Gateway Events & Idempotency</h1>
        <p className="text-neutral-500 mt-0.5">Incoming transactions with verified webhook signatures.</p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Transaction Ref</th>
              <th className="py-3 px-4">Order</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Channel</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {transactions.map((tx) => (
              <tr key={tx.txId} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32]">{tx.txId}</td>
                <td className="py-3.5 px-4 font-mono">{tx.orderNumber}</td>
                <td className="py-3.5 px-4 font-semibold text-[#17241F]">{tx.customer}</td>
                <td className="py-3.5 px-4 text-neutral-600">{tx.channel}</td>
                <td className="py-3.5 px-4 font-bold text-[#123D32]">{formatPrice(tx.amount)}</td>
                <td className="py-3.5 px-4 text-neutral-500 font-mono">{tx.timestamp}</td>
                <td className="py-3.5 px-4">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold text-[10px]">
                    {tx.status}
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

