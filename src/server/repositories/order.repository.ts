import { Order, SellerOrder } from "@/types";
import { demoOrders } from "@/data/demo/orders";

export interface IOrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  findByTrackingRef(ref: string): Promise<Order | null>;
  findSellerOrders(sellerId: string): Promise<{ order: Order; sellerOrder: SellerOrder }[]>;
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

  async createOrder(order: Order): Promise<Order> {
    this.orders.unshift(order);
    return order;
  }
}

export const orderRepository = new MockOrderRepository();

