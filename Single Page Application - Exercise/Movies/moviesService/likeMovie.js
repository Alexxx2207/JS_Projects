import { authToken, routesMovie } from "../constants.js";
import { getUser } from "../authService/authentication.js";
import { router } from '../router.js';

export async function getLikes(movieId) {
    let response  = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
    
    return await response.json();
}

export async function likeMovie(movieId, ownerId) {
    let user = await getUser();

    let isAlreadyliked = !(await isAlreadyLiked(movieId, user._id));

    if(user._id != ownerId && isAlreadyliked) {
        await fetch('http://localhost:3030/data/likes', {
            method: 'POST',
            headers: {
                "X-Authorization": sessionStorage.getItem(authToken)
            },
            body: JSON.stringify({
                movieId
            })
        })
        router(routesMovie.home);
    }
}
export async function isAlreadyLiked(movieId, userId) {
    let response  = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);

    let data = await response.json();

    return data.length > 0;
}