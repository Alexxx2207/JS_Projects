import { render } from '../node_modules/lit-html/lit-html.js';
import { createList } from './template/townList.js';
import { search } from './search.js';
import { towns } from './towns.js';

let searchBtn = document.querySelector('button');
let townsContainer = document.getElementById('towns');
let searchBox = document.getElementById('searchText');
let resultMatches = document.getElementById('result');

console.log('a');
render(createList(towns.map(town => {return {name: town, active: false}})), townsContainer);

searchBtn.addEventListener('click', function() {
    let searchedText = searchBox.value;

    let townsObjectsToRender = search(towns, searchedText);
    resultMatches.textContent = `${townsObjectsToRender.filter(town => town.active).length} matches found`

    render(createList(townsObjectsToRender), townsContainer);
});