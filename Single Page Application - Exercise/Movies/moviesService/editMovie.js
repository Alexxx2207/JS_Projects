import { router } from "../router.js";
import { routesMovie, authToken } from "../constants.js";

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
    await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem(authToken)
        },
        body: JSON.stringify(movie)
    });
    router(routesMovie.home);
}

export async function fillEditForm(id) {
    movieId = id;

    let response = await fetch(`http://localhost:3030/data/movies/${id}`);

    let movie = await response.json();

    editSection.querySelector('#title').value = movie.title;
    editSection.querySelector('#description').value = movie.description;
    editSection.querySelector('#imageUrl').value = movie.img;
}