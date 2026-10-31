"use client";

import React from "react";
import { demoCategories } from "@/data/demo/categories";
import { Layers, Plus, Edit } from "lucide-react";

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">Marketplace Taxonomy & Categories</h1>
          <p className="text-neutral-500 mt-0.5">8 primary Himachali commerce categories.</p>
        </div>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Category Name</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4">Listing Count</th>
              <th className="py-3 px-4">Featured</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {demoCategories.map((c) => (
              <tr key={c.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">{c.name}</td>
                <td className="py-3.5 px-4 font-mono text-neutral-500">{c.slug}</td>
                <td className="py-3.5 px-4 font-semibold text-[#123D32]">{c.itemCount} items</td>
                <td className="py-3.5 px-4">
                  {c.featured ? (
                    <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                      Featured
                    </span>
                  ) : (
                    <span className="text-neutral-400 text-[10px]">Standard</span>
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

