import { html } from '../lib.js';
import { register } from '../api/users.js';


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="auth">
            <form @submit=${onSubmit} id="register">
                <h1 class="title">Register</h1>

                <article class="input-group">
                    <label for="register-email">Email: </label>
                    <input type="email" id="register-email" name="email">
                </article>

                <article class="input-group">
                    <label for="register-password">Password: </label>
                    <input type="password" id="register-password" name="password">
                </article>

                <article class="input-group">
                    <label for="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword">
                </article>

                <input type="submit" class="btn submit-btn" value="Register">
            </form>
        </section>`;

export const registerView = (ctx) => {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = Object.fromEntries(formData)

        if(body.email == '' || body.password == '' || body.repeatPassword == '') {
            return alert('The fields cannot be empty!');
        }

        if(body.password != body.repeatPassword) {
            return alert('Passwords don\'t match!');
        }

        console.log(body.email);

        try {
            await register(body.email, body.password)
            ctx.updateNav();
            ctx.page.redirect('/');
        } catch (error) {
            return alert(error.message);
        }
    }
}