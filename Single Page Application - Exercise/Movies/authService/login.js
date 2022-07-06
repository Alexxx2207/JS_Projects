import { authToken, email, routesMovie, InvalidLoginCredentials } from '../utils/constants.js';
import { router } from '../utils/router.js';
import { updateAuth } from './authentication.js';
import { sendLoginRequest } from "../utils/api.js";

export function renderLogin() {
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('login-error').style.display = 'none';

    document.querySelector('#form-login button').addEventListener('click', function (e) {
        e.preventDefault();
        sendRequest(getFormData());
    });
}

function getFormData() {
    let formData = new FormData(document.getElementById('login-form'));

    let data = [...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});

    return data;
}

async function sendRequest(data) {
    try {
        let response = await sendLoginRequest(data.email, data.password);

        let responseBody = await response.json();

        if(response.status == 403) {
            throw new Error(InvalidLoginCredentials);
        }

        sessionStorage.setItem(email, responseBody.email);
        sessionStorage.setItem(authToken, responseBody.accessToken);
        router(routesMovie.home);
        updateAuth();
    } catch (error) {
        document.getElementById('login-error').textContent = error;
        document.getElementById('login-error').style.display = 'block';
    }
}