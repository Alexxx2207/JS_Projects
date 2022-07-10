import { html } from '../../node_modules/lit-html/lit-html.js';


function showGuestNav() {
    return html `
        <div id="guest">
            <a href="/login" class="action">Login</a>
            <a href="/register" class="action">Register</a>
        </div>
    `;
}

function showUserNav() {
    return html `
        <div id="user">
            <a href="/myTeams" class="action">My Teams</a>
            <a href="/logout" class="action">Logout</a>
        </div>
    `;
}

export const navigationTemplate = (ctx) => {
    return html`
    <nav>
        <a href="/" class="site-logo">Team Manager</a>
        <div id="navButtons">
            <a href="/browseTeams" class="action">Browse Teams</a>
            ${
                ctx.isAuthenticated ? 
                showUserNav() 
                :
                showGuestNav()
            }
        </div>
    </nav>`;
}