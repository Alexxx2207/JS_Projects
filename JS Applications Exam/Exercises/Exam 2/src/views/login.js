import { login } from "../api/users.js";
import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html`
    <section id="login-page" class="auth">
        <form @submit=${onSubmit} id="login">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" class="btn submit" value="Login">
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
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

        if(body.email  == '' || body.password == '')
        {
            return alert('Fields cannot be empty!');
        }
        
        await login(body.email, body.password);
        e.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}