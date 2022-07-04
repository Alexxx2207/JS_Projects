import { router } from './router.js';

import { states } from './constants.js';

let chosenYear = 0;
let chosenMonth = 0;
router(states.years);

document.getElementById('years').addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() == 'td') {
        let year = e.target.querySelector('div').textContent;

        chosenYear = year;
        router(states.months, chosenYear);
    } else if(e.target.tagName.toLowerCase() == 'div') {
        let year = e.target.textContent;

        chosenYear = year;
        router(states.months, chosenYear);
    }
});

let months = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sept': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12,
};

Array.from(document.getElementsByClassName('monthCalendar'))
    .forEach(cal => cal.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() == 'td') {
            let monthText = e.target.querySelector('div').textContent;

            let month = months[monthText];

            chosenMonth = month;
            
            router(states.days, chosenYear, chosenMonth);
        } else if(e.target.tagName.toLowerCase() == 'div'){
            let monthText = e.target.textContent;

            let month = months[monthText];

            chosenMonth = month;
            router(states.days, chosenYear, chosenMonth);
        }
    }));

document.querySelector('body').addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() == 'caption') {
        let section = e.target.parentElement.parentElement;

        if(section.classList.contains('monthCalendar')) {
            router(states.years);
        } else if(section.classList.contains('daysCalendar')) {
            router(states.months, chosenYear);
        }
    }
});