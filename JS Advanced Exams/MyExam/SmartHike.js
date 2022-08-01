class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        let found = false;

        for (const key in this.goals) {
            if (this.goals.hasOwnProperty(key) && key == peak) {
                found = true;
                break;
            }
        }

        if (found) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;

        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        let goal = '';

        for (const key in this.goals) {
            if (this.goals.hasOwnProperty(key) && key == peak) {
                goal = key;
                break;
            }
        }

        if (!goal) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (goal && this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let resourcesNeeded = time * 10;
        let diff = this.resources - resourcesNeeded;

        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources = diff;

        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        });

        return `You hiked ${peak} peak for ${time} hours and you have ${diff}% resources left`
    }

    rest(time) {
        this.resources += time * 10;

        if (this.resources >= 100) {
            this.resources = 100;

            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        if(this.listOfHikes.length <= 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if(['hard', 'easy'].includes(criteria)) {
            let filteredHikes = this.listOfHikes.filter(h => h.difficultyLevel === criteria);
            
            let hike = {
                time: Number.MAX_SAFE_INTEGER
            };

            filteredHikes.forEach(h => {
                if(hike.time > h.time) {
                    hike = h;
                }
            });

            if(hike.hasOwnProperty('peak')) {
                return `${this.username}'s best ${criteria} hike is ${hike.peak} peak, for ${hike.time} hours`
            } else {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
        } else if(criteria == 'all') {
            let result = [];

            result.push("All hiking records:");

            result.push(...this.listOfHikes.map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`));

            return result.join('\n')
        }
    }
}