function solve() {
    document.getElementById('add').addEventListener('click', addTaskfunction);

    document.addEventListener('click', tasksButtonClicked)

    function tasksButtonClicked(e) {
        if (e.target.tagName.toLowerCase() == 'button') {
            if (e.target.textContent == 'Start') {
                let taskToMoveElement = e.target.parentElement.parentElement;

                let finishButton = document.createElement('button');
                finishButton.classList.add('orange');
                finishButton.textContent = 'Finish';

                e.target.parentElement.appendChild(finishButton);
                
                e.target.remove();

                let inProgressDiv = document.querySelector('h1.yellow')
                    .parentElement.parentElement.getElementsByTagName('div')[1];

                inProgressDiv.appendChild(taskToMoveElement);
            } else if(e.target.textContent == 'Delete') {
                e.target.parentElement.parentElement.remove();
            } else if(e.target.textContent == 'Finish') {
                let completeDiv = document.querySelector('h1.green')
                .parentElement.parentElement.getElementsByTagName('div')[1];

                let taskToMove = e.target.parentElement.parentElement;
                e.target.parentElement.remove();
                
                completeDiv.appendChild(taskToMove);
            }
        }
    }

    function addTaskfunction(e) {
        let taskElement = document.getElementById('task');
        let descriptionElement = document.getElementById('description');
        let dateElement = document.getElementById('date');

        if (taskElement.value != '' && descriptionElement.value != '' && dateElement.value != '') {
            let taskHeading = document.createElement('h3');
            taskHeading.textContent = taskElement.value;

            let taskDescription = document.createElement('p');
            taskDescription.textContent = 'Description: ' + descriptionElement.value;

            let taskDate = document.createElement('p');
            taskDate.textContent = 'Due Date: ' + dateElement.value;

            let divFlex = document.createElement('div');
            divFlex.classList.add("flex");

            let greenButton = document.createElement('button');
            greenButton.classList.add("green");
            greenButton.textContent = 'Start'

            let redButton = document.createElement('button');
            redButton.classList.add("red");
            redButton.textContent = 'Delete'

            divFlex.appendChild(greenButton);
            divFlex.appendChild(redButton);

            let article = document.createElement('article');
            article.appendChild(taskHeading);
            article.appendChild(taskDescription);
            article.appendChild(taskDate);
            article.appendChild(divFlex);

            let headingOrange = document.querySelector('h1.orange');
            let openTasksBox = headingOrange.parentElement.parentElement.getElementsByTagName('div')[1];
            openTasksBox.appendChild(article);

            e.preventDefault();
        }
    }
}