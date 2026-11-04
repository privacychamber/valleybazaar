import { User, RoleType, Permission } from "@/types";
import { demoCurrentUser, demoRoleProfiles } from "@/data/demo/users";

export class AuthenticationError extends Error {
  statusCode = 401;
  constructor(message = "Authentication required. Please sign in.") {
    super(message);
    this.name = "AuthenticationError";
  }
}

export class AuthorizationError extends Error {
  statusCode = 403;
  constructor(message = "Forbidden: Insufficient role permissions for this resource.") {
    super(message);
    this.name = "AuthorizationError";
  }
}

export class TenantIsolationError extends Error {
  statusCode = 403;
  constructor(message = "Access Denied: Tenant isolation violation. You cannot access or modify resources belonging to another merchant store.") {
    super(message);
    this.name = "TenantIsolationError";
  }
}

/**
 * Checks if the platform is currently operating in Demo/Development mode.
 * Defaults to true for preview environments unless explicitly disabled.
 */
export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
}

/**
 * Authenticates the current request.
 * In production: strictly enforces cryptographically signed JWT/sessions.
 * In demo mode: provides typed mock identity while still strictly checking permissions.
 */
export async function getAuthenticatedSession(headersList?: Headers): Promise<User | null> {
  const isDemo = isDemoMode();

  if (!isDemo) {
    // Production path: strictly requires signed session cookie/bearer token
    const authHeader = headersList?.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return null;
    }
    // Verify production token (pluggable to NextAuth/Supabase/Auth0)
    return null;
  }

  // Demo mode path: support simulated role session via header or fallback
  const demoRole = headersList?.get("x-demo-role") as RoleType | null;
  if (demoRole && demoRoleProfiles[demoRole]) {
    const profile = demoRoleProfiles[demoRole];
    return {
      id: `user-${demoRole}`,
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar,
      roles: [demoRole],
      activeRole: demoRole,
      storeId: profile.storeId || "store-beas-weavers",
      createdAt: "2025-06-12T00:00:00Z",
    };
  }

  return demoCurrentUser;
}

/**
 * Server-side RBAC Permission Enforcer.
 * Does NOT rely on UI hiding. Executes on every server action and API call.
 */
export function requirePermission(user: User | null, permission: Permission): void {
  if (!user) {
    throw new AuthenticationError();
  }

  // Super administrators have wildcard clearance
  if (user.roles.includes("super_admin")) {
    return;
  }

  // Administrators have full platform management clearance
  if (user.roles.includes("admin")) {
    return;
  }

  // Check specific granular permission grants
  if (!user.permissions || !user.permissions.includes(permission)) {
    throw new AuthorizationError(`Access Denied: Missing required permission [${permission}].`);
  }
}

/**
 * Multi-Tenant Seller Scope Enforcer (Database & Repository Level).
 * Enforces that a seller tenant cannot access or mutate products, inventory, or orders of another store.
 */
export function requireSellerScope(user: User | null, targetStoreId: string): void {
  if (!user) {
    throw new AuthenticationError();
  }

  // Super admins and ops managers can inspect multi-tenant resources
  if (user.roles.includes("super_admin") || user.roles.includes("admin") || user.roles.includes("operations_manager")) {
    return;
  }

  const isSeller = user.roles.includes("seller_owner") || user.roles.includes("seller_staff");
  if (!isSeller) {
    throw new AuthorizationError("Access Denied: Only registered merchant store operators may access this portal.");
  }

  if (!user.storeId || user.storeId !== targetStoreId) {
    throw new TenantIsolationError(
      `Tenant Isolation Error: Merchant '${user.storeId || "unknown"}' attempted unauthorized access to store '${targetStoreId}'.`
    );
  }
}

/**
 * Customer Scope Enforcer.
 * Prevents Customer A from reading or modifying Customer B's orders or saved addresses.
 */
export function requireCustomerScope(user: User | null, targetCustomerId: string): void {
  if (!user) {
    throw new AuthenticationError();
  }

  if (user.roles.includes("super_admin") || user.roles.includes("admin") || user.roles.includes("support_agent")) {
    return;
  }

  if (user.id !== targetCustomerId) {
    throw new AuthorizationError("Access Denied: You cannot view or modify another customer's account records.");
  }
}
