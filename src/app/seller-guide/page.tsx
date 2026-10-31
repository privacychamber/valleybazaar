import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SellerGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Knowledge Base</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Valley Bazaar Seller Guide
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          A step-by-step handbook for Himachali makers, growers, and businesses joining the digital commerce collective.
        </p>

        <div className="my-10 space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-xl font-bold text-[#123D32]">1. Eligibility Criteria</h3>
            <p className="mt-2 text-neutral-600">
              Businesses must be based in Himachal Pradesh. We accept individual craftspeople, farmer producer organizations (FPOs), women-led SHGs, handloom weavers, independent shops, and small heritage manufacturers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-xl font-bold text-[#123D32]">2. Documentation & Registration</h3>
            <p className="mt-2 text-neutral-600">
              GST is mandatory for inter-state commercial sales where statutory thresholds apply. For traditional handicrafts and micro artisans, registration with the Himachal Pradesh Handicrafts & Handloom Corporation or relevant artisan cards can be provided. Food businesses require FSSAI certification.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-xl font-bold text-[#123D32]">3. Product Photography & Storytelling</h3>
            <p className="mt-2 text-neutral-600">
              Authentic natural light photography of your workshop, loom, or orchard builds patron trust. Our catalog team provides assistance with product descriptions and artisan profiling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DED2]">
            <h3 className="font-serif text-xl font-bold text-[#123D32]">4. Packaging Guidelines</h3>
            <p className="mt-2 text-neutral-600">
              We provide eco-friendly packaging recommendations that withstand mountain transit. Fragile ceramics, glass honey jars, and woolen shawls must be packed according to our safe courier guidelines.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/seller/application"
            className="inline-flex items-center gap-2 bg-[#123D32] text-white px-8 py-3.5 rounded-full font-bold text-xs shadow-md hover:bg-[#0B2923] transition-colors"
          >
            <span>Proceed to Application Form</span>
            <ArrowRight className="w-4 h-4 text-[#C9AD78]" />
          </Link>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

