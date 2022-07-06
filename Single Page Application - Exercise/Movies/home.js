import { renderMovieSection } from "./moviesService/getMovie.js";
import { authToken } from "./utils/constants.js";

const homePage = document.getElementById('home-page');
const addMovieBtn = document.getElementById('add-movie-button');

export function renderHome() {
    homePage.style.display = 'block';

    if(sessionStorage.getItem(authToken))
        addMovieBtn.style.display = 'block';
        
    renderMovieSection();
}

