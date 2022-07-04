import { showYearsCalendar, hideYearsCalendar } from './calendars modules/yearsCalendar.js';
import { showParticularYearCalendar, hideYearCalendar } from './calendars modules/yearCalendar.js';
import { showParticularMonthCalendar, hideMonthCalendar } from './calendars modules/monthCalendar.js';
import { states } from './constants.js'; 

// STATES:
// years
// months
// days
export function router(state, year, month) {
    hideYearsCalendar();
    hideYearCalendar();
    hideMonthCalendar();

    if (state == states.years) {
        showYearsCalendar();
    } else if(state ==  states.months) {
        showParticularYearCalendar(year);
    } else if(state ==  states.days) {
        showParticularMonthCalendar(year, month);
    }
}