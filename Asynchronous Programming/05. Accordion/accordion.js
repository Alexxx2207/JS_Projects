function solution() {
    fetch(`http://localhost:3030/jsonstore/advanced/articles/`)
        .then(res => res.json())
        .then(data => renderTitles(data));

    function renderTitles(data) {
        let main = document.getElementById('main');

        Object.values(data.list).forEach(article => {
            let accordionDiv = document.createElement('div');
            accordionDiv.classList.add("accordion");

            accordionDiv.innerHTML = `<div class="head">
                <span></span>
                <button class="button" id="">More</button>
            </div>
            <div class="extra">
                <p></p>
            </div>`;

            accordionDiv.querySelector('span').textContent = article.title;
            accordionDiv.querySelector('button').id = article._id;
            accordionDiv.querySelector('button').addEventListener('click', function(e) {
                moreLessButtonClicked(e, accordionDiv);
            });
            accordionDiv.querySelector('.extra').style.display ='none';

            main.appendChild(accordionDiv);
        });
    }

    function moreLessButtonClicked(e, accordionDiv) {
        if(accordionDiv.querySelector('.extra').style.display == 'block') {
            accordionDiv.querySelector('.extra').style.display = 'none';
            accordionDiv.querySelector('button').textContent = 'More';
        } else {
            accordionDiv.querySelector('.extra').style.display = 'block';
            accordionDiv.querySelector('button').textContent = 'Less';
            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`)
            .then(res => res.json())
            .then(data => showHideExtraInfo(accordionDiv, data));
        }

    }

    function showHideExtraInfo(accordionDiv, data) {
        accordionDiv.querySelector('p').textContent = data.content;
    }
}
solution();