"use client";

import React, { useState } from "react";
import { demoSupportTickets } from "@/data/demo/payouts";
import { useDemo } from "@/context/DemoContext";
import { LifeBuoy, CheckCircle2, MessageSquare } from "lucide-react";

export default function AdminSupportTicketsPage() {
  const { showNotification } = useDemo();
  const [tickets, setTickets] = useState(demoSupportTickets);

  const handleResolve = (id: string) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "resolved" as const } : t))
    );
    showNotification(`Ticket ${id} marked as Resolved.`);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Support & Escalation Cases</h1>
        <p className="text-neutral-500 mt-0.5">Customer and artisan inquiry tickets.</p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Ticket</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Requester</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {tickets.map((t) => (
              <tr key={t.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono font-bold text-[#123D32]">{t.ticketNumber}</td>
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{t.subject}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{t.lastReply}</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">{t.customerName}</td>
                <td className="py-3.5 px-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                    t.priority === "high" ? "bg-red-50 text-red-700" : "bg-neutral-100 text-neutral-700"
                  }`}>
                    {t.priority}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                    t.status === "resolved" ? "bg-emerald-50 text-emerald-800" : "bg-blue-50 text-blue-800"
                  }`}>
                    {t.status.replace("_", " ")}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  {t.status !== "resolved" && (
                    <button
                      onClick={() => handleResolve(t.id)}
                      className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3 py-1 rounded-lg font-bold"
                    >
                      Resolve Case
                    </button>
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

