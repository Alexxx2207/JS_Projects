import { deleteFilm } from "./deleteMovie.js";
import { likeMovie, getLikes, isAlreadyLiked } from "./likeMovie.js";
import { getUser } from "../authService/authentication.js";
import { fillEditForm } from "./editMovie.js";
import { router } from "../router.js";
import { routesMovie } from "../constants.js";

const movieList = document.getElementById('movies');

export async function renderMovieSection() {
    movieList.style.display = 'block';

    let movies = await loadMovies();
    renderMovies(movies);
}

async function renderMovies(movies) {
    let fragment = document.createDocumentFragment();

    movies.forEach(movie => {
        let filmDiv = document.createElement('div');
        filmDiv.classList.add('container');

        filmDiv.innerHTML = `
          <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
               ${movie.description}
              </p>
              <button class="btn btn-danger" data-movieId=${movie._id}>Delete</button>
              <button class="btn btn-warning" data-movieId=${movie._id}>Edit</button>
              <button class="btn btn-primary" data-movieId=${movie._id} data-ownerId="${movie._ownerId}">Like</button>
              <span class="enrolled-span"></span>
            </div>
        </div>`;

        let deleteBtn = filmDiv.querySelector('button:nth-of-type(1)');

        deleteBtn.addEventListener('click', function (e) {
            deleteFilm(e.target.dataset.movieid);
        });

        let editBtn = filmDiv.querySelector('button:nth-of-type(2)');

        editBtn.addEventListener('click', function (e) {
            router(routesMovie.editMovie);
            fillEditForm(movie._id);
        });

        let likeBtn = filmDiv.querySelector('button:nth-of-type(3)');
        let likeSpan = filmDiv.querySelector('span');

        likeBtn.addEventListener('click', function (e) {
            likeMovie(e.target.dataset.movieid, e.target.dataset.ownerid);
        });

        getUser().then(user => {
            isAlreadyLiked(movie._id, user._id).then(res => {
                if (res) {
                    likeBtn.style.display = 'none';
                } else if(user._id != movie._ownerId){
                    likeSpan.style.display = 'none';
                }
            });
            if(user._id == movie._ownerId) {
                likeBtn.style.display = 'none';
            }
            if(user._id != movie._ownerId) {
                deleteBtn.style.display = 'none';
                editBtn.style.display = 'none';
            }
        });

        getLikes(movie._id).then(likes =>
            likeSpan.textContent = `Liked ${likes}`);

        fragment.append(filmDiv);
    });

    movieList.innerHTML = '';
    movieList.append(fragment);
}

async function loadMovies() {
    let response = await fetch('http://localhost:3030/data/movies', {
        method: 'GET'
    });

    let data = await response.json();
    return data;
}