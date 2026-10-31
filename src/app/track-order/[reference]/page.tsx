"use client";

import React, { use, Suspense } from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { 
  Package, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Store, 
  ChevronRight,
  Sparkles
} from "lucide-react";

interface PageProps {
  params: Promise<{ reference: string }>;
}

function TrackOrderContent({ params }: PageProps) {
  const { reference } = use(params);

  const steps = [
    {
      title: "Order Placed & Split by Seller",
      time: "Oct 31, 2026 • 10:45 AM",
      desc: "Parent customer order registered. Sub-orders routed to respective Himachal maker hubs.",
      completed: true,
    },
    {
      title: "Artisan Inspection & Handloom Packaging",
      time: "Oct 31, 2026 • 02:15 PM",
      desc: "Naggar and Palampur workshops verified quality seals and packaged with protective deodar aroma wraps.",
      completed: true,
    },
    {
      title: "Dispatched from Mountain Hub",
      time: "Estimated: Nov 01, 2026",
      desc: "Handed over to Delhivery surface logistics at Kullu transit terminal.",
      completed: true,
    },
    {
      title: "In Transit Across Plains",
      time: "Estimated: Nov 03, 2026",
      desc: "Moving through Chandigarh regional distribution gateway.",
      completed: false,
    },
    {
      title: "Out for Delivery",
      time: "Estimated: Nov 04, 2026",
      desc: "Direct delivery to your doorstep.",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/account/orders" className="hover:text-[#123D32]">Orders</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#123D32] font-semibold">{reference}</span>
        </div>

        {/* Tracking Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9532D]">
                Simulated Mountain Dispatch
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32] mt-0.5">
                Tracking: {reference}
              </h1>
              <p className="text-xs text-neutral-500 mt-1">
                Estimated Delivery: <strong className="text-[#17241F]">November 04, 2026</strong>
              </p>
            </div>
            <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3.5 py-1.5 rounded-full text-xs font-bold">
              Status: Dispatched from Valley
            </span>
          </div>

          {/* Timeline */}
          <div className="pt-8 pl-4 space-y-8 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-[#DDE6D8] before:h-full">
            {steps.map((st, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    st.completed
                      ? "bg-[#123D32] text-[#C9AD78] shadow-sm"
                      : "bg-[#E5DED2] text-neutral-400"
                  }`}
                >
                  {st.completed ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-3.5 h-3.5" />}
                </div>

                <div className="flex-1 -mt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <h3 className={`font-bold ${st.completed ? "text-[#123D32]" : "text-neutral-500"}`}>
                      {st.title}
                    </h3>
                    <span className="text-[11px] text-neutral-400 font-mono">{st.time}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/account/orders"
            className="text-xs text-[#123D32] hover:underline font-semibold"
          >
            ← Return to Order History
          </Link>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

export default function TrackOrderPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center text-xs text-neutral-500">Tracking shipment...</div>}>
      <TrackOrderContent params={params} />
    </Suspense>
  );
}

