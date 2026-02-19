import { expect, test } from "@playwright/test";

test.use({ contextOptions: { reducedMotion: "reduce" } });

test.describe("reduced motion profile", () => {
  test("disables magnetic hover and keeps FAQ open/close instant", async ({ page }) => {
    await page.goto("/");

    const hero = page.locator("section[data-reduced-motion='true']");
    await expect(hero).toBeVisible();

    const magneticNode = page.locator("[data-magnetic-enabled='false']").first();
    await expect(magneticNode).toHaveAttribute("data-magnetic-enabled", "false");

    const firstFaqButton = page.locator("#faq-trigger-0");
    await firstFaqButton.click();
    await expect(page.locator("#faq-0")).toHaveCount(0);

    const secondFaqButton = page.locator("#faq-trigger-1");
    await secondFaqButton.click();
    await expect(page.locator("#faq-1")).toBeVisible();
    await secondFaqButton.click();
    await expect(page.locator("#faq-1")).toHaveCount(0);
  });
});

