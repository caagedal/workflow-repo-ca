test("Navigation works", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Home");

  await page.locator("text=Venue").first().click();
  await expect(page.locator("h1")).toContainText("Venue details");
});
