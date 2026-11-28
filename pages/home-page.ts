import { Locator, Page } from '@playwright/test'

export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;


    constructor(p: Page){
        this.page = p;
        this.searchBox = this.page.getByLabel('Search');
        this.searchButton = this.page.getByRole('button', { name: 'Search', exact: true });
    }

    async goto(){
        await this.page.goto('/');
    }

    async search(term: string){
        await this.searchBox.fill(term);
        await this.searchButton.click();
    }
}
