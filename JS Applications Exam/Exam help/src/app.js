import { getUserData } from './utils.js';
import { page, render } from './lib.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logout } from './api/users.js';
import { createView } from './views/create.js';
import { editView } from './views/edit.js';

const main = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', logoutUser)

page(decorateContext);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/edit/:id', editView);


//Application start
page.start();
updateNav();

function updateNav() {
    const userData = getUserData();

    if(userData) {
       
    } else {
        
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