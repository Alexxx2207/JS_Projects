import { html } from '../node_modules/lit-html/lit-html.js';
import { createCardTemplate } from "./contactCard.js";


export const createContactList = (contacts) => html`
    ${ contacts.map( contact => html`${createCardTemplate(contact)}` ) }
`; 