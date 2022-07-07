import * as request from './request.js';

export const getEntries = (url) => getEntriesFromRequest(url);

async function getEntriesFromRequest(url) {
    let response = await request.get(url);

    return Object.values(await response.json());
}