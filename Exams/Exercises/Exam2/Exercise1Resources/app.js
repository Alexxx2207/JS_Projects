function solution() {
    document.querySelector('section:nth-of-type(1) button').addEventListener('click', function (e) {
        e.preventDefault();

        let giftNameElement = e.target.parentElement.querySelector('input');

        if (giftNameElement.value) {

            let li = document.createElement('li');
            li.textContent = giftNameElement.value;
            li.classList.add("gift");

            let buttonSend = document.createElement('button');
            buttonSend.textContent = 'Send';
            buttonSend.id = "sendButton";
            buttonSend.addEventListener('click', function (eStart) {
                let sentGiftsElement = document.querySelector('section:nth-of-type(3) ul');

                sentGiftsElement.appendChild(eStart.target.parentElement);

                let buttons = eStart.target.parentElement.querySelectorAll('button');
                let arr = Array.from(buttons);
                
                arr.forEach(el => el.remove());
            });

            let buttonDiscard = document.createElement('button');
            buttonDiscard.textContent = 'Discard';
            buttonDiscard.id = "discardButton";
            buttonDiscard.addEventListener('click', function (eDiscard) {
                let dicardGiftsElement = document.querySelector('section:nth-of-type(4) ul');

                dicardGiftsElement.appendChild(eDiscard.target.parentElement);

                let buttons = eDiscard.target.parentElement.querySelectorAll('button');
                let arr = Array.from(buttons);
                
                arr.forEach(el => el.remove());
            });

            li.appendChild(buttonSend);
            li.appendChild(buttonDiscard);

            let allGiftsList = document.querySelector('section:nth-of-type(2) ul');
            allGiftsList.appendChild(li);

            //Sorting list
            let gifts = Array.from(allGiftsList.querySelectorAll('li'));
            gifts.sort((a, b) => { 
                return a.textContent.localeCompare(b.textContent);
            });

            var child = allGiftsList.lastElementChild;
            while (child) {
                allGiftsList.removeChild(child);
                child = allGiftsList.lastElementChild;
            }

            gifts.forEach(el => allGiftsList.appendChild(el));

            giftNameElement.value = '';
        }
    });
}