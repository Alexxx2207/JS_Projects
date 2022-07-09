import { render, html } from '../node_modules/lit-html/lit-html.js';
import { postRegisterUser } from '../utils/api.js';
import { authToken, registerUserURL, container } from '../utils/constants.js';
import page from '../node_modules/page/page.mjs';

const createRegisterForm = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form id="registerForm">
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
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" @click=${OnSubmit} />
            </div>
        </div>
    </form>
`;

async function OnSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('registerForm'));

    let body = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    try {
        await postRegisterUser(registerUserURL, body);
        page.redirect('/');
    } catch (error) {
        alert('Invalid regitser! User may already exists!');
    }
}


export const registerView = (ctx, next) => {

    if(sessionStorage.getItem(authToken)) {
        page.redirect('/');
    }

    render(createRegisterForm(), container);

    next();
}