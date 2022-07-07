import { addItem } from './dropdown.js';
import { createList } from './templates/list.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { getItems } from './utils/api.js';
import { URL } from './utils/constants.js';


let menu = document.getElementById('menu');
let itemTextInput = document.getElementById('itemText');
let buttonSubmit = document.querySelector('input[type="submit"]');

render(createList(await getItems(URL)), menu);

buttonSubmit.addEventListener('click', async function (e) {
    e.preventDefault();

    let itemText = itemTextInput.value;

    addItem(itemText);
    render(createList(await getItems(URL)), menu);

    itemTextInput.value = '';
});

