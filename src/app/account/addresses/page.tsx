"use client";

import React, { useState } from "react";
import { MapPin, Plus, Trash2, Edit2, CheckCircle2 } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function AccountAddressesPage() {
  const { showNotification } = useDemo();
  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      name: "Rohan Malhotra",
      phone: "+91 98200 45678",
      street: "Flat 402, Pine Crest Apartments, Mall Road",
      city: "Shimla",
      district: "Shimla",
      state: "Himachal Pradesh",
      postalCode: "171001",
      isDefault: true,
    },
    {
      id: "addr-2",
      name: "Rohan Malhotra (Work)",
      phone: "+91 98200 45678",
      street: "IT Park, Phase 1",
      city: "Chandigarh",
      district: "Chandigarh",
      state: "Punjab",
      postalCode: "160101",
      isDefault: false,
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#123D32]">Saved Addresses</h2>
          <p className="text-xs text-neutral-500 mt-1">Manage delivery locations for quick checkout.</p>
        </div>
        <button
          onClick={() => showNotification("Address modal simulation opened.")}
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Address</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-5 rounded-2xl border text-xs relative ${
              addr.isDefault ? "border-[#123D32] bg-[#eff5ec]/40" : "border-[#E5DED2] bg-white"
            }`}
          >
            {addr.isDefault && (
              <span className="absolute top-4 right-4 text-[10px] bg-[#123D32] text-white px-2 py-0.5 rounded-full font-bold">
                Default
              </span>
            )}
            <p className="font-bold text-sm text-[#17241F]">{addr.name}</p>
            <p className="text-neutral-600 mt-1">{addr.street}</p>
            <p className="text-neutral-600">
              {addr.city}, {addr.district}, {addr.postalCode}
            </p>
            <p className="text-neutral-500 mt-1">Phone: {addr.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

