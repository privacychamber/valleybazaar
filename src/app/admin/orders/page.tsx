"use client";

import React from "react";
import Link from "next/link";
import { demoOrders } from "@/data/demo/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import { Truck, Eye } from "lucide-react";

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Platform Orders & Multi-Seller Dispatch Orchestration
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Global view of parent orders and respective seller sub-orders across Himachal hubs.
        </p>
      </div>

      <div className="space-y-4">
        {demoOrders.map((order) => (
          <div key={order.id} className="border border-[#E5DED2] rounded-2xl p-5 bg-white shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-100 gap-2">
              <div>
                <span className="font-mono font-bold text-[#123D32] text-sm">
                  {order.orderNumber}
                </span>
                <span className="text-neutral-400 mx-2">•</span>
                <span className="text-neutral-600">Customer: <strong>{order.customerName}</strong> ({order.shippingAddress.city})</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-2.5 py-0.5 rounded font-bold capitalize">
                  {order.status}
                </span>
                <span className="font-serif font-bold text-sm text-[#123D32]">
                  {formatPrice(order.total)}
                </span>
              </div>
            </div>

            {/* Sub-Orders list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {order.sellerOrders.map((so) => (
                <div key={so.id} className="bg-[#F7F3EB] p-3 rounded-xl border border-[#E5DED2]">
                  <div className="flex items-center justify-between font-bold text-[#123D32]">
                    <span>{so.storeName}</span>
                    <span className="font-mono text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#E5DED2]">
                      {so.id}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Items Subtotal: {formatPrice(so.subtotal)} • Rate: {(so.commissionRate * 100).toFixed(0)}% • Payout: {formatPrice(so.sellerPayoutAmount)}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-1">Status: {so.fulfilmentStatus}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px] text-neutral-500">
              <span>Date: {formatDate(order.createdAt)} • Ref: {order.trackingReference}</span>
              <Link
                href={`/track-order/${order.trackingReference}`}
                target="_blank"
                className="text-[#C9532D] font-bold hover:underline"
              >
                Inspect Live Tracking
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

