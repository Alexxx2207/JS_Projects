function getInfo() {
    let stopId = document.getElementById('stopId').value;

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('stopName').textContent = data.name;
            let ul = document.getElementById(`buses`);

            for (const key in data.buses) {
                if (Object.hasOwnProperty.call(data.buses, key)) {
                    let li = document.createElement('li');
                    li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
                    ul.appendChild(li);
                }
            }
        })
        .catch(err => {
            document.getElementById('stopName').textContent = 'Error';
        });
}   