import { routesMovie } from '../utils/constants.js';
import { router } from '../utils/router.js';
import { sendDeleteMovieRequest } from "../utils/api.js";


export async function deleteFilm(id) {
    await sendDeleteMovieRequest(id);

    router(routesMovie.home);
}