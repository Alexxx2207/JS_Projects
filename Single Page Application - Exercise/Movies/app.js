import { router } from './utils/router.js';
import { routesMovie } from './utils/constants.js';

router(routesMovie.home);

document.querySelector('body').addEventListener('click', function(e) {
    e.preventDefault();
    
    if(e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        
        router(url.pathname);

    }
})