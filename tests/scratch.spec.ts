import {expect, test} from '@playwright/test'
import { Product } from '../models/product'

test('check the price of product', async () => {
    const p1 = new Product('prod1', 5);
    const p2 = new Product('prod2', 10);

    expect(p1.isCheap()).toBe(true);
    expect(p2.isCheap()).toBe(false);
});
