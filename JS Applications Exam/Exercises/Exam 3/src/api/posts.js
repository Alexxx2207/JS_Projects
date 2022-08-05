import * as request from '../api/api.js';

export const getAllPosts = async () => {
    return await request.get('/data/posts?sortBy=_createdOn%20desc');
}

export const getPostById = async (id) => {
    return await request.get(`/data/posts/${id}`);
}

export const getPostsByUserId = async (userId) => {
    return await request.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export const createPost = async (post) => {
    return await request.post('/data/posts', post);
}

export const updatePost = async (id, post) => {
    return await request.put(`/data/posts/${id}`, post);
}

export const deletePost = async (id) => {
    return await request.del(`/data/posts/${id}`);
}

export const getPostDonations = async (postId) => {
    return await request.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

export const getPostDonationByUser = async (postId, userId) => {
    return await request.get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export const createPostDonation = async (postId) => {
    return await request.post('/data/donations', {postId});
}