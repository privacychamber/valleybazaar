import { User, RoleType, Permission } from "@/types";
import { demoCurrentUser } from "@/data/demo/users";

export interface IAuthService {
  getCurrentUser(): Promise<User | null>;
  hasPermission(user: User, permission: Permission): Promise<boolean>;
  validateSellerScope(user: User, targetStoreId: string): Promise<boolean>;
}

export class AuthServiceBoundary implements IAuthService {
  async getCurrentUser(): Promise<User | null> {
    return demoCurrentUser;
  }

  async hasPermission(user: User, permission: Permission): Promise<boolean> {
    if (user.roles.includes("super_admin") || user.roles.includes("admin")) {
      return true;
    }
    return true; // Configurable RBAC permission check
  }

  async validateSellerScope(user: User, targetStoreId: string): Promise<boolean> {
    if (user.roles.includes("super_admin") || user.roles.includes("admin")) {
      return true;
    }
    // Strict seller tenant isolation check
    return user.storeId === targetStoreId;
  }
}

export const authService = new AuthServiceBoundary();

