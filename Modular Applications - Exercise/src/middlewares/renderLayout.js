import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';

const layoutTemplate = (ctx, mainContent) => {
    return html `
        <header id="titlebar" class="layout">
           ${navigationTemplate(ctx)}
        </header>
        <main>
            ${mainContent()}
        </main>
        <footer id="footer">
            SoftUni &copy; 2014-2021
        </footer>
    `;
}

const root = document.getElementById('root');

export const renderLayout = (ctx, next) => {
    ctx.render = (mainContent) => render(layoutTemplate(ctx, mainContent), root);

    next();
}