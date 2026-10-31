"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDemo } from "@/context/DemoContext";
import { demoCategories } from "@/data/demo/categories";
import { ArrowLeft, Upload, Sparkles, CheckCircle2 } from "lucide-react";

export default function NewProductSubmissionPage() {
  const router = useRouter();
  const { showNotification } = useDemo();

  const [formData, setFormData] = useState({
    title: "",
    categorySlug: "handloom-and-textiles",
    shortDescription: "",
    description: "",
    price: "",
    originalPrice: "",
    unit: "piece",
    inventory: "10",
    giTagged: false,
    handcrafted: true,
    weightGrams: "400",
    originVillage: "Naggar",
    originDistrict: "Kullu",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification("Product listing submitted for catalog moderation review.");
    router.push("/seller/products");
  };

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/seller/products"
          className="text-xs text-neutral-500 hover:text-[#123D32] flex items-center gap-1.5 mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Products</span>
        </Link>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">
          Submit New Mountain Product
        </h1>
        <p className="text-xs text-neutral-500 mt-0.5">
          Provide complete details. All listings undergo artisan verification before going live.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-xs max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Product Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Handspun Desi Wool Pattu Blanket"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Category</label>
              <select
                value={formData.categorySlug}
                onChange={(e) => setFormData({ ...formData, categorySlug: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              >
                {demoCategories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Unit of Measure</label>
              <input
                type="text"
                required
                placeholder="e.g. piece, jar (500g), tin (100g)"
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Selling Price (₹)</label>
              <input
                type="number"
                required
                placeholder="2400"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Original Price (optional)</label>
              <input
                type="number"
                placeholder="2900"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Initial Stock Count</label>
              <input
                type="number"
                required
                value={formData.inventory}
                onChange={(e) => setFormData({ ...formData, inventory: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Short Summary (1 sentence)</label>
            <input
              type="text"
              required
              placeholder="Highlight origin, materials, or harvest notes"
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Detailed Description & Craft Process</label>
            <textarea
              rows={4}
              required
              placeholder="Detail the materials, loom technique or harvest methods..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer font-semibold text-neutral-700">
              <input
                type="checkbox"
                checked={formData.giTagged}
                onChange={(e) => setFormData({ ...formData, giTagged: e.target.checked })}
                className="w-4 h-4 accent-[#123D32]"
              />
              <span>GI Tag Authenticated</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer font-semibold text-neutral-700">
              <input
                type="checkbox"
                checked={formData.handcrafted}
                onChange={(e) => setFormData({ ...formData, handcrafted: e.target.checked })}
                className="w-4 h-4 accent-[#123D32]"
              />
              <span>100% Handcrafted</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-8 py-3 rounded-xl font-bold shadow-md transition-colors"
        >
          Submit Product for Moderation Review
        </button>
      </form>
    </div>
  );
}

