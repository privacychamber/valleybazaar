"use client";

import React, { useState } from "react";
import { RotateCcw, AlertCircle, CheckCircle2 } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function AccountReturnsPage() {
  const { showNotification } = useDemo();
  const [returnRequested, setReturnRequested] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">Returns & Exchanges</h2>
        <p className="text-xs text-neutral-500 mt-1">
          Request replacements or returns for eligible handloom textiles and mountain goods.
        </p>
      </div>

      <div className="bg-[#eff5ec] rounded-2xl p-4 border border-[#DDE6D8] text-xs text-neutral-700 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-[#123D32] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#123D32] block font-semibold">Artisan Return Policy</strong>
          <span>
            Handlooms and woolens are eligible for returns within 7 days of delivery. For transit damage of food or honey items, photo documentation is required for seller insurance settlement.
          </span>
        </div>
      </div>

      {returnRequested ? (
        <div className="bg-white rounded-2xl p-6 border border-[#E5DED2] text-center">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
          <h3 className="font-serif text-lg font-bold text-[#123D32]">Return Request Registered</h3>
          <p className="text-xs text-neutral-600 mt-1">
            Simulated ticket #RET-2026-441 created. Our support team and the weaver cooperative will review.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 border border-[#E5DED2] text-xs space-y-4">
          <h3 className="font-bold text-[#17241F]">Initiate Return for Eligible Order</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-neutral-600 mb-1">Select Order</label>
              <select className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2 border border-[#E5DED2]">
                <option>Order VB-2026-8819 (Oct 28, 2026)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-neutral-600 mb-1">Reason for Return</label>
              <select className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2 border border-[#E5DED2]">
                <option>Wrong size / dimension</option>
                <option>Weave variation / color concern</option>
                <option>Transit packaging damage</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => {
              setReturnRequested(true);
              showNotification("Simulated return request lodged.");
            }}
            className="bg-[#123D32] text-white px-5 py-2.5 rounded-xl font-bold transition-colors hover:bg-[#0B2923]"
          >
            Submit Return Request (Demo)
          </button>
        </div>
      )}
    </div>
  );
}

