function solve() {

    document.querySelector('form #add').addEventListener('click', function (e) {
        e.preventDefault();

        let task = document.getElementById('task')
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task && description && date) {

            let sectionOpen = document.querySelector('section div h1.orange').parentElement.parentElement;
            let sectionOpenDivForTasks = sectionOpen.getElementsByTagName('div')[1];

            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = task.value;

            let descriptionP = document.createElement('p');
            descriptionP.textContent = 'Description: ' + description.value;

            let dateP = document.createElement('p');
            dateP.textContent = 'Due Date: ' + date.value;

            let divFlex = document.createElement('div');
            divFlex.classList.add("flex");

            let buttonStart = document.createElement('button');
            buttonStart.classList.add("green");
            buttonStart.textContent = 'Start';
            buttonStart.addEventListener('click', function (e) {
                e.preventDefault();

                let article = e.target.parentElement.parentElement;

                let buttonFinish = document.createElement('button');
                buttonFinish.classList.add("orange");
                buttonFinish.textContent = 'Finish';
                buttonFinish.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector('section div h1.green')
                    .parentElement.parentElement.getElementsByTagName('div')[1]
                    .appendChild(e.target.parentElement.parentElement);
                    e.target.parentElement.remove();
                });

                let inProgressTask = document.querySelector('section div h1.yellow')
                    .parentElement.parentElement.getElementsByTagName('div')[1];

                e.target.parentElement.appendChild(buttonFinish);

                inProgressTask.appendChild(article);
                e.target.remove();
            });

            let buttonDelete = document.createElement('button');
            buttonDelete.classList.add("red");
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', function (e) {
                e.preventDefault();

                e.target.parentElement.parentElement.remove();
            });

            divFlex.appendChild(buttonStart);
            divFlex.appendChild(buttonDelete);

            article.appendChild(h3);
            article.appendChild(descriptionP);
            article.appendChild(dateP);
            article.appendChild(divFlex);

            sectionOpenDivForTasks.appendChild(article);

            task.value = '';
            description.value = '';
            date.value = '';
        }

    })
}