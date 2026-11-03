"use client";

import React, { useState, use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoOrders } from "@/data/demo/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import { ArrowLeft, Printer } from "lucide-react";
import { SellerOrder } from "@/types";

interface PageProps {
  params: Promise<{ orderId: string }>;
}

function SellerOrderDetailContent({ params }: PageProps) {
  const { orderId } = use(params);
  const { showNotification } = useDemo();
  const currentSellerId = "seller-1";

  const parentOrder = demoOrders.find((o) => o.id === orderId);
  const subOrder = parentOrder?.sellerOrders.find((so) => so.sellerId === currentSellerId);

  // Unconditional hook calls at top of component
  const [fulfilmentStatus, setFulfilmentStatus] = useState<SellerOrder["fulfilmentStatus"]>(
    subOrder?.fulfilmentStatus || "unfulfilled"
  );
  const [courier, setCourier] = useState(subOrder?.courierPartner || "Delhivery Surface");
  const [trackingNo, setTrackingNo] = useState(subOrder?.trackingNumber || "DELHIVERY-KLU-9921");

  if (!parentOrder) {
    notFound();
  }

  if (!subOrder) {
    // Tenant isolation: Seller cannot see other sellers' sub-orders
    return (
      <div className="p-8 text-center text-xs">
        <p className="text-red-700 font-bold">Access Denied (Tenant Isolation)</p>
        <p className="text-neutral-500 mt-1">This order does not belong to your store scope.</p>
        <Link href="/seller/orders" className="mt-4 inline-block text-[#123D32] underline">
          Return to Your Orders
        </Link>
      </div>
    );
  }

  const handleUpdateFulfilment = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification(`Sub-order ${subOrder.id} status updated to: ${fulfilmentStatus}`);
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <Link
          href="/seller/orders"
          className="text-neutral-500 hover:text-[#123D32] flex items-center gap-1.5 mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Seller Orders</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#123D32]">
              Fulfil Sub-Order: {subOrder.id}
            </h1>
            <p className="text-neutral-500 mt-0.5">
              Parent Customer Order: <strong>{parentOrder.orderNumber}</strong> • Placed on {formatDate(parentOrder.createdAt)}
            </p>
          </div>

          <button
            onClick={() => showNotification("Simulated shipping label & manifest downloaded.")}
            className="self-start sm:self-auto bg-white border border-[#E5DED2] text-[#123D32] px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#F7F3EB]"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Packing Slip</span>
          </button>
        </div>
      </div>

      {/* Items to Pack */}
      <div className="bg-white border border-[#E5DED2] rounded-2xl p-6 shadow-xs">
        <h2 className="font-serif text-base font-bold text-[#123D32] mb-3">Items Assigned to Your Workshop</h2>
        <div className="divide-y divide-neutral-100">
          {subOrder.items.map((it) => (
            <div key={it.id} className="py-3 first:pt-0 last:pb-0 flex items-center gap-4">
              <img src={it.image} alt="" className="w-14 h-14 rounded-xl object-cover border border-[#E5DED2]" />
              <div className="flex-1">
                <p className="font-bold text-sm text-[#17241F]">{it.title}</p>
                <p className="text-[11px] text-neutral-500">Unit Price: {formatPrice(it.price)}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-sm text-[#123D32]">Qty: {it.quantity}</span>
                <p className="text-[11px] text-neutral-500">{formatPrice(it.price * it.quantity)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courier & Dispatch Form */}
      <form onSubmit={handleUpdateFulfilment} className="bg-white border border-[#E5DED2] rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="font-serif text-base font-bold text-[#123D32]">Dispatch & Tracking Configuration</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold text-neutral-700 mb-1">Fulfilment Status</label>
            <select
              value={fulfilmentStatus}
              onChange={(e) => setFulfilmentStatus(e.target.value as SellerOrder["fulfilmentStatus"])}
              className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2 border border-[#E5DED2] font-semibold text-[#17241F]"
            >
              <option value="unfulfilled">Unfulfilled</option>
              <option value="preparing">Preparing Handloom Packing</option>
              <option value="dispatched">Dispatched to Mountain Courier</option>
              <option value="delivered">Delivered to Customer</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">Courier Partner</label>
            <input
              type="text"
              value={courier}
              onChange={(e) => setCourier(e.target.value)}
              className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2 border border-[#E5DED2]"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">Airway Bill / Tracking No.</label>
            <input
              type="text"
              value={trackingNo}
              onChange={(e) => setTrackingNo(e.target.value)}
              className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2 border border-[#E5DED2]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-6 py-2.5 rounded-xl font-bold transition-colors"
        >
          Update Dispatch Status
        </button>
      </form>
    </div>
  );
}

export default function SellerOrderDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-neutral-500">Loading order...</div>}>
      <SellerOrderDetailContent params={params} />
    </Suspense>
  );
}
