import { Product, ProductStatus } from "@/types";
import { demoProducts } from "@/data/demo/products";
import { TenantIsolationError } from "@/server/auth/guard";

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findBySlug(slug: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  findByCategory(categorySlug: string): Promise<Product[]>;
  findByStore(storeId: string): Promise<Product[]>;
  findByRegion(regionSlug: string): Promise<Product[]>;
  create(product: Omit<Product, "id">): Promise<Product>;
  createForStore(storeId: string, data: Omit<Product, "id" | "storeId">): Promise<Product>;
  updateForStore(storeId: string, productId: string, data: Partial<Product>): Promise<Product>;
  deleteForStore(storeId: string, productId: string): Promise<boolean>;
  updateStatus(id: string, status: ProductStatus): Promise<Product | null>;
}

export class MockProductRepository implements IProductRepository {
  private products: Product[] = [...demoProducts];

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.products.find((p) => p.slug === slug) || null;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find((p) => p.id === id) || null;
  }

  async findByCategory(categorySlug: string): Promise<Product[]> {
    return this.products.filter((p) => p.categorySlug === categorySlug);
  }

  async findByStore(storeId: string): Promise<Product[]> {
    return this.products.filter((p) => p.storeId === storeId);
  }

  async findByRegion(regionSlug: string): Promise<Product[]> {
    return this.products.filter((p) => p.regionSlug === regionSlug);
  }

  async create(data: Omit<Product, "id">): Promise<Product> {
    const newProduct: Product = {
      ...data,
      id: `prod-${Date.now()}`,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Tenant-Isolated Product Creation.
   * Enforces that the product is bound to the authenticated storeId.
   */
  async createForStore(storeId: string, data: Omit<Product, "id" | "storeId">): Promise<Product> {
    const newProduct: Product = {
      ...data,
      id: `prod-${Date.now()}`,
      storeId,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Tenant-Isolated Product Mutation.
   * Throws TenantIsolationError if storeId does not match product.storeId.
   */
  async updateForStore(storeId: string, productId: string, data: Partial<Product>): Promise<Product> {
    const idx = this.products.findIndex((p) => p.id === productId);
    if (idx === -1) {
      throw new Error(`Product ${productId} not found`);
    }

    const existing = this.products[idx];
    if (existing.storeId !== storeId) {
      throw new TenantIsolationError(
        `Security Violation: Store '${storeId}' cannot modify product '${productId}' belonging to store '${existing.storeId}'.`
      );
    }

    this.products[idx] = { ...existing, ...data };
    return this.products[idx];
  }

  /**
   * Tenant-Isolated Product Deletion.
   * Throws TenantIsolationError if storeId does not match product.storeId.
   */
  async deleteForStore(storeId: string, productId: string): Promise<boolean> {
    const idx = this.products.findIndex((p) => p.id === productId);
    if (idx === -1) return false;

    const existing = this.products[idx];
    if (existing.storeId !== storeId) {
      throw new TenantIsolationError(
        `Security Violation: Store '${storeId}' cannot delete product '${productId}' belonging to store '${existing.storeId}'.`
      );
    }

    this.products.splice(idx, 1);
    return true;
  }

  async updateStatus(id: string, status: ProductStatus): Promise<Product | null> {
    const idx = this.products.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    this.products[idx].status = status;
    return this.products[idx];
  }
}

export const productRepository = new MockProductRepository();
