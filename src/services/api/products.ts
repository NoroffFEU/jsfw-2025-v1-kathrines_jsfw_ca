import {BASE_URL, SHOP_URL} from "./config.ts";
import {APIError} from "./apiError.ts";
import type {Product} from "../../schemas/product.ts";

export async function fetchProducts():Promise<Product[]> {
    const URL = `${BASE_URL}${SHOP_URL}`;
    console.log(`Fetching ${URL}`);
    let response
    try {
        response = await fetch(URL)
        if(!response.ok) {
            if (response.status === 404) {
                throw new APIError(`Could not find ${URL}`, response.status);
            } else if (response.status === 401 || response.status === 403) {
                throw new APIError(`Unauthorized or fobidden`, response.status);
            }else if (response.status === 400) {
                throw new APIError(`Bad request to the API`, response.status);
            } else if (response.status >= 500 && response.status <= 505) {
                throw new APIError(`Request was valid but server could not fullfill the request`, response.status);
            } else {
                throw new APIError(`Could not fetch the data`, response.status);
            }
        } else {
            const { data } = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        if(error instanceof APIError) {
            throw error;
        } else {
            throw new APIError(`Could not load the data: ${response?.status}`, undefined)
        }

    }
}

await fetchProducts()