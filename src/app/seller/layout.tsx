"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDemo } from "@/context/DemoContext";
import { 
  LayoutDashboard, 
  Store, 
  Package, 
  Boxes, 
  ShoppingBag, 
  Truck, 
  Percent, 
  IndianRupee, 
  CreditCard, 
  BarChart3, 
  Users, 
  LifeBuoy, 
  Settings, 
  ExternalLink,
  Mountain,
  ChevronRight,
  ShieldCheck,
  FilePlus2
} from "lucide-react";

const sellerNav = [
  { href: "/seller/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/seller/store-profile", label: "Store Profile", icon: Store },
  { href: "/seller/products", label: "Products Catalog", icon: Package },
  { href: "/seller/products/new", label: "Add New Product", icon: FilePlus2 },
  { href: "/seller/inventory", label: "Inventory Stock", icon: Boxes },
  { href: "/seller/orders", label: "Seller Orders", icon: ShoppingBag },
  { href: "/seller/fulfilment", label: "Fulfilment & Dispatch", icon: Truck },
  { href: "/seller/promotions", label: "Promotions & Offers", icon: Percent },
  { href: "/seller/earnings", label: "Earnings Breakdown", icon: IndianRupee },
  { href: "/seller/payouts", label: "Payout Settlements", icon: CreditCard },
  { href: "/seller/analytics", label: "Market Analytics", icon: BarChart3 },
  { href: "/seller/team", label: "Staff & Team", icon: Users },
  { href: "/seller/support", label: "Seller Support", icon: LifeBuoy },
  { href: "/seller/settings", label: "Store Settings", icon: Settings },
];

function SellerSidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="lg:col-span-3 bg-white rounded-3xl p-4 border border-[#E5DED2] shadow-xs space-y-1">
      <div className="px-3 py-2 mb-2 bg-[#eff5ec] rounded-2xl border border-[#DDE6D8]">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#123D32]">Active Seller Tenant</p>
        <p className="font-serif font-bold text-sm text-[#123D32] mt-0.5 truncate">
          Beas Valley Weavers
        </p>
        <p className="text-[11px] text-neutral-500 font-mono mt-0.5">ID: store-beas-weavers</p>
      </div>

      <div className="space-y-0.5 max-h-[70vh] overflow-y-auto pr-1">
        {sellerNav.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
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
      </div>

      <div className="pt-3 mt-2 border-t border-neutral-100">
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-1.5 p-2 rounded-xl text-xs font-semibold text-neutral-600 hover:text-[#123D32] hover:bg-neutral-50"
        >
          <span>Back to Storefront</span>
        </Link>
      </div>
    </aside>
  );
}

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  const { roleProfile } = useDemo();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      {/* Seller Top Bar */}
      <header className="bg-[#123D32] text-white px-4 sm:px-8 py-3.5 border-b border-[#C9AD78]/30 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#0B2923] flex items-center justify-center text-[#C9AD78] border border-[#C9AD78]/30">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                Valley Bazaar
              </span>
              <span className="text-[10px] text-[#C9AD78] block -mt-1 font-sans font-semibold">
                Seller Command Center
              </span>
            </div>
          </Link>

          <span className="text-neutral-500 hidden sm:inline">|</span>

          {/* Current Store Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-[#0B2923] px-3 py-1 rounded-xl border border-[#C9AD78]/20 text-xs">
            <Store className="w-3.5 h-3.5 text-[#C9AD78]" />
            <span className="font-semibold text-white">Beas Valley Weavers Cooperative</span>
            <span className="text-[10px] bg-[#eff5ec] text-[#123D32] px-1.5 py-0.2 rounded font-bold">Naggar Hub</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <Link
            href="/stores/beas-valley-weavers"
            target="_blank"
            className="hidden md:flex items-center gap-1.5 text-[#C9AD78] hover:text-white transition-colors"
          >
            <span>View Public Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2 pl-3 border-l border-[#0B2923]">
            <img
              src={roleProfile.avatar}
              alt={roleProfile.name}
              className="w-7 h-7 rounded-full object-cover border border-[#C9AD78]"
            />
            <span className="font-semibold hidden sm:inline">{roleProfile.name}</span>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <Suspense fallback={<aside className="lg:col-span-3 bg-white rounded-3xl p-4 border border-[#E5DED2] h-72 animate-pulse" />}>
          <SellerSidebarNav />
        </Suspense>

        {/* Content Area (Span 9) */}
        <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
          {children}
        </div>
      </div>
    </div>
  );
}
