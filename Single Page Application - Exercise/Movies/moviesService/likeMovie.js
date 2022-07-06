import { routesMovie } from "../utils/constants.js";
import { router } from '../utils/router.js';
import {
    getUserInformation,
    sendGetLikesCountForParticularMovie,
    sendGetLikeForParticularUserAndMovieRequest,
    sendPostLikeRequest
} from '../utils/api.js';

export async function getLikes(movieId) {
    let response = await sendGetLikesCountForParticularMovie(movieId);

    return await response.json();
}

export async function likeMovie(movieId, ownerId) {
    let response = await getUserInformation();

    let user = await response.json();

    let isAlreadyliked = !(await isAlreadyLiked(movieId, user._id));

    if (user._id != ownerId && isAlreadyliked) {
        await sendPostLikeRequest(movieId);
    }
    router(routesMovie.home);
}

export async function isAlreadyLiked(movieId, userId) {
    let response = await sendGetLikeForParticularUserAndMovieRequest(movieId, userId);

    let data = await response.json();

    return data.length > 0;
}