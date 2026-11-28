import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';


test('Select combination pliers', async({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search('pliers');
  await expect(page.getByRole('heading', { name: 'Searched for: pliers' })).toBeVisible();
  await page.getByRole('img', { name: 'Combination Pliers' }).click();

  await expect(page).toHaveTitle(/Combination Pliers/i);
});
