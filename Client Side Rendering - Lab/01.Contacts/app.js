import { render } from './node_modules/lit-html/lit-html.js';
import { createContactList } from './templates/contactList.js';
import { contacts } from './contacts.js';

let root = document.getElementById('contacts');

let html = createContactList(contacts);

render(html, root);