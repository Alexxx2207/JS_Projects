import { getUserData } from './utils.js';
import { page, render } from './lib.js';

import { homeView } from './views/home.js';

import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logout } from './api/users.js';

import { detailsView } from './views/details.js';
import { allGamesView } from './views/catalog.js';
import { createView } from './views/create.js';
import { editView } from './views/edit.js';

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', logoutUser)

page(decorateContext);
page('/', homeView);
page('/catalog', allGamesView);
page('/games/:id', detailsView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/edit/:id', editView);


//Application start
page.start();
updateNav();

function updateNav() {
    const userData = getUserData();

    if (userData) {
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(templateInMain) {
    render(templateInMain, main);
}

function logoutUser() {
    logout();
    updateNav();
    page.redirect('/');
}