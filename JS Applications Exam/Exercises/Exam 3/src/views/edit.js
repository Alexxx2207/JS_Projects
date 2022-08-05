import { html } from '../lib.js';
import { getPostById, updatePost } from '../api/posts.js';

const editTemplate = (post, onSubmit) => html`
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value="${post.title}">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value="${post.description}">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value="${post.imageUrl}">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value="${post.address}">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value="${post.phone}">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>`;

export const editView = async (ctx) => {
    const post = await getPostById(ctx.params.id);

    ctx.render(editTemplate(post, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = Object.fromEntries(formData);

        if(Object.values(body).some(p => p == '')) {
            return alert('All fields must be filled!');
        }

        try {
            await updatePost(ctx.params.id, body);
            ctx.page.redirect(`/posts/${ctx.params.id}`);
        } catch (error) {
            return alert(error.message)
        }
    }

}

