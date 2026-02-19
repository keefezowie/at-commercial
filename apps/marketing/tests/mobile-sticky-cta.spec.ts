import { expect, test } from "@playwright/test";

test.describe("mobile sticky CTA", () => {
  test("reveals after scroll on mobile pages and keeps both actions visible", async ({
    page
  }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chromium", "Mobile-only assertion");
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/features");

    const sticky = page.getByTestId("mobile-sticky-cta");
    await expect(sticky).toHaveCount(0);

    await page.evaluate(() => window.scrollTo({ top: 720, behavior: "instant" }));
    await expect(sticky).toBeVisible();
    await expect(sticky.getByRole("link", { name: "Request Demo" })).toBeVisible();
    await expect(sticky.getByRole("link", { name: "Subscriber Login" })).toBeVisible();
  });

  test("does not render on the demo page", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chromium", "Mobile-only assertion");
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/demo");

    await page.evaluate(() => window.scrollTo({ top: 740, behavior: "instant" }));
    await expect(page.getByTestId("mobile-sticky-cta")).toHaveCount(0);
  });
});
