import { Locator, Page } from "@playwright/test";


export class ProductPage {

    readonly page: Page;
    readonly addToCartButton : Locator;

    constructor(p: Page){
        this.page = p;
        this.addToCartButton = this.page.getByRole('button', { name: 'Add to cart' });
    }

    async addToCart(){
        await this.addToCartButton.click();
    }

}
