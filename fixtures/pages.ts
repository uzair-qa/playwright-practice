import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';


export const test = base.extend<{ homePage: HomePage; productPage: ProductPage }>({

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }

});
export { expect } from '@playwright/test';
