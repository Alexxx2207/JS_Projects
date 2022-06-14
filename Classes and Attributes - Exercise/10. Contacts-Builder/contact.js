class Contact {
    #online = false;

    constructor(first_name, last_name, phone, email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
    }

    render(id) {
        let article = document.createElement('article');

        let divTitle = document.createElement('div');
        let button = document.createElement('button');

        button.innerHTML = '&#8505;';

        divTitle.appendChild(document.createTextNode(`${this.first_name} ${this.last_name}`));

        divTitle.appendChild(button);
        divTitle.classList.add('title');

        if (this.#online) {
            divTitle.classList.add('online');
        } else {
            divTitle.classList.remove('online');
        }

        let divInfo = document.createElement('div');

        let spanPhone = document.createElement('span');
        spanPhone.innerHTML = '&phone;';
        spanPhone.appendChild(document.createTextNode(` ${this.phone}`));
        let spanEmail = document.createElement('span');
        spanEmail.innerHTML = '&#9993;';
        spanEmail.appendChild(document.createTextNode(` ${this.email}`));

        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);

        divInfo.style.display = 'none';
        divInfo.classList.add('info');

        article.appendChild(divTitle);
        article.appendChild(divInfo);

        document.getElementById(id).appendChild(article);

        button.addEventListener('click', function (e) {
            let infoDivToShow = e.target.parentElement.parentElement.querySelector('.info');

            if(infoDivToShow.style.display == 'none') {
                infoDivToShow.style.display = 'block';
            } else {
                infoDivToShow.style.display = 'none';
            }
        });
    }

    get online() {
        return this.#online;
    }

    set online(value) {
        this.#online = value;

        let titles = document.querySelectorAll('div.title');

        let title = null;

        for (const t of Array.from(titles)) {
            if (t.textContent.slice(0, -1) === `${this.first_name} ${this.last_name}`) {
                title = t;
                break;
            }
        }

        if(title != null)
        {
            if (this.#online) {
                title.classList.add('online');
            } else {
                title.classList.remove('online');
            }
        } 
    }
}
