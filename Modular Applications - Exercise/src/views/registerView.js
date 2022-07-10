import { html } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'; 
import { sendRegisterRequest } from '../services/registerService.js';

function registerTemplate(ctx) {
    return html `
    
    <section id="register">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Register</h1>
                    </header>
                    <form id="register-form" class="main-form pad-large">
                        <div class="error">Error message.</div>
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Username: <input type="text" name="username"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <label>Repeat: <input type="password" name="repass"></label>
                        <input class="action cta" type="submit" value="Create Account"  @click=${sendRegister.bind({}, ctx)}>
                    </form>
                    <footer class="pad-small">
                        Already have an account? <a href="/login" class="invert">Sign in here</a>
                    </footer>
                </article>
            </section>`;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

async function sendRegister(ctx, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(document.getElementById('register-form')));

    const errorMessageOnLoginRegisterForms = document.querySelector('div.error');
    errorMessageOnLoginRegisterForms.style.display = 'none';
    try {

        if(!(validateEmail(formData.email) && formData.username.length >= 3 &&
         formData.password.length >= 3 && formData.repass === formData.password)) {
            throw new Error();  
         }

        await sendRegisterRequest(formData.email, formData.password, formData.username);
        ctx.isAuthenticated = true;
        page.redirect('/myTeams');
    } catch (error) {
        errorMessageOnLoginRegisterForms.style.display = 'block';
    }
}

export const registerView = (ctx, next) => {

    ctx.render(registerTemplate.bind({}, ctx));

    const errorMessageOnLoginRegisterForms = document.querySelector('div.error');
    errorMessageOnLoginRegisterForms.style.display = 'none';
    
    next();
}