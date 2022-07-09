import page from './node_modules/page/page.mjs';
import { authToken } from './utils/constants.js';
import { registerView } from './template/registerView.js';
import { dashboardView } from './template/dashboardView.js';
import { loginView } from './template/loginView.js';
import { logoutView } from './template/logoutView.js';
import { createFurnitureView } from './template/createFurnitureView.js';
import { detailsFurnitureView } from './template/detailsFurnitureView.js';
import { myFurnituresView } from './template/myFurnituresView.js';
import { editView } from './template/editView.js';

page('/', dashboardView, loadNavigation);
page('/dashboard', dashboardView, loadNavigation);
page('/register', registerView, loadNavigation);
page('/login', loginView, loadNavigation);
page('/logout', logoutView, dashboardView);
page('/create', createFurnitureView, loadNavigation);
page('/details/:id', detailsFurnitureView, loadNavigation);
page('/my-furniture', myFurnituresView, loadNavigation);
page('/edit/:id', editView, loadNavigation);

page.start();

function loadNavigation(ctx, next) {

    const guestNav = document.getElementById('guest');
    const userNav = document.getElementById('user');

    const token = sessionStorage.getItem(authToken);

    if (token) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline';
    }

    let activeAnchor = document.querySelector('nav a[class="active"]');

    activeAnchor.classList.remove('active');

    let newActiveAnchor = document.querySelector(`nav a[href="${ctx.pathname}"]`);
    newActiveAnchor.classList.add('active');
}