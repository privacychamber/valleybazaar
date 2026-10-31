"use client";

import React, { useState } from "react";
import { demoApplications } from "@/data/demo/applications";
import { useDemo } from "@/context/DemoContext";
import { formatDate } from "@/lib/utils";
import { CheckCircle2, XCircle, AlertCircle, Eye, ShieldCheck } from "lucide-react";

export default function SellerApplicationsReviewPage() {
  const { showNotification } = useDemo();
  const [applications, setApplications] = useState(demoApplications);
  const [selectedApp, setSelectedApp] = useState<typeof demoApplications[0] | null>(null);

  const handleStatusChange = (appId: string, newStatus: typeof demoApplications[0]["status"]) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status: newStatus } : a))
    );
    showNotification(`Application ${appId} status updated to: ${newStatus.replace("_", " ")}`);
    setSelectedApp(null);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Seller Application Review Queue
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Verify Himachal origin, artisan certificates, and approve/reject prospective sellers.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Business & Applicant</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Submitted</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Review Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{app.businessName}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{app.applicantName} ({app.phone})</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">
                  {app.townVillage}, {app.district}
                </td>
                <td className="py-3.5 px-4 text-neutral-600">
                  {app.primaryCategories.join(", ")}
                </td>
                <td className="py-3.5 px-4 text-neutral-500 font-mono">
                  {formatDate(app.submittedAt)}
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full capitalize ${
                      app.status === "approved"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : app.status === "info_required"
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-blue-50 text-blue-800 border border-blue-200"
                    }`}
                  >
                    {app.status.replace("_", " ")}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    onClick={() => setSelectedApp(app)}
                    className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3 py-1 rounded-lg text-xs font-bold transition-colors"
                  >
                    Review Dossier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal / Drawer if selected */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto border border-[#E5DED2] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#C9532D]">Application Review</span>
                <h2 className="font-serif text-xl font-bold text-[#123D32]">{selectedApp.businessName}</h2>
              </div>
              <button onClick={() => setSelectedApp(null)} className="text-neutral-400 hover:text-black">✕</button>
            </div>

            <div className="space-y-3 text-xs text-neutral-700">
              <p><strong>Applicant:</strong> {selectedApp.applicantName}</p>
              <p><strong>Email / Phone:</strong> {selectedApp.email} • {selectedApp.phone}</p>
              <p><strong>Origin:</strong> {selectedApp.townVillage}, District {selectedApp.district}</p>
              <p><strong>Experience:</strong> {selectedApp.experienceYears} years</p>
              <p><strong>Capacity:</strong> {selectedApp.productionCapacity}</p>
              {selectedApp.handicraftRegistration && (
                <p><strong>Registration ID:</strong> {selectedApp.handicraftRegistration}</p>
              )}
              <div className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E5DED2]">
                <strong className="block text-[#123D32] mb-1">Artisan Story:</strong>
                <p className="italic text-neutral-600">&ldquo;{selectedApp.story}&rdquo;</p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-2 justify-end">
              <button
                onClick={() => handleStatusChange(selectedApp.id, "info_required")}
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-3.5 py-2 rounded-xl font-bold text-xs"
              >
                Request More Info
              </button>
              <button
                onClick={() => handleStatusChange(selectedApp.id, "rejected")}
                className="bg-red-50 hover:bg-red-100 text-red-700 px-3.5 py-2 rounded-xl font-bold text-xs"
              >
                Reject
              </button>
              <button
                onClick={() => handleStatusChange(selectedApp.id, "approved")}
                className="bg-[#123D32] hover:bg-[#0B2923] text-white px-5 py-2 rounded-xl font-bold text-xs"
              >
                Approve & Unlock Store
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

