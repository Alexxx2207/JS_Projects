function solve() {
    let recipientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');

    document.getElementById('add').addEventListener('click', function (e) {
        e.preventDefault();

        if (recipientElement.value && titleElement.value && messageElement.value) {

            let li = document.createElement('li');

            let h4Title = document.createElement('h4');
            h4Title.textContent = 'Title: ' + titleElement.value;

            let h4Recipient = document.createElement('h4');
            h4Recipient.textContent = 'Recipient Name: ' + recipientElement.value;

            let span = document.createElement('span');
            span.textContent = messageElement.value;

            let div = document.createElement('div');
            div.classList.add("list-action");

            let buttonSend = document.createElement('button');
            buttonSend.type = "submit";
            buttonSend.id = "send";
            buttonSend.textContent = 'Send';
            buttonSend.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector('.sent-mails .sent-list')
                    .appendChild(e.target.parentElement.parentElement);

                let liElementToRemove = e.target.parentElement.parentElement;

                let newLi = document.createElement('li');

                let spanTo = document.createElement('span');
                spanTo.textContent = 'To: ' + liElementToRemove.children[1].textContent.replace('Recipient Name: ', '');

                let spanTitle = document.createElement('span');
                spanTitle.textContent = 'Title: ' + liElementToRemove.children[0].textContent.replace('Title: ', '');;

                let newDiv = document.createElement('div');
                newDiv.classList.add("btn");

                let newDelete = document.createElement('button');
                newDelete.type = "submit";
                newDelete.classList.add("delete");
                newDelete.textContent = 'Delete';
                newDelete.addEventListener('click', deleteButtonClick);

                newDiv.appendChild(newDelete);

                newLi.appendChild(spanTo);
                newLi.appendChild(spanTitle);
                newLi.appendChild(newDiv);

                document.querySelector('.sent-mails .sent-list').appendChild(newLi);

                liElementToRemove.remove();
            });

            let buttonDelete = document.createElement('button');
            buttonDelete.type = "submit";
            buttonDelete.id = "delete";
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', deleteButtonClick);

            div.appendChild(buttonSend);
            div.appendChild(buttonDelete);

            li.appendChild(h4Title);
            li.appendChild(h4Recipient);
            li.appendChild(span);
            li.appendChild(div);

            document.querySelector('.list-mails #list').appendChild(li);

            titleElement.value = '';
            recipientElement.value = '';
            messageElement.value = '';
        }
    });

    document.getElementById('reset').addEventListener('click', function (e) {
        titleElement.value = '';
        recipientElement.value = '';
        messageElement.value = '';
    });

    function deleteButtonClick(e) {
        e.preventDefault();

        let liElementToRemove = e.target.parentElement.parentElement;

        let newLi = document.createElement('li');

        let spanTo = document.createElement('span');
        spanTo.textContent = 'To: ' + liElementToRemove.children[1].textContent.replace('Recipient Name: ', '');

        let spanTitle = document.createElement('span');
        spanTitle.textContent = 'Title: ' + liElementToRemove.children[0].textContent.replace('Title: ', '');;

        newLi.appendChild(spanTo);
        newLi.appendChild(spanTitle);

        document.querySelector('.trash .delete-list').appendChild(newLi);

        liElementToRemove.remove();
    }
}
solve()