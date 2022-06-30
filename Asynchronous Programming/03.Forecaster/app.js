function attachEvents() {

    document.getElementById('submit').addEventListener('click', function (e) {

        let forecastDiv = document.getElementById('forecast');


        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => res.json())
            .then(data => renderWeather(data))
            .catch(err => {
                console.log(err);
                forecastDiv.innerHTML = `<h1>Error</h1>`;
            });

        function renderWeather(locations) {
            let locationsInput = document.getElementById('location').value;

            let code = locations.find(l => l.name == locationsInput).code;

            if (!code) {
                forecastDiv.innerHTML = `<h1>Error</h1>`;
            }
            else {
                forecastDiv.innerHTML = `<div id="current">
                        <div class="label">Current conditions</div>
                    </div>
                    <div id="upcoming">
                        <div class="label">Three-day forecast</div>
                    </div>`;
                forecastDiv.style.display = 'block';

                let conditions = {
                    "sunny": '&#x2600;',
                    "partly sunny": '&#x26C5;',
                    "overcast": '&#x2601;',
                    "rain": '&#x2614;',
                    "degrees": '&#176;'
                };

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then(res => res.json())
                    .then(data => renderTodayWeather(conditions, data))
                    .catch(err => {
                        console.log(err);
                        forecastDiv.innerHTML = `<h1>Error</h1>`;
                    });


                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then(res => res.json())
                    .then(data => renderThreeDayWeather(conditions, data))
                    .catch(err => {
                        console.log(err);
                        forecastDiv.innerHTML = `<h1>Error</h1>`;
                    });
            }
        }

        function renderTodayWeather(conditions, todayForecast) {

            let containerForToday = forecastDiv.querySelector('#current');

            let forecastsTodayDiv = document.createElement('div');
            forecastsTodayDiv.classList.add("forecasts");

            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.classList.add("condition");
            conditionSymbolSpan.classList.add("symbol");
            conditionSymbolSpan.innerHTML = conditions[todayForecast.forecast.condition.toLowerCase()];

            let conditionsContainer = document.createElement('span');
            conditionsContainer.classList.add("condition");

            let locationSpan = document.createElement('span');
            locationSpan.textContent = todayForecast.name;
            locationSpan.classList.add("forecast-data");

            let degreesSpan = document.createElement('span');
            degreesSpan.innerHTML =
                `${todayForecast.forecast.low}${conditions.degrees}/${todayForecast.forecast.high}${conditions.degrees}`;
            degreesSpan.classList.add("forecast-data");

            let conditionSpan = document.createElement('span');
            conditionSpan.textContent = todayForecast.forecast.condition;
            conditionSpan.classList.add("forecast-data");

            conditionsContainer.appendChild(locationSpan);
            conditionsContainer.appendChild(degreesSpan);
            conditionsContainer.appendChild(conditionSpan);

            forecastsTodayDiv.appendChild(conditionSymbolSpan);
            forecastsTodayDiv.appendChild(conditionsContainer);

            containerForToday.appendChild(forecastsTodayDiv);
        }

        function renderThreeDayWeather(conditions, threeDayForecast) {

            let containerFor3Days = forecastDiv.querySelector('#upcoming');

            let forecastInfoDiv = document.createElement('div');
            forecastInfoDiv.classList.add("forecast-info");

            threeDayForecast.forecast.forEach(day => {
                let upcomingSpan = document.createElement('span');
                upcomingSpan.classList.add("upcoming");

                let symbolSpan = document.createElement('span');
                symbolSpan.classList.add("symbol");
                symbolSpan.innerHTML = conditions[day.condition.toLowerCase()];

                let degreesSpan = document.createElement('span');
                degreesSpan.classList.add("forecast-data");
                degreesSpan.innerHTML =
                    `${day.low}${conditions.degrees}/${day.high}${conditions.degrees}`;

                let conditionSpan = document.createElement('span');
                conditionSpan.classList.add("forecast-data");
                conditionSpan.textContent = day.condition;

                upcomingSpan.appendChild(symbolSpan);
                upcomingSpan.appendChild(degreesSpan);
                upcomingSpan.appendChild(conditionSpan);

                forecastInfoDiv.appendChild(upcomingSpan);
            });

            containerFor3Days.appendChild(forecastInfoDiv);
        }
    });
}

attachEvents();