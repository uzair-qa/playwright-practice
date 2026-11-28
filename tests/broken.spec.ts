import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test('search for hammer shows results', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search('hammer');
  await expect(page.getByRole('heading', { name: 'Searched for: hammer' })).toBeVisible();
  await expect(page.getByText('Hammer')).toBeVisible();
  console.log(await page.getByText('Hammer').count(), await page.getByText('Hammer').first().textContent());
  await expect(page.getByRole('heading', { name: 'Thor Hammer' })).toBeVisible();
});
