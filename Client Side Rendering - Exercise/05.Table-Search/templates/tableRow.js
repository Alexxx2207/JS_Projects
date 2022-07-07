import { html } from '../../node_modules/lit-html/lit-html.js';

export const createRow = (data) => html`
    <tr class=${data.selected? "select" : ""}>
         <td>${data.firstName} ${data.lastName}</td>
         <td>${data.email}</td>
         <td>${data.course}</td>
     </tr>
`;