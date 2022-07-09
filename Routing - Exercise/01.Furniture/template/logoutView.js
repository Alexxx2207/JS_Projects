import { getlogoutUser } from '../utils/api.js';
import { authToken, logoutUserURL } from '../utils/constants.js';
import page from '../node_modules/page/page.mjs';

export const logoutView = async (ctx, next) => {

    try {
        await getlogoutUser(logoutUserURL);
    
        sessionStorage.removeItem(authToken);
    } catch (error) {
        alert('User not logged to logout!');
    }
    page('/login');

}