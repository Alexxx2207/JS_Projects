import { html } from '../../node_modules/lit-html/lit-html.js';
import { createCatCard } from './catCard.js';


export const createCatsList = (cats) => html`
    <ul>
        ${cats.map(cat => html`${createCatCard(cat)}`)}
    </ul>
`;