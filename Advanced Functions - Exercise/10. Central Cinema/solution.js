function solve() {
    document.querySelector('form#add-new button').addEventListener('click', addMovie);

    document.getElementById('movies').addEventListener('click', moviesSectionClicked);
    document.getElementById('archive').addEventListener('click', archiveSectionClicked);


    function addMovie(e) {
        let movieNameElement = document.querySelector('input[placeholder="Name"]');
        let movieHallElement = document.querySelector('input[placeholder="Hall"]');
        let moviePriceElement = document.querySelector('input[placeholder="Ticket Price"]');

        if(movieNameElement.value != '' && movieHallElement.value != '' &&
            moviePriceElement.value != '' && !isNaN(moviePriceElement.value)) {
            let listElement = document.querySelector('section#movies ul');

            let movielistItem = document.createElement('li');

            let movieNameSpan = document.createElement('span');
            movieNameSpan.textContent = movieNameElement.value;

            let strongHall = document.createElement('strong');
            strongHall.textContent = 'Hall: ' + movieHallElement.value;

            let div = document.createElement('div');

            let strongPrice = document.createElement('strong');
            strongPrice.textContent = Number(moviePriceElement.value).toFixed(2);

            let inputTickedSold = document.createElement('input');
            inputTickedSold.placeholder = 'Ticket Sold';

            let buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';

            div.appendChild(strongPrice);
            div.appendChild(inputTickedSold);
            div.appendChild(buttonArchive);

            movielistItem.appendChild(movieNameSpan);
            movielistItem.appendChild(strongHall);
            movielistItem.appendChild(div);

            listElement.appendChild(movielistItem);

            movieNameElement.value = '';
            movieHallElement.value = '';
            moviePriceElement.value = '';
        }
        e.preventDefault();
    }

    function moviesSectionClicked(e) {
        if(e.target.tagName.toLowerCase() == 'button' && e.target.textContent.toLowerCase() == 'archive') {
            let inputTicketsSold = e.target.parentElement.querySelector('input');

            if(inputTicketsSold.value != '' && !isNaN(inputTicketsSold.value)) {
                let archiveListElement = document.querySelector('section#archive ul');
                let movieListItemElement = e.target.parentElement.parentElement;
                let divElement = e.target.parentElement.parentElement.querySelector('div');

                let ticketPrice = divElement.querySelector('strong').textContent;
                let totalAmount = Number(ticketPrice) * Number(inputTicketsSold.value);
                let strongTotalAmountElement = document.createElement('strong');
                strongTotalAmountElement.textContent = `Total amount: ${totalAmount.toFixed(2)}`;

                let buttonDeleteElement = document.createElement('button');
                buttonDeleteElement.textContent = 'Delete'

                movieListItemElement.querySelector('strong').remove();
                divElement.remove();

                movieListItemElement.appendChild(strongTotalAmountElement);
                movieListItemElement.appendChild(buttonDeleteElement);

                archiveListElement.appendChild(movieListItemElement);
            }
        }
        e.preventDefault();
    }

    function archiveSectionClicked(e) {
        if(e.target.tagName.toLowerCase() == 'button' && e.target.textContent.toLowerCase() == 'delete') {
            e.target.parentElement.remove();
        } else if(e.target.tagName.toLowerCase() == 'button' && e.target.textContent.toLowerCase() == 'clear') {
            Array.from(e.target.parentElement.querySelectorAll('li')).forEach(li => {
                li.remove();
            });
        }
        e.preventDefault();
    }

}