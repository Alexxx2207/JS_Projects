import page from '../../node_modules/page/page.mjs';
import { html } from '../../node_modules/lit-html/lit-html.js';
import { sendLoginRequest } from '../services/loginService.js';

function loginTemplate(ctx) {
    return html`
        <section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form id="login-form" class="main-form pad-large">
                        <div class="error">Error message.</div>
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In" @click=${sendLogin.bind({}, ctx)}}>
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>
    `;
}


async function sendLogin(ctx, e) {
    e.preventDefault();
    
    let formData = Object.fromEntries(new FormData(document.getElementById('login-form')));
    
    const errorMessageOnLoginRegisterForms = document.querySelector('div.error');
    errorMessageOnLoginRegisterForms.style.display = 'none';
    try {
        await sendLoginRequest(formData.email, formData.password);
        ctx.isAuthenticated = true;
        page.redirect('/myTeams');
    } catch (error) {
        errorMessageOnLoginRegisterForms.style.display = 'block';
    }

}

export const loginView = (ctx, next) => {

    ctx.render(loginTemplate.bind(null, ctx));
    const errorMessageOnLoginRegisterForms = document.querySelector('div.error');
    errorMessageOnLoginRegisterForms.style.display = 'none';

    next();
}