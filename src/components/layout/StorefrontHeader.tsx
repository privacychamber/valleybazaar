"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Search, 
  MapPin, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Mountain,
  Store as StoreIcon,
  Compass
} from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { demoCategories } from "@/data/demo/categories";
import { demoRegions } from "@/data/demo/regions";

export function StorefrontHeader() {
  const router = useRouter();
  const { cart, wishlist, currentRole, roleProfile } = useDemo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Shimla, HP 171001");
  const [locationMenuOpen, setLocationMenuOpen] = useState(false);

  const locations = [
    "Shimla, HP 171001",
    "Kullu / Manali, HP 175101",
    "Dharamsala / Kangra, HP 176215",
    "Mandi, HP 175001",
    "Solan, HP 173212",
    "Chandigarh / Tricity",
    "Delhi NCR (Pan-India Shipping)",
    "Mumbai / Bangalore / All India",
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const totalCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFEFB]/95 backdrop-blur-md border-b border-[#E5DED2] transition-all">
      {/* 1. Announcement Bar */}
      <div className="bg-[#0B2923] text-[#F7F3EB] text-xs py-1.5 px-4 border-b border-[#123D32]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mountain className="w-3.5 h-3.5 text-[#C9AD78]" />
            <span className="font-serif italic text-[#C9AD78]">Himachal-First Marketplace:</span>
            <span className="text-[#DDE6D8] hidden sm:inline">Connecting 200+ local artisans, orchardists & weavers with conscious patrons across India.</span>
            <span className="text-[#DDE6D8] sm:hidden">Connecting mountain makers with India.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/sell" className="text-[#C9AD78] hover:underline font-medium">
              Sell on Valley Bazaar
            </Link>
            <span className="text-neutral-500">|</span>
            <Link href="/how-it-works" className="hover:text-white transition-colors">
              Our Mountain Promise
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-[#123D32] flex items-center justify-center text-[#C9AD78] border border-[#C9AD78]/40 shadow-xs group-hover:bg-[#0B2923] transition-colors">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#123D32]">
                  Valley Bazaar
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9532D]" />
              </div>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-[#8B7E66] -mt-1">
                Together We Grow
              </p>
            </div>
          </Link>

          {/* Location Selector (Desktop) */}
          <div className="relative hidden md:block shrink-0">
            <button
              onClick={() => setLocationMenuOpen(!locationMenuOpen)}
              className="flex items-center gap-1.5 text-xs text-[#17241F] bg-[#eff5ec] hover:bg-[#DDE6D8] px-3 py-2 rounded-xl border border-[#DDE6D8] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#123D32]" />
              <div className="text-left">
                <p className="text-[10px] text-neutral-500 leading-none">Deliver to</p>
                <p className="font-semibold leading-tight text-[#123D32]">{selectedLocation.split(",")[0]}</p>
              </div>
              <ChevronDown className="w-3 h-3 text-neutral-500 ml-1" />
            </button>

            {locationMenuOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-[#E5DED2] p-2 z-50 animate-in fade-in zoom-in-95">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-2 py-1">
                  Select Delivery Region
                </p>
                <div className="space-y-0.5 mt-1 max-h-56 overflow-y-auto">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setLocationMenuOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between ${
                        selectedLocation === loc ? "bg-[#123D32] text-white font-medium" : "hover:bg-[#F7F3EB] text-[#17241F]"
                      }`}
                    >
                      <span>{loc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search Kullu shawls, Kangra tea, wild honey, Kinnauri apples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F7F3EB] hover:bg-white focus:bg-white text-xs sm:text-sm pl-10 pr-24 py-2.5 rounded-full border border-[#E5DED2] focus:border-[#123D32] focus:outline-none focus:ring-2 focus:ring-[#123D32]/10 transition-all text-[#17241F] placeholder:text-neutral-400"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5" />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#123D32] hover:bg-[#0B2923] text-white text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist */}
            <Link
              href="/account/wishlist"
              className="relative p-2 rounded-xl text-neutral-700 hover:text-[#123D32] hover:bg-[#eff5ec] transition-colors"
              title="Mountain Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C9532D] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 bg-[#123D32] hover:bg-[#0B2923] text-white px-3 sm:px-3.5 py-2 rounded-xl font-medium text-xs sm:text-sm shadow-xs transition-colors"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#C9AD78]" />
              <span className="hidden sm:inline">Bag</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#C9532D] text-white text-[11px] font-bold flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </Link>

            {/* Account / Portal Jump */}
            <Link
              href={currentRole.startsWith("seller") ? "/seller/dashboard" : currentRole.startsWith("admin") || currentRole === "finance_manager" || currentRole === "catalog_moderator" || currentRole === "operations_manager" || currentRole === "support_agent" || currentRole === "content_manager" ? "/admin" : "/account"}
              className="hidden lg:flex items-center gap-2 text-xs text-[#17241F] hover:text-[#123D32] p-1.5 rounded-xl hover:bg-[#eff5ec] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#DDE6D8] flex items-center justify-center text-[#123D32] font-semibold text-xs border border-[#123D32]/20">
                {roleProfile.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-[10px] text-neutral-500 leading-none">Hello, {roleProfile.name.split(" ")[0]}</p>
                <p className="font-bold leading-tight text-[#123D32]">{roleProfile.title}</p>
              </div>
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-neutral-700 hover:text-black rounded-lg hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Category & Discovery Navigation Bar (Desktop) */}
      <nav className="border-t border-[#E5DED2]/60 bg-[#FFFEFB] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs py-2">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5">
              <Link
                href="/products"
                className="font-bold text-[#123D32] hover:text-[#C9532D] shrink-0 flex items-center gap-1"
              >
                <span>All Products</span>
              </Link>
              {demoCategories.slice(0, 7).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="text-neutral-700 hover:text-[#123D32] font-medium shrink-0 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5 shrink-0 pl-6 border-l border-[#E5DED2]">
              <Link
                href="/regions/kullu-valley"
                className="text-xs font-semibold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1"
              >
                <Compass className="w-3.5 h-3.5 text-[#C9AD78]" />
                <span>Explore Valleys</span>
              </Link>
              <Link
                href="/stores"
                className="text-xs font-semibold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1"
              >
                <StoreIcon className="w-3.5 h-3.5 text-[#C9AD78]" />
                <span>Local Stores</span>
              </Link>
              <Link
                href="/makers"
                className="text-xs font-semibold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9532D]" />
                <span>Meet the Makers</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5DED2] bg-[#FFFEFB] p-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Active persona banner for mobile */}
          <div className="bg-[#eff5ec] p-3 rounded-xl border border-[#DDE6D8]">
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">Active Demo Role</p>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-sm text-[#123D32]">{roleProfile.title}</span>
              <span className="text-xs text-neutral-600">{roleProfile.name}</span>
            </div>
            <div className="mt-2 flex gap-2">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs bg-white px-2.5 py-1 rounded-md border border-[#DDE6D8] font-medium text-[#123D32]"
              >
                Customer Portal
              </Link>
              <Link
                href="/seller/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs bg-white px-2.5 py-1 rounded-md border border-[#DDE6D8] font-medium text-[#123D32]"
              >
                Seller Portal
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs bg-white px-2.5 py-1 rounded-md border border-[#DDE6D8] font-medium text-[#123D32]"
              >
                Admin
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Shop by Category</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {demoCategories.map((c) => (
                <Link
                  key={c.id}
                  href={`/categories/${c.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#F7F3EB] hover:bg-[#DDE6D8] font-medium text-[#17241F]"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#E5DED2] space-y-2 text-xs">
            <Link
              href="/makers"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-lg hover:bg-neutral-100 font-semibold text-[#123D32]"
            >
              Meet the Himalayan Makers
            </Link>
            <Link
              href="/stores"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-lg hover:bg-neutral-100 font-semibold text-[#123D32]"
            >
              Discover Local Valley Stores
            </Link>
            <Link
              href="/sell"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-lg bg-[#123D32] text-white text-center font-bold"
            >
              Sell with Us (Seller Application)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

