"use client";

import React from "react";
import { Mail, Download } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function AdminNewsletterPage() {
  const { showNotification } = useDemo();
  const subscribers = [
    { email: "aarav.kapoor@example.com", date: "2026-10-31", source: "Homepage Mountain Post" },
    { email: "priya.mehta@example.com", date: "2026-10-30", source: "Homepage Mountain Post" },
    { email: "vikas.sharma@example.com", date: "2026-10-28", source: "Checkout Opt-in" },
  ];

  return (
    <div className="space-y-6 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">The Mountain Post Subscribers</h1>
          <p className="text-neutral-500 mt-0.5">Conscious patrons subscribed to seasonal valley harvest dispatches.</p>
        </div>
        <button
          onClick={() => showNotification("Simulated CSV subscriber export downloaded.")}
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Subscriber Email</th>
              <th className="py-3 px-4">Subscription Date</th>
              <th className="py-3 px-4">Acquisition Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {subscribers.map((s) => (
              <tr key={s.email} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">{s.email}</td>
                <td className="py-3.5 px-4 text-neutral-600 font-mono">{s.date}</td>
                <td className="py-3.5 px-4 text-neutral-500">{s.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

