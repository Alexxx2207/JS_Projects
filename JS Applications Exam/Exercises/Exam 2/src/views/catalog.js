import { html } from '../lib.js';
import { getAllGamesForCatalog } from '../api/games.js';

const gameTemplate = (game) => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src=".${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/games/${game._id}" class="details-button">Details</a>
        </div>
    </div>`;

const allGames = (games) => html`
    <section id="catalog-page">
        <h1>All Games</h1>
        ${games.length > 0 ?
            games.map(gameTemplate)    
        :
            html`<h3 class="no-articles">No articles yet</h3>`
        }
    </section>`;

export const allGamesView = async (ctx) => {
    const games = await getAllGamesForCatalog();
    
    ctx.render(allGames(games));
}