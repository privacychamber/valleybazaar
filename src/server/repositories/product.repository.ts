import { Product, ProductStatus } from "@/types";
import { demoProducts } from "@/data/demo/products";

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findBySlug(slug: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  findByCategory(categorySlug: string): Promise<Product[]>;
  findByStore(storeId: string): Promise<Product[]>;
  findByRegion(regionSlug: string): Promise<Product[]>;
  create(product: Omit<Product, "id">): Promise<Product>;
  updateStatus(id: string, status: ProductStatus): Promise<Product | null>;
}

/**
 * Mock implementation of Product Repository using typed demo data.
 * Can be swapped with PrismaProductRepository without altering frontend callers.
 */
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

  async updateStatus(id: string, status: ProductStatus): Promise<Product | null> {
    const idx = this.products.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    this.products[idx].status = status;
    return this.products[idx];
  }
}

export const productRepository = new MockProductRepository();

