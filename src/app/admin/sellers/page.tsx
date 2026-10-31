"use client";

import React from "react";
import Link from "next/link";
import { demoStores } from "@/data/demo/stores";
import { ShieldCheck, MapPin, Store, ExternalLink } from "lucide-react";

export default function AdminAllSellersPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Registered Himachal Sellers ({demoStores.length})
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Active cooperatives, orchards, and artisan workshops across Himachal Pradesh.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Store Name</th>
              <th className="py-3 px-4">Owner / Guild</th>
              <th className="py-3 px-4">District</th>
              <th className="py-3 px-4">Listings</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4 text-right">Storefront</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {demoStores.map((s) => (
              <tr key={s.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <div className="flex items-center gap-2">
                    <span>{s.name}</span>
                    {s.verified && <ShieldCheck className="w-3.5 h-3.5 text-[#123D32]" />}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">{s.ownerName}</td>
                <td className="py-3.5 px-4 text-neutral-600">{s.district}</td>
                <td className="py-3.5 px-4 font-semibold text-neutral-700">{s.totalProducts} items</td>
                <td className="py-3.5 px-4 font-bold text-[#123D32]">⭐ {s.rating}</td>
                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/stores/${s.slug}`}
                    target="_blank"
                    className="text-[#123D32] hover:text-[#C9532D] font-bold inline-flex items-center gap-1"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

