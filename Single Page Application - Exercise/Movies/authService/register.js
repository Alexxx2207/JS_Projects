import { authToken, email, routesMovie, errorRegisterMsg } from '../constants.js';
import { router } from "../router.js";
import { updateAuth } from './authentication.js'

export function renderRegister() {
    document.getElementById('form-sign-up').style.display = 'block';
    document.getElementById('register-error').style.display = 'none';

    document.querySelector('#register-form button').addEventListener('click', function (e) {
        e.preventDefault();
        
        let data = getFormData();
        if(data.email && data.password && data.password.length >= 6 && data.password === data.repeatPassword) {
            sendRegisterRequest(data);
        } else {
            document.getElementById('register-error').textContent = errorRegisterMsg;
            document.getElementById('register-error').style.display = 'block';
        }
    });
}


function getFormData() {
    let formData = new FormData(document.getElementById('register-form'));

    let data = {
        email: formData.get('email'),
        password: formData.get('password'),
        repeatPassword: formData.get('repeatPassword')
    }

    return data;
}

async function sendRegisterRequest(data) {
    try {
        let response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status > 400) {
            throw new Error('Invalid register attempt!');
        }
        let responseBody = await response.json();

        sessionStorage.setItem(email, responseBody.email);
        sessionStorage.setItem(authToken, responseBody.accessToken);
        router(routesMovie.home);
        updateAuth();

    } catch (error) {
        document.getElementById('register-error').textContent = errorRegisterMsg;
        document.getElementById('register-error').style.display = 'block';
    }

}