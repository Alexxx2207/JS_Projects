import { deleteGameById, getGameById, getGameComments, createGameComment } from "../api/games.js";
import { html } from '../lib.js';
import { getUserData } from "../utils.js";

const commentTemplate = (comment) => html`
    <li class="comment">
        <p>${comment.comment}</p>
    </li>`;

const gameTemplate = (game, isOwner, onDelete, userData, comments, createGameComment) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">

            <div class="game-header">
                <img class="game-img" src="${game.imageUrl}" />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>

            <p class="text">
                ${game.summary}
            </p>

            <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length > 0 ?
                    html`<ul>
                        ${comments.map(commentTemplate)}
                    </ul>`
                    :
                    html`<p class="no-comment">No comments.</p>`
                }
            </div>

            ${isOwner ? 
                html`<div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a href="#" @click=${onDelete} class="button">Delete</a>
                </div>`
                :
                ''
            }
        </div>
        ${userData ? 
            html`<article class="create-comment">
                <label>Add new comment:</label>
                <form  @submit=${createGameComment} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
            :
            ''
        }
        
    </section>`;

export const detailsView = async (ctx) => {
    const game = await getGameById(ctx.params.id);
    const comments = await getGameComments(ctx.params.id);

    const userData = getUserData();

    ctx.render(gameTemplate(game, userData?.id == game._ownerId, onDelete,userData, comments, createGame));

    async function onDelete() {
        await deleteGameById(ctx.params.id);
        ctx.page.redirect('/');
    }
    
    async function createGame(e) {
        e.preventDefault();


        const formData = new FormData(e.target);

        const body = {
            gameId: ctx.params.id,
            comment: formData.get('comment'),
        }

        if(body.comment == '') {
            
            return alert('Fields cannot be empty!');
        }
        await createGameComment(body);
        ctx.page.redirect(`/games/${ctx.params.id}`);
    }
}