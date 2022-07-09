import { html, render } from '../node_modules/lit-html/lit-html.js';
import { container, furnitureCatalogURL } from '../utils/constants.js';
import { postFurniture } from '../utils/api.js';
import page from '../node_modules/page/page.mjs';

function renderCreateForm() {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form id="createFurnitureForm">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" @click=${OnSubmit} />
            </div>
        </div>
    </form>
    `;
}

function OnSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('createFurnitureForm'));

    let body = {
        make: formData.get('make'),
        model: formData.get('model'),
        year: formData.get('year'),
        description: formData.get('description'),
        price: formData.get('price'),
        img: formData.get('img'),
        material: formData.get('material'),
    };

    if (body.make.length > 3 && body.model.length > 3 && body.year >= 1950 && body.year <= 2050 &&
        body.description.length > 10 && body.price > 0 && body.img) {
        postFurniture(furnitureCatalogURL, body);

        page.redirect('/');
    } else {
        checkFields(body);
    }
}

export const createFurnitureView = (ctx, next) => {
    render(renderCreateForm(), container)
    next();
}

function checkFields(body) {
    const createForm = document.getElementById('createFurnitureForm');

    const isInvalid = 'is-invalid';
    const isValid = 'is-valid';

    if (body.make.length > 3) {
        createForm.querySelector('#new-make').classList.remove(isInvalid);
        createForm.querySelector('#new-make').classList.add(isValid);
    } else {
        createForm.querySelector('#new-make').classList.add(isInvalid);
        createForm.querySelector('#new-make').classList.remove(isValid);
    }

    if (body.model.length > 3) {
        createForm.querySelector('#new-model').classList.remove(isInvalid);
        createForm.querySelector('#new-model').classList.add(isValid);
    } else {
        createForm.querySelector('#new-model').classList.add(isInvalid);
        createForm.querySelector('#new-model').classList.remove(isValid);
    }

    if (body.img) {
        createForm.querySelector('#new-image').classList.remove(isInvalid);
        createForm.querySelector('#new-image').classList.add(isValid);
    } else {
        createForm.querySelector('#new-image').classList.add(isInvalid);
        createForm.querySelector('#new-image').classList.remove(isValid);
    }
    
    if (body.year >= 1950 && body.year <= 2050) {
        createForm.querySelector('#new-year').classList.remove(isInvalid);
        createForm.querySelector('#new-year').classList.add(isValid);
    } else {
        createForm.querySelector('#new-year').classList.add(isInvalid);
        createForm.querySelector('#new-year').classList.remove(isValid);
    }
    
    if (body.description.length > 10) {
        createForm.querySelector('#new-description').classList.remove(isInvalid);
        createForm.querySelector('#new-description').classList.add(isValid);
    } else {
        createForm.querySelector('#new-description').classList.add(isInvalid);
        createForm.querySelector('#new-description').classList.remove(isValid);
    }
    
    if (body.price > 0) {
        createForm.querySelector('#new-price').classList.remove(isInvalid);
        createForm.querySelector('#new-price').classList.add(isValid);
    } else {
        createForm.querySelector('#new-price').classList.add(isInvalid);
        createForm.querySelector('#new-price').classList.remove(isValid);
    }

}