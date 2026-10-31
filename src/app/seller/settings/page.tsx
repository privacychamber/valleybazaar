"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";

export default function SellerSettingsPage() {
  const { showNotification } = useDemo();
  const [vacationMode, setVacationMode] = useState(false);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState(true);

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Store Operational Settings</h1>
        <p className="text-neutral-500 mt-0.5">Configure operational preferences and order handling rules.</p>
      </div>

      <div className="space-y-4 max-w-xl">
        <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E5DED2] bg-[#F7F3EB]/40">
          <div>
            <p className="font-bold text-[#17241F]">Auto-Accept Customer Orders</p>
            <p className="text-[11px] text-neutral-500">Automatically move incoming customer orders to packaging state.</p>
          </div>
          <input
            type="checkbox"
            checked={autoAcceptOrders}
            onChange={(e) => {
              setAutoAcceptOrders(e.target.checked);
              showNotification("Auto-accept updated.");
            }}
            className="w-4 h-4 accent-[#123D32]"
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E5DED2] bg-[#F7F3EB]/40">
          <div>
            <p className="font-bold text-[#17241F]">Vacation / Winter Hibernation Mode</p>
            <p className="text-[11px] text-neutral-500">Temporarily pause storefront listings during heavy snowfall.</p>
          </div>
          <input
            type="checkbox"
            checked={vacationMode}
            onChange={(e) => {
              setVacationMode(e.target.checked);
              showNotification(e.target.checked ? "Vacation mode enabled." : "Storefront reopened.");
            }}
            className="w-4 h-4 accent-[#123D32]"
          />
        </div>
      </div>
    </div>
  );
}

