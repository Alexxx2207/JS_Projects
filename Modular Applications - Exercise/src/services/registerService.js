import { registerURL } from "../utils/constants.js";
import * as request from '../utils/request.js'
import { setUserData } from "./authService.js";

export const sendRegisterRequest = async (email, password, username) => {
    let response = await request.post(registerURL, { email, password, username });

    if (response.status >= 400) {
        throw new Error();
    }

    let user = await response.json();

    setUserData(user);
}