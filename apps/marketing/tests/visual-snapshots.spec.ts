import { expect, test } from "@playwright/test";

test.describe("visual snapshot smoke", () => {
  test("captures homepage hero for regression tracking", async ({ page }, testInfo) => {
    await page.goto("/");
    const hero = page.locator("section[data-reduced-motion]").first();
    await expect(hero).toBeVisible();

    const image = await hero.screenshot();
    await testInfo.attach(`home-hero-${testInfo.project.name}`, {
      body: image,
      contentType: "image/png"
    });

    expect(image.byteLength).toBeGreaterThan(20000);
  });

  test("captures mobile nav open state", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chromium", "Mobile-only snapshot");
    await page.goto("/");

    const toggle = page.getByTestId("mobile-menu-toggle");
    await expect(toggle).toBeVisible();
    await toggle.click();

    const panel = page.getByTestId("mobile-menu-panel");
    await expect(panel).toBeVisible();

    const image = await panel.screenshot();
    await testInfo.attach(`mobile-nav-open-${testInfo.project.name}`, {
      body: image,
      contentType: "image/png"
    });

    expect(image.byteLength).toBeGreaterThan(12000);
  });

  test("captures pricing cards section", async ({ page }, testInfo) => {
    await page.goto("/pricing");
    const section = page.getByRole("heading", { name: "Commercial pathways for pilot to enterprise rollout." });
    await expect(section).toBeVisible();

    const block = section.locator("xpath=ancestor::section[1]");
    const image = await block.screenshot();
    await testInfo.attach(`pricing-cards-${testInfo.project.name}`, {
      body: image,
      contentType: "image/png"
    });

    expect(image.byteLength).toBeGreaterThan(22000);
  });
});
