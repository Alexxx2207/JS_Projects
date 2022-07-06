import { renderHome } from '../home.js';
import { renderLogin } from '../authService/login.js';
import { logout } from '../authService/logout.js';
import { renderRegister } from '../authService/register.js';
import { renderAddMovie } from '../moviesService/addMovie.js';
import { renderEditMovie } from '../moviesService/editMovie.js';
import { routesMovie } from './constants.js';
import { updateAuth } from '../authService/authentication.js'

let routes = {};

routes[routesMovie.home] = renderHome;
routes[routesMovie.login] = renderLogin;
routes[routesMovie.logout] = logout;
routes[routesMovie.register] = renderRegister;
routes[routesMovie.addMovie] = renderAddMovie;
routes[routesMovie.editMovie] = renderEditMovie;

export function router(path) {
    hideContent();
    clearInputs();

    routes[path]();
    updateAuth();
}

function hideContent() {
    Array.from(document.querySelectorAll('section')).forEach(section => section.style.display = 'none');
}

function clearInputs() {
    Array.from(document.querySelectorAll('input, textarea')).forEach(section => section.value = '');
}
