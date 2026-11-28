import { test, expect } from '../fixtures/pages';

test('Add Thor Hammer to the cart, and the cart shows 1 item', async ({ page, homePage, productPage }) => {
    await homePage.goto();
    await homePage.search('Thor hammer');
    await expect(page.getByRole('heading', { name: 'Searched for: thor hammer' })).toBeVisible();

    await page.getByRole('img', { name: 'Thor Hammer' }).click();
    await expect(page.getByRole('heading', { name: 'Specifications', exact: true })).toBeVisible();

    await productPage.addToCart();
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1');

});
