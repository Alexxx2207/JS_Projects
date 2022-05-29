function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let inputRestaurants = JSON.parse(document.querySelector("div#inputs textarea").value);

        let restaurants = {};

        inputRestaurants.forEach(restaurantInput => {
            let restaurantTokens = restaurantInput.split(' - ');
            let workersInput = restaurantTokens[1].split(', ');
            
            let restaurant = {};

            if(!Object.keys(restaurants).includes(restaurantTokens[0]))
            {
                restaurant = {
                    restaurantName: restaurantTokens[0],
                    workers: []
                };
            } else {
                restaurant = restaurants[restaurantTokens[0]];
            }

            workersInput.forEach(workerInput => {
                let workerInfo = workerInput.split(' ');

                restaurant.workers.push({
                    workerName: workerInfo[0],
                    workerSalary: Number(workerInfo[1]),
                });
            });

            restaurant.workersAverageSalary = calculateWorkersAverageSalary(restaurant.workers);

            restaurants[restaurant.restaurantName] = restaurant;
        });

        let bestRestaurant = {};
        let bestRestaurantAverage = Number.MIN_SAFE_INTEGER;

        for (const key in restaurants) {
            if (restaurants[key].workersAverageSalary > bestRestaurantAverage) {
                bestRestaurant = restaurants[key];
                bestRestaurantAverage = restaurants[key].workersAverageSalary;
            }
        }

        if(bestRestaurant.workers.length > 0)
            sortWorkers(bestRestaurant.workers);

        let sortedWorkersText = '';

        bestRestaurant.workers.forEach(worker => {
            sortedWorkersText += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `;
        });

        sortedWorkersText.trimEnd();

        let bestRestaurantElement = document.querySelector("div#outputs div#bestRestaurant p");
        let bestRestaurantWorkersElement = document.querySelector("div#outputs div#workers p");

        bestRestaurantElement.textContent = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurantAverage.toFixed(2)} Best Salary: ${getBestSalary(bestRestaurant.workers).toFixed(2)}`;
        bestRestaurantWorkersElement.textContent = sortedWorkersText;
    }

    function calculateWorkersAverageSalary(workers) {
        return workers.reduce((acc, current) => {
            return acc + current.workerSalary;
        }, 0) / workers.length;
    }
    
    function getBestSalary(workers){
        let max = Number.MIN_SAFE_INTEGER;
    
        workers.forEach(worker => {
            if(worker.workerSalary > max) {
                max = worker.workerSalary;
            }
        });
    
        return max;
    }
    
    function sortWorkers(workers) {
        workers.sort((a, b) => { return b.workerSalary - a.workerSalary;});
    }
}