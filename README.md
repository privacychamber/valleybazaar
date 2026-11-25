# Valley Bazaar (वैली बाज़ार)
### *Together We Grow. Discover Himachal. Support Local.*

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4_Turbopack-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E_16%2F16_Passed-green?style=flat-square&logo=playwright)](https://playwright.dev/)
[![Security](https://img.shields.io/badge/Security_Audit-0_Vulnerabilities-success?style=flat-square)](https://github.com/privacychamber/valleybazaar)
[![Deployment](https://img.shields.io/badge/Vercel_Preview-Live-black?style=flat-square&logo=vercel)](https://valleybazaar.vercel.app)

**Live Preview:** [https://valleybazaar.vercel.app](https://valleybazaar.vercel.app)  
**Private Repository:** [https://github.com/privacychamber/valleybazaar](https://github.com/privacychamber/valleybazaar)

---

## 1. Project Vision & Philosophy

**Valley Bazaar** is a Himachal-first digital multi-vendor marketplace platform built to connect local producers across Himachal Pradesh with conscious patrons and buyers across India.

### Who We Empower
- **Artisans & Craftspeople:** Master woodcarvers, Chamba Rumal needleworkers, metalcraft smiths, and pine-needle artisans.
- **Handloom & Weaving Cooperatives:** GI-certified Kullu and Kinnauri shawl weavers, tribal wool spinners, and Pattus weavers.
- **Orchardists & Farmers:** High-altitude Kinnauri apple growers, wild apricot foragers, and walnut farmers.
- **Pahadi Food Producers:** Raw forest honey harvesters, wild chilgoza processors, and Kangra orthodox tea estates.
- **Women-Led Collectives & SHGs:** Self-help groups preserving Himalayan botanical wellness and traditional culinary heritage.
- **Local Valley Merchants:** Independent neighbourhood shops and town merchants across Shimla, Kullu, Kangra, Chamba, Mandi, and Solan.

### Our Philosophy
> *"We do not replace local businesses. We give mountain producers the digital wings to reach conscious patrons nationwide."*

Valley Bazaar deliberately rejects dark-store dependencies and artificial 10-minute delivery models. Instead, it champions:
1. **Authenticity & Provenance:** Geographical Indication (GI) certification, village of origin, and transparent maker attribution.
2. **Multi-Vendor Regional Commerce:** Unified customer orders intelligently split into seller-scoped sub-orders.
3. **Sustainable Marketplace Economics:** Fair compensation, transparent commission structures, and seller-led fulfillment.

---

## 2. Operational Architecture: Dual-Mode Strategy

The application is engineered to operate seamlessly across two distinct operational modes:

### Mode A: Demo / Development Prototype (Current Active Mode)
- **Zero Production Risk:** No real payment gateway credentials, private keys, or real customer data are connected.
- **Centralized Typed Mock Data:** Comprehensive, realistic domain fixtures located in `src/data/demo/` covering products, stores, regions, makers, orders, and users.
- **Interactive Multi-Persona Role Switcher:** A development-only floating widget enabling instant switching across 11 roles (Guest, Customer, Seller Owner, Seller Staff, Support Agent, Catalog Moderator, Operations Manager, Finance Manager, Content Manager, Admin, Super Admin).
- **Strict Environment Isolation:** Both [`RoleSwitcher`](src/components/shared/RoleSwitcher.tsx) and [`DemoModeBanner`](src/components/shared/DemoModeBanner.tsx) enforce `if (process.env.NEXT_PUBLIC_DEMO_MODE === "false") return null;` to ensure demo switches can never leak or grant privileges in production.

### Mode B: Production-Ready Foundation
- **Modular Monolith Architecture:** Decoupled domain service layer (`src/server/services/`) and repository pattern (`src/server/repositories/`).
- **Relational Database Specification:** PostgreSQL data models and entity definitions specified in `prisma/schema.prisma`.
- **Repository-Level Tenant Isolation:** `TenantIsolationError` enforced on order updates and product catalog mutations, preventing cross-store data access.
- **Server Authorization Guards:** Granular RBAC permission enforcement (`requirePermission`, `requireSellerScope`, `requireCustomerScope`) in `src/server/auth/guard.ts`.
- **Infrastructure Independence:** Standard Node.js portability, compatible with Vercel, MilesWeb, or self-hosted Docker/Linux environments.

---

## 3. Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | **Next.js 16.4.5** (App Router, Turbopack, Partial Prerendering / PPR, Cache Components) |
| **Language & Runtime** | **TypeScript 5.x**, **React 19.3.0**, Node.js 20+ |
| **Styling & Design System** | **Tailwind CSS v4** (via `@tailwindcss/turbopack`), Custom Himalayan Luxury Design System |
| **Icons & UI Primitives** | **Lucide React**, Accessible headless components |
| **State & Forms** | React Hook Form, **Zod** validation, React Context (`DemoContext`) |
| **Security & Edge** | Edge Middleware with security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) |
| **Testing** | **Playwright E2E** (Desktop Chromium & Mobile Pixel 5 emulation) |
| **CI / Deployment** | GitHub Actions / Vercel Preview Deployments |

---

## 4. Brand Identity & Design System

The visual language blends **Futuristic Elegance**, **Quiet Luxury**, **Himalayan Heritage**, and **Modern Marketplace UX**.

### Color Palette

| Token | Hex | Role in Interface |
|---|---|---|
| **Pine Green** | `#123D32` | Primary brand accent, primary buttons, headers, active states |
| **Deep Forest** | `#0B2923` | Dark surfaces, immersive footers, contrast badges |
| **Warm Ivory** | `#F7F3EB` | Global page background, soft natural surface |
| **Soft White** | `#FFFEFB` | Elevated cards, sheet panels, product containers |
| **Charcoal Ink** | `#17241F` | High-contrast readable body typography |
| **Sage** | `#DDE6D8` | Secondary borders, chips, neutral badge backgrounds |
| **Warm Stone** | `#E5DED2` | Subtle structural dividers and card borders |
| **Terracotta** | `#C9532D` | High-priority CTAs, demo badges, urgent notifications |
| **Champagne** | `#C9AD78` | Premium accents, GI authenticity seals, star ratings |

### Typography
- **Headings:** `DM Serif Display` & `Cormorant Garamond` (editorial elegance).
- **Interface & Body:** `Manrope` (clean, legible geometry across dense ecommerce views).

---

## 5. Application Structure & Routes (81 Routes)

```
valleybazaar/
├── src/
│   ├── app/                               # Next.js App Router (81 routes)
│   │   ├── (storefront)/                  # Public customer storefront
│   │   │   ├── page.tsx                   # Homepage (Hero, Valleys, Bento Grid, Makers)
│   │   │   ├── products/                  # Catalog browsing, filtering, search
│   │   │   │   └── [slug]/                # Product detail (PPR, GI verification, provenance)
│   │   │   ├── categories/[slug]/         # Category-specific listings
│   │   │   ├── regions/[slug]/            # Valley-specific listings (Kullu, Kinnaur, Kangra, etc.)
│   │   │   ├── stores/[slug]/             # Seller storefront & artisan workshop profile
│   │   │   ├── makers/[slug]/             # Artisan craftsman profile & storytelling
│   │   │   ├── cart/                      # Multi-vendor shopping bag & seller grouping
│   │   │   ├── checkout/                  # Multi-vendor simulated checkout & address
│   │   │   ├── checkout/confirmation/     # Order placement & multi-suborder tracker
│   │   │   ├── track-order/[reference]/   # Live mountain transit status
│   │   │   ├── search/                    # Instant full-catalog search
│   │   │   ├── sell/                      # Seller acquisition landing page
│   │   │   └── seller-guide/              # Onboarding guide & seller economics
│   │   ├── account/                       # Customer Portal
│   │   │   ├── page.tsx                   # Account overview & metrics
│   │   │   ├── orders/                    # Order history & detail views
│   │   │   ├── wishlist/                  # Saved artisan pieces
│   │   │   ├── addresses/                 # Saved delivery addresses
│   │   │   ├── returns/                   # Refund & exchange requests
│   │   │   └── settings/                  # Customer preferences & notifications
│   │   ├── seller/                        # Seller Operating Portal
│   │   │   ├── application/               # 3-step artisan onboarding application
│   │   │   ├── dashboard/                 # Store revenue, order velocity, inventory health
│   │   │   ├── products/                  # Listing management & price adjustments
│   │   │   │   ├── new/                   # Add new product with GI / craft verification
│   │   │   │   └── [productId]/edit/      # Edit listing & stock
│   │   │   ├── orders/                    # Seller-scoped sub-orders
│   │   │   │   └── [orderId]/             # Fulfil sub-order & print packing slip
│   │   │   ├── inventory/                 # Stock alerts & batch updates
│   │   │   ├── payouts/                   # Settlement history & bank account
│   │   │   ├── store-profile/             # Public store bio, banner, and badges
│   │   │   └── analytics/                 # Regional sales distribution
│   │   └── admin/                         # Marketplace Governance Console
│   │       ├── page.tsx                   # Operations Command Center
│   │       ├── sellers/applications/      # Artisan application moderation queue
│   │       ├── products/pending-review/   # Catalog moderation & authenticity check
│   │       ├── orders/                    # Global order ledger & escalation
│   │       ├── payouts/                   # Seller settlement cycles
│   │       ├── staff-access/              # Granular RBAC assignment matrix
│   │       └── settings/                  # Platform mode switches (Demo / Production)
│   ├── components/
│   │   ├── layout/                        # Header, Footer, Navigation, Category Bar
│   │   ├── product/                       # ProductCard, PriceTag, GIBadge, ProvenanceCard
│   │   └── shared/                        # RoleSwitcher, DemoModeBanner, StatusBadge
│   ├── context/
│   │   └── DemoContext.tsx                # Central reactive state (Cart, Wishlist, Persona)
│   ├── data/demo/                         # Typed domain fixtures (Products, Stores, Orders, Users)
│   ├── server/                            # Server domain services & security layer
│   │   ├── auth/guard.ts                  # Server-side RBAC & tenant scoping guards
│   │   ├── repositories/                  # Isolated order & product data access
│   │   └── services/                      # Business domain logic (Auth, Order, Payment, Storage)
│   └── types/                             # Centralized TypeScript definitions
├── tests/
│   └── e2e/marketplace.spec.ts            # Playwright end-to-end test suite
├── playwright.config.ts                   # Playwright multi-project configuration
└── next.config.ts                         # Next.js configuration with Turbopack rules
```

---

## 6. Security, Hardening & Multi-Tenancy

During the pre-deployment hardening pass, the following security controls were verified:
1. **Next.js 16.4.5 Upgrade:** All 7 November security advisories resolved (caching/PPR isolation, SVG image optimization, response forwarding, middleware bypass, static traversal, and prefetch spoofing).
2. **Zero Production Vulnerabilities:** Confirmed via `npm audit --omit=dev`.
3. **Repository-Level Multi-Tenancy:**
   - [`order.repository.ts`](src/server/repositories/order.repository.ts) enforces `so.sellerId === sellerId` and throws `TenantIsolationError` on tenant mismatch.
   - [`product.repository.ts`](src/server/repositories/product.repository.ts) enforces `storeId === product.storeId` for updates and deletions.
4. **Server Authorization Layer:** [`guard.ts`](src/server/auth/guard.ts) verifies caller permissions before executing privileged actions.
5. **HTTP Security Headers:** Edge middleware injects `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.

---

## 7. Testing & Quality Assurance

### Playwright E2E Suite (`tests/e2e/marketplace.spec.ts`)
Automated end-to-end tests run across Desktop Chrome and Mobile Pixel 5 configurations:

1. **Customer Onboarding & Login:** Form validation, client state creation, and portal redirection.
2. **Product Browsing & Search:** Category navigation, GI tag verification, and query filtering.
3. **Multi-Vendor Cart & Checkout:** Multi-seller item grouping and simulated order placement.
4. **Seller Application Workflow:** 3-step registration and review status submission.
5. **Seller Catalog Management:** Listing creation and moderation queue submission.
6. **Seller Order Isolation:** Store-scoped sub-order viewing, packing slip generation, and tenant protection.
7. **Admin Moderation Desk:** Seller application review and catalog approval.
8. **Admin Governance & Settings:** Platform switches and RBAC staff permissions matrix.

**Result:** **16 / 16 tests passing** (Desktop & Mobile).

---

## 8. Getting Started

### Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/privacychamber/valleybazaar.git
cd valleybazaar

# Install dependencies
npm install

# Run development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the storefront.

### Running Quality Checks & Tests

```bash
# Type check without emitting
npx tsc --noEmit

# Run ESLint
npm run lint

# Run production build (Turbopack)
npm run build

# Run Playwright E2E tests
npx playwright test
```

---

## 9. Deployment Guide

### Vercel Preview Deployment
The project is configured for continuous deployment on Vercel:
- **Build Engine:** Next.js Turbopack (`next build`).
- **Required Environment Variable:**
  - `NEXT_PUBLIC_DEMO_MODE=true` (keeps the platform in safe simulated mode for review).

```bash
# Deploy preview via Vercel CLI
vercel

# Deploy production alias
vercel --prod
```

---

## 10. Roadmap & Future Milestones

- [x] **Phase 1: Brand System & Himalayan Storefront** (Complete)
- [x] **Phase 2: Customer, Seller & Admin Dashboards** (Complete)
- [x] **Phase 3: Multi-Vendor Cart & Multi-Order Grouping** (Complete)
- [x] **Phase 4: Security Hardening, Tenant Isolation & E2E Testing** (Complete)
- [x] **Phase 5: Vercel Preview Cloud Deployment** (Complete)
- [ ] **Phase 6: PostgreSQL Persistence & Prisma Migration** (Mode B Transition)
- [ ] **Phase 7: Live Payment Gateway Integration** (Razorpay / Cashfree with split payouts)
- [ ] **Phase 8: Automated Mountain Logistics & Tracking API Integration** (Shiprocket / Delhivery)
- [ ] **Phase 9: Custom Domain Cutover** (`valleybazaar.in`)

---

## 11. License & Copyright

© 2026 Valley Bazaar Technologies. All rights reserved.  
*Crafted with reverence for Himachal Pradesh.*
