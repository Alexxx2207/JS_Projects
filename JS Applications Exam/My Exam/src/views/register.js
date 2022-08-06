import { html } from '../lib.js';
import { register } from '../api/users.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${onSubmit}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`;

export const registerView = (ctx) => {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = {
            email: formData.get('email'),
            password: formData.get('password'),
            repass: formData.get('re-password'),
        };

        if(Object.values(body).some(x => !x)) {
            return window.alert('Fields cannot be empty!');
        }

        if(body.password != body.repass) {
          return window.alert('Passwords don\'t match!');

        }

        await register(body.email, body.password);
        e.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/dashboard');
    }
}