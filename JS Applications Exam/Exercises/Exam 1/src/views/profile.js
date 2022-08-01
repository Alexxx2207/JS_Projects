import { html } from '../lib.js';
import { getUserData } from '../utils.js';
import { getTheatersByUserId } from '../api/theaters.js';


const eventTemplate = (event) => html`
    <div class="event-info">
        <img src=".${event.imageUrl}">
        <h2>${event.title}</h2>
        <h6>${event.date}</h6>
        <a href="/theaters/${event._id}" class="details-button">Details</a>
    </div>`;

const profileTemplate = (userData) => html`
 <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${userData.email}</h2>
            </div>
            <div class="board">
                ${userData.events.length == 0 ? 
                    html`<div class="no-events">
                        <p>This user has no events yet!</p>
                    </div>`    
                    :
                    html`
                    <div class="eventBoard">
                        ${userData.events.map(eventTemplate)}
                    </div>`
                }
            </div>
        </section>`;

export async function profileView(ctx) {
    const useData = getUserData();
    
    const usersEvents = await getTheatersByUserId(useData.id);

    useData.events = usersEvents;
    ctx.render(profileTemplate(useData));
}