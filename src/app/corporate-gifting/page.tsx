import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { Sparkles, CheckCircle2, Mail, Phone } from "lucide-react";

export default function CorporateGiftingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Curated Hampers & B2B</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Corporate Mountain Gifting
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          Delight clients, partners, and colleagues with meaningful festive hampers crafted in the Himalayas. From handwoven merino wool mufflers to rare first-flush Kangra teas and raw orchard honey.
        </p>

        <div className="my-10 bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xs">
          <h2 className="font-serif text-2xl font-bold text-[#123D32] mb-4">Why Choose Mountain Gifting?</h2>
          <div className="space-y-3 text-xs text-neutral-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0 mt-0.5" />
              <span><strong>Artisan Impact:</strong> 100% of the value directly supports rural weaver families, beekeepers, and farmer collectives.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0 mt-0.5" />
              <span><strong>Custom Deodar & Handloom Packaging:</strong> Eco-friendly wooden and pine needle boxes customized with your organization&apos;s brand seal.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0 mt-0.5" />
              <span><strong>Multi-Location Pan-India Delivery:</strong> Doorstep dispatch to 50 or 5,000 individual employee/client addresses.</span>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif text-lg font-bold text-[#123D32]">Speak with our Gifting Concierge</p>
              <p className="text-xs text-neutral-600 mt-1">Direct corporate coordination & sample boxes.</p>
            </div>
            <Link
              href="/contact"
              className="bg-[#123D32] hover:bg-[#0B2923] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shrink-0"
            >
              Request Corporate Catalog
            </Link>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

