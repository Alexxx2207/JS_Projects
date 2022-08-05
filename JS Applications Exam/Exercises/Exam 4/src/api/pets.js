import * as request from '../api/api.js';

export const createPet = async (pet) => {
    return await request.post('/data/pets', pet);
}

export const getAllPets = async () => {
    return await request.get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export const getPetById = async (id) => {
    return await request.get(`/data/pets/${id}`);
}

export const updatePetById = async (id, pet) => {
    return await request.put(`/data/pets/${id}`, pet);
}

export const deletePetById = async (id) => {
    return await request.del(`/data/pets/${id}`);
}

export const createPetDonation = async (petId) => {
    return await request.post('/data/donation', {petId});
}

export const getPetDonations = async (petId) => {
    return await request.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}
export const getPetDonationsByUserId = async (petId, userId) => {
    return await request.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}