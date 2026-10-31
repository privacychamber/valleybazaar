"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoOrders } from "@/data/demo/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import { 
  Package, 
  Truck, 
  MapPin, 
  Store, 
  ArrowLeft, 
  ShieldCheck, 
  FileText,
  Sparkles
} from "lucide-react";

interface PageProps {
  params: Promise<{ orderId: string }>;
}

function OrderDetailContent({ params }: PageProps) {
  const { orderId } = use(params);
  const order = demoOrders.find((o) => o.id === orderId);

  if (!order) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/account/orders"
          className="text-xs text-neutral-500 hover:text-[#123D32] flex items-center gap-1.5 mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Orders</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
              Order {order.orderNumber}
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Placed on {formatDate(order.createdAt)} • Tracking Ref: {order.trackingReference}
            </p>
          </div>
          <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3.5 py-1.5 rounded-full text-xs font-bold self-start sm:self-auto capitalize">
            Parent Status: {order.status.replace("_", " ")}
          </span>
        </div>
      </div>

      {/* Multi-Vendor Seller Sub-Orders Breakdown */}
      <div className="space-y-6">
        <h2 className="font-serif text-xl font-bold text-[#123D32]">
          Multi-Vendor Seller Sub-Orders ({order.sellerOrders.length})
        </h2>

        {order.sellerOrders.map((so, idx) => (
          <div
            key={so.id}
            className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs"
          >
            {/* Sub-order header */}
            <div className="bg-[#123D32]/5 p-4 sm:px-6 border-b border-[#E5DED2] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-[#123D32]" />
                <span className="font-bold text-[#123D32] text-sm">
                  Sub-Order {idx + 1}: {so.storeName}
                </span>
                <span className="text-[10px] bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded font-mono">
                  {so.id}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500">
                  Fulfilment: <strong className="text-[#123D32] capitalize">{so.fulfilmentStatus}</strong>
                </span>
              </div>
            </div>

            {/* Courier dispatch notice */}
            {so.courierPartner && (
              <div className="bg-[#eff5ec] px-4 sm:px-6 py-2.5 text-xs text-[#123D32] flex items-center justify-between border-b border-[#DDE6D8]">
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Courier Partner: <strong>{so.courierPartner}</strong> (AWB: {so.trackingNumber})</span>
                </div>
                <Link
                  href={`/track-order/${order.trackingReference}`}
                  className="font-bold text-[#C9532D] hover:underline"
                >
                  Track Parcel
                </Link>
              </div>
            )}

            {/* Items */}
            <div className="p-4 sm:p-6 divide-y divide-neutral-100">
              {so.items.map((it) => (
                <div key={it.id} className="py-3 first:pt-0 last:pb-0 flex items-center gap-4 text-xs">
                  <img
                    src={it.image}
                    alt=""
                    className="w-12 h-12 rounded-xl object-cover border border-[#E5DED2]"
                  />
                  <div className="flex-1 truncate">
                    <p className="font-bold text-[#17241F] truncate">{it.title}</p>
                    <p className="text-[11px] text-neutral-500">
                      {formatPrice(it.price)} × {it.quantity}
                    </p>
                  </div>
                  <span className="font-bold text-[#123D32]">
                    {formatPrice(it.price * it.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Sub-order Financial Snapshot */}
            <div className="bg-[#F7F3EB]/60 p-4 sm:px-6 border-t border-[#E5DED2] flex flex-wrap items-center justify-between text-xs text-neutral-600 gap-2">
              <span>Items Subtotal: <strong>{formatPrice(so.subtotal)}</strong></span>
              <span>Shipping Allocation: <strong>{formatPrice(so.shippingFee)}</strong></span>
              <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E5DED2] text-neutral-500">
                Commission snapshot: {(so.commissionRate * 100).toFixed(0)}% ({formatPrice(so.commissionAmount)})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Address & Payment Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-100 text-xs">
        <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E5DED2] space-y-1">
          <p className="font-bold text-[#123D32] flex items-center gap-1.5 mb-2">
            <MapPin className="w-4 h-4 text-[#C9AD78]" />
            <span>Shipping Destination</span>
          </p>
          <p className="font-semibold text-[#17241F]">{order.shippingAddress.name}</p>
          <p className="text-neutral-600">{order.shippingAddress.street}</p>
          <p className="text-neutral-600">
            {order.shippingAddress.city}, {order.shippingAddress.district}, {order.shippingAddress.postalCode}
          </p>
          <p className="text-neutral-600">Phone: {order.shippingAddress.phone}</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E5DED2] space-y-1">
          <p className="font-bold text-[#123D32] flex items-center gap-1.5 mb-2">
            <FileText className="w-4 h-4 text-[#C9AD78]" />
            <span>Payment Summary</span>
          </p>
          <div className="flex justify-between text-neutral-600">
            <span>Payment Method</span>
            <span className="font-mono uppercase font-semibold">{order.paymentMethod.replace("demo_", "")}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Payment Status</span>
            <span className="font-semibold text-emerald-700 capitalize">{order.paymentStatus}</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-[#123D32] pt-2 border-t border-[#E5DED2]">
            <span>Total Paid</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-neutral-500">Loading order details...</div>}>
      <OrderDetailContent params={params} />
    </Suspense>
  );
}

