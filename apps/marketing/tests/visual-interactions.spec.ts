import { expect, test } from "@playwright/test";

test.describe("visual proof interactions", () => {
  test("home comparison card opens and closes zoom preview", async ({ page }) => {
    await page.goto("/");

    const docxCard = page.locator("[data-before-after-id='docx']").first();
    await expect(docxCard).toBeVisible();

    const frame = docxCard.locator("[data-before-after-frame='true']").first();
    await expect(frame).toBeVisible();
    await expect(frame.getByRole("slider")).toBeVisible();
    await expect(docxCard.locator("input[type='range']")).toHaveCount(0);

    const beforePosition = Number((await docxCard.getAttribute("data-before-after-position")) ?? "0");
    const frameBox = await frame.boundingBox();
    if (!frameBox) {
      throw new Error("Before/after frame is missing layout box");
    }

    await frame.click({
      position: {
        x: Math.floor(frameBox.width * 0.82),
        y: Math.floor(frameBox.height * 0.5)
      }
    });
    const afterPosition = Number((await docxCard.getAttribute("data-before-after-position")) ?? "0");
    expect(afterPosition).toBeGreaterThan(beforePosition);

    await docxCard.getByRole("button", { name: "View after" }).click();
    const dialog = page.getByRole("dialog", { name: "DOCX layout fidelity (After)" });
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("pricing workflow thumbnails open zoom preview", async ({ page }) => {
    await page.goto("/pricing");

    await page.getByRole("button", { name: "Open Upload preview" }).click();
    const dialog = page.getByRole("dialog", { name: "Upload workflow preview" });
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });

  test("cad mobile keeps primary actions separated and visible", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/cad-translation");

    const actionGroup = page.getByTestId("cad-primary-actions");
    await expect(actionGroup).toBeVisible();
    await expect(actionGroup.getByRole("link", { name: "Request Demo" })).toBeVisible();
    await expect(actionGroup.getByRole("link", { name: "Subscriber Login" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Talk to Sales" }).first()).toBeVisible();
  });
});
