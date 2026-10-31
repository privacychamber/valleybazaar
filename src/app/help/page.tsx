import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { HelpCircle, ChevronRight, MessageSquare, Truck, RefreshCcw } from "lucide-react";

export default function HelpCenterPage() {
  const faqs = [
    {
      q: "How do I know my product is authentically crafted in Himachal?",
      a: "Every product listing displays the specific origin village, district, and artisan/cooperative identity. Products claiming GI (Geographical Indication) status, such as Kullu Shawls and Kangra Tea, are verified by our catalog moderation team before publishing.",
    },
    {
      q: "Can I order from multiple sellers in one checkout?",
      a: "Yes! Valley Bazaar supports multi-vendor cart architecture. You make a single payment, and our backend automatically splits the order among the respective sellers for direct dispatch.",
    },
    {
      q: "How long does mountain shipping take?",
      a: "Sellers dispatch orders within 24-48 hours. Depending on weather conditions in high passes like Rohtang, Kinnaur, and Spiti, deliveries across India typically take 3 to 6 business days.",
    },
    {
      q: "What is your return policy for handcrafted items?",
      a: "Handcrafted textiles, brass craft, and undamaged goods can be returned within 7 days of delivery. For perishable and consumable pantry items (honey, tea, oils), returns are supported in cases of transit damage or quality defects.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Support & Guidance</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Help Center & FAQs
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          Find answers to common questions about ordering, mountain shipping, multi-vendor carts, and artisan authenticity.
        </p>

        <div className="my-10 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E5DED2] shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#17241F] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#123D32] shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] text-center">
          <h3 className="font-serif text-lg font-bold text-[#123D32]">Still have questions?</h3>
          <p className="text-xs text-neutral-600 mt-1">Our customer support team is available Mon - Sat.</p>
          <Link
            href="/contact"
            className="mt-4 inline-block bg-[#123D32] text-white text-xs px-6 py-2.5 rounded-full font-bold"
          >
            Contact Customer Support
          </Link>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

