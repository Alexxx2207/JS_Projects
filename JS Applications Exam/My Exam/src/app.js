import { getUserData } from './utils.js';
import { page, render } from './lib.js';
import { homeView } from './views/home.js';
import { dashboardView } from './views/dashboard.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logout } from './api/users.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logoutUser)

page(decorateContext);
page('/', homeView);
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);


//Application start
page.start();
updateNav();

function updateNav() {
    const userData = getUserData();

    if(userData) {
       document.querySelector('.guest').style.display = 'none';
       document.querySelector('.user').style.display = '';
    } else {
        document.querySelector('.guest').style.display = '';
        document.querySelector('.user').style.display = 'none';
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