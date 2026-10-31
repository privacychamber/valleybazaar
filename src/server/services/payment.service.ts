/**
 * Payment Service Boundary
 * Integration disabled in Demo Mode.
 * Prepared for Razorpay / Cashfree webhook verification & idempotency.
 */

export interface CreatePaymentIntentRequest {
  orderId: string;
  orderNumber: string;
  amountInPaise: number;
  currency: string;
  customerEmail: string;
  customerPhone: string;
}

export interface PaymentIntentResult {
  gatewayOrderId: string;
  provider: string;
  amount: number;
  isDemoSimulation: boolean;
}

export interface IPaymentService {
  createPaymentIntent(req: CreatePaymentIntentRequest): Promise<PaymentIntentResult>;
  verifyWebhookSignature(payload: string, signature: string): Promise<boolean>;
}

export class PaymentServiceBoundary implements IPaymentService {
  async createPaymentIntent(req: CreatePaymentIntentRequest): Promise<PaymentIntentResult> {
    // In Demo Mode, live payment is safely disabled
    return {
      gatewayOrderId: `demo_order_${req.orderNumber}`,
      provider: "DEMO_SIMULATION",
      amount: req.amountInPaise / 100,
      isDemoSimulation: true,
    };
  }

  async verifyWebhookSignature(payload: string, signature: string): Promise<boolean> {
    // Production will check crypto HMAC against PAYMENT_WEBHOOK_SECRET
    return true;
  }
}

export const paymentService = new PaymentServiceBoundary();

