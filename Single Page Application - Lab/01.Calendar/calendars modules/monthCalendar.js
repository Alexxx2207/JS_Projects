export function hideMonthCalendar() {
    let calendars = Array.from(document.querySelectorAll('.daysCalendar'));

    calendars.forEach(cal => cal.style.display = 'none');
}

export function showParticularMonthCalendar(year, month) {
    let id = `month-${year}-${month}`;
    document.getElementById(id).style.display = 'block';
}