import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigate to Docs and verify sidebar', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click on Docs from the top navigation
  await page.getByRole('link', { name: 'Docs' }).click();

  // Verify URL
  await expect(page).toHaveURL(/.*docs/);

  // Verify that the documentation sidebar is visible
  await expect(
    page.getByRole('navigation', { name: 'Docs sidebar' })
  ).toBeVisible();

  // Verify a known docs section link exists
  await expect(
    page.getByRole('link', { name: 'Writing tests' })
  ).toBeVisible();
});

