import { expect, test } from "@playwright/test";

test.describe("form validation UX", () => {
  test("demo form shows inline required-field errors", async ({ page }) => {
    await page.goto("/demo");

    await page.getByRole("button", { name: "Submit Request" }).click();

    await expect(page.getByText("Full name is required.")).toBeVisible();
    await expect(page.getByText("Valid email is required.")).toBeVisible();
    await expect(page.getByText("Company is required.")).toBeVisible();
    await expect(page.getByText("Role is required.")).toBeVisible();
    await expect(page.getByText("Monthly volume is required.")).toBeVisible();
    await expect(page.getByText("Select at least one file type.")).toBeVisible();
    await expect(page.getByText("Select at least one target language.")).toBeVisible();
    await expect(page.getByText("Consent is required.")).toBeVisible();
  });

  test("contact form enforces required fields and consent", async ({ page }) => {
    await page.goto("/contact");

    await page.getByRole("button", { name: "Send Inquiry" }).click();

    await expect(page.getByText("Full name is required.")).toBeVisible();
    await expect(page.getByText("Valid email is required.")).toBeVisible();
    await expect(page.getByText("Message is required.")).toBeVisible();
    await expect(page.getByText("Consent is required.")).toBeVisible();
  });
});
