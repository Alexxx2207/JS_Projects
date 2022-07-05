import { router } from "../router.js";
import { routesMovie, authToken } from "../constants.js";

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
    await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem(authToken)
        },
        body: JSON.stringify(movie)
    });
}