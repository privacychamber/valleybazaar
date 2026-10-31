"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { useDemo } from "@/context/DemoContext";
import { Mountain, Lock, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { setRole, showNotification } = useDemo();
  const [email, setEmail] = useState("rohan.malhotra@sample.in");
  const [password, setPassword] = useState("••••••••");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setRole("customer");
    showNotification("Logged in as Rohan Malhotra (Customer Demo Account)");
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
              Welcome to Valley Bazaar
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Sign in to manage your mountain orders and wishlist.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#17241F] mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F7F3EB] rounded-xl pl-9 pr-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                />
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-semibold text-[#17241F]">Password</label>
                <Link href="/forgot-password" className="text-[11px] text-[#C9532D] hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F7F3EB] rounded-xl pl-9 pr-4 py-2.5 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                />
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#123D32] hover:bg-[#0B2923] text-white py-3 rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <span>Sign In (Demo Session)</span>
              <ArrowRight className="w-4 h-4 text-[#C9AD78]" />
            </button>
          </form>

          {/* Demo Persona Shortcuts */}
          <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Quick Demo Personas
            </span>
            <div className="flex justify-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setRole("customer");
                  router.push("/account");
                }}
                className="px-3 py-1.5 rounded-lg bg-[#eff5ec] text-[#123D32] font-semibold text-[11px] hover:bg-[#DDE6D8]"
              >
                Customer
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole("seller_owner");
                  router.push("/seller/dashboard");
                }}
                className="px-3 py-1.5 rounded-lg bg-[#eff5ec] text-[#123D32] font-semibold text-[11px] hover:bg-[#DDE6D8]"
              >
                Seller Owner
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole("admin");
                  router.push("/admin");
                }}
                className="px-3 py-1.5 rounded-lg bg-[#eff5ec] text-[#123D32] font-semibold text-[11px] hover:bg-[#DDE6D8]"
              >
                Admin
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#123D32] font-bold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

