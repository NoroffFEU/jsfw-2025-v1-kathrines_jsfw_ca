import {BASE_URL, SHOP_URL} from "./config.ts";

import type {Product} from "../../schemas/product.ts";
import {fetchHelper} from "./fetchHelper.ts";

export async function fetchProducts():Promise<Product[]> {
    const URL = `${BASE_URL}${SHOP_URL}`;
    console.log(`Fetching ${URL}`);
    return await fetchHelper<Product[]>(URL, `Could not fetch products...`);
}

await fetchProducts()