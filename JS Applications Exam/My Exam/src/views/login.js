import { html } from '../lib.js';
import { login } from '../api/users.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${onSubmit}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export const loginView = (ctx) => {

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        if(Object.values(body).some(x => !x)) {
            return window.alert('Fields cannot be empty!');
        }

        await login(body.email, body.password);
        e.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/dashboard');
    }
}