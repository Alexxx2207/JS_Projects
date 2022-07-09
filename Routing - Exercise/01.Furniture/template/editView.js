import { html, render } from '../node_modules/lit-html/lit-html.js';
import { container, furnitureIdURL } from '../utils/constants.js';
import { checkUserIsOwner, updateFurniture, getFurnitureById } from '../utils/api.js';
import page from '../node_modules/page/page.mjs';

function renderForm(furniture) {
    return html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form id="editForm">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="Table">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="Swedish">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="2015">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="Medium table">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="235">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="/images/table.png">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="Wood">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" @click=${OnSubmit.bind({}, furniture)} />
                </div>
            </div>
        </form>
    `;
}

function OnSubmit(furniture, e) {
    e.preventDefault();


    let formData = new FormData(document.getElementById('editForm'));

    let body = {
        _id: furniture._id,
        _ownerId: furniture._ownerId,
        make: formData.get('make'),
        model: formData.get('model'),
        year: formData.get('year'),
        description: formData.get('description'),
        price: formData.get('price'),
        img: formData.get('img'),
        material: formData.get('material'),
    };

    if (!body.img.includes('http')) {
        body.img = `.` + body.img;
    }

    if (body.make.length > 3 && body.model.length > 3 && body.year >= 1950 && body.year <= 2050 &&
        body.description.length > 10 && body.price > 0 && body.img) {
        updateFurniture(furnitureIdURL, body);
        updateFurniture(furnitureIdURL, body);

        const editForm = document.getElementById('editForm');

        editForm.querySelector('#new-model').value = '';
        editForm.querySelector('#new-make').value = '';
        editForm.querySelector('#new-image').value = '';
        editForm.querySelector('#new-year').value = '';
        editForm.querySelector('#new-description').value = '';
        editForm.querySelector('#new-price').value = '';
        editForm.querySelector('#new-material').value = '';

        page.redirect('/');
    }

}

export const editView = async (ctx, next) => {

    let furniture = await getFurnitureById(furnitureIdURL, ctx.params.id);

    if (checkUserIsOwner(furniture._ownerId)) {
        render(renderForm(furniture), container);
        fillInForm(furniture);
    } else {
        page.redirect('/');
    }

    next();
}

function fillInForm(furniture) {
    const editForm = document.getElementById('editForm');

    editForm.querySelector('#new-model').value = furniture.model;
    editForm.querySelector('#new-make').value = furniture.make;
    editForm.querySelector('#new-image').value = furniture.img;
    editForm.querySelector('#new-year').value = furniture.year;
    editForm.querySelector('#new-description').value = furniture.description;
    editForm.querySelector('#new-price').value = furniture.price;
    editForm.querySelector('#new-material').value = furniture.material;
}