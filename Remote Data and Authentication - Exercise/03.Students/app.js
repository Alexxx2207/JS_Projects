const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

async function GetStudents() {
    let response = await fetch(BASE_URL);
    let data = await response.json();

    return Object.values(data);
}

function renderStudents(students) {
    let table = document.querySelector('#results tbody');

    table.innerHTML = '';

    students.forEach(student => {
        let recordHTML = `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
        </tr>`;

        table.innerHTML += recordHTML;
    });
}

async function AddStudent(student) {
    await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(student)
    })
}

window.addEventListener('load', async function () {
    renderStudents(await GetStudents())
});

document.getElementById('submit').addEventListener('click', async function(e) {
    e.preventDefault();

    let formData = new FormData(document.getElementById('form'));

    let studentInput = {};
    studentInput.firstName = formData.get('firstName');
    studentInput.lastName = formData.get('lastName');
    studentInput.facultyNumber = formData.get('facultyNumber');
    studentInput.grade = formData.get('grade');

    AddStudent(studentInput);

    renderStudents(await GetStudents());

    let inputs = Array.from(document.querySelectorAll('.inputs input'));

    inputs.forEach(input => input.value = '');
});