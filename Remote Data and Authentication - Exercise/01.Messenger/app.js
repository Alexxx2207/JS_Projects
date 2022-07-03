const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

async function GetMessages() {
    let response = await fetch(BASE_URL);

    let data = await response.json();

    return Object.values(data);
}

function renderMessages(messages) {
    let textarea = document.getElementById('messages');

    textarea.textContent = '';

    messages.forEach(m => {
        textarea.textContent += `${m.author}: ${m.content}\n`;
    });
}

function getFormData() {
    let author = document.querySelector('input[name="author"]');
    let content = document.querySelector('input[name="content"]');

    let result = {};
    result.author = author.value;
    result.content = content.value;

    author.value = '';
    content.value = '';

    return result;
}

async function SendMessage(data) {
    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

function attachEvents() {
    let refreshBtn = document.getElementById('refresh');

    document.getElementById('submit').addEventListener('click', function () {
        SendMessage(getFormData());
    });

    document.getElementById('refresh').addEventListener('click', async function () {
        renderMessages(await GetMessages());
    });

    window.addEventListener('load', async function () {
        refreshBtn.click();
    });
}

attachEvents();