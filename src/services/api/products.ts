import {BASE_URL, SHOP_URL} from "./config.ts";

export async function fetchProducts() {
    const URL = `${BASE_URL}${SHOP_URL}`;
    console.log(`Fetching ${URL}`);
    try {
        const response = await fetch(URL)

        if(!response.ok) {
            throw new Error(
                `An error occurred: ${response.status} ${response.statusText}`,
            );
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        throw new Error('Failed to fetch products:', error);
    }


}

await fetchProducts()