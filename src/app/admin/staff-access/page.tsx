"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import { Key, ShieldCheck, UserCheck, Plus, Check } from "lucide-react";

export default function AdminStaffAccessPage() {
  const { showNotification } = useDemo();

  const internalStaff = [
    { name: "Vikram Sen", role: "admin", title: "Platform Administrator", email: "vikram.admin@valleybazaar.sample", permissions: ["platform.settings.manage", "iam.role.assign", "audit.log.read", "order.manage_all"] },
    { name: "Neha Kapoor", role: "finance_manager", title: "Finance Manager", email: "neha.finance@valleybazaar.sample", permissions: ["finance.payout.approve", "finance.commission.configure", "finance.commission.read"] },
    { name: "Karan Verma", role: "catalog_moderator", title: "Catalog Moderator", email: "karan.moderator@valleybazaar.sample", permissions: ["catalog.product.approve", "seller.application.review"] },
    { name: "Aman Sood", role: "operations_manager", title: "Operations Manager", email: "aman.ops@valleybazaar.sample", permissions: ["order.manage_all", "refund.review_support_scope"] },
    { name: "Priya Sharma", role: "support_agent", title: "Customer Support Agent", email: "support.agent@valleybazaar.sample", permissions: ["order.read_own", "refund.request_own"] },
  ];

  return (
    <div className="space-y-6 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">Staff RBAC Roles & Permissions</h1>
          <p className="text-neutral-500 mt-0.5">Granular resource-action scoping strictly separating catalog, finance, and system operations.</p>
        </div>
        <button
          onClick={() => showNotification("Simulated staff invitation dialog opened.")}
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Assign New Staff</span>
        </button>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Staff Member</th>
              <th className="py-3 px-4">Internal Role</th>
              <th className="py-3 px-4">Granted Permissions</th>
              <th className="py-3 px-4 text-right">Access Scope</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {internalStaff.map((s) => (
              <tr key={s.email} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{s.name}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{s.email}</p>
                </td>
                <td className="py-3.5 px-4 font-semibold text-[#123D32]">
                  {s.title}
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1 max-w-sm">
                    {s.permissions.map((p) => (
                      <span key={p} className="font-mono text-[9px] bg-[#eff5ec] text-[#123D32] px-1.5 py-0.5 rounded border border-[#DDE6D8]">
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right font-mono text-[10px] text-neutral-500">
                  {s.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

