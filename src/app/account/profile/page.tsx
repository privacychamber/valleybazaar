"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";

export default function AccountProfilePage() {
  const { roleProfile, showNotification } = useDemo();
  const [profile, setProfile] = useState({
    name: roleProfile.name,
    email: roleProfile.email,
    phone: "+91 98200 45678",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification("Profile details updated successfully.");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">Profile Details</h2>
        <p className="text-xs text-neutral-500 mt-1">Manage your personal customer profile.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-4 max-w-md text-xs">
        <div>
          <label className="block font-semibold text-[#17241F] mb-1">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
          />
        </div>
        <div>
          <label className="block font-semibold text-[#17241F] mb-1">Email Address</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
          />
        </div>
        <div>
          <label className="block font-semibold text-[#17241F] mb-1">Contact Phone</label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-6 py-2.5 rounded-xl font-bold transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

