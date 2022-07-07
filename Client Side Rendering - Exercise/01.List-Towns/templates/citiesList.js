import { html } from '../../node_modules/lit-html/lit-html.js';
import { createCityListItem } from './city.js';


export const createUnorderedListOfPhones = (cities) => html`
    ${ cities.map( city => html`${createCityListItem(city)}` ) }
`;