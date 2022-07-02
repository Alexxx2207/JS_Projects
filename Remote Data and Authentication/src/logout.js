import authenticationTokenKey from './constants.js';

async function logout() {
    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': sessionStorage.getItem(authenticationTokenKey),
        }
    });

    sessionStorage.removeItem(authenticationTokenKey);

    window.location.reload(true);
}

export default logout;