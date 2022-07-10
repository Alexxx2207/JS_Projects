import { html } from '../../node_modules/lit-html/lit-html.js';
import { createTeam } from '../services/teamsService.js';
import page from '../../node_modules/page/page.mjs';

function createFormTemplate() {
    return html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form id="create-form" class="main-form pad-large">
                <div class="error">Error message.</div>
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team" @click=${OnSubmit}>
            </form>
        </article>
    </section>
    `;
}

async function OnSubmit(e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(document.getElementById('create-form')));

    const errorMessageOnLoginRegisterForms = document.querySelector('div.error');
    errorMessageOnLoginRegisterForms.style.display = 'none';
    try {
        if(!(formData.name.length >= 4 && formData.logoUrl && formData.description.length >= 10)) {
            throw new Error();
        }

        let team = await createTeam(formData);
        page.redirect(`/myTeams`);

    } catch (error) {
        errorMessageOnLoginRegisterForms.style.display = 'block';
    }
}

export const createTeamView = (ctx, next) => {

    ctx.render(createFormTemplate);
    const errorMessageOnLoginRegisterForms = document.querySelector('div.error');
    errorMessageOnLoginRegisterForms.style.display = 'none';

    next();
}