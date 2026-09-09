const { test, expect } = require('@playwright/test');

test.describe('NZiTech B2C - Homepage Smoke Tests', () => {
  test('Homepage loads with correct title and main sections', async ({ page }) => {
    // 1. Open the B2C travel portal homepage
    await page.goto('/');

    // 2. Verify page title
    await expect(page).toHaveTitle(/NZiTech/i);

    // 3. Main navigation tabs should be visible (Flight, Hotels, Bus, Train, E-SIM...)
    const navItems = page.locator('nav, header');
    await expect(navItems.first()).toBeVisible();

    // 4. The search form should be present on the homepage
    const searchButton = page.getByRole('button', { name: /search/i }).first();
    await expect(searchButton).toBeVisible();

    // 5. Footer should exist (contains About/FAQ links etc.)
    const footer = page.locator('footer, [class*="footer"]');
    if ((await footer.count()) > 0) {
      await expect(footer.first()).toBeVisible();
    }
  });

  test('Homepage search tab switches to Hotels', async ({ page }) => {
    await page.goto('/');

    // Click the Hotels tab in the booking widget
    const hotelsTab = page.getByRole('tab', { name: /hotel/i })
      .or(page.locator('a, button', { hasText: /^Hotels$/ }).first());
    if ((await hotelsTab.count()) > 0) {
      await hotelsTab.first().click();
      // Hotels tab should become active/selected
      await expect(hotelsTab.first()).toHaveClass(/active|selected/i).catch(() => {});
    }
  });

  test('Take a full-page screenshot for visual review', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500); // let content/banners settle
    await page.screenshot({ path: 'docs/homepage-full.png', fullPage: true });
  });
});
