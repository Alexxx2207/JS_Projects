import { authToken, email, routesMovie, InvalidRegisterCredentials } from '../utils/constants.js';
import { router } from "../utils/router.js";
import { updateAuth } from './authentication.js';
import { sendRegisterRequest } from "../utils/api.js";


export function renderRegister() {
    document.getElementById('form-sign-up').style.display = 'block';
    document.getElementById('register-error').style.display = 'none';

    document.querySelector('#register-form button').addEventListener('click', function (e) {
        e.preventDefault();
        
        let data = getFormData();
        if(data.email && data.password && data.password.length >= 6 && data.password === data.repeatPassword) {
            sendRequest(data);
        } else {
            document.getElementById('register-error').textContent = InvalidRegisterCredentials;
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

async function sendRequest(data) {
    try {
        let response = await sendRegisterRequest(data.email, data.password);

        if (response.status >= 400) {
            throw new Error(InvalidRegisterCredentials);
        }
        let responseBody = await response.json();

        sessionStorage.setItem(email, responseBody.email);
        sessionStorage.setItem(authToken, responseBody.accessToken);
        router(routesMovie.home);
        updateAuth();

    } catch (error) {
        document.getElementById('register-error').textContent = error;
        document.getElementById('register-error').style.display = 'block';
    }

}