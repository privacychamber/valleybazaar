import React from "react";
import Link from "next/link";
import { Mountain, ShieldCheck, Heart, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export function StorefrontFooter() {
  return (
    <footer className="bg-[#0B2923] text-[#F7F3EB] pt-16 pb-12 border-t border-[#123D32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Mission Header in Footer */}
        <div className="pb-12 border-b border-[#123D32] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#123D32] flex items-center justify-center text-[#C9AD78] border border-[#C9AD78]/40">
                <Mountain className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Valley Bazaar
              </span>
            </div>
            <p className="mt-2 text-sm text-[#DDE6D8]/80 leading-relaxed">
              Himachal Pradesh&apos;s digital marketplace platform. We do not replace local businesses; we give mountain farmers, weavers, and artisans the digital wings to reach conscious patrons across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/sell"
              className="bg-[#C9532D] hover:bg-[#b4431f] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Bring Your Business Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/our-story"
              className="bg-[#123D32] hover:bg-[#1c5244] text-[#F7F3EB] px-5 py-2.5 rounded-full text-xs font-semibold border border-[#C9AD78]/30 transition-all"
            >
              Our Story & Ethics
            </Link>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          {/* Column 1: Discover Himachal */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C9AD78] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9AD78]" /> Explore Valleys
            </h4>
            <ul className="space-y-2.5 text-[#DDE6D8]/75">
              <li>
                <Link href="/regions/kullu-valley" className="hover:text-white transition-colors">
                  Kullu Valley (Shawls & Orchards)
                </Link>
              </li>
              <li>
                <Link href="/regions/kangra-valley" className="hover:text-white transition-colors">
                  Kangra Valley (Tea & Paintings)
                </Link>
              </li>
              <li>
                <Link href="/regions/kinnaur" className="hover:text-white transition-colors">
                  Kinnaur (High Altitude Apples)
                </Link>
              </li>
              <li>
                <Link href="/regions/lahaul-and-spiti" className="hover:text-white transition-colors">
                  Lahaul & Spiti (Seabuckthorn & Wool)
                </Link>
              </li>
              <li>
                <Link href="/regions/chamba-valley" className="hover:text-white transition-colors">
                  Chamba Valley (Rumal & Metalcraft)
                </Link>
              </li>
              <li>
                <Link href="/regions/shimla-hills" className="hover:text-white transition-colors">
                  Shimla Hills (Forest Preserves)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Marketplace Categories */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C9AD78] uppercase tracking-wider mb-4">
              Pahadi Marketplace
            </h4>
            <ul className="space-y-2.5 text-[#DDE6D8]/75">
              <li>
                <Link href="/categories/food-and-pantry" className="hover:text-white transition-colors">
                  Food & Mountain Pantry
                </Link>
              </li>
              <li>
                <Link href="/categories/handloom-and-textiles" className="hover:text-white transition-colors">
                  Handloom & GI Kullu Shawls
                </Link>
              </li>
              <li>
                <Link href="/categories/handicrafts" className="hover:text-white transition-colors">
                  Handicrafts & Pahadi Art
                </Link>
              </li>
              <li>
                <Link href="/categories/natural-and-wellness" className="hover:text-white transition-colors">
                  Cold-Pressed Oils & Wellness
                </Link>
              </li>
              <li>
                <Link href="/categories/home-and-living" className="hover:text-white transition-colors">
                  Pine Needle Crafts & Living
                </Link>
              </li>
              <li>
                <Link href="/corporate-gifting" className="hover:text-white transition-colors text-[#C9AD78] font-semibold">
                  Corporate Mountain Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Seller Community */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C9AD78] uppercase tracking-wider mb-4">
              Seller Enablement
            </h4>
            <ul className="space-y-2.5 text-[#DDE6D8]/75">
              <li>
                <Link href="/sell" className="hover:text-white transition-colors">
                  Apply as a Himachali Seller
                </Link>
              </li>
              <li>
                <Link href="/seller-guide" className="hover:text-white transition-colors">
                  Seller Onboarding Guide
                </Link>
              </li>
              <li>
                <Link href="/seller/dashboard" className="hover:text-white transition-colors">
                  Seller Portal Login
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-white transition-colors">
                  Directory of Local Stores
                </Link>
              </li>
              <li>
                <Link href="/makers" className="hover:text-white transition-colors">
                  Meet the Artisan Collective
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform Trust & Legal */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C9AD78] uppercase tracking-wider mb-4">
              Trust & Governance
            </h4>
            <ul className="space-y-2.5 text-[#DDE6D8]/75">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Valley Bazaar
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  Fair Trade & Verification Promise
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-white transition-colors">
                  Mountain Fulfilment & Shipping
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Customer Help Desk
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Commerce
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#123D32] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#DDE6D8]/60">
          <p>© 2026 Valley Bazaar Technologies. All rights reserved. Together We Grow.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#C9AD78]">
              <Sparkles className="w-3 h-3" /> Crafted with reverence for Himachal Pradesh
            </span>
            <span className="hidden md:inline">•</span>
            <span className="text-neutral-400">Demo Environment (Vercel Preview)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

