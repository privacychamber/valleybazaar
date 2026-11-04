"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export function DemoModeBanner() {
  const [dismissed, setDismissed] = useState(false);
  const { roleProfile } = useDemo();

  if (process.env.NEXT_PUBLIC_DEMO_MODE === "false") {
    return null;
  }

  if (dismissed) return null;

  return (
    <div className="bg-[#123D32] text-[#F7F3EB] px-4 py-2 text-xs border-b border-[#C9AD78]/30 flex items-center justify-between shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex-1 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C9532D] text-white font-semibold text-[10px] uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Demo Mode
          </span>
          <span className="font-medium text-[#DDE6D8]">
            Simulated Development Prototype — All listings, orders, and payments are illustrative Himachal samples.
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-[#C9AD78] hidden sm:inline">
            Active Persona: <strong className="text-white underline">{roleProfile.title}</strong>
          </span>
          <span className="text-neutral-400 hidden md:inline">|</span>
          <span className="text-[#DDE6D8]/80 hidden md:inline">
            Himachal Pradesh Digital Commerce Initiative
          </span>
          <button
            onClick={() => setDismissed(true)}
            className="text-neutral-400 hover:text-white transition-colors ml-2"
            title="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
