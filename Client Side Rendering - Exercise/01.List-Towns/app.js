import { render } from '../node_modules/lit-html/lit-html.js';
import { createUnorderedListOfPhones } from './templates/citiesList.js';

let root = document.getElementById('root');

let loadBtn = document.getElementById('btnLoadTowns');


loadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    let cities = document.getElementById('towns').value.split(', ');
    console.log(cities);
    render(createUnorderedListOfPhones(cities), root);
})

