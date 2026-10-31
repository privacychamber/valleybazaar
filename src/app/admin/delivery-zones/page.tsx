"use client";

import React from "react";
import { Truck, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AdminDeliveryZonesPage() {
  const zones = [
    { zone: "Zone A: Himachal Plains & Lower Valleys", hubs: "Solan, Kangra, Bilaspur, Una, Mandi", transitTime: "24-48 hrs", courier: "Delhivery Surface" },
    { zone: "Zone B: Mid-Altitude Valleys", hubs: "Shimla, Kullu, Manali, Palampur, Chamba", transitTime: "48-72 hrs", courier: "Delhivery / Blue Dart" },
    { zone: "Zone C: High-Altitude Tribal Valleys", hubs: "Kalpa (Kinnaur), Kaza (Spiti), Keylong (Lahaul)", transitTime: "4-7 days (Weather dependent)", courier: "India Post Speed Post / 4x4 Transit" },
    { zone: "Zone D: Pan-India Destination Plains", hubs: "Delhi NCR, Punjab, Haryana, Mumbai, Bangalore", transitTime: "3-5 business days", courier: "Air & Surface Express" },
  ];

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Logistics Delivery Zones & Pass Accessibility</h1>
        <p className="text-neutral-500 mt-0.5">High mountain logistics network configuration and courier partner allocations.</p>
      </div>

      <div className="divide-y divide-neutral-100 border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        {zones.map((z, idx) => (
          <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm text-[#123D32]">{z.zone}</p>
              <p className="text-neutral-600 mt-1">Hubs: {z.hubs}</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">Assigned Courier: <strong>{z.courier}</strong></p>
            </div>
            <span className="bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3 py-1 rounded-full font-bold self-start sm:self-auto">
              Transit: {z.transitTime}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

