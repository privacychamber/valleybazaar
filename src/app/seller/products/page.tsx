"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoProducts } from "@/data/demo/products";
import { formatPrice } from "@/lib/utils";
import { Plus, Edit, Eye, Sparkles, Filter, Search } from "lucide-react";

export default function SellerProductsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [search, setSearch] = useState("");

  const sellerProducts = demoProducts.filter((p) => p.storeId === "store-beas-weavers");

  const filtered = sellerProducts.filter((p) => {
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">
            Store Products Catalog
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            Manage your listings, pricing, inventory levels, and moderation status.
          </p>
        </div>

        <Link
          href="/seller/products/new"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4 text-[#C9AD78]" />
          <span>Add New Listing</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F7F3EB] p-3 rounded-2xl border border-[#E5DED2]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-neutral-600">Status:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white border border-[#E5DED2] rounded-lg px-2.5 py-1 text-xs text-[#17241F]"
          >
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="under_review">Under Review</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Filter listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-[#E5DED2] rounded-lg px-3 py-1 text-xs text-[#17241F] focus:outline-none focus:border-[#123D32]"
        />
      </div>

      {/* Product Table */}
      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden shadow-xs bg-white text-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Product Details</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Inventory</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-[#eff5ec]/30 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt=""
                        className="w-12 h-12 rounded-xl object-cover border border-[#E5DED2] shrink-0"
                      />
                      <div className="truncate max-w-xs">
                        <p className="font-bold text-[#17241F] truncate">{product.title}</p>
                        <p className="text-[10px] text-neutral-400 font-mono">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-600 font-medium">
                    {product.categoryName}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-[#123D32]">
                    {formatPrice(product.price)}
                  </td>
                  <td className="py-3.5 px-4 font-semibold">
                    <span className={product.inventory < 5 ? "text-amber-600 font-bold" : "text-neutral-700"}>
                      {product.inventory} units
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        target="_blank"
                        className="p-1 text-neutral-500 hover:text-[#123D32]"
                        title="View Live Listing"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/seller/products/${product.id}/edit`}
                        className="p-1 text-neutral-500 hover:text-[#123D32]"
                        title="Edit Product"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

