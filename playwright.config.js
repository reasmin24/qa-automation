// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * QA Automation config - NZiTech B2C travel portal
 * Run: npx playwright test
 * UI mode: npx playwright test --ui
 */
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'https://test-cms--nz-b2c.netlify.app/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
