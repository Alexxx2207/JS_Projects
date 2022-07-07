import { html } from '../../node_modules/lit-html/lit-html.js';

export const createListItem = (item) => html`<option value="${item._id}">${item.text}</option>`; 