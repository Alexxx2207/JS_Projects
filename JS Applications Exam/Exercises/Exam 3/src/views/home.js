import { html } from '../lib.js';
import { getAllPosts } from '../api/posts.js';


const postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=".${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/posts/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

const homeTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    ${posts.length > 0 ?
    html`
    <div class="all-posts">
        ${posts.map(postTemplate)}
    </div>`
    :
    html`<h1 class="title no-posts-title">No posts yet!</h1>`
    }
</section>`;

export const homeView = async (ctx) => {
    const posts = await getAllPosts();

    ctx.render(homeTemplate(posts));
}