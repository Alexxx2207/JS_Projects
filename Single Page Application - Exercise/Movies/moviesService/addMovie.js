import { router } from "../utils/router.js";
import { routesMovie } from "../utils/constants.js";
import { sendAddMovieRequest } from "../utils/api.js";


const addMovieSection = document.getElementById('add-movie');
const addMovieForm = document.getElementById('add-movie-form');

export function renderAddMovie() {
    addMovieSection.style.display = 'block';

    addMovieSection.querySelector('button').addEventListener('click', function(e) {
        e.preventDefault();

        let data = getFormData();

        if(data.title && data.description && data.img) {
            addMovie(data);
            router(routesMovie.home)
        }
    });
}

function getFormData() {
    let formData = new FormData(addMovieForm);

    let data = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('img'),
    };
    return data;
}

async function addMovie(movie) {
    await sendAddMovieRequest(movie.title, movie.description, movie.img);
}