import * as request from './api.js';
import { clearUserData, setUserData } from '../utils.js';

export async function login(email, password) {
    const result = await request.post('/users/login', { email, password });

    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken
    };

    setUserData(userData);

    return result;
}

export async function register(email, password) {
    const result = await request.post('/users/register', { email, password });

    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken
    };

    setUserData(userData);

    return result;
}

export function logout() {
    request.get('/users/logout');
    clearUserData();
}