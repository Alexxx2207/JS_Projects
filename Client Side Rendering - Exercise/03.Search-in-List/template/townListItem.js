import { html } from '../../node_modules/lit-html/lit-html.js';


export const createTown = (name, active) => html`
    <li class=${active?"active":""}>${name}</li>
`;