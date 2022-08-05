import { html } from '../lib.js';
import { register } from '../api/users.js';

const registerTemplate = (onSubmit) => html`
<section id="registerPage">
    <form class="registerForm" @submit=${onSubmit}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>
        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>
        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>
        <button class="btn" type="submit">Register</button>
        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>`;

export const registerView = (ctx) => {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = {
            email: formData.get('email'),
            password: formData.get('password'),
            repeatPassword: formData.get('repeatPassword'),
        }

        if(Object.values(body).some(x => !x)) {
            return alert('All fields must be filled!');
        }

        if(body.password != body.repeatPassword) {
            return alert('Passwords don\'t match!');
        }

        await register(body.email, body.password);
        e.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}