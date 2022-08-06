import { html } from '../lib.js';
import {
    getOfferById,
    deleteOffer,
    createOfferApplication,
    getUserOfferApplications,
    getOfferApplications
} from '../api/offers.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (offer, onDelete, isLoggedInUser, isOwner, applications, userOfferApplications, onApplyClick) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${offer.imageUrl}" alt="example1" />
    <p id="details-title">${offer.title}</p>
    <p id="details-category">
      Category: <span id="categories">${offer.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${offer.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span
          >${offer.description}</span
        >
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span
          >${offer.requirements}</span
        >
      </div>
    </div>
    <p>Applications: <strong id="applications">${applications}</strong></p>

    <div id="action-buttons">
    ${isLoggedInUser ?
            isOwner ?
                html`
                <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`
            :
                userOfferApplications == 0 ?
                    html`<a href="" id="apply-btn" @click=${onApplyClick}>Apply</a>`
                :
                ''
        : 
        ''
    }
    </div>
  </div>
</section>`;

export const detailsView = async (ctx) => {

    const offer = await getOfferById(ctx.params.id);

    const user = getUserData();

    let isLoggedInUser = user !== null && user !== undefined;

    let isOwner = user && user.id == offer._ownerId;

    let applications = await getOfferApplications(ctx.params.id);
    let userOfferApplications = await getUserOfferApplications(ctx.params.id, user?.id);

    ctx.render(detailsTemplate(offer, onDelete, isLoggedInUser, isOwner, applications, userOfferApplications, onApplyClick));

    async function onDelete(e) {
        e.preventDefault();

        const confirm = window.confirm('Are you sure?');

        if(confirm) {
            await deleteOffer(ctx.params.id);

            ctx.page.redirect('/dashboard');
        }
    }
   
    async function onApplyClick(e) {
        e.preventDefault();


       await createOfferApplication(ctx.params.id);

        applications = await getOfferApplications(ctx.params.id);
        userOfferApplications = await getUserOfferApplications(ctx.params.id, user.id);

        ctx.render(detailsTemplate(offer, onDelete, isLoggedInUser, isOwner, applications, userOfferApplications, onApplyClick));

    }
}