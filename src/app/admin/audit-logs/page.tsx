"use client";

import React from "react";
import { demoAuditLogs } from "@/data/demo/payouts";
import { ScrollText, ShieldAlert } from "lucide-react";

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Security & Operations Audit Trail</h1>
        <p className="text-neutral-500 mt-0.5">Immutable record of sensitive administrative, financial, and moderation actions.</p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4">Actor</th>
              <th className="py-3 px-4">Action</th>
              <th className="py-3 px-4">Resource</th>
              <th className="py-3 px-4">Details</th>
              <th className="py-3 px-4 text-right">IP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {demoAuditLogs.map((log) => (
              <tr key={log.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-mono text-neutral-500 text-[10px] whitespace-nowrap">
                  {log.timestamp}
                </td>
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{log.actorName}</p>
                  <p className="text-[10px] text-neutral-400 font-mono capitalize">{log.actorRole}</p>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-mono text-[10px] bg-[#eff5ec] text-[#123D32] px-2 py-0.5 rounded font-bold">
                    {log.action}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-neutral-600 font-mono text-[10px]">
                  {log.resourceType}:{log.resourceId}
                </td>
                <td className="py-3.5 px-4 text-neutral-700 max-w-xs">{log.details}</td>
                <td className="py-3.5 px-4 text-right font-mono text-[10px] text-neutral-400">
                  {log.ipAddress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

