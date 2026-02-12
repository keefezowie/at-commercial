import { expect, test } from "@playwright/test";

test.describe("mobile navigation", () => {
  test("opens, locks scroll, and closes via escape/backdrop/route change", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const nav = page.locator("header[data-nav-state]");
    await expect(nav).toHaveAttribute("data-nav-state", "top");

    await page.evaluate(() => window.scrollTo({ top: 120, behavior: "instant" }));
    await expect(nav).toHaveAttribute("data-nav-state", "scrolled");

    const toggle = page.getByTestId("mobile-menu-toggle");
    await expect(toggle).toBeVisible();
    await toggle.click();

    const panel = page.getByTestId("mobile-menu-panel");
    await expect(panel).toBeVisible();
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

    await page.keyboard.press("Escape");
    await expect(panel).toBeHidden();

    await toggle.click();
    await expect(panel).toBeVisible();

    await page.getByRole("link", { name: "Pricing" }).first().click();
    await page.waitForURL("**/pricing");
    await expect(panel).toBeHidden();
  });
});

