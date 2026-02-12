import { expect, test } from "@playwright/test";

test.describe("hero choreography metadata", () => {
  test("keeps ordered stage delays for headline, subhead, ctas, and visual", async ({ page }) => {
    await page.goto("/");

    const stages = await page.$$eval("[data-hero-stage]", (nodes) =>
      nodes.map((node) => ({
        stage: node.getAttribute("data-hero-stage"),
        delay: Number(node.getAttribute("data-hero-delay") ?? "0")
      }))
    );

    expect(stages).toHaveLength(4);
    expect(stages.map((entry) => entry.stage)).toEqual(["headline", "subhead", "cta", "visual"]);
    expect(stages.map((entry) => entry.delay)).toEqual([100, 200, 300, 450]);
  });
});

