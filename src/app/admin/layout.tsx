"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDemo } from "@/context/DemoContext";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Package, 
  CheckSquare, 
  ShoppingBag, 
  RotateCcw, 
  CreditCard, 
  Percent, 
  DollarSign, 
  Layers, 
  MapPin, 
  Store, 
  Truck, 
  FileText, 
  Mail, 
  LifeBuoy, 
  BarChart3, 
  Key, 
  ScrollText, 
  Settings,
  Mountain,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const adminSections = [
  {
    title: "Core Operations",
    items: [
      { href: "/admin", label: "Overview", icon: LayoutDashboard },
      { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
      { href: "/admin/returns-refunds", label: "Returns & Refunds", icon: RotateCcw },
      { href: "/admin/customers", label: "Customers", icon: Users },
    ],
  },
  {
    title: "Sellers & Catalog",
    items: [
      { href: "/admin/sellers/applications", label: "Seller Applications", icon: UserCheck },
      { href: "/admin/sellers", label: "All Sellers", icon: Store },
      { href: "/admin/products/pending-review", label: "Product Moderation", icon: CheckSquare },
      { href: "/admin/products", label: "All Products", icon: Package },
      { href: "/admin/categories", label: "Categories", icon: Layers },
      { href: "/admin/regions", label: "Regions & Valleys", icon: MapPin },
      { href: "/admin/delivery-zones", label: "Delivery Zones", icon: Truck },
    ],
  },
  {
    title: "Finance & Settlements",
    items: [
      { href: "/admin/commissions", label: "Commission Rules", icon: Percent },
      { href: "/admin/payouts", label: "Seller Payouts", icon: DollarSign },
      { href: "/admin/payments", label: "Payment Transactions", icon: CreditCard },
    ],
  },
  {
    title: "Marketing & Support",
    items: [
      { href: "/admin/content", label: "Content & Banners", icon: FileText },
      { href: "/admin/newsletter", label: "Newsletter Subscribers", icon: Mail },
      { href: "/admin/support", label: "Support Tickets", icon: LifeBuoy },
      { href: "/admin/reports", label: "Reports & Analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Governance & Security",
    items: [
      { href: "/admin/staff-access", label: "Staff & RBAC Roles", icon: Key },
      { href: "/admin/audit-logs", label: "Audit Logs", icon: ScrollText },
      { href: "/admin/settings", label: "Platform Settings", icon: Settings },
    ],
  },
];

function AdminSidebarNav() {
  const pathname = usePathname();
  const { currentRole, roleProfile } = useDemo();

  return (
    <aside className="lg:col-span-3 bg-white rounded-3xl p-4 border border-[#E5DED2] shadow-xs space-y-4">
      <div className="px-3 py-2 bg-[#eff5ec] rounded-2xl border border-[#DDE6D8]">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#123D32]">Internal RBAC</p>
        <p className="font-bold text-xs text-[#123D32] mt-0.5">{roleProfile.title}</p>
        <p className="text-[10px] text-neutral-500 font-mono mt-0.5">Role: {currentRole}</p>
      </div>

      <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
        {adminSections.map((section) => (
          <div key={section.title}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-3 mb-1.5">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs font-semibold transition-all ${
                      active
                        ? "bg-[#123D32] text-white shadow-xs"
                        : "text-[#17241F] hover:bg-[#F7F3EB]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-3.5 h-3.5 ${active ? "text-[#C9AD78]" : "text-neutral-500"}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className={`w-3 h-3 ${active ? "text-white" : "text-neutral-300"}`} />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { roleProfile } = useDemo();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      {/* Top Bar */}
      <header className="bg-[#0B2923] text-white px-4 sm:px-8 py-3.5 border-b border-[#123D32] flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#123D32] flex items-center justify-center text-[#C9AD78] border border-[#C9AD78]/30">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                Valley Bazaar
              </span>
              <span className="text-[10px] text-[#C9AD78] block -mt-1 font-sans font-semibold">
                Admin Command Center
              </span>
            </div>
          </Link>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#DDE6D8] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>State: Operational • Mode: Demo</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <Link
            href="/"
            className="text-neutral-400 hover:text-white transition-colors hidden md:inline"
          >
            Storefront
          </Link>
          <div className="flex items-center gap-2 pl-3 border-l border-[#123D32]">
            <img
              src={roleProfile.avatar}
              alt={roleProfile.name}
              className="w-7 h-7 rounded-full object-cover border border-[#C9AD78]"
            />
            <div className="text-right hidden sm:block">
              <p className="font-bold leading-none text-white">{roleProfile.name}</p>
              <p className="text-[10px] text-[#C9AD78] leading-tight capitalize mt-0.5">{roleProfile.title}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <Suspense fallback={<aside className="lg:col-span-3 bg-white rounded-3xl p-4 border border-[#E5DED2] h-96 animate-pulse" />}>
          <AdminSidebarNav />
        </Suspense>

        {/* Admin Content Area (Span 9) */}
        <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DED2] shadow-xs">
          {children}
        </div>
      </div>
    </div>
  );
}
