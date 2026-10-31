"use client";

import React, { useState } from "react";
import { Settings, ShieldCheck, Database, Key } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function AdminSettingsPage() {
  const { showNotification } = useDemo();
  const [demoModeEnabled, setDemoModeEnabled] = useState(true);

  return (
    <div className="space-y-6 text-xs max-w-2xl">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Platform Infrastructure Settings</h1>
        <p className="text-neutral-500 mt-0.5">Global marketplace operational switches and deployment environment indicators.</p>
      </div>

      <div className="space-y-4">
        {/* Mode indicator */}
        <div className="p-5 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-serif font-bold text-sm text-[#123D32]">Operational Mode: Mode A (Demo / Development)</p>
              <p className="text-[11px] text-neutral-600 mt-0.5">
                Using centralized typed mock data in <code>src/data/demo/</code>. Live payment gateway and production database credentials remain safely unconfigured.
              </p>
            </div>
            <span className="bg-[#123D32] text-[#C9AD78] px-2.5 py-1 rounded-full font-bold text-[10px]">
              Active
            </span>
          </div>
        </div>

        {/* Database readiness */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs space-y-2">
          <p className="font-bold text-sm text-[#17241F]">Database Schema Specification</p>
          <p className="text-neutral-600">
            PostgreSQL relational entity specifications documented in <code>prisma/schema.prisma</code> and repository interfaces in <code>src/server/repositories/</code>.
          </p>
          <p className="text-[10px] text-neutral-400 font-mono">ORM: Prisma Ready • Portable to MilesWeb or Self-hosted Node.js</p>
        </div>

        {/* Gateway boundary */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs space-y-2">
          <p className="font-bold text-sm text-[#17241F]">Payment Gateway Boundary</p>
          <p className="text-neutral-600">
            Payment provider interface prepared for Razorpay/Cashfree with webhook verification and idempotency handlers. Integration remains disabled in Demo Mode.
          </p>
        </div>
      </div>
    </div>
  );
}

