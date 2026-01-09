import { test, expect } from '@playwright/test';

test('Check Playwright homepage title and link', async ({ page }) => {
  // 1. Go to the Playwright website
  await page.goto('https://playwright.dev/');

  // 2. Check if the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Check if the "Get started" link is visible
  const getStartedLink = page.getByRole('link', { name: 'Get started' });
  await expect(getStartedLink).toBeVisible();
  
  // 4. Click it and verify URL changes
  await getStartedLink.click();
  await expect(page).toHaveURL(/.*intro/);
});