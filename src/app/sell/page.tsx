import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { 
  Mountain, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  Users,
  Store,
  HelpCircle
} from "lucide-react";

export default function SellLandingPage() {
  const steps = [
    {
      num: "01",
      title: "Submit Application",
      desc: "Fill in your Himachal business details, village origin, craft type, and upload sample photos.",
    },
    {
      num: "02",
      title: "Artisan Verification",
      desc: "Our catalog moderators verify authenticity, GI credentials, and fair manufacturing standards.",
    },
    {
      num: "03",
      title: "Store Setup",
      desc: "Set up your storefront profile, tell your personal maker story, and publish your listings.",
    },
    {
      num: "04",
      title: "Sell Pan-India",
      desc: "Receive orders. Package items using our mountain guidelines. Courier partners pick up directly from your village.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0B2923] text-white py-20 border-b border-[#123D32] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9532D] bg-[#C9532D]/10 px-3 py-1 rounded-full border border-[#C9532D]/30">
                Together We Grow • Himachal Seller Collective
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold mt-4 leading-tight">
                Sell Your Mountain Crafts & Harvests Across India
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#DDE6D8] leading-relaxed font-light">
                Valley Bazaar gives Himachali artisans, farmers, handloom weavers, women&apos;s SHGs, and independent local shops an online presence without technical hurdles or exploitative middlemen.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/seller/application"
                  className="bg-[#C9532D] hover:bg-[#b4431f] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Apply to Become a Seller</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/seller-guide"
                  className="bg-transparent hover:bg-white/10 text-white border border-[#C9AD78]/40 px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
                >
                  Read Seller Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32]">
              Why Himachali Businesses Choose Valley Bazaar
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              We operate under a simple principle: If our sellers grow, Valley Bazaar grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#eff5ec] text-[#123D32] flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17241F]">
                Fair & Sustainable Economics
              </h3>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                Clear 6% to 8.5% platform commission snapshot at order creation. No hidden listing fees, no lock-in subscriptions, and bi-weekly direct bank settlements.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#eff5ec] text-[#123D32] flex items-center justify-center mb-5">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17241F]">
                Doorstep Mountain Logistics
              </h3>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                We coordinate pick-up from Kullu, Kangra, Shimla, Kinnaur, and Chamba with leading national courier networks. Real-time tracking for you and your buyers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#eff5ec] text-[#123D32] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17241F]">
                Artisan Story & GI Protection
              </h3>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                Every product listing highlights the master weaver, origin village, and GI credentials. Protect your generational craft against cheap machine-made imitations.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section className="py-20 bg-[#eff5ec] border-y border-[#DDE6D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#123D32]">Simple Onboarding</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
                From Mountain Studio to Pan-India Customers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((st) => (
                <div key={st.num} className="bg-white rounded-2xl p-6 border border-[#DDE6D8] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-bold text-[#C9532D]">{st.num}</span>
                    <h3 className="font-serif text-lg font-bold text-[#123D32] mt-2">{st.title}</h3>
                    <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/seller/application"
                className="inline-flex items-center gap-2 bg-[#123D32] hover:bg-[#0B2923] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
              >
                <span>Start Your Seller Application</span>
                <ArrowRight className="w-4 h-4 text-[#C9AD78]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StorefrontFooter />
    </div>
  );
}

