"use client";

import React from "react";
import { demoRegions } from "@/data/demo/regions";
import { MapPin, Compass } from "lucide-react";

export default function AdminRegionsPage() {
  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Valleys & Geographical Provenance</h1>
        <p className="text-neutral-500 mt-0.5">District and valley mapping for GI-verification and terroir storytelling.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {demoRegions.map((r) => (
          <div key={r.id} className="p-5 rounded-2xl border border-[#E5DED2] bg-white shadow-xs">
            <div className="flex items-center justify-between font-bold text-sm text-[#123D32]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#C9AD78]" />
                {r.name}
              </span>
              <span className="text-[10px] bg-[#eff5ec] px-2 py-0.5 rounded font-mono">
                District: {r.district}
              </span>
            </div>
            <p className="text-neutral-600 mt-2 text-xs leading-relaxed">{r.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.specialties.map((s) => (
                <span key={s} className="text-[10px] bg-[#F7F3EB] text-[#17241F] px-2 py-0.5 rounded border border-[#E5DED2]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

