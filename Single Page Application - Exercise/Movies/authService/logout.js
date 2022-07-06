import { authToken, routesMovie } from "../utils/constants.js";
import { router } from "../utils/router.js";
import { sendLogoutRequest } from "../utils/api.js";

export async function logout() {
    let response = await sendLogoutRequest();
    
    if(response.status == 204) {
        sessionStorage.removeItem(authToken);
        router(routesMovie.login);
    }
}