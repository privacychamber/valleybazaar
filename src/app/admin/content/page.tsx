"use client";

import React from "react";
import { FileText, Sparkles, Image, CheckCircle2 } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function AdminContentPage() {
  const { showNotification } = useDemo();

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Storefront Content & Editorial Curation</h1>
        <p className="text-neutral-500 mt-0.5">Manage homepage editorial bento highlights, maker spotlights, and announcements.</p>
      </div>

      <div className="space-y-4">
        <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-[#17241F]">Top Announcement Bar Banner</p>
            <p className="text-neutral-500 mt-0.5">&ldquo;Himachal-First Marketplace: Connecting 200+ local artisans...&rdquo;</p>
          </div>
          <button
            onClick={() => showNotification("Announcement bar updated.")}
            className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-1.5 rounded-lg font-bold"
          >
            Edit Copy
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-[#17241F]">Hero Mountain Photography</p>
            <p className="text-neutral-500 mt-0.5">Upper Beas Valley snow ranges (Kullu)</p>
          </div>
          <button
            onClick={() => showNotification("Image asset selector opened.")}
            className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-1.5 rounded-lg font-bold"
          >
            Change Image
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-[#17241F]">Artisan Bento Spotlight</p>
            <p className="text-neutral-500 mt-0.5">Active: Kullu Handlooms, Kangra Orthodox Tea, Spiti Seabuckthorn</p>
          </div>
          <button
            onClick={() => showNotification("Curated slots reordered.")}
            className="bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-1.5 rounded-lg font-bold"
          >
            Reorder Bento
          </button>
        </div>
      </div>
    </div>
  );
}

