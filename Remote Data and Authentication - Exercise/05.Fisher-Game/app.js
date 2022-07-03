const authTokenKey = 'X-Autorization';
const homeView = document.querySelector('#home-view');
let addButton = document.querySelector('.add');
let loadBtn = document.querySelector('button.load');

async function GetCatches() {
    let response = await fetch('http://localhost:3030/data/catches');

    let data = await response.json();

    return data;
}
async function AddCatch(catchData) {
    await fetch('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application-json',
            'X-Authorization': sessionStorage.getItem(authTokenKey)
        },
        body: JSON.stringify(catchData)
    });

    loadBtn.click();
}

async function PutCatch(newCatch, id) {
    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application-json',
            'X-Authorization': sessionStorage.getItem(authTokenKey)
        },
        body: JSON.stringify(newCatch)
    });

    loadBtn.click();
}

async function DeleteCatch(id) {
    await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application-json',
            'X-Authorization': sessionStorage.getItem(authTokenKey)
        },
    });
    loadBtn.click();
}

async function renderCatches(data) {
    let container = document.getElementById('catches');
    container.innerHTML = '';

    let response = await fetch('http://localhost:3030/users/me', {
        headers: {
            'X-Authorization': sessionStorage.getItem(authTokenKey)
        }
    });

    let user = await response.json();

    data.forEach(entry => {
        let catchDiv = document.createElement('div');
        catchDiv.classList.add("catch");

        catchDiv.innerHTML += `
        <label>Angler</label>
        <input type="text" class="angler" value="${entry.angler}">
        <label>Weight</label>
        <input type="number" class="weight" value="${entry.weight}">
        <label>Species</label>
        <input type="text" class="species" value="${entry.species}">
        <label>Location</label>
        <input type="text" class="location" value="${entry.location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${entry.bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${entry.captureTime}">
        <button class="delete" data-id="${entry._id}">Delete</button>
        <button class="update" data-id="${entry._id}">Update</button>`;

        container.append(catchDiv);

        let buttons = Array.from(catchDiv.querySelectorAll('button'));

        if (entry._ownerId != user._id) {
            buttons.forEach(button => {
                button.disabled = true;
            });
        } else {
            buttons[0].addEventListener('click', DeleteCatch.bind(this, entry._id));

            buttons[1].addEventListener('click', function (e) {
                let inputs = Array.from(catchDiv.querySelectorAll('input'));
                let newCatch = {
                    angler: inputs[0].value,
                    weight: inputs[1].value,
                    species: inputs[2].value,
                    location: inputs[3].value,
                    bait: inputs[4].value,
                    captureTime: inputs[5].value,
                };

                PutCatch(newCatch, entry._id);
            });
        }
    });
}

document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html'
});

document.getElementById('login').addEventListener('click', function () {
    window.location.href = '/src/login.html'
});

document.getElementById('register').addEventListener('click', function () {
    window.location.href = '/src/register.html'
});

addButton.addEventListener('click', function (e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('addForm'));

    let catchData = {
        "angler": formData.get('angler'),
        "weight": formData.get('weight'),
        "species": formData.get('species'),
        "location": formData.get('location'),
        "bait": formData.get('bait'),
        "captureTime": formData.get('captureTime'),
    }

    AddCatch(catchData);
});

document.getElementById('logout').addEventListener('click', async function () {
    await fetch('http://localhost:3030/users/logout', {
        headers: {
            "X-Authorization": sessionStorage.getItem(authTokenKey)
        }
    });

    sessionStorage.removeItem('email');
    sessionStorage.removeItem(authTokenKey);

    window.location.href = '/05.Fisher-Game/index.html';
});

loadBtn.addEventListener('click', async function () {
    renderCatches(await GetCatches());
})

window.addEventListener('load', async function () {
    let spanEmail = document.querySelector('.email span');

    let token = sessionStorage.getItem(authTokenKey);

    if (!token) {
        document.querySelector('#user').style.display = 'none';
        spanEmail.textContent = 'guest';
        addButton.disabled = true;
    } else {
        document.querySelector('#guest').style.display = 'none';
        spanEmail.textContent = sessionStorage.getItem('email');
        addButton.disabled = false;
    }
});