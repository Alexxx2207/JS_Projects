const BASE_URL = 'http://localhost:3030/jsonstore/collections/books';
const loadBtn = document.getElementById('loadBooks');
const formElement = document.querySelector('form');


async function GetBooks() {
    let response = await fetch(BASE_URL);

    let data = await response.json();

    return Object.entries(data);
}

async function AddBook(book) {
    await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(book)
    });

    renderBooks(await GetBooks());
}

async function EditBook(book, id) {
    await fetch(BASE_URL + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(book)
    });

    renderBooks(await GetBooks());
}

async function DeleteBook(id) {
    await fetch(BASE_URL + `/${id}`, {
        method: 'DELETE'
    });

    renderBooks(await GetBooks());
}

function GetFormData() {
    let formData = new FormData(formElement);

    return {
        title: formData.get('title'),
        author: formData.get('author'),
    }
}

function setUpFormForEdit(tableRowElement, id) {
    let titleValue = tableRowElement.querySelector('td:nth-of-type(1)').textContent;
    let authorValue = tableRowElement.querySelector('td:nth-of-type(2)').textContent;

    formElement.innerHTML = `
    <h3>Edit FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value="${titleValue}">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value="${authorValue}">
        <button>Save</button>`;

    let buttonSave = formElement.querySelector('button');
    buttonSave.addEventListener('click', function (e) {
        e.preventDefault();

        let formDataInput = GetFormData();

        EditBook(formDataInput, id);

        formElement.innerHTML = `
        <h3>FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <button>Submit</button>`;

        let buttonSubmit = formElement.querySelector('button');
        buttonSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            handleSubmit();
        })
    });
}

function renderBooks(books) {
    let tbody = document.querySelector('tbody');

    tbody.innerHTML = '';
    books.forEach(book => {
        let tr = document.createElement('tr');
        tr.innerHTML += `
            <tr>
                <td>${book[1].title}</td>
                <td>${book[1].author}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>`;

        tr.querySelector('button:nth-of-type(1)').addEventListener('click', function (e) {
            setUpFormForEdit(e.target.parentElement.parentElement, book[0])
        });
        tr.querySelector('button:nth-of-type(2)').addEventListener('click', DeleteBook.bind(this, book[0]));

        tbody.append(tr);
    })
}

function handleSubmit() {
    let formDataInput = GetFormData();

    if (formDataInput.author && formDataInput.title) {
        AddBook(formDataInput);
    }

    clearForm();
}

function clearForm() {
    Array.from(formElement.querySelectorAll('input'))
        .forEach(input => input.value = '');
}

loadBtn.addEventListener('click', async function () {
    renderBooks(await GetBooks());
});

document.querySelector('form button').addEventListener('click', function (e) {
    e.preventDefault();

    handleSubmit();
});