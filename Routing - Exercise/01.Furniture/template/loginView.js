import { authToken, container, loginUserURL } from '../utils/constants.js';
import { postLoginUser } from '../utils/api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const renderLogin = () => {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form id="login-form">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" @click=${OnSubmit}/>
            </div>
        </div>
    </form>`;
}

async function OnSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('login-form'));

    let body = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    try {
        await postLoginUser(loginUserURL, body);
        page.redirect('/');
    } catch (error) {
        alert('Invalid login! Credentials don\'t match.');
    }
}

export const loginView = (ctx, next) => {

    if(sessionStorage.getItem(authToken)) {
        page.redirect('/');
    }


    render(renderLogin(), container);
    next();
}