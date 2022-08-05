import { html } from '../lib.js';
import { login } from '../api/users.js';

const loginTemplate = (onSubmit) => html`
<section id="loginPage">
            <form class="loginForm" @submit=${onSubmit}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>`;

export const loginView = (ctx) => {

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        if(Object.values(body).some(x => !x)) {
            return alert('All fields must be filled!');
        }

        await login(body.email, body.password);
        e.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}