import { deleteFilm } from "./deleteMovie.js";
import { likeMovie, getLikes, isAlreadyLiked } from "./likeMovie.js";
import { fillEditForm } from "./editMovie.js";
import { router } from "../utils/router.js";
import { authToken, routesMovie } from "../utils/constants.js";
import { sendGetMovieRequest, getUserInformation } from '../utils/api.js';

const movieList = document.getElementById('movies');

export function renderMovieSection() {
    movieList.style.display = 'block';

    renderMovies();
}

async function renderMovies() {
    let movies = await loadMovies();

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
        let editBtn = filmDiv.querySelector('button:nth-of-type(2)');
        let likeBtn = filmDiv.querySelector('button:nth-of-type(3)');
        let likeSpan = filmDiv.querySelector('span');

        deleteBtn.addEventListener('click', function (e) {
            deleteFilm(e.target.dataset.movieid);
        });

        editBtn.addEventListener('click', function (e) {
            router(routesMovie.editMovie);
            fillEditForm(movie._id);
        });

        likeBtn.addEventListener('click', function (e) {
            likeMovie(e.target.dataset.movieid, e.target.dataset.ownerid);
        });

        getLikes(movie._id).then(likes =>
            likeSpan.textContent = `Liked ${likes}`);

        configureButtonsDisplays(movie, deleteBtn, editBtn, likeBtn, likeSpan);

        fragment.append(filmDiv);
    });

    movieList.innerHTML = '';
    movieList.append(fragment);
}

async function loadMovies() {
    let response = await sendGetMovieRequest();

    let data = await response.json();
    return data;
}


// This kind of filtration logic should be done on the server, because with that implementation
// we call the api twice for every film. It's time-consuming for the server to process.
async function configureButtonsDisplays(movie, deleteBtn, editBtn, likeBtn, likeSpan) {

    let token = sessionStorage.getItem(authToken);
    if (token) {

        let user = await (await getUserInformation()).json();
        
        if (user._id == movie._ownerId) {
            likeBtn.style.display = 'none';
        }
        else {
            deleteBtn.style.display = 'none';
            editBtn.style.display = 'none';
            isAlreadyLiked(movie._id, user._id).then(res => {
                if (res) {
                    likeBtn.style.display = 'none';
                } else {
                    likeSpan.style.display = 'none';
                }
            });
        }

    } else {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        likeBtn.style.display = 'none';
    }
}