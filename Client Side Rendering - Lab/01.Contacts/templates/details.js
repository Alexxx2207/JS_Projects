import { html } from '../node_modules/lit-html/lit-html.js';

export const createDetailsTemplate = (contact) => html`
    <div class="details" id=${contact.id}>
        <p>Phone number: ${contact.phoneNumber}</p>
        <p>Email: ${contact.email}</p>
    </div>
`;