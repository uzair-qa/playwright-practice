import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';

test('Add Thor Hammer to the cart, and the cart shows 1 item', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.search('Thor hammer');
    await expect(page.getByRole('heading', { name: 'Searched for: thor hammer' })).toBeVisible();

    await page.getByRole('img', { name: 'Thor Hammer' }).click();
    await expect(page.getByRole('heading', { name: 'Specifications', exact: true })).toBeVisible();

    const productPage = new ProductPage(page);
    await productPage.addToCart();
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1')

});
