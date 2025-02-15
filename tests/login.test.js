import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("User can log in with valid credentials", async ({ page }) => {
    await page.goto("/auth/login");
    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
    await page.click('button[name="Login"]');
    await expect(page.locator("text=Logout")).toBeVisible();
  });

  test("Invalid credentials show error", async ({ page }) => {
    await page.goto("/auth/login");
    await page.fill('input[name="email"]', "wrong@noroff.no");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[name="Login"]');
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
