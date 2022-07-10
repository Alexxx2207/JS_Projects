import { authToken, userEmail, userId, userUsername } from "../utils/constants.js"


export const getAuthToken = () => {
    return sessionStorage.getItem(authToken);
}

export const getUserData = () => {
    return {
        authToken: sessionStorage.getItem(authToken),
        userId: sessionStorage.getItem(userId),
        username: sessionStorage.getItem(userUsername),
        email: sessionStorage.getItem(userEmail),
    }
}

export const setUserData = (user) => {
    sessionStorage.setItem(authToken, user.accessToken);
    sessionStorage.setItem(userId, user._id);
    sessionStorage.setItem(userUsername, user.username);
    sessionStorage.setItem(userEmail, user.email);
}

export const logoutUser = (ctx) => {
    ctx.isAuthenticated = false;
    sessionStorage.clear();
}