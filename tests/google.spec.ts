import { test, expect } from '@playwright/test';

test('Google search input exists', async ({ page }) => {
  // 1. Go to Google
  await page.goto('https://google.com');

  // 2. Check if the search text area is visible
  // (Google uses a textarea with name="q" for the search box)
  await expect(page.locator('textarea[name="q"]')).toBeVisible();
});