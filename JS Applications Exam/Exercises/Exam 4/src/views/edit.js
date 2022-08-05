import { html } from '../lib.js';
import { updatePetById, getPetById } from '../api/pets.js';

const editTemplate = (pet, onSubmit) => html`
 <section id="editPage">
            <form class="editForm" @submit=${onSubmit}>
                <img src="${pet.image}">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value="${pet.name}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value="${pet.breed}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value="${pet.age} years">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value="${pet.weight}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value="${pet.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>`;

export const editView = async (ctx) => {

    let pet = await getPetById(ctx.params.id);

    ctx.render(editTemplate(pet, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let body = {
            name: formData.get('name').trim(),
            breed: formData.get('breed').trim(),
            age: formData.get('age').trim(),
            weight: formData.get('weight').trim(),
            image: formData.get('image').trim(),
        }

        if(!Object.values(body).some(x => !x)) {
            await updatePetById(ctx.params.id, body);
            e.target.reset();
            ctx.page.redirect(`/details/${ctx.params.id}`);
        }
    }

}