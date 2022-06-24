class CarDealership {
    constructor(name) {
        this.name = name;
        this.totalIncome = 0;
        this.availableCars = [];
        this.soldCars = [];
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(c => c.model == model);

        if (!car) {
            throw new Error(`${model} was not found!`)
        }

        if (car.mileage - desiredMileage > 0 && car.mileage - desiredMileage <= 40000) {
            car.price *= 0.95;
        } else if (car.mileage - desiredMileage > 40000) {
            car.price *= 0.90;
        }

        for (let index = 0; index < this.availableCars.length; index++) {
            if (this.availableCars[index].model == model) {
                this.availableCars.splice(index, 1);
                break;
            }
        }


        let horsepower = car.horsepower;
        let soldPrice = car.price;

        this.soldCars.push({
            model,
            horsepower,
            soldPrice,
        });

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        let result = [];

        if (this.availableCars.length > 0) {
            result.push(`-Available cars:`);
            result.push(...this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));
        } else {
            result.push("There are no available cars");
        }

        return result.join('\n');
    }

    salesReport(criteria) {
        if (!['horsepower', 'model'].includes(criteria)) {
            throw new Error("Invalid criteria!");
        }

        if (criteria == 'horsepower') {
            this.soldCars.sort((c1, c2) => {
                return c2.horsepower - c1.horsepower;
            });
        } else if (criteria == 'model') {
            this.soldCars.sort((c1, c2) => {
                return c1.model.localeCompare(c2.model);
            });
        }

        let result = [];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`)
        result.push(...this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));

        return result.join('\n');
    }
}