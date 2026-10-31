"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";

export default function AccountSettingsPage() {
  const { showNotification } = useDemo();
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">Account Preferences</h2>
        <p className="text-xs text-neutral-500 mt-1">Configure communication channels and security preferences.</p>
      </div>

      <div className="space-y-4 text-xs max-w-md">
        <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E5DED2] bg-[#F7F3EB]/40">
          <div>
            <p className="font-bold text-[#17241F]">Email Dispatch Alerts</p>
            <p className="text-[11px] text-neutral-500">Receive courier tracking updates via email.</p>
          </div>
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={(e) => {
              setEmailAlerts(e.target.checked);
              showNotification("Preferences updated.");
            }}
            className="w-4 h-4 accent-[#123D32]"
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl border border-[#E5DED2] bg-[#F7F3EB]/40">
          <div>
            <p className="font-bold text-[#17241F]">SMS Dispatch Notifications</p>
            <p className="text-[11px] text-neutral-500">Receive SMS alerts when seller dispatches items.</p>
          </div>
          <input
            type="checkbox"
            checked={smsAlerts}
            onChange={(e) => {
              setSmsAlerts(e.target.checked);
              showNotification("Preferences updated.");
            }}
            className="w-4 h-4 accent-[#123D32]"
          />
        </div>
      </div>
    </div>
  );
}

