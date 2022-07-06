import * as request from './request.js';

const BASE_URL = 'http://localhost:3030';

const usersMe = `${BASE_URL}/users/me`;
const usersLogin = `${BASE_URL}/users/login`;
const usersLogout = `${BASE_URL}/users/logout`;
const usersRegister = `${BASE_URL}/users/register`;
const dataMovies = `${BASE_URL}/data/movies`;
const dataMoviesId = `${BASE_URL}/data/movies/{id}`;
const dataLikes = `${BASE_URL}/data/likes`;
const dataLikesForParticularMovieAndParticularUser = `${BASE_URL}/data/likes?where=movieId%3D%22{movieId}%22%20and%20_ownerId%3D%22{userId}%22`;
const dataLikesForParticularMovieLikesCount = `${BASE_URL}/data/likes?where=movieId%3D%22{movieId}%22&distinct=_ownerId&count`;


export const getUserInformation = () => request.get(usersMe);

export const sendLoginRequest = (email, password) => request.post(usersLogin, { email, password });

export const sendLogoutRequest = () => request.get(usersLogout);

export const sendRegisterRequest = (email, password) => request.post(usersRegister, { email, password });

export const sendAddMovieRequest = (title, description, img) => request.post(dataMovies, { title, description, img });

export const sendDeleteMovieRequest = (id) => request.del(dataMoviesId.replace('{id}', id));

export const sendGetParticularMovieRequest = (id) => request.get(dataMoviesId.replace('{id}', id));

export const sendEditMovieRequest = (id, title, description, img) => request.put(dataMoviesId.replace('{id}', id), { title, description, img });

export const sendGetMovieRequest = () => request.get(dataMovies);

export const sendPostLikeRequest = (movieId) => request.post(dataLikes, { movieId });

export const sendGetLikeForParticularUserAndMovieRequest = (movieId, userId) =>
    request.get(
        dataLikesForParticularMovieAndParticularUser
            .replace('{userId}', userId)
            .replace('{movieId}', movieId));

export const sendGetLikesCountForParticularMovie = (movieId) =>
    request.get(
        dataLikesForParticularMovieLikesCount
            .replace('{movieId}', movieId));
