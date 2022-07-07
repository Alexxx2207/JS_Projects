import { html } from '../../node_modules/lit-html/lit-html.js';
import { createListItem } from './listItem.js';

export const createList = (items) => html`
${items.map(item => html`${createListItem(item)}`)}
`;