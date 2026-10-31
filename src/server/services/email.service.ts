/**
 * Email Service Boundary
 * Prepared for transactional notifications (Order Confirmation, Seller Dispatch, Payout Statement).
 * Operates in simulated logging mode during Demo Mode.
 */

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
}

export interface IEmailService {
  sendEmail(msg: EmailMessage): Promise<boolean>;
}

export class EmailServiceBoundary implements IEmailService {
  async sendEmail(msg: EmailMessage): Promise<boolean> {
    // In Demo Mode, do not send actual emails
    console.log(`[DEMO EMAIL SIMULATION] To: ${msg.to} | Subject: ${msg.subject}`);
    return true;
  }
}

export const emailService = new EmailServiceBoundary();

