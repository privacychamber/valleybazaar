"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { Mountain, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E5DED2] shadow-sm text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#123D32] flex items-center justify-center text-[#C9AD78] mx-auto mb-3 shadow-xs">
            <Mountain className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            Reset Password
          </h1>
          <p className="text-xs text-neutral-500 mt-1 mb-6">
            Enter your email to receive simulated password recovery instructions.
          </p>

          {submitted ? (
            <div className="py-6">
              <CheckCircle2 className="w-12 h-12 text-[#123D32] mx-auto mb-3" />
              <p className="text-xs font-semibold text-[#123D32]">Simulated Reset Link Sent</p>
              <p className="text-[11px] text-neutral-500 mt-1">Check your inbox for demonstration link.</p>
              <Link href="/login" className="mt-4 inline-block text-xs text-[#123D32] font-bold hover:underline">
                Return to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs text-left">
              <div>
                <label className="block font-semibold text-[#17241F] mb-1">Registered Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#123D32] hover:bg-[#0B2923] text-white py-3 rounded-xl font-bold shadow-md transition-colors"
              >
                Send Reset Link
              </button>

              <div className="text-center pt-2">
                <Link href="/login" className="text-xs text-neutral-500 hover:text-[#123D32] flex items-center justify-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Login</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

