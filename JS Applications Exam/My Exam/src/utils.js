const userDataKey = 'userData';

export function getUserData() {
    return JSON.parse(sessionStorage.getItem(userDataKey));
}

export function setUserData(data) {
    sessionStorage.setItem(userDataKey, JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem(userDataKey);
}