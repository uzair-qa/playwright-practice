import { test, expect } from '@playwright/test';

test('User can add product to cart', async ({ page }) => {
    const username = 'standard_user';
    const password = 'secret_sauce';
    const productName : string = 'Sauce Labs Backpack';
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
  await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText(productName);
});

test('locked out user sees error', async ({ page }) => {

  const lockedUser = {
    username: 'locked_out_user',
    password : 'secret_sauce'
  };
  
  const errorMsg = 'Epic sadface: Sorry, this user has been locked out.';
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(lockedUser.username);
  await page.locator('[data-test="password"]').fill(lockedUser.password);
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page.locator('[data-test="error"]')).toHaveText(errorMsg);
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

