import { Store } from "@/types";
import { demoStores } from "@/data/demo/stores";

export interface IStoreRepository {
  findAll(): Promise<Store[]>;
  findBySlug(slug: string): Promise<Store | null>;
  findById(id: string): Promise<Store | null>;
  findByRegion(regionSlug: string): Promise<Store[]>;
}

export class MockStoreRepository implements IStoreRepository {
  private stores: Store[] = [...demoStores];

  async findAll(): Promise<Store[]> {
    return this.stores;
  }

  async findBySlug(slug: string): Promise<Store | null> {
    return this.stores.find((s) => s.slug === slug) || null;
  }

  async findById(id: string): Promise<Store | null> {
    return this.stores.find((s) => s.id === id) || null;
  }

  async findByRegion(regionSlug: string): Promise<Store[]> {
    return this.stores.filter((s) => s.regionSlug === regionSlug);
  }
}

export const storeRepository = new MockStoreRepository();

