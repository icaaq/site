import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Home page", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should have the correct title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Icaaq AB/);
  });

  test("should have the main heading", async ({ page }) => {
    await page.goto("/");

    const heading = page.locator("h1");
    await expect(heading).toHaveText("Icaaq AB");
    await expect(heading).toHaveAttribute(
      "aria-label",
      "Isaac AB, I, C, A, A, Q"
    );
  });

  test("should have the company description", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.locator(
        "text=A company founded and operated by Isak Lagerblad since 2018"
      )
    ).toBeVisible();
  });

  test("should have the contact link", async ({ page }) => {
    await page.goto("/");

    const link = page.locator(
      'a:text("Here you can find my contact details.")'
    );
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "/contact/");
  });
});
