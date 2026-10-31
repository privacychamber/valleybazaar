"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { useDemo } from "@/context/DemoContext";
import { Mountain, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const { setRole, showNotification } = useDemo();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setRole("customer");
    showNotification("Demo Account created! Welcome to Valley Bazaar.");
    router.push("/account");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E5DED2] shadow-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#123D32] flex items-center justify-center text-[#C9AD78] mx-auto mb-3 shadow-xs">
              <Mountain className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
              Join Valley Bazaar
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Create an account to order authentic mountain products.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Rohan Malhotra"
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
                placeholder="rohan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Create Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-[#F7F3EB] rounded-xl px-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#123D32] hover:bg-[#0B2923] text-white py-3 rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <span>Create Account (Demo)</span>
              <ArrowRight className="w-4 h-4 text-[#C9AD78]" />
            </button>
          </form>

          <p className="text-center text-xs text-neutral-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#123D32] font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

