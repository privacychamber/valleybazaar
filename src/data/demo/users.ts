import { User, RoleType } from "@/types";

export interface DemoRoleProfile {
  role: RoleType;
  title: string;
  name: string;
  email: string;
  avatar: string;
  storeId?: string;
  storeName?: string;
  description: string;
  scope: string;
}

export const demoRoleProfiles: Record<RoleType, DemoRoleProfile> = {
  guest: {
    role: "guest",
    title: "Guest Explorer",
    name: "Anonymous Visitor",
    email: "guest@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
    description: "Browse public catalog, discover makers, explore regional stories, temporary cart.",
    scope: "Public routes only. No access to orders or private account data.",
  },
  customer: {
    role: "customer",
    title: "Verified Customer",
    name: "Rohan Malhotra",
    email: "rohan.malhotra@sample.in",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    description: "Customer account with saved Himachal addresses, active orders, and mountain wishlist.",
    scope: "Customer portal: /account, /cart, /checkout, own orders & profile.",
  },
  seller_applicant: {
    role: "seller_applicant",
    title: "Seller Applicant",
    name: "Virender Katoch",
    email: "virender.flora@sample.in",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    description: "Submitted an artisan honey application; tracking verification status.",
    scope: "Seller application status view; cannot publish products yet.",
  },
  seller_owner: {
    role: "seller_owner",
    title: "Seller Owner",
    name: "Devinder Thakur",
    email: "devinder@beasweavers.sample",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    storeId: "store-beas-weavers",
    storeName: "Beas Valley Weavers Cooperative",
    description: "Owner of Beas Valley Weavers. Manages store, products, inventory, orders, and payouts.",
    scope: "Seller portal: /seller/* scoped strictly to own store data.",
  },
  seller_staff: {
    role: "seller_staff",
    title: "Seller Staff",
    name: "Sunil Dogra",
    email: "sunil.staff@beasweavers.sample",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    storeId: "store-beas-weavers",
    storeName: "Beas Valley Weavers Cooperative",
    description: "Weavers cooperative catalog assistant: updates stock and package dispatch.",
    scope: "Seller portal inventory & order fulfillment. Financial controls hidden.",
  },
  support_agent: {
    role: "support_agent",
    title: "Customer Support Agent",
    name: "Priya Sharma",
    email: "support.agent@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    description: "Assists customers with Himalayan orders, delivery tracking, and returns.",
    scope: "Support tickets, order statuses, customer inquiry management.",
  },
  catalog_moderator: {
    role: "catalog_moderator",
    title: "Catalog Moderator",
    name: "Karan Verma",
    email: "karan.moderator@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    description: "Verifies GI claims, reviews artisan photography, approves submitted products.",
    scope: "Admin console: /admin/products/pending-review, product moderation.",
  },
  operations_manager: {
    role: "operations_manager",
    title: "Operations Manager",
    name: "Aman Sood",
    email: "aman.ops@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    description: "Coordinates mountain logistics, pickup zones, and weather-delayed shipments.",
    scope: "Admin console: /admin/orders, /admin/delivery-zones, fulfilment.",
  },
  finance_manager: {
    role: "finance_manager",
    title: "Finance Manager",
    name: "Neha Kapoor",
    email: "neha.finance@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    description: "Audits marketplace commissions, approves seller settlements and reconciles payouts.",
    scope: "Admin console: /admin/commissions, /admin/payouts, /admin/payments.",
  },
  content_manager: {
    role: "content_manager",
    title: "Content & Marketing Manager",
    name: "Isha Rana",
    email: "isha.marketing@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    description: "Curates homepage banners, maker spotlights, seasonal festival collections.",
    scope: "Admin console: /admin/content, /admin/promotions, /admin/newsletter.",
  },
  admin: {
    role: "admin",
    title: "Platform Administrator",
    name: "Vikram Sen",
    email: "vikram.admin@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    description: "Full marketplace operations, seller approvals, configuration and reporting.",
    scope: "All admin routes (/admin/*), staff assignment, platform settings.",
  },
  super_admin: {
    role: "super_admin",
    title: "Super Administrator",
    name: "Valley Bazaar Root",
    email: "root@valleybazaar.sample",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=120&q=80",
    description: "System owner with security audit access, privilege elevation, and critical controls.",
    scope: "Complete unrestricted access across public, customer, seller, and admin domains.",
  },
};

export const demoCurrentUser: User = {
  id: "user-devinder",
  name: "Devinder Thakur",
  email: "devinder@beasweavers.sample",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  roles: ["customer", "seller_owner"],
  activeRole: "seller_owner",
  storeId: "store-beas-weavers",
  createdAt: "2025-06-12T00:00:00Z",
};

