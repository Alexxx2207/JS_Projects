import { render, html } from '../node_modules/lit-html/lit-html.js';
import { getMyFurnitures, getUserDetails } from '../utils/api.js';
import { userFurnitureURL, container } from '../utils/constants.js';
import page from '../node_modules/page/page.mjs';


function renderFurniture(furniture) {
    return html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${furniture.img} />
                <p>${furniture.description}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                <div>
                    <a href='/details/${furniture._id}' class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;
};

function renderAllFurnitures(furnitures) {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(furniture => html`${renderFurniture(furniture)}`)}
        </div>
    </div>
    `;
}

export const myFurnituresView = async (ctx, next) => {

    try {
        let user = await getUserDetails();
        let url = userFurnitureURL.replace('{userId}', user._id);

        let htmlToRender = renderAllFurnitures(await getMyFurnitures(url));

        render(htmlToRender, container);
    } catch (error) {
        page.redirect('/login');
    }

    next();
}