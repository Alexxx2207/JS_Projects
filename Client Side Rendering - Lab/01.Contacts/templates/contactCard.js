import { html } from '../node_modules/lit-html/lit-html.js';
import { createDetailsTemplate } from './details.js';

export const createCardTemplate = (contact) => html`
    <div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" @click=${(e) => openCloseDetails(e)}>Details</button>
        ${createDetailsTemplate(contact)}
    </div>
    </div>
`;

function openCloseDetails(e) {
    let detailsDialog = e.currentTarget.parentElement.querySelector('.details');
    let displayValue = detailsDialog.style.display;

    displayValue == 'block' ? 
    displayValue = 'none' :
    displayValue = 'block';

    detailsDialog.style.display = displayValue;
}