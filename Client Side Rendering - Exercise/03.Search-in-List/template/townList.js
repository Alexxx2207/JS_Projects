import { html } from '../../node_modules/lit-html/lit-html.js';
import { createTown } from './townListItem.js';

export const createList = (towns) => html`
    <ul>
        ${towns.map(town => createTown(town.name, town.active))}
    </ul>
`;