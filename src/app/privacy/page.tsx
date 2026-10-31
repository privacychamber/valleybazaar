import React from "react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Privacy & Data Governance</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xs text-neutral-500">Effective Date: October 2026</p>

        <div className="my-10 space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2] space-y-4">
            <h3 className="font-serif text-base font-bold text-[#123D32]">1. Information We Collect</h3>
            <p className="text-xs text-neutral-600">
              We collect information you provide directly to us when creating a customer account, placing orders, or applying as a seller (such as name, email, delivery address, and business information).
            </p>
            <h3 className="font-serif text-base font-bold text-[#123D32]">2. How We Use Data</h3>
            <p className="text-xs text-neutral-600">
              Your information is used solely to process multi-vendor orders, coordinate shipping logistics with courier partners, and communicate updates about your purchases. We never sell customer or artisan data to third parties.
            </p>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

