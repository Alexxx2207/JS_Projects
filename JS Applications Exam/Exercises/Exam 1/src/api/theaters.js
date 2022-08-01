import * as request from './api.js';

export async function getAllTheaters() {
    return await request.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function getTheaterLikes(theaterId) {
    return await request.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function getTheaterLikeByUserId(theaterId, userId) {
    return await request.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function getTheatersByUserId(userId) {
    return await request.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createTheater(theater) {
    return await request.post('/data/theaters', theater);
}

export async function createTheaterLike(theaterId) {
    return await request.post('/data/likes', { theaterId });
}

export async function editTheater(theater) {
    return await request.put(`/data/theaters/${theater._id}`, theater);
}

export async function getTheaterById(id) {
    return await request.get(`/data/theaters/${id}`);
}

export async function deleteTheaterById(id) {
    return await request.del(`/data/theaters/${id}`);
}


