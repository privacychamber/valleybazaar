"use client";

import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { CheckCircle2, Clock, Circle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function SellerOnboardingPage() {
  const steps = [
    { title: "Application Submitted", status: "completed", desc: "Basic business details, contact & village origin uploaded." },
    { title: "Under Moderation Review", status: "current", desc: "Catalog moderators evaluating GI credentials & artisan background." },
    { title: "Artisan Verification Approved", status: "upcoming", desc: "Verification seal issued; seller portal access unlocked." },
    { title: "Store Profile Setup", status: "upcoming", desc: "Upload banner, logo, and set up your public artisan story." },
    { title: "First Product Submission", status: "upcoming", desc: "Add photos, prices, dimensions, and craft specifications." },
    { title: "Product Moderation Approval", status: "upcoming", desc: "Quality standards checked before going live." },
    { title: "Storefront Published & Selling", status: "upcoming", desc: "Accepting orders from patrons across India." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Onboarding Track</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
            Seller Onboarding Lifecycle
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Tracking application for: <strong>Gaddi Valley Nomad Wool Guild (App #APP-202)</strong>
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xs">
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#DDE6D8] before:h-full">
            {steps.map((st, idx) => {
              const isCompleted = st.status === "completed";
              const isCurrent = st.status === "current";

              return (
                <div key={idx} className="relative flex items-start gap-4 text-xs">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      isCompleted
                        ? "bg-[#123D32] text-[#C9AD78]"
                        : isCurrent
                        ? "bg-[#C9532D] text-white ring-4 ring-[#C9532D]/20 animate-pulse"
                        : "bg-[#E5DED2] text-neutral-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : isCurrent ? (
                      <Clock className="w-4 h-4" />
                    ) : (
                      <Circle className="w-3 h-3" />
                    )}
                  </div>

                  <div className="flex-1 -mt-0.5">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-serif text-base font-bold ${
                          isCompleted
                            ? "text-[#123D32]"
                            : isCurrent
                            ? "text-[#C9532D]"
                            : "text-neutral-400"
                        }`}
                      >
                        {st.title}
                      </h3>
                      {isCurrent && (
                        <span className="bg-[#C9532D]/10 text-[#C9532D] text-[10px] font-bold px-2 py-0.5 rounded">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-600 mt-1">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-500">
              Need assistance? Contact our Shimla coordinator at <strong>+91 177 280 4401</strong>
            </span>
            <Link
              href="/seller/dashboard"
              className="text-xs font-bold text-[#123D32] hover:underline flex items-center gap-1"
            >
              <span>Explore Demo Seller Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

