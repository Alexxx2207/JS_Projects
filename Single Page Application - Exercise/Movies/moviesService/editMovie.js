import { router } from "../utils/router.js";
import { routesMovie } from "../utils/constants.js";
import { sendEditMovieRequest, sendGetParticularMovieRequest } from "../utils/api.js";

const editSection = document.getElementById('edit-movie');
const editForm = editSection.querySelector('form');
const submitBtn = editSection.querySelector('button');

let movieId = '';

export function renderEditMovie() {
    editSection.style.display = 'block';

    submitBtn.addEventListener('click', function() {
        let data = getFormData();

        if(data.title && data.description && data.img) {
            editMovie(data, movieId);
        }
    });
}

function getFormData() {
    let formData = new FormData(editForm);

    let data = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('img'),
    };
    return data;
}


async function editMovie(movie, id) {
    await sendEditMovieRequest(id, movie.title, movie.description, movie.img);
    router(routesMovie.home);
}

export async function fillEditForm(id) {
    movieId = id;

    let response = await sendGetParticularMovieRequest(id);

    let movie = await response.json();

    editSection.querySelector('#title').value = movie.title;
    editSection.querySelector('#description').value = movie.description;
    editSection.querySelector('#imageUrl').value = movie.img;
}