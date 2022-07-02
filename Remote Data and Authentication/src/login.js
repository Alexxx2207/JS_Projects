import authenticationTokenKey from './constants.js';


function getFormData() {
    let formElement = document.querySelector('form');

    let formData = new FormData(formElement);

    return {
        email: formData.get('email'),
        password: formData.get('password'),
    };
}

async function HandleLoginClick(data) {
    try {

        let response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (response.status == 403) {
            throw new Error("Invalid credentials!")
        }

        let responseData = await response.json();

        sessionStorage.setItem(authenticationTokenKey, responseData.accessToken);

        window.location.href = "index.html";

    } catch (error) {
        console.log(error);
    }
}

document.querySelector('input[type="submit"]').addEventListener('click', async function (e) {
    e.preventDefault();

    let inputData = getFormData();

    await HandleLoginClick(inputData);
});