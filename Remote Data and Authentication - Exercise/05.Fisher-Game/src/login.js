const authTokenKey = 'X-Autorization';

window.addEventListener('load', function() {
    let token = sessionStorage.getItem(authTokenKey);
     if(token) {
        window.location.href = '/05.Fisher-Game/index.html';
     }
});

async function LoginRequest(data) {
    try {
        let response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (response.status == 403) {
            throw new Error('Invalid credentials!')
        }

        let responseData = await response.json();

        sessionStorage.setItem('email', responseData.email);
        sessionStorage.setItem(authTokenKey, responseData.accessToken);

        window.location.href = '/05.Fisher-Game/index.html';
    } catch (error) {
        let notificationParagraph = document.getElementsByClassName('notification')[0];
        notificationParagraph.textContent = error;
    }

}

document.querySelector('#login-view button').addEventListener('click', function (e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('loginForm'));

    let credentials = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    LoginRequest(credentials);
});