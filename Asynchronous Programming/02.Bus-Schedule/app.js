function solve() {

    let infoBoxElement = document.querySelector('#info .info');

    let departElement = document.getElementById('depart');
    let arriveElement = document.getElementById('arrive');

    let nextStopId = 'depot';
    let stopName = '';

    function depart() {
        departElement.disabled = true;
        arriveElement.disabled = false;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(res => res.json())
            .then(data => {
                infoBoxElement.textContent = `Next stop ${data.name}`;
                fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
                .then(res => res.json())
                .then(data => {
                    stopName = data.name;
                })
                .catch(err => {
                    infoBoxElement.textContent = `Error`;
                });
                nextStopId = data.next;
            })
            .catch(err => {
                infoBoxElement.textContent = `Error`;
            });
    }

    function arrive() {
        departElement.disabled = false;
        arriveElement.disabled = true;
        infoBoxElement.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();