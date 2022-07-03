const authTokenKey = 'X-Autorization';

window.addEventListener('load', function() {
    let token = sessionStorage.getItem(authTokenKey);
     if(token) {
        window.location.href = '/05.Fisher-Game/index.html';
     }
});

async function RegisterRequest(data) {
    try {
        let response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (response.status == 403) {
            throw new Error('Invalid credentials!')
        }

            let responseData = await response.json();

            console.log(responseData);

            sessionStorage.setItem('email', responseData.email);
            sessionStorage.setItem(authTokenKey, responseData.accessToken);

            window.location.href = '/05.Fisher-Game/index.html';

    } catch (error) {
        let notificationParagraph = document.getElementsByClassName('notification')[0];;
        notificationParagraph.textContent = error;
    }

}

document.querySelector('#register-view button').addEventListener('click', function (e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('registerForm'));

    try {
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };
        if(!formData.get('email') || !validateEmail(formData.get('email')) || !formData.get('password') || !formData.get('rePass')) {
            throw new Error('Invalid credentials!')
        }

        let credentials = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
    
        RegisterRequest(credentials);
    } catch (error) {
        let notificationParagraph = document.getElementsByClassName('notification')[0];;
        notificationParagraph.textContent = error;
    }

   
});