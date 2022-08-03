import { html } from "../../node_modules/lit-html/lit-html.js"

const homeTemplate = (ctx) => html`
    <section id="home">
        <article class="hero layout">
            <img src="./assets/team.png" class="left-col pad-med">
            <div class="pad-med tm-hero-col">
                <h2>Welcome to Team Manager!</h2>
                <p>Want to organize your peers? Create and manage a team for free.</p>
                <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                <!--Guest visitors see the "Sign Up Now" button, while logged-in users see the "Browse Teams" buttons.-->
                ${
                    ctx.isAuthenticated ? 
                    html `<a href="/browseTeams" class="action cta">Browse Teams</a>`
                    :
                    html `<a href="/register" class="action cta">Sign Up Now</a>` 
                }
            </div>
        </article>
    </section>
`;

export const homeView = (ctx, next) => {
    
    ctx.render(homeTemplate.bind(null, ctx));

    next();
}