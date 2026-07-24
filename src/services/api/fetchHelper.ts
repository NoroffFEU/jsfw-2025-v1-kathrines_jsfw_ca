import {APIError} from "./apiError.ts";

export async function fetchHelper<T>(url: string, notFoundMessage: string): Promise<T> {
    let response;
    try {
        response = await fetch(url)
        if(!response.ok) {
            if (response.status === 404) {
                throw new APIError( notFoundMessage, response.status);
            } else if (response.status === 401 || response.status === 403) {
                throw new APIError(`Unauthorised or forbidden`, response.status);
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