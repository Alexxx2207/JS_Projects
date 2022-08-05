import { html } from '../lib.js';
import {
    getPetById,
    deletePetById,
    createPetDonation,
    getPetDonations,
    getPetDonationsByUserId
} from '../api/pets.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (pet, isLoggedInUser, isUserOwner, onDelete, onDonate, donations, donationsFromCurrentUserForCurrentPet) => html`
 <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: ${donations*100}$</h4>
                    </div>

                    ${isLoggedInUser ? 
                        html`
                        <div class="actionBtn">
                            ${isUserOwner ? 
                                html`
                                    <a href="/edit/${pet._id}" class="edit">Edit</a>
                                    <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>`
                            :
                                donationsFromCurrentUserForCurrentPet == 0 ? 
                                    html`
                                        <a href="javascript:void(0)" class="donate" @click=${onDonate}>Donate</a>`
                                :
                                    ''
                            }
                        </div>`
                        :
                        ''
                    }
                </div>
            </div>
        </section>`;

export const detailsView = async (ctx) => {
    let pet = await getPetById(ctx.params.id);

    let userData = getUserData();

    let isUserOwner = false;
    let isLoggedInUser = userData !== undefined;

    if(userData !== null) {
        isUserOwner = userData.id == pet._ownerId;
    }

    let donations = await getPetDonations(ctx.params.id);
    let donationsFromCurrentUserForCurrentPet = await getPetDonationsByUserId(ctx.params.id, userData.id);

    ctx.render(detailsTemplate(pet, isLoggedInUser, isUserOwner, onDelete, onDonate, donations, donationsFromCurrentUserForCurrentPet));

    async function onDelete(e) {
        e.preventDefault();
        
        let confirm = window.confirm('Are you sure?');

        if(confirm) {

            await deletePetById(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
    
    async function onDonate(e) {
        e.preventDefault();
        
        await createPetDonation(ctx.params.id, userData.id);

        donations = await getPetDonations(ctx.params.id);
        donationsFromCurrentUserForCurrentPet = await getPetDonationsByUserId(ctx.params.id, userData.id);

        ctx.render(detailsTemplate(pet, isLoggedInUser, isUserOwner, onDelete, onDonate, donations, donationsFromCurrentUserForCurrentPet));

    }
}