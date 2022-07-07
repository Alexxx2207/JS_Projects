import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRow } from './tableRow.js';

export const createTableRows = (rows) => html`
    ${ rows.map( row => html`${createRow(row)}` ) }
`;