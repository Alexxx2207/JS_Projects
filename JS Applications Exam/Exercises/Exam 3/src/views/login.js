import { html } from '../lib.js';
import { login } from '../api/users.js';


const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>`;

export const loginView = (ctx) => {

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = Object.fromEntries(formData);

        if(body.email == '' || body.password == '') {
            return alert('The fields cannot be empty!');
        }

        try {
            await login(body.email, body.password)
            ctx.updateNav();
            ctx.page.redirect('/');
        } catch (error) {
            return alert(error.message);
        }
    }
}