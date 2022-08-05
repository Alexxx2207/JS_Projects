import { html } from '../lib.js';
import {
    getPostById,
    deletePost,
    createPostDonation,
    getPostDonationByUser,
    getPostDonations
} from '../api/posts.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (post, onDelete, onDonate, isOwner, showDonationButton, donations) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=".${post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                <div class="btns">
                    ${ isOwner ? 
                        html`
                        <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>`
                    :
                        html`
                            ${showDonationButton ? 
                                html`<a href="javascript:void(0)" @click=${onDonate} class="donate-btn btn">Donate</a>`
                            :
                                ''
                            }`
                    }
                </div>
            </div>
        </div>
    </div>
</section>`;

export const detailsView = async (ctx) => {
    let post = await getPostById(ctx.params.id);

    let userData = getUserData();

    let showDonations = userData && (await getPostDonationByUser(ctx.params.id, userData?.id)) == 0;

    let donations = await getPostDonations(ctx.params.id);

    ctx.render(detailsTemplate(
        post,
        onDelete,
        onDonate,
        userData?.id == post._ownerId,
        showDonations,
        donations
        ));

    async function onDelete(e) {
        e.preventDefault();

        try {
            if (confirm('Are you sure you want to delete this post?')) {
                await deletePost(ctx.params.id)
                ctx.page.redirect('/');
            }
        } catch (error) {
            return alert(error.message);
        }
    }

    async function onDonate(e) {
        e.preventDefault();

        try {
            await createPostDonation(ctx.params.id);

            document.querySelector('.donate-btn.btn').style.display = 'none';

            let newDonationCount = Number(document.querySelector('.donate-Item').textContent.split(' ')[2]) + 1;

            document.querySelector('.donate-Item').textContent = `Donate Materials: ${newDonationCount}`;

        } catch (error) {
            return alert(error.message)
        }

    }
}