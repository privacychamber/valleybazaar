import { User, Permission } from "@/types";
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
    return Boolean(user.permissions && user.permissions.includes(permission));
  }

  async validateSellerScope(user: User, targetStoreId: string): Promise<boolean> {
    if (user.roles.includes("super_admin") || user.roles.includes("admin") || user.roles.includes("operations_manager")) {
      return true;
    }
    // Strict seller tenant isolation check
    return Boolean(user.storeId && user.storeId === targetStoreId);
  }
}

export const authService = new AuthServiceBoundary();
