import type {Product} from "../../schemas/product.ts";
import {BASE_URL, SHOP_URL} from "./config.ts";
import {fetchHelper} from "./fetchHelper.ts";

export async function fetchProductById(productId: string): Promise<Product> {
    const URL = `${BASE_URL}${SHOP_URL}/${productId}`;
    console.log(`Fetching ${URL}`);
    return await fetchHelper<Product>(URL, `Could not fetch product: ${productId}`);
}

console.log(await fetchProductById("109566af-c5c2-4f87-86cb-76f36fb8d378"))

