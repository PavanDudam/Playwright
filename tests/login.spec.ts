import { test, expect } from '@playwright/test';

test('TC_LOGIN_01 - valid user can login successfully', async ({ page }) => {
  // Go to login page
  await page.goto('https://dev.athlytesports.com/login');

  // Fill credentials
  await page.fill('#username', 'AlabamaUser');
  await page.fill('#password', 'Password123');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Correct assertion (URL-based, stable)
  await expect(page).toHaveURL(/.*dashboard/);
});
