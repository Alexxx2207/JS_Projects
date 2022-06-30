function lockedProfile() {
    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
        .then(res => res.json())
        .then(data => renderProfiles(data));

    function renderProfiles(data) {

        let mainElement = document.getElementById('main');

        Object.values(data).forEach(profile => {
            let profileDiv = document.createElement('div');
            profileDiv.classList.add("profile");

            profileDiv.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user1Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user1Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user1Username" value="" disabled readonly />
                <div class="user1Username">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user1Email" value="" disabled readonly />
                    <label>Age:</label>
                    <input type="text" name="user1Age" value="" disabled readonly />
                </div>
                
                <button>Show more</button>`;

            profileDiv.querySelector('input:nth-of-type(3)').value = profile.username;
            profileDiv.querySelector('.user1Username input:nth-of-type(1)').value = profile.email;
            profileDiv.querySelector('.user1Username input:nth-of-type(2)').value = profile.age;
            profileDiv.querySelector('.user1Username').style.display = 'none';

            profileDiv.querySelector('button').addEventListener('click', function (e) {
                if (e.target.parentElement.querySelector('input:nth-of-type(2)').checked) {
                    if (e.target.parentElement.querySelector('.user1Username').style.display != 'none') {
                        e.target.parentElement.querySelector('.user1Username').style.display = 'none';
                        e.target.textContent = 'Show more';
                    } else {
                        e.target.parentElement.querySelector('.user1Username').style.display = '';
                        e.target.textContent = 'Hide it';
                    }
                }
            });

            mainElement.appendChild(profileDiv);
        });
    }
}