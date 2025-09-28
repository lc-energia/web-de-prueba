import { test, expect, Page } from '@playwright/test';

test.describe('Homepage Visual Verification', () => {
  test('should load the homepage and capture a screenshot', async ({ page }) => {
    // 1. Arrange: Go to the homepage.
    // The dev server should be running on localhost:3000.
    await page.goto('http://localhost:3000');

    // 2. Assert: Wait for the main content to be visible.
    // We'll wait for the main landmark role to ensure the page is loaded.
    const mainContent = page.getByRole('main');
    await expect(mainContent).toBeVisible({ timeout: 20000 });

    // Also wait for the navbar to be visible, specifically the one in the header.
    // The <header> element has an implicit role of "banner".
    const header = page.getByRole('banner');
    const navbar = header.getByRole('navigation');
    await expect(navbar).toBeVisible();

    // Give animations a moment to settle.
    await page.waitForTimeout(1500);

    // 3. Screenshot: Capture the final result for visual verification.
    await page.screenshot({ path: 'jules-scratch/verification/homepage_verification.png', fullPage: true });
  });
});