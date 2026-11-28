import { test, expect } from '../fixtures/pages';
import { searchData } from '../data/products';

test.describe('Search', () => {
  test.beforeEach(async ({ page, homePage }) => {
    await homePage.goto();
  });

  test('Select combination pliers', {tag: '@smoke'}, async ({ page, homePage }) => {
    await homePage.search(searchData.pliers.term);
    await expect(page.getByRole('heading', { name: 'Searched for: pliers' })).toBeVisible();
    await page.getByRole('img', { name: `${searchData.pliers.product}` }).click();

    await expect(page).toHaveTitle(new RegExp(searchData.pliers.product, 'i'));
  });

  for(const item of [searchData.pliers, searchData.hammer]){
   test(`search for ${item.term} shows results`, async ({ page, homePage }) => {
    await homePage.search(item.term);
    await expect(page.getByRole('heading', { name: `Searched for: ${item.term}` })).toBeVisible();
    await expect(page.getByRole('heading', { name: `${item.product}` })).toBeVisible();
   });
  }
});
