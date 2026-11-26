import { expect, test } from '@playwright/test'

test('sort products by price low to high', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name:'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name:'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name:'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const dropDown = page.getByRole('combobox', { name: 'Sort products' });
    await dropDown.selectOption('lohi');

    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
});

test('shows 6 products after login', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name:'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name:'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name:'Login' }).click();
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});
