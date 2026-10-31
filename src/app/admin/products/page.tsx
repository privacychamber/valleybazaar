"use client";

import React from "react";
import Link from "next/link";
import { demoProducts } from "@/data/demo/products";
import { formatPrice } from "@/lib/utils";
import { Eye, Sparkles } from "lucide-react";

export default function AdminAllProductsPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          All Marketplace Products ({demoProducts.length})
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Global catalogue view across all sellers and categories.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Title & Store</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Origin Valley</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Inventory</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {demoProducts.map((p) => (
              <tr key={p.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p className="truncate max-w-xs">{p.title}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{p.storeName}</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">{p.categoryName}</td>
                <td className="py-3.5 px-4 text-neutral-600">{p.regionName}</td>
                <td className="py-3.5 px-4 font-bold text-[#123D32]">{formatPrice(p.price)}</td>
                <td className="py-3.5 px-4 font-semibold text-neutral-700">{p.inventory} in stock</td>
                <td className="py-3.5 px-4">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                    {p.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/products/${p.slug}`}
                    target="_blank"
                    className="text-[#123D32] hover:text-[#C9532D]"
                  >
                    <Eye className="w-4 h-4 inline" />
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

