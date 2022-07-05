import { renderMovieSection } from "./moviesService/getMovie.js";

const homePage = document.getElementById('home-page');
const addMovieBtn = document.getElementById('add-movie-button');

export function renderHome() {
    homePage.style.display = 'block';
    addMovieBtn.style.display = 'block';
    renderMovieSection();
}

