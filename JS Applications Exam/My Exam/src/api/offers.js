import * as request from '../api/api.js';

export const getAllOffers = async () => {
    return request.get('/data/offers?sortBy=_createdOn%20desc');
}

export const getOfferById = async (id) => {
    return request.get(`/data/offers/${id}`);
}

export const createOffer = async (offer) => {
    return request.post('/data/offers', offer);
}

export const createOfferApplication = async (offerId) => {
    return request.post('/data/applications', {offerId});
}

export const getOfferApplications = async (offerId) => {
    return request.get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}

export const getUserOfferApplications = async (offerId, userId) => {
    return request.get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export const updateOffer = async (id, offer) => {
    return request.put(`/data/offers/${id}`, offer);
}

export const deleteOffer = async (id) => {
    return request.del(`/data/offers/${id}`);
}