import { getUserData } from "../services/authService.js";
import { authToken } from "../utils/constants.js"


function checkAuthentication() {
    let token = sessionStorage.getItem(authToken);

    return Boolean(token);
}

export const authenticateUser = (ctx, next) => {
    ctx.isAuthenticated = checkAuthentication();
    ctx.user = getUserData();

    next();
}