import { html } from '../lib.js';
import {
    getTheaterById,
    deleteTheaterById,
    createTheaterLike,
    getTheaterLikes,
    getTheaterLikeByUserId
} from '../api/theaters.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (theater,userData, onDelete, theaterLikes, displayLikeButton, onLike) => html`
<section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${theater.title}</h1>
                    <div>
                        <img src="${theater.imageUrl}" />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${theater.description}</p>
                    <h4>Date: ${theater.date}</h4>
                    <h4>Author: ${theater.author}</h4>
                    <div class="buttons">
                        ${theater._ownerId == userData?.id ? 
                            html`
                            <a class="btn-delete" href="#" @click=${onDelete}>Delete</a>
                            <a class="btn-edit" href="/edit/${theater._id}">Edit</a>
                            <a style='display:none' class="btn-like" href="#">Like</a>`
                            :
                            userData && displayLikeButton != 1 ?
                                html` <a class="btn-like" href="#" @click=${onLike}>Like</a>` 
                                :
                                html`<a style='display:none' class="btn-like" href="#" @click=${onLike}>Like</a>`
                        }
                    </div>
                    <p class="likes">Likes: ${theaterLikes}</p>
                </div>
            </div>
        </section>`;

export async function detailsView(ctx) {
    const theater = await getTheaterById(ctx.params.id);
    
    const userData = getUserData();

    const theaterLikes = await getTheaterLikes(ctx.params.id);

    const displayLikeButton = await getTheaterLikeByUserId(ctx.params.id, userData?.id) >= 1;

    ctx.render(detailsTemplate(theater, userData, onDelete, theaterLikes, displayLikeButton,  onLike));

    async function onDelete(event) {
        event.preventDefault();

        confirm('Are you sure you want to delete this theater?');

        await deleteTheaterById(ctx.params.id);
        ctx.page.redirect('/profile');
    }
    
    async function onLike(event) {
        event.preventDefault();

        document.querySelector('.btn-like').style.display = 'none';

        const newLikesCount = Number(document.querySelector('.likes').textContent.split(' ')[1]) + 1;
        document.querySelector('.likes').textContent = `Likes: ${newLikesCount}`;

        await createTheaterLike(ctx.params.id);
    }
}