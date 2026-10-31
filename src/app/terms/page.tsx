import React from "react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Legal</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Terms of Service
        </h1>
        <p className="mt-4 text-xs text-neutral-500">Effective Date: October 2026 • Demo Prototype Edition</p>

        <div className="my-10 space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p>
            Welcome to Valley Bazaar (&ldquo;Platform&rdquo;). By accessing or using our website, customer portal, or seller tools, you agree to comply with these Terms of Service.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2] space-y-4">
            <h3 className="font-serif text-base font-bold text-[#123D32]">1. Demo Mode Disclaimers</h3>
            <p className="text-xs text-neutral-600">
              This deployment is an engineering demonstration prototype. All listings, prices, orders, and payment steps are simulated. No real currency is charged and no legal contracts are formed in Demo Mode.
            </p>
            <h3 className="font-serif text-base font-bold text-[#123D32]">2. Authenticity & Intellectual Property</h3>
            <p className="text-xs text-neutral-600">
              The Geographical Indication (GI) designations, regional stories, and artisan likenesses displayed are protected cultural heritage of Himachal Pradesh.
            </p>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

