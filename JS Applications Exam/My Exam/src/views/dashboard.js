import { html } from '../lib.js';
import { getAllOffers } from '../api/offers.js';

const offerTemplate = (offer) => html`
<div class="offer">
    <img src="${offer.imageUrl}" alt="example1" />
    <p>
      <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
</div>`;

const dashboardTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>

    ${offers.length == 0 ?
        html`<h2>No offers yet.</h2>`    
    :
        offers.map(offerTemplate)
    }
</section>`;

export const dashboardView = async (ctx) => {
    const offers = await getAllOffers();

    ctx.render(dashboardTemplate(offers));
}