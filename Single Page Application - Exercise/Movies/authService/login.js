import { authToken, email, routesMovie, errorLoginMsg } from '../constants.js';
import { router } from '../router.js';
import { updateAuth } from './authentication.js'

export function renderLogin() {
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('login-error').style.display = 'none';

    document.querySelector('#form-login button').addEventListener('click', function (e) {
        e.preventDefault();
        sendLoginRequest(getFormData());
    });
}

function getFormData() {
    let formData = new FormData(document.getElementById('login-form'));

    let data = [...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});

    return data;
}

async function sendLoginRequest(data) {
    try {
        let response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status > 400) {
            throw new Error('Invalid login attempt!');
        }
        let responseBody = await response.json();

        sessionStorage.setItem(email, responseBody.email);
        sessionStorage.setItem(authToken, responseBody.accessToken);
        router(routesMovie.home);
        updateAuth();
    } catch (error) {
        document.getElementById('login-error').textContent = errorLoginMsg;
        document.getElementById('login-error').style.display = 'block';
    }
}