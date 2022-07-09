import { authToken } from './constants.js';

const methodsWithoutBody = ['GET', 'DELETE'];

async function request(method, url, data) {
    let options = {
        method,
    };

    if(!methodsWithoutBody.includes(method)) {
        options.headers = {
            'Content-Type': 'application/json'
        };

        options.body = JSON.stringify(data);
    }

    let token = sessionStorage.getItem(authToken);

    if(token){
        options.headers = {};
        options.headers[authToken] = token;
    }

    return await fetch(url, options);
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');