import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test.describe('Search', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Select combination pliers', async ({ page }) => {
    await homePage.search('pliers');
    await expect(page.getByRole('heading', { name: 'Searched for: pliers' })).toBeVisible();
    await page.getByRole('img', { name: 'Combination Pliers' }).click();

    await expect(page).toHaveTitle(/Combination Pliers/i);
  })

  test('search for hammer shows results', async ({ page }) => {
    await homePage.search('hammer');
    await expect(page.getByText('Hammer')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Thor Hammer' })).toBeVisible();
  })

});
