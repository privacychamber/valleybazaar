"use client";

import React, { useState } from "react";
import { demoProducts } from "@/data/demo/products";
import { formatPrice } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import { CheckCircle2, XCircle, Sparkles, ShieldCheck } from "lucide-react";

export default function ProductModerationQueuePage() {
  const { showNotification } = useDemo();
  const [items, setItems] = useState([
    {
      id: "prod-pending-1",
      title: "Hand-Burnished Spiti River Clay Cooking Pot",
      storeName: "Spiti Cold-Desert Botanicals & Wool",
      price: 1850,
      categoryName: "Home & Living",
      origin: "Kaza, Lahaul & Spiti",
      claimedGi: false,
      handcrafted: true,
      submittedDate: "2026-10-30",
    },
    {
      id: "prod-pending-2",
      title: "Pahadi Red Rice Heritage Grain (2kg Cloth Bag)",
      storeName: "Beas Valley Weavers Cooperative",
      price: 360,
      categoryName: "Food & Pantry",
      origin: "Chirgaon, Shimla",
      claimedGi: true,
      handcrafted: false,
      submittedDate: "2026-10-31",
    },
  ]);

  const handleApprove = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
    showNotification(`Product ${id} approved and published to live marketplace.`);
  };

  const handleReject = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
    showNotification(`Product ${id} sent back to seller with moderation notes.`);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Product Moderation Queue ({items.length})
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Verify craft claims, GI credentials, image quality, and fair pricing before listings appear publicly.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="p-12 text-center bg-[#eff5ec] rounded-2xl border border-[#DDE6D8]">
          <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto mb-2" />
          <h3 className="font-serif text-lg font-bold text-[#123D32]">Moderation Queue Clear</h3>
          <p className="text-neutral-600 mt-1">All submitted artisan listings have been reviewed.</p>
        </div>
      ) : (
        <div className="divide-y divide-[#E5DED2] border border-[#E5DED2] rounded-2xl overflow-hidden bg-white">
          {items.map((item) => (
            <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#17241F]">{item.title}</span>
                  {item.claimedGi && (
                    <span className="bg-[#123D32] text-[#C9AD78] text-[9px] font-bold px-2 py-0.2 rounded-full">
                      GI Verification Requested
                    </span>
                  )}
                </div>
                <p className="text-neutral-500 mt-1">
                  Store: <strong>{item.storeName}</strong> • Origin: {item.origin} • Price: {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleReject(item.id)}
                  className="bg-red-50 hover:bg-red-100 text-red-700 px-3.5 py-1.5 rounded-xl font-bold"
                >
                  Reject with Notes
                </button>
                <button
                  onClick={() => handleApprove(item.id)}
                  className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-1.5 rounded-xl font-bold"
                >
                  Verify & Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

