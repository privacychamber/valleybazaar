"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoOrders } from "@/data/demo/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import { ShoppingBag, Truck, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function SellerOrdersPage() {
  const currentSellerId = "seller-1"; // Beas Valley Weavers

  // Filter orders where this seller has sub-orders
  const sellerSubOrders = demoOrders.flatMap((order) => {
    return order.sellerOrders
      .filter((so) => so.sellerId === currentSellerId)
      .map((so) => ({
        parentOrderId: order.id,
        parentOrderNumber: order.orderNumber,
        customerName: order.customerName,
        customerCity: order.shippingAddress.city,
        createdAt: order.createdAt,
        subOrder: so,
      }));
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#123D32]">
            Store Orders ({sellerSubOrders.length})
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            Seller-scoped sub-orders for Beas Valley Weavers Cooperative.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sellerSubOrders.map((item) => {
          const so = item.subOrder;
          return (
            <div
              key={so.id}
              className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs text-xs"
            >
              <div className="bg-[#F7F3EB] p-4 sm:px-6 border-b border-[#E5DED2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-[#123D32]">
                      Sub-Order: {so.id}
                    </span>
                    <span className="text-neutral-400">|</span>
                    <span className="text-[11px] text-neutral-500">
                      Parent Order {item.parentOrderNumber}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Customer: <strong>{item.customerName}</strong> ({item.customerCity}) • Placed {formatDate(item.createdAt)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3 py-1 rounded-full font-bold capitalize">
                    {so.fulfilmentStatus}
                  </span>
                  <span className="font-serif text-base font-bold text-[#123D32]">
                    {formatPrice(so.subtotal)}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="p-4 sm:p-6 divide-y divide-neutral-100">
                {so.items.map((it) => (
                  <div key={it.id} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={it.image} alt="" className="w-10 h-10 rounded-lg object-cover border border-[#E5DED2]" />
                      <div>
                        <p className="font-bold text-[#17241F]">{it.title}</p>
                        <p className="text-[10px] text-neutral-500">Quantity: {it.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#123D32]">
                      {formatPrice(it.price * it.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="bg-[#eff5ec]/40 p-4 sm:px-6 border-t border-[#E5DED2] flex flex-wrap items-center justify-between gap-2">
                <div className="text-[11px] text-neutral-500">
                  Seller Payout after 8% commission: <strong className="text-[#123D32]">{formatPrice(so.sellerPayoutAmount)}</strong>
                </div>

                <Link
                  href={`/seller/orders/${item.parentOrderId}`}
                  className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-1.5 rounded-xl font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>Manage Fulfilment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9AD78]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

