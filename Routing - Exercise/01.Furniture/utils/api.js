import * as request from './request.js';
import { authToken, getUserDetailsURL } from '../utils/constants.js';

export const getAllFurnitures = async (url) => getFurnitures(url);

export const getMyFurnitures = async (url) => getFurnitures(url);

export const postRegisterUser = (url, data) => registerUser(url, data);

export const postLoginUser = (url, data) => loginUser(url, data);

export const getlogoutUser = (url, data) => logoutUser(url, data);

export const postFurniture = (url, data) => request.post(url, data);

export const getFurnitureById = (url, id) => getFurniture(url, { id });

export const checkUserIsOwner = (_ownerid) => checkOwner(_ownerid);

export const getUserDetails = () => getUser();

export const deleteFurniture = (url) => request.del(url);

export const updateFurniture = (url, furniture) => updateFurnitureRequest(url, furniture);


async function getFurnitures(url) {
    let response = await request.get(url);

    let furnitures = await response.json();

    if (response.status >= 400) {
        throw new Error();
    }

    return furnitures;
}

async function getFurniture(url, data) {
    url = url.replace(':id', data.id)
    let response = await request.get(url, data);
    
    let furnitures = await response.json();
    
    if (response.status >= 400) {
        throw new Error();
    }

    return furnitures;
}


async function updateFurnitureRequest(url, furniture) {
    url = url.replace(':id', furniture._id)

    let response = await request.put(url, furniture);
    
    let furnitures = await response.json();
    
    if (response.status >= 400) {
        throw new Error();
    }

    return furnitures;
}

async function checkOwner(_ownerId) {

    let userResponse = await request.get(getUserDetailsURL);

    let user = await userResponse.json();

    if (userResponse.status >= 400) {
        throw new Error();
    }

    return user._id == _ownerId;
}

async function getUser() {
    let userResponse = await request.get(getUserDetailsURL);

    if (userResponse.status >= 400) {
        throw new Error();
    }

    let user = await userResponse.json();

    return user;
}

async function logoutUser(url) {
    let response = await request.get(url);

    if (response.status >= 400) {
        throw new Error();
    }
}

async function registerUser(url, data) {
    let response = await request.post(url, data);

    let body = await response.json();

    if (response.status >= 400) {
        throw new Error();
    }

    sessionStorage.setItem(authToken, body.accessToken);
}

async function loginUser(url, data) {
    let response = await request.post(url, data);

    let body = await response.json();

    if (response.status >= 400) {
        throw new Error();
    }

    sessionStorage.setItem(authToken, body.accessToken);
}