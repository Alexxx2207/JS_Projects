import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getMyTeams } from '../services/teamsService.js';


function teamTemplate(team) {
    return html `
    <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
            </div>
        </article>
    `;
}

function browseTeamsTemplate(teams, ctx) {
    return html`
    
    <section id="browse">
    
        <article class="pad-med">
            <h1>My Team Browser</h1>
        </article>

        ${ctx.isAuthenticated ?
             html`<article class="layout narrow">
                    <div class="pad-small"><a href="/createTeam" class="action cta">Create Team</a></div>
                </article>` 
                :
                nothing
        }
    
        ${teams.map(team => teamTemplate(team))}
        
    </section>`;
}

export const getMyTeamsView = async (ctx, next) => {
    let teams = await getMyTeams(ctx.user.userId);
    ctx.render(browseTeamsTemplate.bind({}, teams, ctx));
    next();
}