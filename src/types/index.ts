export type RoleType =
  | "guest"
  | "customer"
  | "seller_applicant"
  | "seller_owner"
  | "seller_staff"
  | "support_agent"
  | "catalog_moderator"
  | "operations_manager"
  | "finance_manager"
  | "content_manager"
  | "admin"
  | "super_admin";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  roles: RoleType[];
  activeRole: RoleType;
  storeId?: string;
  createdAt: string;
}

export type Permission =
  | "catalog.product.read_public"
  | "catalog.product.create_own"
  | "catalog.product.update_own"
  | "catalog.product.submit_for_review"
  | "catalog.product.approve"
  | "seller.application.create"
  | "seller.application.read_own"
  | "seller.application.review"
  | "seller.store.update_own"
  | "order.read_own"
  | "order.read_seller_scope"
  | "order.fulfil_own"
  | "order.manage_all"
  | "refund.request_own"
  | "refund.review_support_scope"
  | "refund.approve_finance_scope"
  | "finance.commission.read"
  | "finance.commission.configure"
  | "finance.payout.read_own"
  | "finance.payout.approve"
  | "content.homepage.update"
  | "iam.role.assign"
  | "iam.permission.manage"
  | "audit.log.read"
  | "platform.settings.manage";

export interface Region {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  district: string;
  image: string;
  specialties: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export interface Maker {
  id: string;
  name: string;
  slug: string;
  craft: string;
  village: string;
  region: string;
  story: string;
  image: string;
  yearsOfExperience: number;
  sustainablePractice: string;
  storeId: string;
}

export type ProductStatus =
  | "draft"
  | "submitted"
  | "under_review"
  | "approved"
  | "published"
  | "paused"
  | "out_of_stock"
  | "archived";

export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  categorySlug: string;
  categoryName: string;
  regionSlug: string;
  regionName: string;
  price: number;
  originalPrice?: number;
  unit: string;
  inventory: number;
  images: string[];
  sellerId: string;
  sellerName: string;
  storeId: string;
  storeName: string;
  storeSlug: string;
  makerId?: string;
  makerName?: string;
  status: ProductStatus;
  featured?: boolean;
  bestseller?: boolean;
  naturalOrganic?: boolean;
  handcrafted?: boolean;
  giTagged?: boolean;
  rating: number;
  reviewCount: number;
  originVillage: string;
  originDistrict: string;
  attributes: Record<string, string>;
  harvestSeason?: string;
  shelfLife?: string;
  weightGrams?: number;
  dimensions?: string;
}

export interface Store {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  sellerId: string;
  ownerName: string;
  location: string;
  district: string;
  regionSlug: string;
  logo: string;
  banner: string;
  establishedYear: number;
  verified: boolean;
  isDemoListing?: boolean;
  categories: string[];
  rating: number;
  reviewCount: number;
  totalProducts: number;
  badges: string[];
  contactEmail: string;
  contactPhone: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  estimatedShipping: number;
  total: number;
}

export type FulfilmentStatus =
  | "unfulfilled"
  | "preparing"
  | "dispatched"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "returned";

export interface OrderItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  sellerId: string;
  sellerName: string;
  storeId: string;
  storeName: string;
}

export interface SellerOrder {
  id: string;
  sellerId: string;
  sellerName: string;
  storeId: string;
  storeName: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  commissionRate: number; // e.g. 0.08 for 8%
  commissionAmount: number;
  sellerPayoutAmount: number;
  fulfilmentStatus: FulfilmentStatus;
  trackingNumber?: string;
  courierPartner?: string;
  notes?: string;
}

export type ParentOrderStatus =
  | "pending_payment"
  | "paid"
  | "processing"
  | "partially_fulfilled"
  | "fulfilled"
  | "cancelled"
  | "refunded";

export interface Address {
  id: string;
  name: string;
  phone: string;
  street: string;
  city: string;
  district: string;
  state: string;
  postalCode: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: Address;
  itemsCount: number;
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  status: ParentOrderStatus;
  paymentMethod: "demo_upi" | "demo_card" | "demo_cod";
  paymentStatus: "paid" | "pending" | "refunded" | "failed";
  sellerOrders: SellerOrder[];
  createdAt: string;
  trackingReference: string;
}

export interface SellerApplication {
  id: string;
  businessName: string;
  applicantName: string;
  email: string;
  phone: string;
  businessType:
    | "artisan_craft"
    | "farmer_producer"
    | "handloom_textile"
    | "food_processor"
    | "women_shg"
    | "local_retailer";
  district: string;
  townVillage: string;
  experienceYears: number;
  primaryCategories: string[];
  productionCapacity: string;
  hasGst: boolean;
  gstNumber?: string;
  fssaiNumber?: string;
  handicraftRegistration?: string;
  story: string;
  status: "draft" | "submitted" | "under_review" | "info_required" | "approved" | "rejected";
  moderatorNotes?: string;
  submittedAt: string;
  updatedAt: string;
}

export interface PayoutRecord {
  id: string;
  payoutReference: string;
  sellerId: string;
  sellerName: string;
  storeName: string;
  periodStart: string;
  periodEnd: string;
  grossSales: number;
  platformCommission: number;
  shippingDeduction: number;
  netPayout: number;
  status: "pending_review" | "approved" | "processing" | "completed" | "on_hold";
  bankAccountMasked: string;
  processedAt?: string;
}

export interface CommissionRule {
  id: string;
  categorySlug: string;
  categoryName: string;
  percentage: number;
  flatFee: number;
  description: string;
  active: boolean;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  subject: string;
  category: "order" | "product" | "payment" | "seller" | "general";
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in_progress" | "resolved" | "closed";
  customerName: string;
  customerEmail: string;
  relatedOrderId?: string;
  createdAt: string;
  lastReply: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actorName: string;
  actorRole: RoleType;
  action: string;
  resourceType: string;
  resourceId: string;
  details: string;
  ipAddress: string;
}

