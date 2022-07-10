import { logoutUser } from "../services/authService.js";
import page from '../../node_modules/page/page.mjs';

export const logoutView = (ctx, next) =>{

    logoutUser(ctx);
    page.redirect('/');
    
    next();
}