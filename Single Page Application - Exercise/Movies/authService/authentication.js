import { authToken, email } from "../utils/constants.js";
import { getUserInformation } from "../utils/api.js";

let userBtns = Array.from(document.querySelectorAll('nav .user'));
let userWelcome = document.querySelector('#welcome-msg');
let guestBtns = Array.from(document.querySelectorAll('nav .guest'));

export function updateAuth() {
    userBtns.forEach(btn => btn.style.display = 'none');
    guestBtns.forEach(btn => btn.style.display = 'none');

    if (sessionStorage.getItem(authToken)) {
        userBtns.forEach(btn => btn.style.display = 'inline');
        userWelcome.textContent = `Welcome, ${sessionStorage.getItem(email)}`;
    } else {
        guestBtns.forEach(btn => btn.style.display = 'inline');
    }
}