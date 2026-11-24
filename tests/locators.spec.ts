import { expect, test } from '@playwright/test'

test('login with wrong password shows error', async({ page })=>{

    await page.goto('https://www.saucedemo.com/');
    const usernameTextBox = page.getByRole('textbox', { name: 'Username' });
    await usernameTextBox.fill('standard_user');

    const passwordTextBox = page.getByRole('textbox', { name: 'Password' });
    await passwordTextBox.fill('wrong_pass');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    const errorText = page.getByText('Epic sadface');
    await expect(errorText).toHaveText('Epic sadface: Username and password do not match any user in this service');
});


test('login with valid user', async({ page })=>{

    await page.goto('https://www.saucedemo.com/');
    const usernameTextBox = page.getByRole('textbox', { name: 'Username' });
    await usernameTextBox.fill('standard_user');

    const passwordTextBox = page.getByRole('textbox', { name: 'Password' });
    await passwordTextBox.fill('secret_sauce');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
