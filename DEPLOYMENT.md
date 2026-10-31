# Valley Bazaar — Deployment & Hosting Architecture Guide

> **Tagline:** Together We Grow.  
> **Brand promise:** Discover Himachal. Support Local.

---

## 1. Two Operational Modes

### Mode A: Demo / Development Mode (Current Active Mode)
- **Deployment Target:** Vercel Preview via private GitHub repository.
- **Data Layer:** Centralized, strictly typed mock datasets in `src/data/demo/`.
- **Authentication:** Simulated multi-role session switcher with all 11 user personas.
- **Payments:** Live payments are safely disabled. Orders generate simulated multi-vendor fulfillment splits without charging real money.
- **Storage & Email:** Simulated service boundaries logging operations locally.
- **Demo Indicator:** A persistent top announcement banner and dev-only role switcher clearly designate this as a development prototype.

### Mode B: Production-Ready Architecture (Future Milestone)
- **Database:** PostgreSQL with Prisma ORM (`prisma/schema.prisma`).
- **Authentication:** Auth.js / maintainable session architecture.
- **Payments:** Razorpay / Cashfree gateway integration with webhook signature verification and idempotency keys.
- **Logistics:** Direct API integration with Delhivery / India Post for mountain airway bill generation.

---

## 2. Vercel-First Deployment (Mode A)

1. **Push to Private GitHub Repository:**
   ```bash
   git add .
   git commit -m "feat: complete Valley Bazaar marketplace platform in Demo Mode"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Import repository on [vercel.com](https://vercel.com).
   - Framework preset: `Next.js`.
   - Build Command: `npm run build`.
   - Output Directory: `.next`.
   - Set environment variables from `.env.example` (or rely on built-in Demo Mode defaults).

3. **Verify Preview Deployment:**
   - Test all customer, seller, and admin routes on the temporary `.vercel.app` URL.

---

## 3. Future MilesWeb / Independent Node.js Hosting Migration

The codebase is engineered strictly as a standard Next.js modular monolith without vendor lock-in:

- **No Vercel-Exclusive APIs:** No edge-only middleware or Vercel KV dependencies.
- **Standard Node.js Server:** Can run using `npm run start` behind Nginx or PM2 on MilesWeb cPanel / VPS Node.js selector:
  ```bash
  # Production build on MilesWeb / VPS
  npm install
  npm run build
  NODE_ENV=production node .next/standalone/server.js # Or: npm run start
  ```
- **Independent Database:** Any managed PostgreSQL database URL can be supplied to `DATABASE_URL`.
- **S3-Compatible Storage:** Can point to AWS S3, Cloudflare R2, or MinIO without code changes.

---

## 4. Security & RBAC Guardrails
- Demo role switching is gated to the development environment and must never be exposed as an escalation vector in production.
- Protected routes validate user identity, permission strings, and seller tenant isolation (`user.storeId === sellerOrder.storeId`).

