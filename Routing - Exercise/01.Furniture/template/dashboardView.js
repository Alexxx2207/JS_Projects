import { render, html } from '../node_modules/lit-html/lit-html.js';
import { getAllFurnitures } from '../utils/api.js';
import { furnitureCatalogURL, container } from '../utils/constants.js';

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
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(furniture => html`${renderFurniture(furniture)}`)}
        </div>
    </div>
    `;
}

export const dashboardView = async (ctx, next) => {
    let htmlToRender = renderAllFurnitures(await getAllFurnitures(furnitureCatalogURL));

    render(htmlToRender, container)
    next();
}