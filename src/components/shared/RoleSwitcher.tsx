"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronUp, 
  ChevronDown, 
  Check, 
  ExternalLink, 
  X 
} from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { RoleType } from "@/types";
import { demoRoleProfiles } from "@/data/demo";

export function RoleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentRole, roleProfile, setRole, demoNotification } = useDemo();

  if (process.env.NEXT_PUBLIC_DEMO_MODE === "false") {
    return null;
  }

  const externalRoles: RoleType[] = [
    "guest",
    "customer",
    "seller_applicant",
    "seller_owner",
    "seller_staff",
  ];

  const internalRoles: RoleType[] = [
    "support_agent",
    "catalog_moderator",
    "operations_manager",
    "finance_manager",
    "content_manager",
    "admin",
    "super_admin",
  ];

  const getPortalLink = (role: RoleType) => {
    switch (role) {
      case "customer":
        return { href: "/account", label: "Open Customer Portal" };
      case "seller_applicant":
        return { href: "/seller/application", label: "View Application Status" };
      case "seller_owner":
      case "seller_staff":
        return { href: "/seller/dashboard", label: "Open Seller Portal" };
      case "support_agent":
        return { href: "/admin/support", label: "Open Support Desk" };
      case "catalog_moderator":
        return { href: "/admin/products/pending-review", label: "Open Catalog Moderation" };
      case "operations_manager":
        return { href: "/admin/orders", label: "Open Operations & Orders" };
      case "finance_manager":
        return { href: "/admin/payouts", label: "Open Settlements & Finance" };
      case "content_manager":
        return { href: "/admin/content", label: "Open Content Manager" };
      case "admin":
      case "super_admin":
        return { href: "/admin", label: "Open Admin Console" };
      default:
        return { href: "/", label: "Browse Storefront" };
    }
  };

  const portal = getPortalLink(currentRole);

  return (
    <>
      {/* Toast Notification */}
      {demoNotification && (
        <div className="fixed bottom-20 right-6 z-50 bg-[#123D32] text-white px-4 py-2.5 rounded-lg shadow-xl border border-[#C9AD78]/40 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#C9532D] animate-ping" />
          <span>{demoNotification}</span>
        </div>
      )}

      {/* Floating Role Switcher Widget */}
      <div className="fixed bottom-4 right-4 z-50 font-sans">
        {isOpen && (
          <div className="glass-panel w-96 rounded-2xl shadow-2xl border border-[#E5DED2] p-4 mb-3 max-h-[80vh] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DED2]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9532D] bg-[#C9532D]/10 px-2 py-0.5 rounded">
                  Dev Only Tool
                </span>
                <h3 className="font-serif text-lg font-bold text-[#123D32] mt-1">Role & Persona Switcher</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Current Active Persona Summary */}
            <div className="bg-[#eff5ec] rounded-xl p-3 my-3 border border-[#DDE6D8]">
              <div className="flex items-center gap-2.5">
                <img
                  src={roleProfile.avatar}
                  alt={roleProfile.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#123D32]">{roleProfile.name}</span>
                    <span className="text-[10px] bg-[#123D32] text-white px-2 py-0.5 rounded-full font-medium">
                      {roleProfile.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 truncate">{roleProfile.email}</p>
                </div>
              </div>
              <p className="text-[11px] text-neutral-600 mt-2 leading-relaxed">
                {roleProfile.description}
              </p>
              <div className="mt-2.5 pt-2 border-t border-[#DDE6D8] flex items-center justify-between">
                <Link
                  href={portal.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123D32] hover:text-[#C9532D] transition-colors"
                >
                  <span>{portal.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <span className="text-[10px] text-neutral-500 font-mono">Scope: {currentRole}</span>
              </div>
            </div>

            {/* Scrollable Role List */}
            <div className="overflow-y-auto flex-1 pr-1 space-y-3">
              {/* External Roles */}
              <div>
                <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 px-1">
                  Customer & Seller Roles
                </p>
                <div className="space-y-1">
                  {externalRoles.map((r) => {
                    const profile = demoRoleProfiles[r];
                    const active = currentRole === r;
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                        }}
                        className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                          active
                            ? "bg-[#123D32] text-white shadow-xs"
                            : "hover:bg-[#F7F3EB] text-[#17241F]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold">{profile.title}</p>
                            <p className={`text-[10px] ${active ? "text-[#DDE6D8]" : "text-neutral-500"}`}>
                              {profile.name}
                            </p>
                          </div>
                        </div>
                        {active && <Check className="w-4 h-4 text-[#C9AD78]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Internal Staff Roles */}
              <div>
                <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 px-1">
                  Marketplace Staff & Admin Roles
                </p>
                <div className="space-y-1">
                  {internalRoles.map((r) => {
                    const profile = demoRoleProfiles[r];
                    const active = currentRole === r;
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                        }}
                        className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                          active
                            ? "bg-[#123D32] text-white shadow-xs"
                            : "hover:bg-[#F7F3EB] text-[#17241F]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold">{profile.title}</p>
                            <p className={`text-[10px] ${active ? "text-[#DDE6D8]" : "text-neutral-500"}`}>
                              {profile.name}
                            </p>
                          </div>
                        </div>
                        {active && <Check className="w-4 h-4 text-[#C9AD78]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-3 pt-2 border-t border-[#E5DED2] text-[10px] text-neutral-500 italic text-center">
              Never active in production. Used to verify multi-persona permission boundaries.
            </div>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-[#123D32] hover:bg-[#0B2923] text-white px-3.5 py-2.5 rounded-full shadow-lg border border-[#C9AD78]/50 transition-all hover:scale-105 active:scale-95"
          title="Switch Demo Role"
        >
          <img
            src={roleProfile.avatar}
            alt={roleProfile.name}
            className="w-6 h-6 rounded-full object-cover border border-[#C9AD78]"
          />
          <div className="text-left hidden sm:block">
            <p className="text-[10px] text-[#C9AD78] leading-none uppercase font-bold tracking-wider">Demo Persona</p>
            <p className="text-xs font-semibold leading-tight text-[#FFFEFB]">{roleProfile.title}</p>
          </div>
          {isOpen ? <ChevronDown className="w-4 h-4 text-[#C9AD78]" /> : <ChevronUp className="w-4 h-4 text-[#C9AD78]" />}
        </button>
      </div>
    </>
  );
}
