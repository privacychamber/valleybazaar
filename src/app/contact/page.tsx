"use client";

import React, { useState } from "react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Get in Touch</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          Contact Valley Bazaar
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          Whether you have an inquiry about a mountain order, wish to partner as an artisan, or explore corporate gifting, we&apos;re here to assist.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 my-10">
          {/* Info Card */}
          <div className="md:col-span-5 bg-[#123D32] text-white p-8 rounded-3xl border border-[#C9AD78]/30 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white mb-6">Mountain Office</h2>
              <div className="space-y-4 text-xs text-[#DDE6D8]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9AD78] shrink-0 mt-0.5" />
                  <span>Valley Bazaar Hub, The Mall, Shimla, Himachal Pradesh 171001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C9AD78] shrink-0" />
                  <span>support@valleybazaar.sample</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C9AD78] shrink-0" />
                  <span>+91 177 280 4400 (Mon - Sat, 9am - 6pm)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0B2923] text-[11px] text-[#C9AD78]">
              Together We Grow. Himachal First.
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-white p-8 rounded-3xl border border-[#E5DED2] shadow-xs">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-[#123D32] mx-auto mb-3" />
                <h3 className="font-serif text-2xl font-bold text-[#123D32]">Message Received</h3>
                <p className="text-xs text-neutral-600 mt-2">
                  Thank you for reaching out. A valley coordinator will respond to your email within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  <label className="block font-semibold text-[#17241F] mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#17241F] mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#123D32] hover:bg-[#0B2923] text-white py-3 rounded-xl font-bold transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

