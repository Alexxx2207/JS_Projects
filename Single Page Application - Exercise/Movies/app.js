import { router } from './router.js';
import { routesMovie } from './constants.js';

router(routesMovie.home);

document.querySelector('body').addEventListener('click', function(e) {
    e.preventDefault();
    
    if(e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        
        router(url.pathname);

    }
})