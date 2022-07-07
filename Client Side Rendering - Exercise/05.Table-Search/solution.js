import { render } from '../node_modules/lit-html/lit-html.js';
import { createTableRows } from './templates/tableRowsEntries.js';
import { URL } from './utils/constants.js';
import { getEntries } from './utils/api.js';

let tbody = document.querySelector('tbody');
let inputTextElement = document.querySelector('#searchField');

let entries = await getEntries(URL);

render(createTableRows(entries), tbody);

function search(searchedText, rows) {
   let result = [];

   rows.forEach(row => {
      let newResult = {
         firstName: row.firstName,
         lastName: row.lastName,
         email: row.email,
         course: row.course
      };

      let rowText = row.firstName + row.lastName + row.email + row.course;
      if (rowText.toLowerCase().includes(searchedText.toLowerCase())) {
         newResult.selected = true;
      }
      result.push(newResult)
   });

   return result;
}

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowsToRender = search(inputTextElement.value, entries);
      render(createTableRows(rowsToRender), tbody);

      inputTextElement.value = '';
   }
}
solve();