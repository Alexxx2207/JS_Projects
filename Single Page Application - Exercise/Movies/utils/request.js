import { authToken } from './constants.js';

const methodsWithoutBody = ['GET', 'DELETE'];

async function request(method, url, data) {
    let options = {
        method
    };

    if (!methodsWithoutBody.includes(method)) {
        options.headers = {};

        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    
    let token = sessionStorage.getItem(authToken);

    if (token) {
        if(!options.hasOwnProperty('headers')) {
            options.headers = {};
        }
        options.headers['X-Authorization'] = token;
    }

    return await fetch(url, options);
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');