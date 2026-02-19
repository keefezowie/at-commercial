import { expect, test } from "@playwright/test";

test.describe("cta hierarchy", () => {
  test("home page prioritizes Request Demo and clarifies Subscriber Login", async ({ page }) => {
    await page.goto("/");

    const viewport = page.viewportSize();
    const isMobile = Boolean(viewport && viewport.width < 980);
    const header = page.getByRole("banner");

    if (isMobile) {
      await page.getByTestId("mobile-menu-toggle").click();
      const panel = page.getByTestId("mobile-menu-panel");
      await expect(panel.getByRole("link", { name: "Request Demo" })).toBeVisible();
      await expect(panel.getByRole("link", { name: "Subscriber Login" })).toBeVisible();
    } else {
      await expect(header.getByRole("link", { name: "Request Demo" })).toBeVisible();
      await expect(header.getByRole("link", { name: "Subscriber Login" })).toBeVisible();
    }

    const hero = page.locator("section[data-reduced-motion]").first();
    await expect(hero.getByRole("link", { name: "Request Demo" })).toBeVisible();
    await expect(hero.getByRole("link", { name: "Subscriber Login" })).toBeVisible();
    await expect(hero.getByText("Already subscribed? Use Subscriber Login.", { exact: false })).toBeVisible();

    await expect(page.getByText("Open App")).toHaveCount(0);
  });

  test("pricing page preserves demo-first flow with secondary login and tertiary sales", async ({
    page
  }) => {
    await page.goto("/pricing");

    await expect(page.getByRole("link", { name: "Request Demo" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Subscriber Login" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Talk to Sales" }).first()).toBeVisible();
  });
});
