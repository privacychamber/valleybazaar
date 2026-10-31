"use client";

import React from "react";
import { Users, Plus, ShieldCheck } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function SellerTeamPage() {
  const { showNotification } = useDemo();

  const team = [
    {
      name: "Devinder Thakur",
      role: "Seller Owner",
      email: "devinder@beasweavers.sample",
      status: "Active",
      access: "Full Store & Financial Control",
    },
    {
      name: "Sunil Dogra",
      role: "Seller Staff",
      email: "sunil.staff@beasweavers.sample",
      status: "Active",
      access: "Catalog & Fulfilment Dispatch Only",
    },
  ];

  return (
    <div className="space-y-6 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">Store Team & Permissions</h1>
          <p className="text-neutral-500 mt-0.5">Manage workshop staff and catalogue assistants.</p>
        </div>
        <button
          onClick={() => showNotification("Simulated staff invitation modal triggered.")}
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Invite Staff</span>
        </button>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Member</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Access Scope</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {team.map((m) => (
              <tr key={m.email} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{m.name}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{m.email}</p>
                </td>
                <td className="py-3.5 px-4 font-semibold text-[#123D32]">{m.role}</td>
                <td className="py-3.5 px-4 text-neutral-600">{m.access}</td>
                <td className="py-3.5 px-4">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold text-[10px]">
                    {m.status}
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

