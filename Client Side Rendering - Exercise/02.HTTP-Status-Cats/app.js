import { render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import { createCatsList } from './templates/catsList.js';

let allCatsSection = document.getElementById('allCats');

render(createCatsList(cats), allCatsSection);