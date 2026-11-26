import { test, expect } from '@playwright/test';

test('Select combination pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="search-query"]').fill('pliers');
  await page.locator('[data-test="search-submit"]').click();
  await page.getByRole('img', { name: 'Combination Pliers' }).click();

  await expect(page).toHaveTitle(/Combination Pliers/i);
});
