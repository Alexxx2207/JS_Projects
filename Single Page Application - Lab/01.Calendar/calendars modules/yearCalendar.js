export function hideYearCalendar() {
    let calendars = Array.from(document.querySelectorAll('.monthCalendar'));

    calendars.forEach(cal => cal.style.display = 'none');
}

export function showParticularYearCalendar(year) {
    let id = `year-${year}`;

    document.getElementById(id).style.display = 'block';
}