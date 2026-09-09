const { test, expect } = require('@playwright/test');

test.describe('SauceDemo - Login & Core Shopping Flow', () => {
  test('Login page loads correctly', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });

    // Demo store branding should be visible
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');

    // Username & password fields + login button present
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
  });

  test('Valid login shows product catalog with 6 items', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });

    // Standard demo user (public credentials, documented on the site)
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Logged in - inventory page shows all 6 products
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
  });

  test('Add item to cart and verify cart badge', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add the first product to the cart
    await page.locator('.inventory_item').first().locator('button').click();

    // Cart badge should show 1
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Open cart and confirm the item is there
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.screenshot({ path: 'docs/cart-screenshot.png' });
  });

  test('Locked-out user gets the expected error', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Negative-path test: locked out error message must appear
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });
});
