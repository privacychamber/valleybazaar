"use client";

import React, { useState, use, Suspense } from "react";
import Link from "next/link";
import { useRouter, notFound } from "next/navigation";
import { useDemo } from "@/context/DemoContext";
import { demoProducts } from "@/data/demo/products";
import { ArrowLeft, Save, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ productId: string }>;
}

function EditProductContent({ params }: PageProps) {
  const { productId } = use(params);
  const router = useRouter();
  const { showNotification } = useDemo();

  const product = demoProducts.find((p) => p.id === productId);
  if (!product) {
    notFound();
  }

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price.toString(),
    inventory: product.inventory.toString(),
    shortDescription: product.shortDescription,
    description: product.description,
  });

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification("Product listing updated successfully.");
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
          Edit Product Listing
        </h1>
        <p className="text-xs text-neutral-500 mt-0.5">Editing: {product.title}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-6 text-xs max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Product Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Price (₹)</label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Inventory in Stock</label>
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
            <label className="block font-semibold text-[#17241F] mb-1">Short Summary</label>
            <input
              type="text"
              required
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#17241F] mb-1">Detailed Description</label>
            <textarea
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#123D32] hover:bg-[#0B2923] text-white px-7 py-3 rounded-xl font-bold shadow-md transition-colors"
        >
          Save Listing Changes
        </button>
      </form>
    </div>
  );
}

export default function EditProductPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-neutral-500">Loading product editor...</div>}>
      <EditProductContent params={params} />
    </Suspense>
  );
}

