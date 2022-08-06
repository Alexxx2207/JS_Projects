import { html } from '../lib.js';
import { createOffer } from '../api/offers.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form class="create-form" @submit=${onSubmit}>
          <input
            type="text"
            name="title"
            id="job-title"
            placeholder="Title"
          />
          <input
            type="text"
            name="imageUrl"
            id="job-logo"
            placeholder="Company logo url"
          />
          <input
            type="text"
            name="category"
            id="job-category"
            placeholder="Category"
          />
          <textarea
            id="job-description"
            name="description"
            placeholder="Description"
            rows="4"
            cols="50"
          ></textarea>
          <textarea
            id="job-requirements"
            name="requirements"
            placeholder="Requirements"
            rows="4"
            cols="50"
          ></textarea>
          <input
            type="text"
            name="salary"
            id="job-salary"
            placeholder="Salary"
          />
          <button type="submit">post</button>
        </form>
    </div>
</section>`;

export const createView = (ctx) => {

    ctx.render(createTemplate(onSubmit));

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
            await createOffer(body);

            e.target.reset();
            ctx.page.redirect('/dashboard');
        }
    }
}