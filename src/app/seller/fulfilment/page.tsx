"use client";

import React from "react";
import { Truck, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function SellerFulfilmentPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Fulfilment & Mountain Logistics Hub
        </h1>
        <p className="text-neutral-500 mt-0.5">
          Pickup schedules, weather advisories for high mountain passes, and carrier manifests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#123D32]">Assigned Pickup Terminal</span>
          <p className="font-serif text-lg font-bold text-[#123D32] mt-1">Naggar Village Post Hub, Kullu</p>
          <p className="text-neutral-600 mt-1">Daily courier pickup window: 3:30 PM - 5:00 PM</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Transit Advisory</span>
          <p className="font-serif text-lg font-bold text-[#17241F] mt-1">Aut Tunnel & Mandi Pass: Clear</p>
          <p className="text-neutral-600 mt-1">Average transit time to Delhi NCR: 48 hours</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5DED2] rounded-2xl p-6 shadow-xs space-y-3">
        <h2 className="font-serif text-base font-bold text-[#123D32]">Logistics Partners Serving Naggar</h2>
        <div className="divide-y divide-neutral-100">
          <div className="py-2.5 flex items-center justify-between">
            <div>
              <p className="font-bold text-[#17241F]">Delhivery Mountain Surface</p>
              <p className="text-[11px] text-neutral-500">Pickups Mon-Sat • Standard parcels up to 20kg</p>
            </div>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">Active</span>
          </div>
          <div className="py-2.5 flex items-center justify-between">
            <div>
              <p className="font-bold text-[#17241F]">India Post Speed Post</p>
              <p className="text-[11px] text-neutral-500">Remote tribal valley connectivity</p>
            </div>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

