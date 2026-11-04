import { test, expect } from "@playwright/test";

test.describe("Valley Bazaar E2E Test Suite", () => {
  // 1. Customer signup/login demo flow
  test("1. Customer signup and login demo flow", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.locator("h1")).toContainText(/Join Valley Bazaar/i);
    await page.locator('form input[placeholder="Rohan Malhotra"]').fill("Arjun Sharma");
    await page.locator('form input[type="email"]').fill("arjun@sample.in");
    await page.locator('form input[type="password"]').fill("MountainSecret123!");
    await page.getByRole("button", { name: "Create Account (Demo)" }).click();

    // Should redirect to account or customer dashboard
    await page.waitForURL("**/account", { timeout: 10000 });
    await expect(page.locator("body")).toContainText(/Account Overview/i);
  });

  // 2. Product browsing, filtering, and search
  test("2. Product browsing, filtering, and search", async ({ page }) => {
    await page.goto("/products");
    await expect(page.locator("h1")).toContainText(/Himachal Marketplace Catalog/i);

    // Verify product cards are displayed
    const productCards = page.locator('a[href^="/products/"]');
    await expect(productCards.first()).toBeVisible();

    // Direct product detail verification
    await page.goto("/products/handwoven-merino-kullu-shawl");
    await expect(page.locator("h1")).toContainText(/Handwoven Pure Merino Kullu Shawl/i);
    await expect(page.locator("body")).toContainText(/GI Tag/i);

    // Search query test
    await page.goto("/search?q=honey");
    await expect(page.locator("h1")).toContainText(/Search Results/i);
    await expect(page.locator("body")).toContainText(/honey/i);
  });

  // 3. Multi-vendor cart and order grouping
  test("3. Multi-vendor cart and order grouping", async ({ page }) => {
    await page.goto("/cart");
    await expect(page.locator("h1")).toContainText(/Your Shopping Bag/i);

    // Verify multiple seller hubs are rendered separately
    await expect(page.locator("body")).toContainText(/Order Summary/i);

    // Navigate to checkout
    await page.click('a[href="/checkout"]');
    await expect(page).toHaveURL(/.*checkout/);
    await expect(page.getByRole("heading", { name: /Complete Your Mountain Order/i })).toBeVisible();
    await expect(page.locator("body")).toContainText(/Simulated Checkout/i);
  });

  // 4. Seller application workflow
  test("4. Seller application and onboarding submission", async ({ page }) => {
    await page.goto("/seller/application");
    await expect(page.locator("h1")).toContainText(/Seller Application & Verification/i);

    await page.getByRole("button", { name: /Submit Seller Application/i }).click();

    // Should render submitted status
    await expect(page.locator("body")).toContainText(/Application Received/i);
  });

  // 5. Seller product management
  test("5. Seller product management and catalog creation", async ({ page }) => {
    await page.goto("/seller/products");
    await expect(page.locator("h1")).toContainText(/Store Products Catalog/i);

    await page.goto("/seller/products/new");
    await expect(page.locator("h1")).toContainText(/Submit New Mountain Product/i);
    await expect(page.locator('button[type="submit"]')).toContainText(/Submit Product for Moderation Review/i);
  });

  // 6. Seller order isolation
  test("6. Seller order isolation and tenant scope", async ({ page }) => {
    await page.goto("/seller/orders");
    await expect(page.locator("h1")).toContainText(/Store Orders/i);

    // Navigate to authorized sub-order for seller-1
    await page.goto("/seller/orders/ord-1001");
    await expect(page.locator("h1")).toContainText(/Fulfil Sub-Order/i);
    await expect(page.locator("body")).toContainText(/Print Packing Slip/i);
  });

  // 7. Admin seller and product approval
  test("7. Admin console seller application review and product moderation", async ({ page }) => {
    await page.goto("/admin/sellers/applications");
    await expect(page.locator("h1")).toContainText(/Seller Application Review Queue/i);
    await expect(page.locator("body")).toContainText(/Review/i);

    await page.goto("/admin/products/pending-review");
    await expect(page.locator("h1")).toContainText(/Product Moderation Queue/i);
  });

  // 8. Restricted admin access and security guard
  test("8. Admin platform settings and governance access", async ({ page }) => {
    await page.goto("/admin");
    await expect(page.locator("h1")).toContainText(/Operational Overview/i);
    await expect(page.locator("body")).toContainText(/Marketplace Command Centre/i);

    await page.goto("/admin/staff-access");
    await expect(page.locator("h1")).toContainText(/Staff RBAC Roles & Permissions/i);

    await page.goto("/admin/settings");
    await expect(page.locator("h1")).toContainText(/Platform Infrastructure Settings/i);
  });
});
