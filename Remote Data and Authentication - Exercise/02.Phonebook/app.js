const loadBtn =  document.getElementById('btnLoad');

async function GetPhones() {
    let response = await fetch('http://localhost:3030/jsonstore/phonebook');

    let data = await response.json();

    return Object.values(data);
}

async function DeletePhone(id) {
    await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`,
    {
        method: 'DELETE'
    });

    loadBtn.click();
}

function renderPhones(phones) {
    let ul = document.getElementById('phonebook');

    ul.innerHTML = '';
    
    phones.forEach(phone => {
        let li = document.createElement('li');
        li.textContent = `${phone.person}: ${phone.phone}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', DeletePhone.bind(this, phone._id));

        li.append(deleteBtn);

        ul.append(li);
    })
}

function geNewEntryInputData(){
    let personElement = document.getElementById('person');
    let phoneElement = document.getElementById('phone');

    if(!personElement.value || !phoneElement.value) {
        return null;
    }

    let result = {};

    result.person = personElement.value;
    result.phone = phoneElement.value;
    
    personElement.value = '';
    phoneElement.value = '';

    return result;
}

async function AddPhone(data) {
    await fetch('http://localhost:3030/jsonstore/phonebook',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }) 
}

function attachEvents() {
    loadBtn.addEventListener('click', async function () {
        let phones = await GetPhones();

        renderPhones(phones);
    });

    document.getElementById('btnCreate').addEventListener('click', async function() {
        let input = geNewEntryInputData();

        if(input) {
            AddPhone(input);

            let phones = await GetPhones();
            renderPhones(phones);
        }
    });
}

attachEvents();