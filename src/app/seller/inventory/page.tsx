"use client";

import React, { useState } from "react";
import { demoProducts } from "@/data/demo/products";
import { formatPrice } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import { Boxes, AlertTriangle, Check, RefreshCw } from "lucide-react";

export default function SellerInventoryPage() {
  const { showNotification } = useDemo();
  const sellerProducts = demoProducts.filter((p) => p.storeId === "store-beas-weavers");

  const [stockCounts, setStockCounts] = useState<Record<string, number>>(
    sellerProducts.reduce((acc, p) => ({ ...acc, [p.id]: p.inventory }), {})
  );

  const handleStockChange = (productId: string, val: number) => {
    setStockCounts({ ...stockCounts, [productId]: Math.max(0, val) });
  };

  const handleSaveStock = (productId: string) => {
    showNotification(`Stock count updated for product.`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Mountain Inventory Manager
        </h1>
        <p className="text-xs text-neutral-500 mt-0.5">
          Real-time stock management to prevent out-of-stock cancellations during high winter demand.
        </p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden shadow-xs bg-white text-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Current Stock</th>
              <th className="py-3 px-4">Stock Status</th>
              <th className="py-3 px-4 text-right">Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {sellerProducts.map((p) => {
              const currentStock = stockCounts[p.id] ?? p.inventory;
              const isLow = currentStock < 5;

              return (
                <tr key={p.id} className="hover:bg-neutral-50">
                  <td className="py-3.5 px-4 font-bold text-[#17241F]">
                    {p.title}
                  </td>
                  <td className="py-3.5 px-4 text-[#123D32] font-semibold">
                    {formatPrice(p.price)}
                  </td>
                  <td className="py-3.5 px-4">
                    <input
                      type="number"
                      value={currentStock}
                      onChange={(e) => handleStockChange(p.id, parseInt(e.target.value) || 0)}
                      className="w-20 bg-[#F7F3EB] border border-[#E5DED2] rounded-lg px-2.5 py-1 text-xs font-bold text-[#17241F]"
                    />
                  </td>
                  <td className="py-3.5 px-4">
                    {isLow ? (
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-bold">
                        <AlertTriangle className="w-3 h-3" /> Low Stock
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                        Healthy
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleSaveStock(p.id)}
                      className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3 py-1 rounded-lg text-xs font-bold transition-colors"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

