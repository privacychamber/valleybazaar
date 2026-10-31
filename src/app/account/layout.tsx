"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { useDemo } from "@/context/DemoContext";
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  RotateCcw, 
  Bell, 
  Settings, 
  LogOut, 
  Store,
  ChevronRight
} from "lucide-react";

const navItems = [
  { href: "/account", label: "Overview", icon: User },
  { href: "/account/orders", label: "Mountain Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Saved Addresses", icon: MapPin },
  { href: "/account/returns", label: "Returns & Exchanges", icon: RotateCcw },
  { href: "/account/notifications", label: "Notifications", icon: Bell },
  { href: "/account/settings", label: "Account Settings", icon: Settings },
];

function AccountSidebarNav() {
  const pathname = usePathname();
  const { setRole } = useDemo();

  return (
    <aside className="lg:col-span-3 bg-white rounded-3xl p-4 border border-[#E5DED2] shadow-xs space-y-1">
      {navItems.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-between p-3 rounded-2xl text-xs font-semibold transition-all ${
              active
                ? "bg-[#123D32] text-white shadow-xs"
                : "text-[#17241F] hover:bg-[#F7F3EB]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Icon className={`w-4 h-4 ${active ? "text-[#C9AD78]" : "text-neutral-500"}`} />
              <span>{item.label}</span>
            </div>
            <ChevronRight className={`w-3.5 h-3.5 ${active ? "text-white" : "text-neutral-300"}`} />
          </Link>
        );
      })}

      <div className="pt-4 mt-2 border-t border-neutral-100">
        <button
          onClick={() => setRole("guest")}
          className="w-full flex items-center gap-2.5 p-3 rounded-2xl text-xs font-semibold text-neutral-600 hover:text-[#C9532D] hover:bg-neutral-50 transition-colors"
        >
          <LogOut className="w-4 h-4 text-neutral-400" />
          <span>Switch to Guest</span>
        </button>
      </div>
    </aside>
  );
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const { roleProfile } = useDemo();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Portal Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={roleProfile.avatar}
              alt={roleProfile.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-[#123D32]"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-[#123D32]">
                  {roleProfile.name}
                </h1>
                <span className="text-[10px] bg-[#eff5ec] text-[#123D32] px-2.5 py-0.5 rounded-full font-bold border border-[#DDE6D8]">
                  {roleProfile.title}
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">{roleProfile.email}</p>
            </div>
          </div>

          {/* Become a seller CTA for customer account */}
          <Link
            href="/sell"
            className="self-start sm:self-auto bg-[#123D32] hover:bg-[#0B2923] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Store className="w-3.5 h-3.5 text-[#C9AD78]" />
            <span>Become a Verified Seller</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Suspense fallback={<aside className="lg:col-span-3 bg-white rounded-3xl p-4 border border-[#E5DED2] h-64 animate-pulse" />}>
            <AccountSidebarNav />
          </Suspense>

          {/* Main Content (Span 9) */}
          <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
            {children}
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}
