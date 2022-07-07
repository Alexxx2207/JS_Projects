import * as request from './request.js';

export const getItems = (url) => getItemsFromRequest(url);
export const postItem = (url, data) => request.post(url, {text: data});

async function getItemsFromRequest(url) {
    let response = await request.get(url);

    return Object.values(await response.json());
}