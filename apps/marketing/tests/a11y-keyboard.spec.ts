import { expect, test } from "@playwright/test";

const tabUntil = async (page: import("@playwright/test").Page, label: string, maxTabs = 24) => {
  for (let i = 0; i < maxTabs; i += 1) {
    const activeText = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      return (el?.innerText || el?.textContent || "").trim();
    });
    if (activeText.includes(label)) {
      return true;
    }
    await page.keyboard.press("Tab");
  }
  return false;
};

test.describe("keyboard accessibility smoke", () => {
  test("tabs through nav and hero CTAs", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");

    const reachedDemo = await tabUntil(page, "Request Demo");
    expect(reachedDemo).toBeTruthy();

    const reachedLogin = await tabUntil(page, "Subscriber Login");
    expect(reachedLogin).toBeTruthy();
  });
});
