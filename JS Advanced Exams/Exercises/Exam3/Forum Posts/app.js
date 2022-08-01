window.addEventListener("load", solve);

function solve() {
    document.querySelector('.newPostContent button').addEventListener('click', function(e) {
        e.preventDefault();

        let titleElement = document.querySelector('#post-title');
        let categoryElement = document.querySelector('#post-category');
        let contentElement = document.querySelector('#post-content');

        if(titleElement.value && categoryElement.value && contentElement.value) {

            let li = document.createElement('li');
            li.classList.add("rpost");

            let article = document.createElement('article');

            let h4 = document.createElement('h4');
            h4.textContent = titleElement.value;

            let pCategory = document.createElement('p');
            pCategory.textContent = `Category: ${categoryElement.value}`;

            let pContent = document.createElement('p');
            pContent.textContent = `Content: ${contentElement.value}`;

            let edit = document.createElement('button');
            edit.textContent = 'EDIT';
            edit.classList.add("action-btn");
            edit.classList.add("edit");
            edit.addEventListener('click', function(e) {
                e.preventDefault();

                titleElement.value = '';
                categoryElement.value = '';
                contentElement.value = '';

                titleElement.value = h4.textContent;
                categoryElement.value = pCategory.textContent.replace('Category: ', '');
                contentElement.value = pContent.textContent.replace('Content: ', '');
                
                e.target.parentElement.remove();
            });

            let approve = document.createElement('button');
            approve.textContent = 'APPROVE';
            approve.classList.add("action-btn");
            approve.classList.add("approve");
            approve.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector('#published-list').appendChild(e.target.parentElement);
                Array.from(e.target.parentElement.querySelectorAll('button')).forEach(el => el.remove());
            });

            article.appendChild(h4);
            article.appendChild(pCategory);
            article.appendChild(pContent);

            li.appendChild(article);
            li.appendChild(approve);
            li.appendChild(edit);

            document.querySelector('#review-list').appendChild(li);
            titleElement.value = '';
            categoryElement.value = '';
            contentElement.value = '';
        }
    });
    document.querySelector('#clear-btn').addEventListener('click', function(e) {
        e.preventDefault();

        Array.from(document.querySelector('#published-list').children).forEach(el => el.remove());
    });
}
