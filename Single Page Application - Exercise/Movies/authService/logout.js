import { authToken, routesMovie } from "../constants.js";
import { router } from "../router.js";

export async function logout() {
    let response = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': sessionStorage.getItem(authToken)
        }
    });
    
    if(response.status == 204) {
        sessionStorage.removeItem(authToken);
        router(routesMovie.login);
    }
}