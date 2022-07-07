import { html } from '../../node_modules/lit-html/lit-html.js';

export const createCatCard = (cat) => html`
    <li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${(e) => showHideCatInfo(e)}>Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
    </li>
`;

function showHideCatInfo(e) {
    let statusDiv = e.currentTarget.parentElement.querySelector('.status');
    console.log(statusDiv);
    let displayValue = statusDiv.style.display;

    if(displayValue == 'none') {
        e.currentTarget.textContent = 'Hide status code';
        displayValue = 'block';
    } else {
        e.currentTarget.textContent = 'Show status code';
        displayValue = 'none';
    }
    statusDiv.style.display = displayValue;
}