import { postItem } from './utils/api.js';
import { URL } from './utils/constants.js';

export function addItem(itemText) {
    postItem(URL, itemText);
}