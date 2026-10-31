"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { useDemo } from "@/context/DemoContext";
import { 
  Mountain, 
  CheckCircle2, 
  Upload, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Sparkles,
  AlertCircle
} from "lucide-react";

export default function SellerApplicationPage() {
  const { showNotification, setRole } = useDemo();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "Gaddi Valley Nomad Wool Guild",
    applicantName: "Sunita Gaddi",
    email: "sunita.gaddi@sample.in",
    phone: "+91 94180 12345",
    businessType: "women_shg",
    district: "Chamba",
    townVillage: "Bharmour",
    experienceYears: 8,
    primaryCategories: "Handloom & Textiles",
    hasGst: false,
    handicraftRegistration: "HP-CHM-ART-2023-889",
    story: "A cooperative of 18 Gaddi tribal women spinning wool gathered from migratory pastoral flocks during seasonal transhumance across Dhauladhar ridges.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setRole("seller_applicant");
    showNotification("Seller application submitted. Your application is now Under Review.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123D32] text-[#C9AD78] text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Himachal Seller Registration</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32]">
            Seller Application & Verification
          </h1>
          <p className="text-xs text-neutral-600 mt-1">
            Join the digital collective connecting Himachal Pradesh&apos;s local economy with customers nationwide.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DED2] text-center shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#eff5ec] text-[#123D32] flex items-center justify-center mx-auto mb-4 border border-[#DDE6D8]">
              <Clock className="w-8 h-8 text-[#123D32]" />
            </div>

            <span className="text-xs bg-[#eff5ec] text-[#123D32] border border-[#DDE6D8] px-3 py-1 rounded-full font-bold">
              Status: Under Review
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32] mt-4">
              Application Received (Reference #APP-202)
            </h2>
            <p className="text-xs text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
              Thank you, <strong>{formData.applicantName}</strong>. Your application for <strong>{formData.businessName}</strong> has been routed to our catalog moderation team for authenticity verification.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#eff5ec] border border-[#DDE6D8] max-w-md mx-auto text-left text-xs space-y-2">
              <p className="font-bold text-[#123D32]">What Happens Next?</p>
              <ul className="space-y-1.5 text-neutral-600 pl-4 list-disc text-[11px]">
                <li>Our Himachal coordinator verifies artisan/handicraft credentials.</li>
                <li>You will receive an approval email within 48 business hours.</li>
                <li>Upon approval, your seller store profile will be activated.</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/seller/onboarding"
                className="bg-[#123D32] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-[#0B2923] transition-colors"
              >
                Track Onboarding Progress
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xs space-y-6 text-xs">
            {/* Step 1: Business Details */}
            <div className="space-y-4">
              <h2 className="font-serif text-lg font-bold text-[#123D32] pb-2 border-b border-neutral-100">
                1. Business & Entity Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Business / Workshop Name</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Applicant / Proprietor Name</label>
                  <input
                    type="text"
                    required
                    value={formData.applicantName}
                    onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Location & Craft Type */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <h2 className="font-serif text-lg font-bold text-[#123D32] pb-2 border-b border-neutral-100">
                2. Mountain Origin & Business Type
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">District</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2.5 border border-[#E5DED2] font-semibold text-[#17241F]"
                  >
                    <option value="Chamba">Chamba</option>
                    <option value="Kullu">Kullu</option>
                    <option value="Kangra">Kangra</option>
                    <option value="Kinnaur">Kinnaur</option>
                    <option value="Lahaul and Spiti">Lahaul & Spiti</option>
                    <option value="Shimla">Shimla</option>
                    <option value="Mandi">Mandi</option>
                    <option value="Solan">Solan</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Village / Town</label>
                  <input
                    type="text"
                    required
                    value={formData.townVillage}
                    onChange={(e) => setFormData({ ...formData, townVillage: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Business Classification</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-3 py-2.5 border border-[#E5DED2] font-semibold text-[#17241F]"
                  >
                    <option value="artisan_craft">Artisan & Craftsperson</option>
                    <option value="farmer_producer">Farmer / FPO Producer</option>
                    <option value="handloom_textile">Handloom & Weaving</option>
                    <option value="food_processor">Pahadi Food Processor</option>
                    <option value="women_shg">Women-Led Business / SHG</option>
                    <option value="local_retailer">Local Valley Merchant</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Artisan Story */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <h2 className="font-serif text-lg font-bold text-[#123D32] pb-2 border-b border-neutral-100">
                3. Your Story & Craft Tradition
              </h2>

              <div>
                <label className="block font-semibold text-[#17241F] mb-1">
                  Tell us about your materials, traditional methods, and weavers/farmers
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#17241F] mb-1">
                  Artisan Card / GI License / FSSAI / Registration Number
                </label>
                <input
                  type="text"
                  value={formData.handicraftRegistration}
                  onChange={(e) => setFormData({ ...formData, handicraftRegistration: e.target.value })}
                  className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9532D] hover:bg-[#b4431f] text-white py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all"
            >
              Submit Seller Application (Demo Mode)
            </button>
          </form>
        )}
      </main>

      <StorefrontFooter />
    </div>
  );
}

