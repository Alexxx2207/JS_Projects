import { html, render } from '../node_modules/lit-html/lit-html.js';
import { authToken, container, furnitureIdURL } from '../utils/constants.js';
import { getFurnitureById, checkUserIsOwner, deleteFurniture } from '../utils/api.js';
import page from '../node_modules/page/page.mjs';

async function renderFurniture(furniture) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${furniture.img.includes('http') ? furniture.img : `../${furniture.img.substring(2)}`} />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            <p>Material: <span>${furniture.material ? furniture.material : 'Not Provided'}</span></p>
            ${await checkOwner(furniture._ownerId) ?
             html `
                <div>
                    <a href='/edit/${furniture._id}' class="btn btn-info">Edit</a>
                    <a class="btn btn-red" @click=${delFuniture.bind({}, furniture._id)}>Delete</a>
                </div>
            ` : ``}
        </div>
    </div>
    `;
}

async function delFuniture(id) {
    let url = furnitureIdURL.replace(':id', id);

    await deleteFurniture(url);

    page.redirect('/dashboard');
    
}

async function checkOwner(_ownerid) {

    return await checkUserIsOwner(_ownerid);
}

export const detailsFurnitureView = async (ctx, next) => {

    if(sessionStorage.getItem(authToken)) {
    let furniture = await getFurnitureById(furnitureIdURL, ctx.params.id);

    render(await renderFurniture(furniture), container);

    next();
    } else {
        page.redirect('/login');
    }
}