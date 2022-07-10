import { loginURL } from '../utils/constants.js';
import * as request from '../utils/request.js';
import { setUserData } from './authService.js';

export const sendLoginRequest = async (email, password) => {
    let response = await request.post(loginURL, { email, password });

    if (response.status >= 400) {
        throw new Error();
    }

    let user = await response.json();

    setUserData(user);
} 