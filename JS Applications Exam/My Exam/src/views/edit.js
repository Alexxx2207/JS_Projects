import { html } from '../lib.js';
import { getOfferById, updateOffer } from '../api/offers.js';

const editTemplate = (offer, onSubmit) => html`
<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value="${offer.title}"
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value="${offer.imageUrl}"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value="${offer.category}"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value="${offer.description}"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value="${offer.requirements}"
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value="${offer.salary}"
      />
      <button type="submit">post</button>
    </form>
  </div>
</section>`

export const editView = async (ctx) => {
    const offer = await getOfferById(ctx.params.id);

    ctx.render(editTemplate(offer, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = {
            title: formData.get('title').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            category: formData.get('category').trim(),
            description: formData.get('description').trim(),
            requirements: formData.get('requirements').trim(),
            salary: formData.get('salary').trim(),
        }

        if(!Object.values(body).some(x => !x)) {
            await updateOffer(ctx.params.id, body);

            e.target.reset();
            ctx.page.redirect(`/details/${ctx.params.id}`);
        }
    }
}