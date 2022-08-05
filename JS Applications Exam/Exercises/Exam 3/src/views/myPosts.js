import { html } from '../lib.js';
import { getPostsByUserId } from '../api/posts.js';
import { getUserData } from '../utils.js';

const postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=".${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/posts/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

const myPostsTemplate = (posts) => html`
<section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            ${posts.length > 0 ?
            html`
             <div class="my-posts">
                ${posts.map(postTemplate)}
            </div>`
            :
            html`
            <h1 class="title no-posts-title">You have no posts yet!</h1>`    
        }
        </section>`;

export const myPostsView = async (ctx) => {

    const userData = await getUserData();

    const posts = await getPostsByUserId(userData.id);
    
    ctx.render(myPostsTemplate(posts));
}