"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Mountain, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  MapPin, 
  ArrowUpRight,
  TrendingUp,
  Award,
  Layers,
  Leaf,
  Mail,
  Check
} from "lucide-react";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";
import { ProductCard } from "@/components/product/ProductCard";
import { demoCategories } from "@/data/demo/categories";
import { demoRegions } from "@/data/demo/regions";
import { demoStores } from "@/data/demo/stores";
import { demoMakers } from "@/data/demo/makers";
import { demoProducts } from "@/data/demo/products";

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      {/* 1, 2, 3: Announcement, Header, Category Navigation */}
      <StorefrontHeader />

      <main className="flex-1">
        {/* 4. Cinematic Himalayan Hero */}
        <section className="relative overflow-hidden bg-[#0B2923] text-white py-20 lg:py-28">
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=85"
              alt="Himalayan mountain peaks of Himachal Pradesh"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-radial from-transparent via-[#0B2923]/80 to-[#0B2923] z-0 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D32]/80 border border-[#C9AD78]/40 text-[#C9AD78] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Mountain className="w-3.5 h-3.5" />
                <span>Himachal Pradesh&apos;s Digital Commerce Platform</span>
              </div>

              {/* Major Heading */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFEFB] leading-[1.08]">
                Discover Himachal. <br />
                <span className="text-[#C9AD78] italic font-normal">Support Local.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base sm:text-lg text-[#DDE6D8] font-light leading-relaxed max-w-2xl">
                Shop directly from local businesses, farmers, weavers, and independent artisans. Authentic GI-tagged and sustainable mountain crafts delivered straight from the valleys to your doorstep.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="bg-[#C9532D] hover:bg-[#b4431f] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Explore the Bazaar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/makers"
                  className="glass-panel-dark text-white hover:text-[#C9AD78] px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:border-[#C9AD78]/60 flex items-center gap-2"
                >
                  <span>Meet the Makers</span>
                  <Sparkles className="w-4 h-4 text-[#C9AD78]" />
                </Link>
              </div>

              {/* Mountain Philosophy Tagline & Seller link */}
              <div className="mt-12 pt-8 border-t border-[#123D32] flex flex-wrap items-center justify-between gap-4 text-xs text-[#DDE6D8]/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9532D]" />
                  <span className="font-serif italic text-white text-sm">Together We Grow.</span>
                  <span className="text-neutral-400">— We do not replace local businesses. We help them thrive.</span>
                </div>

                <Link
                  href="/sell"
                  className="text-[#C9AD78] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Have a local business? Bring your products online</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Category Discovery Cards */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Curated Himalayan Heritage</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
                Explore by Category
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-xs font-bold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1 group"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {demoCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5DED2] shadow-xs hover:shadow-xl hover:border-[#123D32]/40 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-semibold text-[#C9AD78] uppercase tracking-wider">
                      {cat.itemCount} Mountain Items
                    </p>
                    <h3 className="font-serif text-base sm:text-lg font-bold leading-tight mt-0.5">
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <div className="p-3 bg-[#FFFEFB] flex-1 flex flex-col justify-between">
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Asymmetric Editorial Bento Promotions */}
        <section className="py-12 bg-[#eff5ec] border-y border-[#DDE6D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9532D]">Handcrafted & Authentic</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
                Pahadi Traditions Reimagined
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Bento Card 1: Handloom Showcase (Span 7) */}
              <div className="md:col-span-7 bg-[#123D32] text-white rounded-3xl overflow-hidden shadow-lg border border-[#C9AD78]/30 flex flex-col justify-between relative group">
                <img
                  src="https://images.unsplash.com/photo-1606744888344-493238955de0?auto=format&fit=crop&w=1200&q=80"
                  alt="Kullu Handloom Shawl Weaving"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-8 sm:p-10 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="bg-[#C9AD78] text-[#0B2923] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                      GI-Certified Heritage
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-4 max-w-md leading-tight">
                      Pure Himalayan Merino & Kullu Handloom Shawls
                    </h3>
                    <p className="mt-3 text-sm text-[#DDE6D8] max-w-md leading-relaxed font-light">
                      Each piece is woven on traditional wooden pit-looms in Naggar and Bhutti, using hand-dyed natural walnut and madder pigments.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/categories/handloom-and-textiles"
                      className="inline-flex items-center gap-2 bg-[#FFFEFB] text-[#123D32] hover:bg-[#C9AD78] px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md"
                    >
                      <span>Explore Weavers Guild</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bento Card 2: Orthodox Tea (Span 5) */}
              <div className="md:col-span-5 bg-white rounded-3xl overflow-hidden border border-[#E5DED2] shadow-sm flex flex-col justify-between relative group">
                <div className="aspect-16/10 w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80"
                    alt="Kangra Valley Tea Gardens"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#123D32] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Dhauladhar Mist
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#17241F]">
                    Century-Old Kangra Orthodox Teas
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    Small-batch first flush and silver needles from family estates in Palampur, hand-processed without mechanization.
                  </p>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#123D32]">From ₹680 / tin</span>
                    <Link
                      href="/products/kangra-orthodox-first-flush-tea"
                      className="text-xs font-bold text-[#C9532D] hover:underline flex items-center gap-1"
                    >
                      <span>View Estate Reserve</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bento Card 3: Spiti Cold Desert (Span 5) */}
              <div className="md:col-span-5 bg-[#0B2923] text-white rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-[#C9AD78]/30">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9AD78]">High-Altitude Botanicals</span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-2">
                    Wild Seabuckthorn & Cold-Pressed Chulli Oils
                  </h3>
                  <p className="text-xs text-[#DDE6D8]/80 mt-2 leading-relaxed">
                    Wild-foraged at 11,500ft by women-led self-help groups in Kaza. Packed with rare Omega-7 and mountain bio-nutrients.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#C9AD78] font-mono">100% Wild Harvested</span>
                  <Link
                    href="/categories/natural-and-wellness"
                    className="text-xs font-bold text-white hover:text-[#C9AD78] flex items-center gap-1"
                  >
                    <span>Shop Botanicals</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bento Card 4: Chamba Rumal & Metal Craft (Span 7) */}
              <div className="md:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E5DED2] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <div className="w-full sm:w-1/2 aspect-square rounded-2xl overflow-hidden shrink-0 bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
                    alt="Chamba Rumal Needle Embroidery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9532D] bg-[#C9532D]/10 px-2 py-0.5 rounded">
                    Living Heritage Art
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#123D32] mt-2">
                    Chamba Rumal Double-Faced Embroidery
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    National Award-winning artisans crafting the rare Do-Rukha stitch. Zero knots, identical beauty on both sides.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/products/chamba-rumal-raas-leela-embroidery"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123D32] hover:text-[#C9532D]"
                    >
                      <span>Discover the Raas Leela Piece</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Popular Products Grid */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Treasures from the Valleys</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
                Featured Marketplace Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1 group"
            >
              <span>Explore All {demoProducts.length} Listings</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 8. Explore by Region */}
        <section className="py-16 bg-[#F7F3EB] border-t border-[#E5DED2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#123D32]">Geographic Provenance</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
                Explore Himachal by Valley
              </h2>
              <p className="text-xs text-neutral-600 mt-2">
                Every valley in Himachal boasts its own microclimate, altitude, flora, and generational craft tradition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoRegions.map((region) => (
                <Link
                  key={region.id}
                  href={`/regions/${region.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5DED2] shadow-xs hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="aspect-16/9 w-full overflow-hidden bg-neutral-200 relative">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9AD78]">
                        District {region.district}
                      </span>
                      <h3 className="font-serif text-xl font-bold">{region.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {region.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                      {region.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] bg-[#eff5ec] text-[#123D32] px-2 py-0.5 rounded-md font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Local Stores Near You */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Verified Valley Enterprises</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-1">
                Local Stores & Guilds
              </h2>
            </div>
            <Link
              href="/stores"
              className="text-xs font-bold text-[#123D32] hover:text-[#C9532D] flex items-center gap-1 group"
            >
              <span>View All Verified Stores</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoStores.slice(0, 3).map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-2xl border border-[#E5DED2] p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-12 h-12 rounded-xl object-cover border border-[#E5DED2]"
                    />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#123D32] leading-tight">
                        {store.name}
                      </h3>
                      <p className="text-[11px] text-neutral-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#123D32]" />
                        {store.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {store.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {store.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] bg-[#eff5ec] text-[#123D32] px-2 py-0.5 rounded font-semibold"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">
                    Est. {store.establishedYear} • {store.totalProducts} Items
                  </span>
                  <Link
                    href={`/stores/${store.slug}`}
                    className="text-xs font-bold text-[#C9532D] hover:underline flex items-center gap-1"
                  >
                    <span>Visit Store</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Maker Stories */}
        <section className="py-16 bg-[#123D32] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9AD78]">Humanity Behind the Craft</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Meet the Himalayan Makers
              </h2>
              <p className="text-xs text-[#DDE6D8]/80 mt-2">
                When you buy from Valley Bazaar, you support real mountain families, ethical cooperatives, and centuries-old artisan lineage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoMakers.map((maker) => (
                <div
                  key={maker.id}
                  className="bg-[#0B2923] rounded-2xl p-5 border border-[#C9AD78]/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                      <img
                        src={maker.image}
                        alt={maker.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 backdrop-blur-md text-[#C9AD78] px-2 py-0.5 rounded font-mono">
                        {maker.yearsOfExperience} yrs craft
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white leading-tight">
                      {maker.name}
                    </h3>
                    <p className="text-xs text-[#C9AD78] font-medium mt-0.5">{maker.craft}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {maker.village}, {maker.region}
                    </p>
                    <p className="text-xs text-[#DDE6D8]/80 mt-3 line-clamp-3 leading-relaxed font-light">
                      {maker.story}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#123D32]">
                    <Link
                      href={`/makers/${maker.slug}`}
                      className="text-xs font-semibold text-[#C9AD78] hover:text-white flex items-center justify-between"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Made in Himachal Collection Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#DDE6D8] via-[#eff5ec] to-[#E5DED2] p-8 sm:p-12 border border-[#E5DED2] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#123D32] bg-white px-3 py-1 rounded-full shadow-xs">
                Seasonal Valley Harvest
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mt-4 leading-tight">
                Authentic Mountain Hampers & Corporate Gifting
              </h2>
              <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                Send authentic Himachali flavours and handwoven wool gifts to clients, employees, and loved ones. Custom packaging with artisan storytelling cards included.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/corporate-gifting"
                  className="bg-[#123D32] hover:bg-[#0B2923] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md"
                >
                  Explore Gift Collections
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-[#F7F3EB] text-[#123D32] px-6 py-3 rounded-full text-xs font-bold border border-[#E5DED2] transition-all"
                >
                  Inquire for Custom Orders
                </Link>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                  alt="Himachal Gift Hamper Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 12. Seller Recruitment Banner */}
        <section className="bg-[#0B2923] text-white py-16 border-y border-[#123D32]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9532D]">Seller Community</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight">
                  Have a Local Himachal Business? <br />
                  <span className="text-[#C9AD78] italic font-normal">Bring your products to customers across India.</span>
                </h2>
                <p className="mt-3 text-sm text-[#DDE6D8]/80 leading-relaxed font-light">
                  Whether you are a solo weaver in Naggar, an organic apple farmer in Kalpa, or a women&apos;s self-help group in Spiti, Valley Bazaar provides zero onboarding fees, transparent settlements, and pan-India shipping support.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#DDE6D8]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C9AD78]" />
                    <span>Fair 6-8% Marketplace Commission</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C9AD78]" />
                    <span>Retain 100% Brand Ownership</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C9AD78]" />
                    <span>Doorstep Mountain Courier Pickup</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/sell"
                  className="bg-[#C9532D] hover:bg-[#b4431f] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Submit Seller Application
                </Link>
                <Link
                  href="/seller-guide"
                  className="bg-transparent hover:bg-white/10 text-[#FFFEFB] border border-[#C9AD78]/40 px-6 py-3.5 rounded-full font-semibold text-sm transition-all text-center"
                >
                  Read Onboarding Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Newsletter Signup */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#eff5ec] rounded-3xl p-8 sm:p-12 border border-[#DDE6D8] text-center max-w-3xl mx-auto">
            <Mail className="w-8 h-8 text-[#123D32] mx-auto mb-3" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
              The Mountain Post
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-lg mx-auto">
              Seasonal harvest announcements, weaver stories, and limited first-flush tea releases sent once every fortnight.
            </p>

            {newsletterSubscribed ? (
              <div className="mt-6 p-4 rounded-xl bg-white border border-[#123D32]/20 text-[#123D32] text-xs font-semibold flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>You&apos;re subscribed to The Mountain Post. Welcome to the valley!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white text-xs px-4 py-3 rounded-full border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
                />
                <button
                  type="submit"
                  className="bg-[#123D32] hover:bg-[#0B2923] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[10px] text-neutral-400 mt-3">We respect your peace. No spam, ever.</p>
          </div>
        </section>
      </main>

      {/* 14. Comprehensive Footer */}
      <StorefrontFooter />
    </div>
  );
}
