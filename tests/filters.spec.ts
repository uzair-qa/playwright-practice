import { expect, test } from '@playwright/test'


test('filter by Hand Tools', async({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    const handToolsCheckBox = page.getByRole('checkbox', { name: 'Hand Tools' });
    await handToolsCheckBox.check();

    await expect(handToolsCheckBox).toBeChecked();
});
