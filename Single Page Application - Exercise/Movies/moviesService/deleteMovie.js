import { authToken, routesMovie } from '../constants.js';
import { router } from '../router.js';


export async function deleteFilm(id) {
    await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': sessionStorage.getItem(authToken)
        }
    });

    router(routesMovie.home);
}