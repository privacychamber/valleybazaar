import { Order, SellerOrder, FulfilmentStatus } from "@/types";
import { demoOrders } from "@/data/demo/orders";
import { TenantIsolationError } from "@/server/auth/guard";

export interface IOrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  findByTrackingRef(ref: string): Promise<Order | null>;
  findSellerOrders(sellerId: string): Promise<{ order: Order; sellerOrder: SellerOrder }[]>;
  findSellerSubOrder(sellerId: string, orderId: string): Promise<{ order: Order; sellerOrder: SellerOrder } | null>;
  updateSellerFulfilment(
    sellerId: string,
    orderId: string,
    fulfilment: {
      status: FulfilmentStatus;
      courierPartner?: string;
      trackingNumber?: string;
    }
  ): Promise<SellerOrder>;
  createOrder(order: Order): Promise<Order>;
}

export class MockOrderRepository implements IOrderRepository {
  private orders: Order[] = [...demoOrders];

  async findAll(): Promise<Order[]> {
    return this.orders;
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.find((o) => o.id === id) || null;
  }

  async findByTrackingRef(ref: string): Promise<Order | null> {
    return this.orders.find((o) => o.trackingReference === ref) || null;
  }

  /**
   * Database-level multi-tenant filter: only returns sub-orders belonging to the requested sellerId.
   */
  async findSellerOrders(sellerId: string): Promise<{ order: Order; sellerOrder: SellerOrder }[]> {
    const results: { order: Order; sellerOrder: SellerOrder }[] = [];
    for (const order of this.orders) {
      const match = order.sellerOrders.find((so) => so.sellerId === sellerId);
      if (match) {
        results.push({ order, sellerOrder: match });
      }
    }
    return results;
  }

  /**
   * Strict Tenant-Isolated Sub-Order Retrieval.
   * Prevents Seller A from reading Seller B's dispatch or pricing details.
   */
  async findSellerSubOrder(
    sellerId: string,
    orderId: string
  ): Promise<{ order: Order; sellerOrder: SellerOrder } | null> {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order) return null;

    const subOrder = order.sellerOrders.find((so) => so.sellerId === sellerId);
    if (!subOrder) return null;

    return { order, sellerOrder: subOrder };
  }

  /**
   * Strict Tenant-Isolated Sub-Order Mutation.
   * Throws TenantIsolationError if an update is attempted across merchant boundaries.
   */
  async updateSellerFulfilment(
    sellerId: string,
    orderId: string,
    fulfilment: {
      status: FulfilmentStatus;
      courierPartner?: string;
      trackingNumber?: string;
    }
  ): Promise<SellerOrder> {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order) {
      throw new Error(`Order ${orderId} not found`);
    }

    const subOrder = order.sellerOrders.find((so) => so.sellerId === sellerId);
    if (!subOrder) {
      throw new TenantIsolationError(
        `Security Violation: Seller '${sellerId}' cannot update sub-order within parent order '${orderId}'.`
      );
    }

    subOrder.fulfilmentStatus = fulfilment.status;
    if (fulfilment.courierPartner) subOrder.courierPartner = fulfilment.courierPartner;
    if (fulfilment.trackingNumber) subOrder.trackingNumber = fulfilment.trackingNumber;

    return subOrder;
  }

  async createOrder(order: Order): Promise<Order> {
    this.orders.unshift(order);
    return order;
  }
}

export const orderRepository = new MockOrderRepository();
