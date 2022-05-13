function calculateWalk(steps, stepLength, kmh) {
    let metersWalked = steps * stepLength;
    let restMinutes = Math.floor(metersWalked / 500);
    let metersPerMinute = kmh / 60 * 1000
    let minutesWalked = metersWalked / metersPerMinute;

    let totalMinutes = minutesWalked + restMinutes

    let hours = Math.floor(totalMinutes/60);
    let resultMinutes = Math.floor(totalMinutes % 60);
    let seconds = ((totalMinutes % 60 - resultMinutes) * 60).toFixed(0);

    console.log(`${hours.toString().padStart(2, '0')}:${resultMinutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}