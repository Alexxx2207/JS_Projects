import { clearUserData, getUserData } from "../utils.js";

const host = 'http://localhost:3030';

async function request(method, url , data) {
    let options = {
        method,
        headers: {}
    };

    if(data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    
    const userData = getUserData();
    
    if(userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }
    
    try {
        const response = await fetch(host + url, options);
        
        if(response.ok == false) {

            if(response.status == 403) {
                clearUserData();
            }
    
            const error = await response.json();
            throw new Error(error.message);
        }
    
        if(response.status == 204) {
            return response;
        } else {
            return await response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
    
}

export async function get(url) {
    return request('GET', url);
}

export async function post(url, data) {
    return request('POST', url, data);
}

export async function put(url, data) {
    return request('PUT', url, data);
}

export async function del(url) {
    return request('DELETE', url);
}