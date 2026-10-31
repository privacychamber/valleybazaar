"use client";

import React from "react";
import Link from "next/link";
import { demoOrders } from "@/data/demo/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import { Package, Truck, ArrowRight, Store } from "lucide-react";

export default function AccountOrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">
          Mountain Orders ({demoOrders.length})
        </h2>
        <p className="text-xs text-neutral-500 mt-1">
          Review your multi-vendor purchase history and track mountain dispatches.
        </p>
      </div>

      <div className="space-y-6">
        {demoOrders.map((order) => (
          <div
            key={order.id}
            className="border border-[#E5DED2] rounded-2xl overflow-hidden shadow-xs bg-[#FFFEFB]"
          >
            {/* Header */}
            <div className="bg-[#F7F3EB] p-4 sm:px-6 border-b border-[#E5DED2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-mono font-bold text-[#123D32] text-sm">
                  {order.orderNumber}
                </span>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Placed on {formatDate(order.createdAt)} • {order.itemsCount} Items
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3 py-1 rounded-full text-xs font-bold capitalize">
                  {order.status.replace("_", " ")}
                </span>
                <span className="font-serif text-base font-bold text-[#123D32]">
                  {formatPrice(order.total)}
                </span>
              </div>
            </div>

            {/* Seller Sub-Orders preview */}
            <div className="p-4 sm:p-6 divide-y divide-neutral-100">
              {order.sellerOrders.map((so) => (
                <div key={so.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[#123D32] flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-[#C9AD78]" />
                      <span>{so.storeName}</span>
                    </span>
                    <span className="text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded font-mono capitalize">
                      {so.fulfilmentStatus}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {so.items.map((it) => (
                      <div key={it.id} className="flex items-center gap-3 text-xs">
                        <img
                          src={it.image}
                          alt=""
                          className="w-10 h-10 rounded-lg object-cover bg-neutral-100 border border-[#E5DED2]"
                        />
                        <div className="flex-1 truncate">
                          <p className="font-medium text-[#17241F] truncate">{it.title}</p>
                          <p className="text-[11px] text-neutral-500">Qty: {it.quantity}</p>
                        </div>
                        <span className="font-semibold text-neutral-700">
                          {formatPrice(it.price * it.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-[#F7F3EB]/60 p-4 sm:px-6 border-t border-[#E5DED2] flex items-center justify-between text-xs">
              <Link
                href={`/track-order/${order.trackingReference}`}
                className="text-[#C9532D] font-bold hover:underline flex items-center gap-1.5"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Track Logistics ({order.trackingReference})</span>
              </Link>

              <Link
                href={`/account/orders/${order.id}`}
                className="text-[#123D32] font-bold hover:underline flex items-center gap-1"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

