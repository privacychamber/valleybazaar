"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import { Store, MapPin, Upload, CheckCircle2 } from "lucide-react";

export default function StoreProfilePage() {
  const { showNotification } = useDemo();
  const [store, setStore] = useState({
    name: "Beas Valley Weavers Cooperative",
    tagline: "Authentic Handloom Shawls & Pattus from Naggar",
    description: "A guild of 42 indigenous artisans preserving 200-year-old wooden fly-shuttle loom traditions in the Upper Kullu Valley.",
    location: "Naggar Village, Kullu",
    district: "Kullu",
    establishedYear: 1986,
    contactEmail: "contact@beasweavers.sample",
    contactPhone: "+91 98160 00111",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification("Store Profile saved successfully. Changes updated across marketplace.");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">Storefront Profile Settings</h2>
        <p className="text-xs text-neutral-500 mt-1">
          Customize how your cooperative or workshop appears to customers across India.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6 text-xs max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Store / Business Name</label>
            <input
              type="text"
              value={store.name}
              onChange={(e) => setStore({ ...store, name: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Tagline</label>
            <input
              type="text"
              value={store.tagline}
              onChange={(e) => setStore({ ...store, tagline: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#17241F] mb-1">About Your Workshop / Guild Story</label>
            <textarea
              rows={4}
              value={store.description}
              onChange={(e) => setStore({ ...store, description: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Village & Location</label>
              <input
                type="text"
                value={store.location}
                onChange={(e) => setStore({ ...store, location: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">District</label>
              <input
                type="text"
                value={store.district}
                onChange={(e) => setStore({ ...store, district: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Public Support Email</label>
              <input
                type="email"
                value={store.contactEmail}
                onChange={(e) => setStore({ ...store, contactEmail: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Public Contact Phone</label>
              <input
                type="text"
                value={store.contactPhone}
                onChange={(e) => setStore({ ...store, contactPhone: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-7 py-3 rounded-xl font-bold shadow-sm transition-colors"
        >
          Save Store Profile (Demo)
        </button>
      </form>
    </div>
  );
}

